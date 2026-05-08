"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article, ArticleCategory } from "@/lib/insights";

type FilterKey = "all" | "BRIEFING" | "RETROSPECTIVE" | "DOSSIER" | "FIELD NOTE";
type SortKey = "newest" | "oldest" | "longest";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "BRIEFING", label: "Briefings" },
  { key: "RETROSPECTIVE", label: "Retrospectives" },
  { key: "DOSSIER", label: "Sector dossiers" },
  { key: "FIELD NOTE", label: "Field notes" },
];

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Most recent ↓" },
  { key: "oldest", label: "Oldest first ↑" },
  { key: "longest", label: "Longest read" },
];

function readingMinutes(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

interface Props {
  articles: Article[];
}

export function InsightsArchive({ articles }: Props) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    const base =
      filter === "all" ? articles : articles.filter((a) => a.category === filter);
    return [...base].sort((a, b) => {
      if (sort === "oldest") return a.date.localeCompare(b.date);
      if (sort === "longest") return readingMinutes(b.readingTime) - readingMinutes(a.readingTime);
      return b.date.localeCompare(a.date);
    });
  }, [articles, filter, sort]);

  const featured = filter === "all" && sort === "newest" ? filtered[0] : null;
  const list = featured ? filtered.slice(1) : filtered;

  return (
    <>
      {/* Featured most-recent article (only when no filter is active) */}
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
                  <p className="font-display text-body-lg text-ink leading-relaxed max-w-[640px] mb-6">
                    {featured.dek}
                  </p>
                  {/* Feature image — uses the article's auto-generated OG card. */}
                  <div className="relative w-full max-w-[640px] aspect-[1200/630] overflow-hidden border border-ink-hairline">
                    <Image
                      src={`/insights/${featured.slug}/opengraph-image`}
                      alt={`Feature image for ${featured.headline}`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 640px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
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

      {/* Filter + sort + archive */}
      <section className="py-12 md:py-16 bg-paper-deep">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`font-ui font-medium text-[14px] px-3 py-1.5 border transition-colors ${
                    active
                      ? "border-oxblood text-oxblood bg-paper"
                      : "border-ink-hairline text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                  aria-pressed={active}
                >
                  {f.label}
                </button>
              );
            })}
            <div className="ml-auto flex items-center gap-2">
              <span className="font-ui text-byline text-ink-soft">Sort:</span>
              {SORTS.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSort(s.key)}
                  className={`font-ui text-byline transition-colors ${
                    sort === s.key
                      ? "text-oxblood underline underline-offset-4"
                      : "text-ink-soft hover:text-ink"
                  }`}
                  aria-pressed={sort === s.key}
                >
                  {s.label}
                  {i < SORTS.length - 1 && <span className="mx-1 text-ink-hairline">·</span>}
                </button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <p className="font-display text-body text-ink-soft py-16 text-center border-t border-ink-hairline">
              Nothing in this category yet. Try another filter — or check back soon.
            </p>
          ) : (
            list.map((a) => (
              <ArticleCard
                key={a.slug}
                category={a.category}
                headline={a.headline}
                dek={a.dek}
                date={a.dateHuman}
                readingTime={a.readingTime}
                href={`/insights/${a.slug}`}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
