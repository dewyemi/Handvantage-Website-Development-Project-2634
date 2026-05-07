import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Handvantage — Vantage Workspace";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "VANTAGE WORKSPACE",
    title: "Sovereign agentic AI,",
    italicSecondLine: "audited like a kernel.",
    tagline:
      "One platform. One identity. One audit trail. Continuous compliance across eleven frameworks, deployed in your infrastructure.",
    meta: "MAY 2026 · LAUNCH",
  });
}
