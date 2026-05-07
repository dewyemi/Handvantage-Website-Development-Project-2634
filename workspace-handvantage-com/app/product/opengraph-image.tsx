import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Vantage Workspace — the agentic AI platform";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "THE PRODUCT",
    title: "Vantage Workspace.",
    tagline:
      "One platform: email, files, chat, meetings, documents — and an AI agent layer that operates across all of them. Twenty containers, one SSO, one audit trail.",
    meta: "DEPLOYED IN 10 MINUTES",
  });
}
