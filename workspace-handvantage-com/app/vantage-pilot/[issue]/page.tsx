import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABlock } from "@/components/CTABlock";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { NEWSLETTER_BY_ISSUE, NEWSLETTER_ISSUES } from "@/lib/newsletter";
import { SITE } from "@/lib/data-tokens";

interface Props {
  params: { issue: string };
}

export async function generateStaticParams() {
  return NEWSLETTER_ISSUES.map((n) => ({ issue: n.issue }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const issue = NEWSLETTER_BY_ISSUE[params.issue];
  if (!issue) return { title: "Not found" };
  return {
    title: `The Vantage Pilot — ${issue.monthHuman}`,
    description: `Issue ${String(issue.number).padStart(2, "0")} of The Vantage Pilot: a monthly digest of agentic AI governance, compliance, and architecture writing from Handvantage. ${issue.monthHuman}.`,
    alternates: { canonical: `${SITE.baseUrl}/vantage-pilot/${issue.issue}` },
    openGraph: {
      type: "article",
      publishedTime: issue.publishedISO,
      authors: [SITE.founderName],
    },
  };
}

export default function NewsletterIssuePage({ params }: Props) {
  const issue = NEWSLETTER_BY_ISSUE[params.issue];
  if (!issue) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `The Vantage Pilot — ${issue.monthHuman}`,
    datePublished: issue.publishedISO,
    dateModified: issue.publishedISO,
    author: { "@type": "Person", name: SITE.founderName },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.baseUrl}/images/logo/handvantage-h-oxblood.png`,
      },
    },
    description: `Monthly digest from Handvantage: ${issue.monthHuman}.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.baseUrl}/vantage-pilot/${issue.issue}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <section className="pt-12 md:pt-20 pb-8 bg-paper">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <p className="font-mono text-byline text-oxblood mb-4 tracking-[0.18em] uppercase">
            <Link
              href="/vantage-pilot"
              className="hover:underline underline-offset-4"
            >
              The Vantage Pilot
            </Link>{" "}
            · ISSUE {String(issue.number).padStart(2, "0")} · {issue.monthHuman.toUpperCase()}
          </p>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-6">
            The Vantage Pilot,{" "}
            <span className="italic text-oxblood">{issue.monthHuman}</span>.
          </h1>
          <p className="font-display text-body-lg text-ink-soft leading-relaxed mb-6">
            One founder note. The month&rsquo;s articles in two sentences each. A few links to
            primary sources that crossed our desks. Five minutes to read.
          </p>
          <p className="font-ui text-byline text-ink-soft">
            Published {issue.publishedHuman} · By {SITE.founderName}
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* From the founder */}
      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>FROM THE FOUNDER</SectionEyebrow>
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            {issue.founderNote.map((p, i) => (
              <p key={i} className={i === 0 ? "lede" : undefined}>
                {p}
              </p>
            ))}
          </article>
        </div>
      </section>

      <SectionDivider />

      {/* Published this month */}
      <section className="py-12 md:py-16 bg-paper-deep">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>PUBLISHED THIS MONTH</SectionEyebrow>
          <h2 className="font-display text-h3 text-ink mb-10">
            {issue.publishedThisMonth.length} articles, two sentences each.
          </h2>
          <ul className="space-y-10">
            {issue.publishedThisMonth.map((article) => (
              <li key={article.slug} className="border-t border-ink-hairline pt-8">
                <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-3">
                  {article.category}
                </p>
                <h3 className="font-display text-h4 text-ink mb-3 leading-tight">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="hover:text-oxblood transition-colors"
                  >
                    {article.headline}
                  </Link>
                </h3>
                <p className="font-display text-body text-ink leading-relaxed mb-3">
                  {article.note}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-mono text-byline text-oxblood hover:underline underline-offset-4 uppercase tracking-[0.12em]"
                >
                  Read the article →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* What we're watching */}
      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>WHAT WE&rsquo;RE WATCHING</SectionEyebrow>
          <h2 className="font-display text-h3 text-ink mb-10">
            Primary sources that shaped how we thought this month.
          </h2>
          <ul className="space-y-8">
            {issue.whatWeAreWatching.map((item, i) => (
              <li key={i} className="border-t border-ink-hairline pt-6">
                <h3 className="font-display text-h4 text-ink mb-2 leading-tight">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-oxblood transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em] mb-3">
                  {item.source}
                </p>
                <p className="font-display text-body text-ink leading-relaxed">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* Coming next month */}
      <section className="py-12 md:py-16 bg-paper-deep">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>COMING NEXT MONTH</SectionEyebrow>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            {issue.comingNextMonth}
          </p>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        headline="Forwarded to you?"
        body="The Vantage Pilot is a monthly digest. We're holding off on a sign-up form until there are enough issues in the can to be worth committing to. In the meantime, the RSS feed at /insights/rss.xml carries every article we publish, and you can write to hello@handvantage.com if you want to be notified when the email subscription opens."
        ctaLabel="See the editorial archive"
        ctaHref="/insights"
      />
    </>
  );
}
