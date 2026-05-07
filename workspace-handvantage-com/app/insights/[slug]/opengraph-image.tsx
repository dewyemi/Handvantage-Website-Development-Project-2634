import { notFound } from "next/navigation";
import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";
import { ARTICLE_BY_SLUG, INSIGHTS } from "@/lib/insights";

export const runtime = "nodejs";
export const alt = "Handvantage — Insights article";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const article = ARTICLE_BY_SLUG[params.slug];
  if (!article) notFound();

  return renderOgCard({
    eyebrow: article.category,
    title:
      article.headline.length > 80
        ? article.headline.slice(0, 78).trim() + "…"
        : article.headline,
    tagline: article.dek,
    meta: `${article.dateHuman.toUpperCase()} · ${article.readingTime.toUpperCase()}`,
  });
}
