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
      <section className="pt-12 md:pt-20 pb-12 bg-paper">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>TALK TO US</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-8">
            Talk to us.
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px]">
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
            directly. The mailbox is read by a human, not a bot.
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
