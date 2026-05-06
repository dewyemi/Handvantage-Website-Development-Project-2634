"use client";

import { useState, FormEvent } from "react";
import { SITE } from "@/lib/data-tokens";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    // Honeypot: if the hidden 'website' field is filled, treat as spam
    if (formData.get("website")) {
      // Pretend success to discourage retries; do not deliver
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) {
        throw new Error("Server returned " + res.status);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something didn't go through. Email " + SITE.email + " directly and we'll pick it up from there."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-ink-hairline p-8 md:p-10">
        <p className="font-display text-h3 text-success-ink mb-4">Thanks. We&apos;ve received your note.</p>
        <p className="font-display text-body text-ink leading-relaxed mb-3">
          Someone — probably Josh — will reply within a business day.
        </p>
        <p className="font-display text-body text-ink-soft leading-relaxed">
          If it&apos;s urgent, write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-oxblood hover:underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      {/* Honeypot — hidden from users, often filled by bots */}
      <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="font-display text-body text-error-ink border-l-4 border-error-ink pl-4">
          {errorMsg}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block font-ui font-medium text-[15px] text-ink mb-2">
          Your name <span className="text-oxblood" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          autoComplete="name"
          maxLength={120}
          className="w-full bg-paper border border-ink-hairline px-4 py-3 font-display text-body text-ink focus:outline-none focus:border-oxblood transition-colors duration-100"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-ui font-medium text-[15px] text-ink mb-2">
          Work email <span className="text-oxblood" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          autoComplete="email"
          inputMode="email"
          placeholder="you@yourcompany.com"
          maxLength={120}
          aria-describedby="email-help"
          className="w-full bg-paper border border-ink-hairline px-4 py-3 font-display text-body text-ink placeholder:text-ink-soft placeholder:italic focus:outline-none focus:border-oxblood transition-colors duration-100"
        />
        <p id="email-help" className="mt-2 font-ui text-[13px] text-ink-soft">
          We&apos;ll write back to this address. We don&apos;t add it to a marketing list.
        </p>
      </div>

      <div>
        <label htmlFor="company" className="block font-ui font-medium text-[15px] text-ink mb-2">
          Company <span className="font-normal text-ink-soft text-[14px]">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={120}
          className="w-full bg-paper border border-ink-hairline px-4 py-3 font-display text-body text-ink focus:outline-none focus:border-oxblood transition-colors duration-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-ui font-medium text-[15px] text-ink mb-2">
          What&apos;s on your mind? <span className="text-oxblood" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={6}
          placeholder="A few sentences. We'll write back within a business day."
          className="w-full bg-paper border border-ink-hairline px-4 py-3 font-display text-body text-ink placeholder:text-ink-soft placeholder:italic focus:outline-none focus:border-oxblood transition-colors duration-100 resize-vertical"
        />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-3 bg-ink text-paper font-ui font-medium text-[15px] hover:bg-oxblood transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-oxblood focus:ring-offset-2 disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
