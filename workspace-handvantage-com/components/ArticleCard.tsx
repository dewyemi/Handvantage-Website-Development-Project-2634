/**
 * ArticleCard.tsx
 *
 * Replaces whatever card treatment shipped on the home page Section 8
 * ("Recent thinking") and on the /insights index page.
 *
 * The current rendering reads as "blog excerpts" — likely because the
 * existing implementation uses bordered <Card> components with shadows
 * or rounded corners, which is the visual vocabulary of
 * documentation/blog templates.
 *
 * The fix: type-only, hairline-bordered (above each card), no
 * background fill, no shadow, no rounded corners. Editorial typography
 * does the visual work; the card is just a structured prose block.
 *
 * Usage:
 *   <ArticleCard
 *     category="RETROSPECTIVE"
 *     headline="From B to A: the discipline behind the upgrade"
 *     dek="What changed between February and May to move the compliance posture three letter grades."
 *     date="May 5, 2026"
 *     readingTime="6 min read"
 *     href="/insights/from-b-to-a-the-discipline-behind-the-upgrade"
 *     size="default"
 *   />
 */

import Link from "next/link";

interface ArticleCardProps {
  category: string;          // e.g. "BRIEFING", "RETROSPECTIVE", "DOSSIER", "FIELD NOTE"
  headline: string;
  dek?: string;              // optional 1-2 sentence summary
  date: string;              // e.g. "May 5, 2026"
  readingTime: string;       // e.g. "6 min read"
  href: string;
  size?: "compact" | "default";
}

export function ArticleCard({
  category,
  headline,
  dek,
  date,
  readingTime,
  href,
  size = "default",
}: ArticleCardProps) {
  const headlineSize = size === "compact" ? "text-[22px]" : "text-[28px]";

  return (
    <Link
      href={href}
      className="group block py-12 border-t border-ink-hairline transition-colors no-underline hover:no-underline"
    >
      {/* Top row — eyebrow on the left, date + reading time on the right */}
      <div className="flex justify-between items-start mb-6 gap-4 flex-wrap md:flex-nowrap">
        <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em]">
          {category}
        </p>
        <p className="font-ui font-medium text-byline text-ink-soft whitespace-nowrap">
          {date}&nbsp;&middot;&nbsp;{readingTime}
        </p>
      </div>

      {/* Headline */}
      <h3
        className={`font-display font-semibold ${headlineSize} text-ink group-hover:text-oxblood leading-tight mb-4 transition-colors`}
      >
        {headline}
      </h3>

      {/* Dek — 2-line clamp */}
      {dek && (
        <p className="font-display text-body text-ink leading-relaxed line-clamp-2 max-w-[640px]">
          {dek}
        </p>
      )}
    </Link>
  );
}

export default ArticleCard;
