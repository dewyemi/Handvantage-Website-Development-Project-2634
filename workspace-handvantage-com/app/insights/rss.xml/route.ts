import { INSIGHTS } from "@/lib/insights";
import { SITE } from "@/lib/data-tokens";

// RSS 2.0 feed for /insights. Lets subscribers follow without an email
// list, and gives crawlers a freshness signal. Regenerated on every
// request (cheap — just maps over INSIGHTS).
export async function GET() {
  const articles = [...INSIGHTS].sort((a, b) => b.date.localeCompare(a.date));
  const lastBuild = articles[0]?.date ?? new Date().toISOString().slice(0, 10);

  const items = articles
    .map((article) => {
      const url = `${SITE.baseUrl}/insights/${article.slug}`;
      // RFC 822 date for RSS — derive from the ISO date with a fixed
      // 12:00 UTC time so the feed is deterministic.
      const pubDate = new Date(`${article.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(article.headline)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <author>hello@handvantage.com (${escapeXml(article.author ?? SITE.founderName)})</author>
      <description>${escapeXml(article.dek)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Handvantage — Insights</title>
    <link>${SITE.baseUrl}/insights</link>
    <atom:link href="${SITE.baseUrl}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>Engineering retrospectives, sector dossiers, and briefings on agentic AI governance, compliance posture, and architecture trade-offs from Handvantage.</description>
    <language>en-CA</language>
    <copyright>Handvantage, ${new Date().getFullYear()}</copyright>
    <managingEditor>hello@handvantage.com (${escapeXml(SITE.founderName)})</managingEditor>
    <webMaster>hello@handvantage.com (${escapeXml(SITE.founderName)})</webMaster>
    <lastBuildDate>${new Date(`${lastBuild}T12:00:00Z`).toUTCString()}</lastBuildDate>
    <generator>Next.js / Vantage Workspace</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600",
    },
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
