import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Vantage Workspace — 7-Layer Defence Architecture";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "ARCHITECTURE",
    title: "Seven layers,",
    italicSecondLine: "one stack.",
    tagline:
      "Every prompt, every tool call, every agent action — mediated, signed, exported. OWASP Top 10 for Agentic Apps, NIST AI RMF, EU AI Act mapped to runtime evidence.",
    meta: "AUDITED LIKE A KERNEL",
  });
}
