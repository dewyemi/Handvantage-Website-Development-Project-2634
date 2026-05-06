import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Talk to Us",
  description:
    "Talk to Handvantage about Vantage Workspace, the 7-Layer Defence Architecture, your AI compliance posture, or your audit window. We respond within a business day.",
  alternates: { canonical: `${SITE.baseUrl}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>TALK TO US</SectionEyebrow>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-8">Talk to us.</h1>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            We respond to most messages within a business day. The reply is from a person — usually
            Josh — not an autoresponder. We don&apos;t run a sales-pressure pipeline; the first
            conversation is exploratory, and the second one (if there is one) is where we get
            specific.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="pt-12 pb-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <ContactForm />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <hr className="border-0 border-t border-ink-hairline mb-8" />
          <p className="font-display text-body text-ink leading-relaxed mb-3">
            Or write to{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-oxblood hover:underline underline-offset-4"
            >
              {SITE.email}
            </a>{" "}
            directly. The mailbox is read by a human in the {SITE.city} office.
          </p>
          <p className="font-ui text-body-sm text-ink-soft leading-relaxed">
            Most replies arrive within a business day. If something is genuinely time-sensitive,
            put &ldquo;urgent&rdquo; in the first line of your message and we&apos;ll prioritise.
          </p>
        </div>
      </section>
    </>
  );
}
