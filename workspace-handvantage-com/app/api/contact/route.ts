import { NextResponse } from "next/server";

// Simple contact form endpoint. For v1 this just logs and returns 200.
// Wire to email/SalesBlink/etc. in v1.1 (env vars: CONTACT_TO, SENDGRID_KEY, SALESBLINK_KEY).
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data ?? {};

    // Server-side validation
    if (!name || typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length > 10000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (company && (typeof company !== "string" || company.length > 200)) {
      return NextResponse.json({ error: "Invalid company" }, { status: 400 });
    }

    // For v1: log to console (visible in Netlify function logs).
    // TODO v1.1: deliver to hello@handvantage.com via SendGrid/Resend, create CRM lead.
    console.log("[contact form]", { name, email, company: company ?? "", messagePreview: String(message).slice(0, 200) });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact form] error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
