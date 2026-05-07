import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Why we built Handvantage — an essay";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "FROM A FOUNDER · MAY 2026",
    title: "Why we built",
    italicSecondLine: "Handvantage.",
    tagline:
      "An essay. The Sovereign Capability Partner thesis, the Pilot + Fleet model, and why the audit window had to become structural rather than optional.",
    meta: "BY JOSH OLAYEMI",
  });
}
