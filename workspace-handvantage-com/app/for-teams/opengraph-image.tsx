import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "Vantage Workspace — for the people whose teams will actually use it";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "FOR THE BUSINESS",
    title: "The CISO buys it.",
    italicSecondLine: "The rest of the company uses it.",
    tagline:
      "Five readings of the same platform — CEO, CFO, COO, VP Sales, department lead — in five vocabularies. Outcome-led, no marketing voice, no invented ROI figures.",
    meta: "WORKSPACE.HANDVANTAGE.COM / FOR-TEAMS",
  });
}
