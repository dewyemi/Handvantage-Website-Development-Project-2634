import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { NEWSLETTER_ISSUES } from "@/lib/newsletter";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "The Vantage Pilot",
  description:
    "The Vantage Pilot is a monthly digest from Handvantage. One founder note, the month's articles in two sentences each, and a few links to primary sources we've been reading. No drip campaigns, no funnels.",
  alternates: { canonical: `${SITE.baseUrl}/vantage-pilot` },
};

export default function VantagePilotIndex() {
  const issues = [...NEWSLETTER_ISSUES].sort((a, b) =>
    b.publishedISO.localeCompare(a.publishedISO)
  );
  const [latest, ...rest] = issues;

  return (
    <>
      {/* Header */}
      <section className="pt-12 md:pt-20 pb-12 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>MONTHLY DIGEST</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-8">
            The Vantage <span className="italic text-oxblood">Pilot</span>.
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px]">
            One founder note. The month&rsquo;s articles in two sentences each. A few links to
            primary sources that crossed our desks. Five minutes to read, monthly. The sign-up form
            ships when there are enough issues in the can to be worth committing to. In the
            meantime, RSS at{" "}
            <Link
              href="/insights/rss.xml"
              className="text-oxblood hover:underline underline-offset-4"
            >
              /insights/rss.xml
            </Link>
            .
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Latest issue — featured */}
      {latest && (
        <section className="py-12 md:py-20 bg-paper">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
            <Link
              href={`/vantage-pilot/${latest.issue}`}
              className="group block border-t border-ink pt-10 no-underline hover:no-underline"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <p className="font-mono text-byline text-oxblood uppercase tracking-[0.18em]">
                    Latest · Issue {String(latest.number).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="font-display text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] leading-[1.05] tracking-[-0.01em] text-ink group-hover:text-oxblood mb-4 transition-colors">
                    The Vantage Pilot, <span className="italic">{latest.monthHuman}</span>.
                  </h2>
                  <p className="font-display text-body-lg text-ink leading-relaxed mb-4 max-w-[640px]">
                    Issue 01 — the launch month. The audit-window argument for Annex IV, the ISO
                    42001 audit checklist, the B-to-A retrospective, and the briefings that frame
                    why most agentic AI projects stall at the compliance review.
                  </p>
                  <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                    Read the full issue →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Older issues */}
      {rest.length > 0 && (
        <section className="py-12 md:py-16 bg-paper-deep">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
            <SectionEyebrow>ARCHIVE</SectionEyebrow>
            <ul className="border-t border-ink-hairline">
              {rest.map((issue) => (
                <li key={issue.issue} className="border-b border-ink-hairline">
                  <Link
                    href={`/vantage-pilot/${issue.issue}`}
                    className="group flex items-baseline justify-between gap-4 py-6 hover:bg-paper transition-colors"
                  >
                    <div>
                      <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.14em] mb-1">
                        Issue {String(issue.number).padStart(2, "0")} ·{" "}
                        {issue.monthHuman}
                      </p>
                      <p className="font-display text-h4 text-ink group-hover:text-oxblood transition-colors">
                        The Vantage Pilot, {issue.monthHuman}.
                      </p>
                    </div>
                    <span className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em] flex-shrink-0">
                      {issue.publishedHuman} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SectionDivider />

      <CTABlock
        headline="Want to know when issue 02 lands?"
        body="The sign-up form opens when there are enough issues in the queue that committing to a monthly cadence is honest. Until then, write to hello@handvantage.com — we'll add you to the early list manually."
        ctaLabel="Email us"
        ctaHref="/contact"
      />
    </>
  );
}
