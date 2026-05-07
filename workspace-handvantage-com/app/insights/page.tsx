import type { Metadata } from "next";
import Link from "next/link";
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
  const [featured, ...rest] = articles;

  return (
    <>
      {/* Header */}
      <section className="pt-12 md:pt-20 pb-12 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>EDITORIAL ARCHIVE</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-8">
            Insights.
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px]">
            The Handvantage editorial archive. Engineering retrospectives, sector dossiers, and
            briefings — on agentic AI governance, compliance posture, architecture trade-offs, and
            the regulatory environment. New writing every one to two weeks. No subscriptions, no
            popups, no SEO factory.
          </p>
        </div>
      </section>

      {/* Featured — most recent article gets full editorial treatment */}
      {featured && (
        <section className="pt-4 pb-12 md:pb-20 bg-paper">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block border-t border-ink pt-8 md:pt-10 no-underline hover:no-underline"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-eyebrow font-ui font-medium text-oxblood uppercase tracking-[0.12em]">
                    Latest · {featured.category.toLowerCase()}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-display text-[clamp(1.75rem,2.5vw+1rem,3rem)] leading-[1.04] tracking-[-0.01em] text-ink group-hover:text-oxblood mb-5 transition-colors">
                    {featured.headline}
                  </h2>
                  <p className="font-display text-body-lg text-ink leading-relaxed max-w-[640px]">
                    {featured.dek}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-ui font-medium text-byline text-ink-soft">
                    {featured.dateHuman}
                  </p>
                  <p className="font-ui text-byline text-ink-soft mt-1">
                    {featured.readingTime}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter strip + rest of archive */}
      <section className="py-12 md:py-16 bg-paper-deep">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {["All", "Briefings", "Retrospectives", "Sector dossiers", "Field notes"].map(
              (label, i) => (
                <span
                  key={label}
                  className={`font-ui font-medium text-[14px] px-3 py-1.5 border ${
                    i === 0
                      ? "border-oxblood text-oxblood bg-paper"
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

          {rest.map((a) => (
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
