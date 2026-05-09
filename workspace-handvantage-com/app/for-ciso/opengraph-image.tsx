import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const runtime = "nodejs";
export const alt = "The CISO brief — Vantage Workspace";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "FOR THE CISO",
    title: "The 90-second brief",
    italicSecondLine: "for your committee.",
    tagline:
      "One sentence per audience, the risk math quantified, five talking points for the next meeting, and six prepared answers to the objections you'll be asked. Print, forward, attach.",
    tone: "midnight",
    accent: "gold",
    meta: "WORKSPACE.HANDVANTAGE.COM / FOR-CISO",
  });
}
