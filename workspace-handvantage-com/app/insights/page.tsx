import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionEyebrow } from "@/components/SectionDivider";
import { INSIGHTS } from "@/lib/insights";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Editorial archive from Handvantage. Engineering retrospectives, sector dossiers, and briefings on agentic AI governance, compliance, and architecture.",
  alternates: { canonical: `${SITE.baseUrl}/insights` },
};

export default function InsightsIndex() {
  // Most-recent first
  const articles = [...INSIGHTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-default mx-auto px-6 md:px-12">
          <SectionEyebrow>EDITORIAL ARCHIVE</SectionEyebrow>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-8">Insights.</h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px]">
            The Handvantage editorial archive. Engineering retrospectives, sector dossiers, and
            briefings — on agentic AI governance, compliance posture, architecture trade-offs, and
            the regulatory environment. New writing every one to two weeks. No subscriptions, no
            popups, no SEO factory.
          </p>

          {/* Filter strip — non-interactive in v1 */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {["All", "Briefings", "Retrospectives", "Sector dossiers", "Field notes"].map(
              (label, i) => (
                <span
                  key={label}
                  className={`font-ui font-medium text-[14px] px-3 py-1.5 border ${
                    i === 0
                      ? "border-oxblood text-oxblood"
                      : "border-ink-hairline text-ink-soft"
                  }`}
                >
                  {label}
                </span>
              )
            )}
            <span className="ml-auto font-ui text-byline text-ink-soft">
              Sorted by: most recent ↓
            </span>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-default mx-auto px-6 md:px-12">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              category={a.category}
              headline={a.headline}
              dek={a.dek}
              date={a.dateHuman}
              readingTime={a.readingTime}
              href={`/insights/${a.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
