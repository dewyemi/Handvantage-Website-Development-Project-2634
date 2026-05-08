import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABlock } from "@/components/CTABlock";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { ARTICLE_BY_SLUG, INSIGHTS } from "@/lib/insights";
import { SITE } from "@/lib/data-tokens";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLE_BY_SLUG[params.slug];
  if (!article) return { title: "Not found" };
  return {
    title: article.headline,
    description: article.dek,
    alternates: { canonical: `${SITE.baseUrl}/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.headline,
      description: article.dek,
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLE_BY_SLUG[params.slug];
  if (!article) notFound();

  // Pick one related article (next in array, wrap)
  const idx = INSIGHTS.findIndex((a) => a.slug === article.slug);
  const related = INSIGHTS[(idx + 1) % INSIGHTS.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: article.author ?? SITE.founderName },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/images/logo/handvantage-h-oxblood.png` },
    },
    description: article.dek,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.baseUrl}/insights/${article.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb + header */}
      <section className="pt-16 md:pt-24 pb-8">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <p className="font-ui text-byline text-ink-soft mb-6">
            <Link href="/insights" className="hover:text-oxblood hover:underline underline-offset-4">
              Insights
            </Link>{" "}
            ·{" "}
            <span className="uppercase tracking-[0.08em]">{article.category}</span>
          </p>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-6">
            {article.headline}
          </h1>
          <p className="font-display text-body-lg text-ink-soft leading-relaxed mb-6">
            {article.dek}
          </p>
          <p className="font-ui text-byline text-ink-soft">
            By {article.author ?? SITE.founderName} · {article.dateHuman} · {article.readingTime}
          </p>
        </div>

        {/* Feature image — uses the auto-generated OG card. Lightweight: same
            asset that's already produced for social sharing, no extra image
            management. Wide editorial framing above the body. */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 mt-12 md:mt-16">
          <figure className="relative w-full aspect-[1200/630] overflow-hidden border border-ink-hairline">
            <Image
              src={`/insights/${article.slug}/opengraph-image`}
              alt={`Feature image for "${article.headline}"`}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
              unoptimized
            />
          </figure>
        </div>
      </section>

      <SectionDivider />

      {/* Body */}
      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            {article.body.map((p, i) => (
              <p key={i} className={i === 0 ? "lede" : undefined}>
                {p}
              </p>
            ))}
          </article>
        </div>
      </section>

      <SectionDivider />

      {/* Related */}
      {related && related.slug !== article.slug && (
        <section className="py-16 md:py-24">
          <div className="max-w-narrow mx-auto px-6 md:px-12">
            <SectionEyebrow>RELATED</SectionEyebrow>
            <Link
              href={`/insights/${related.slug}`}
              className="group block border-t border-ink-hairline pt-8"
            >
              <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-3">
                {related.category}
              </p>
              <h3 className="font-display text-h3 text-ink group-hover:text-oxblood mb-3 leading-tight">
                {related.headline}
              </h3>
              <p className="font-display text-body text-ink leading-relaxed mb-3">{related.dek}</p>
              <p className="font-ui text-byline text-ink-soft">
                {related.dateHuman} · {related.readingTime}
              </p>
            </Link>
          </div>
        </section>
      )}

      <SectionDivider />

      <CTABlock
        headline="If something here is what you're working on, talk to us."
        body="Articles like this one come out of conversations with practitioners, security leaders, and engineering teams in regulated industries. If the writing reflects your situation, the next conversation is probably worth having."
        ctaLabel="Continue the conversation"
      />
    </>
  );
}
