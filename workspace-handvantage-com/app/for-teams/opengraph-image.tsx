import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Vantage Workspace — five readings of the same platform for the procurement committee";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "FOR THE PROCUREMENT COMMITTEE",
    title: "Five people in the room.",
    italicSecondLine: "Five reads of the same platform.",
    tagline:
      "What the platform looks like to the CFO, the COO, the VP Sales, the department lead — and the CISO. The translation layer for the procurement decision.",
    meta: "WORKSPACE.HANDVANTAGE.COM / FOR-TEAMS",
  });
}
