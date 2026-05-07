import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/data-tokens";

// Lightweight in-memory rate limiter (per-IP). Resets when the lambda
// instance recycles. Good enough to deflect dumb bots; not a security
// boundary. If we start getting sophisticated abuse, swap for Redis or
// Cloudflare Turnstile.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, { count: number; firstSeen: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, firstSeen: now });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface Submission {
  name: string;
  email: string;
  company: string;
  message: string;
  ip: string;
  userAgent: string;
  receivedAt: string;
}

async function sendEmail(submission: Submission): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[contact form] RESEND_API_KEY not set — skipping email delivery. " +
        "Submission was logged but no email sent."
    );
    return;
  }

  // Resend requires the From: domain to be verified. The verified sender
  // domain is mss.handvantage.com (the messaging subdomain), so the From:
  // address lives there. The To: is the regular hello@handvantage.com inbox.
  // Reply-To is set to the prospect's address (in the .send() call below) so
  // a normal inbox reply lands in their thread, not in mss.handvantage.com.
  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Handvantage <hello@mss.handvantage.com>";

  const resend = new Resend(apiKey);

  const subject = `[workspace.handvantage.com] ${submission.name}${
    submission.company ? ` — ${submission.company}` : ""
  }`;

  const text = [
    `From: ${submission.name} <${submission.email}>`,
    submission.company ? `Company: ${submission.company}` : null,
    "",
    submission.message,
    "",
    "—",
    `Received: ${submission.receivedAt}`,
    `IP: ${submission.ip}`,
    `User-Agent: ${submission.userAgent}`,
    "Source: workspace.handvantage.com /contact",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,Segoe UI,sans-serif;color:#1A1F1B;line-height:1.5;max-width:640px;margin:0 auto;padding:24px;background:#F5F1EA;">
  <div style="border-bottom:1px solid #D2C9B7;padding-bottom:16px;margin-bottom:24px;">
    <p style="margin:0;font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:2px;color:#722F37;text-transform:uppercase;">NEW LEAD · workspace.handvantage.com</p>
    <h1 style="margin:8px 0 0 0;font-family:Georgia,serif;font-weight:400;font-size:28px;color:#1A1F1B;">${escapeHtml(submission.name)}</h1>
    <p style="margin:4px 0 0 0;color:#4A4F4B;font-size:15px;">
      <a href="mailto:${escapeHtml(submission.email)}" style="color:#722F37;text-decoration:none;">${escapeHtml(submission.email)}</a>
      ${submission.company ? `&nbsp;·&nbsp;${escapeHtml(submission.company)}` : ""}
    </p>
  </div>
  <div style="background:#FFFFFF;border:1px solid #D2C9B7;padding:20px;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(submission.message)}</div>
  <p style="margin-top:32px;font-family:ui-monospace,Menlo,monospace;font-size:11px;color:#4A4F4B;letter-spacing:1px;text-transform:uppercase;">
    Received ${submission.receivedAt} · IP ${submission.ip}
  </p>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    html,
    replyTo: submission.email,
  });

  if (error) {
    throw new Error(`Resend rejected the message: ${error.message}`);
  }
}

async function pingSlack(submission: Submission): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const fields = [
    { title: "Email", value: submission.email, short: true },
    submission.company ? { title: "Company", value: submission.company, short: true } : null,
  ].filter(Boolean);

  const payload = {
    text: `New lead from workspace.handvantage.com: *${submission.name}*`,
    attachments: [
      {
        color: "#722F37",
        author_name: submission.name,
        title: "Open in inbox",
        title_link: `mailto:${submission.email}`,
        text: submission.message.length > 600
          ? submission.message.slice(0, 580).trim() + "…"
          : submission.message,
        fields,
        footer: "workspace.handvantage.com /contact",
        ts: Math.floor(new Date(submission.receivedAt).getTime() / 1000),
      },
    ],
  };

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[contact form] Slack webhook failed", err);
    // Don't throw — Slack is a notification channel, not the primary delivery.
  }
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-nf-client-connection-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const data = await request.json();
    const { name, email, company, message, website } = data ?? {};

    // Honeypot — silently succeed without delivering. Bots get a 200, humans
    // don't fill this field because it's hidden.
    if (website && typeof website === "string" && website.trim().length > 0) {
      console.log("[contact form] honeypot triggered, dropping silently", { ip });
      return NextResponse.json({ ok: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 200) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 200
    ) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 10000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (company !== undefined && company !== null && (typeof company !== "string" || company.length > 200)) {
      return NextResponse.json({ error: "Invalid company" }, { status: 400 });
    }

    const submission: Submission = {
      name: String(name).trim(),
      email: String(email).trim(),
      company: company ? String(company).trim() : "",
      message: String(message).trim(),
      ip,
      userAgent: request.headers.get("user-agent") || "unknown",
      receivedAt: new Date().toISOString(),
    };

    // Always log — Netlify function logs are the audit trail of last resort.
    console.log("[contact form] submission", {
      name: submission.name,
      email: submission.email,
      company: submission.company,
      messagePreview: submission.message.slice(0, 200),
      ip: submission.ip,
      receivedAt: submission.receivedAt,
    });

    // Deliver via email (Resend) and ping Slack in parallel. We await the
    // email so failure surfaces to the user; Slack failures are swallowed
    // (notification, not delivery).
    const [emailResult] = await Promise.allSettled([
      sendEmail(submission),
      pingSlack(submission),
    ]);

    if (emailResult.status === "rejected") {
      console.error("[contact form] email delivery failed", emailResult.reason);
      // We still return 200 to the user — the submission is logged in
      // Netlify function logs and we'd rather not look broken to the
      // prospect. We'll triage from the logs.
      return NextResponse.json({ ok: true, deliveryWarning: true });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact form] error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
