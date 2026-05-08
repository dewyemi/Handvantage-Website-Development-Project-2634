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
          phone: formData.get("phone"),
          message: formData.get("message"),
          consentPhone: formData.get("consentPhone") === "on",
          consentNewsletter: formData.get("consentNewsletter") === "on",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <label htmlFor="phone" className="block font-ui font-medium text-[15px] text-ink mb-2">
            Phone <span className="font-normal text-ink-soft text-[14px]">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+1 (___) ___-____"
            maxLength={40}
            className="w-full bg-paper border border-ink-hairline px-4 py-3 font-display text-body text-ink placeholder:text-ink-soft placeholder:italic focus:outline-none focus:border-oxblood transition-colors duration-100"
          />
        </div>
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

      {/* Consent — CASL-compliant. Both default unchecked, both opt-in. */}
      <fieldset className="border-l-2 border-ink-hairline pl-5 py-1 flex flex-col gap-3">
        <legend className="sr-only">How may we follow up</legend>

        <label htmlFor="consentPhone" className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            id="consentPhone"
            name="consentPhone"
            className="mt-1 w-4 h-4 accent-oxblood cursor-pointer flex-shrink-0"
          />
          <span className="font-display text-body text-ink leading-relaxed">
            I&rsquo;m comfortable being contacted by phone about this inquiry.
          </span>
        </label>

        <label htmlFor="consentNewsletter" className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            id="consentNewsletter"
            name="consentNewsletter"
            className="mt-1 w-4 h-4 accent-oxblood cursor-pointer flex-shrink-0"
          />
          <span className="font-display text-body text-ink leading-relaxed">
            Sign me up for the monthly newsletter — one digest per month, unsubscribe in one click.
          </span>
        </label>
      </fieldset>

      <p className="font-display text-body-sm text-ink-soft leading-relaxed border-t border-ink-hairline pt-6">
        We reply to inquiries from a real inbox, not an automation. We never share or sell your
        information. We don&rsquo;t add you to a marketing list unless you check the box above.
        See our{" "}
        <a href="/privacy" className="text-oxblood hover:underline underline-offset-4">
          privacy policy
        </a>{" "}
        for the full picture.
      </p>

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
