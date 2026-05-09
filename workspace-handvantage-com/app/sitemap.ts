import type { MetadataRoute } from "next";
import { INSIGHTS } from "@/lib/insights";
import { NEWSLETTER_ISSUES } from "@/lib/newsletter";
import { SITE } from "@/lib/data-tokens";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.baseUrl, lastModified: today, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE.baseUrl}/product`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.baseUrl}/architecture`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.baseUrl}/compliance`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.baseUrl}/philosophy`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.baseUrl}/insights`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.baseUrl}/vantage-pilot`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.baseUrl}/for-teams`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.baseUrl}/for-ciso`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.baseUrl}/contact`, lastModified: today, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.baseUrl}/colophon`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.baseUrl}/privacy`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.baseUrl}/terms`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = INSIGHTS.map((article) => ({
    url: `${SITE.baseUrl}/insights/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const newsletterIssues: MetadataRoute.Sitemap = NEWSLETTER_ISSUES.map((issue) => ({
    url: `${SITE.baseUrl}/vantage-pilot/${issue.issue}`,
    lastModified: issue.publishedISO,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...articles, ...newsletterIssues];
}
