import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Vantage Workspace — A grade compliance posture";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "CURRENT POSTURE",
    title: "A grade. 100% pass.",
    italicSecondLine: "Eleven frameworks.",
    tagline:
      "Vantage Workspace is graded continuously, not annually — computed from runtime evidence on every build. SOC 2, ISO 42001, EU AI Act, NIST AI RMF, and seven more.",
    tone: "midnight",
    accent: "gold",
    meta: "/ASSESS · 2026-05-06",
  });
}
