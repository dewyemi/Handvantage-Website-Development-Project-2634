import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Handvantage — Insights archive";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "EDITORIAL ARCHIVE",
    title: "Insights.",
    tagline:
      "Engineering retrospectives, sector dossiers, and briefings on agentic AI governance, compliance posture, and architecture trade-offs. New writing every one to two weeks.",
    meta: "WORKSPACE.HANDVANTAGE.COM",
  });
}
