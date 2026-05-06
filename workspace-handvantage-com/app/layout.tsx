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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s — ${SITE.name}` },
  description:
    "Handvantage builds Vantage Workspace: a 7-Layer Defence Architecture for agentic AI, with continuous compliance assessment across 11 regulatory frameworks. Deployed in your infrastructure, audited every build.",
  applicationName: SITE.name,
  authors: [{ name: SITE.founderName }],
  creator: SITE.founderName,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.baseUrl,
    siteName: SITE.name,
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default.png"],
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
