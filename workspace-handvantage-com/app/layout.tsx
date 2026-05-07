import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { HeaderNav } from "@/components/HeaderNav";
import { FooterStrip } from "@/components/FooterStrip";
import { SITE } from "@/lib/data-tokens";
import "./globals.css";

const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ui = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Handvantage builds Vantage Workspace: a 7-Layer Defence Architecture for agentic AI, with continuous compliance assessment across 11 regulatory frameworks. Deployed in your infrastructure, audited every build.";

const SITE_KEYWORDS = [
  "agentic AI",
  "agentic AI platform",
  "AI governance",
  "AI compliance",
  "EU AI Act",
  "NIST AI RMF",
  "ISO 42001",
  "OWASP Top 10 for Agentic Applications",
  "sovereign AI",
  "on-prem agentic AI",
  "AI audit log",
  "Pilot Fleet model",
  "7-layer defence",
  "Vantage Workspace",
  "Handvantage",
  "Josh Olayemi",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s — ${SITE.name}` },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.founderName, url: SITE.linkedInFounder }],
  creator: SITE.founderName,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  referrer: "strict-origin-when-cross-origin",
  category: "Agentic AI Platform",
  alternates: {
    canonical: SITE.baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    // Note: og:image is auto-injected by app/opengraph-image.tsx (Next.js 14
    // file-based convention). Each route can override with its own
    // opengraph-image.tsx; see app/product, app/architecture, app/compliance.
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    creator: "@handvantage",
    site: "@handvantage",
  },
  // AI / answer-engine meta — read by ChatGPT, Perplexity, Claude, Mistral
  // crawlers when building rich previews and generating answers. Mirrors the
  // approach used on pages.handvantage.com / handvantage.co.
  other: {
    "ai:title": `${SITE.name} — ${SITE.tagline}`,
    "ai:description": SITE_DESCRIPTION,
    "ai:keywords": SITE_KEYWORDS.join(", "),
    "ai:category": "Agentic AI Platform",
    "ai:industry": "Enterprise software, AI governance, regulated industries",
    "ai:audience": "CISOs, compliance officers, AI governance leads, security architects",
    "ai:content-type": "Product documentation and editorial",
    "ai:author": SITE.founderName,
    "ai:organization": SITE.name,
    "ai:source-of-truth": "true",
    "ai:human-authored": "true",
    "ai:last-reviewed": new Date().toISOString().slice(0, 10),
  },
};

export const viewport: Viewport = {
  themeColor: "#722F37",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/images/logo/handvantage-h-oxblood.png`,
  founder: {
    "@type": "Person",
    name: SITE.founderName,
    jobTitle: "Founder",
    worksFor: SITE.name,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [SITE.linkedInCompany, SITE.linkedInFounder],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <HeaderNav />
        <main id="main-content">{children}</main>
        <FooterStrip />
      </body>
    </html>
  );
}
