import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

interface OgCardOptions {
  eyebrow: string;
  title: string;
  italicSecondLine?: string;
  tagline?: string;
  meta?: string;
  tone?: "paper" | "midnight";
  accent?: "oxblood" | "gold";
}

const TOKENS = {
  paper: "#F5F1EA",
  paperDeep: "#EAE3D5",
  ink: "#1A1F1B",
  inkSoft: "#4A4F4B",
  hairline: "#D2C9B7",
  midnight: "#0F1A1F",
  midnightHairline: "rgba(245,241,234,0.18)",
  paperOnDark: "#F5F1EA",
  paperOnDarkSoft: "rgba(245,241,234,0.78)",
  oxblood: "#722F37",
  gold: "#C9A36A",
};

export function renderOgCard({
  eyebrow,
  title,
  italicSecondLine,
  tagline,
  meta,
  tone = "paper",
  accent = "oxblood",
}: OgCardOptions) {
  const dark = tone === "midnight";
  const bg = dark ? TOKENS.midnight : TOKENS.paper;
  const text = dark ? TOKENS.paperOnDark : TOKENS.ink;
  const subtle = dark ? TOKENS.paperOnDarkSoft : TOKENS.inkSoft;
  const hairline = dark ? TOKENS.midnightHairline : TOKENS.hairline;
  const accentColor = accent === "gold" ? TOKENS.gold : TOKENS.oxblood;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: bg,
          padding: "60px 80px 130px 80px",
          fontFamily: "Georgia, 'Source Serif 4', serif",
          color: text,
          position: "relative",
        }}
      >
        {/* Top row: brand + meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                backgroundColor: accentColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: bg,
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "Georgia, serif",
                borderRadius: 2,
              }}
            >
              H
            </div>
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 16,
                letterSpacing: 4,
                color: subtle,
                textTransform: "uppercase",
              }}
            >
              HANDVANTAGE
            </span>
          </div>
          <span
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: 14,
              letterSpacing: 3,
              color: subtle,
              textTransform: "uppercase",
            }}
          >
            VANTAGE WORKSPACE
          </span>
        </div>

        {/* Hairline divider */}
        <div
          style={{
            height: 1,
            backgroundColor: hairline,
            marginBottom: 40,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
            fontSize: 17,
            letterSpacing: 5,
            color: accentColor,
            textTransform: "uppercase",
            marginBottom: 26,
            paddingBottom: 8,
            borderBottom: `1px solid ${accentColor}`,
            alignSelf: "flex-start",
          }}
        >
          {eyebrow}
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: italicSecondLine ? 70 : title.length > 50 ? 64 : 80,
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: -1.5,
            color: text,
            marginBottom: tagline ? 28 : 24,
            maxWidth: 1040,
          }}
        >
          <span>{title}</span>
          {italicSecondLine && (
            <span
              style={{
                fontStyle: "italic",
                color: accentColor,
                marginTop: 4,
              }}
            >
              {italicSecondLine}
            </span>
          )}
        </div>

        {/* Tagline */}
        {tagline && (
          <div
            style={{
              fontSize: 22,
              lineHeight: 1.35,
              color: subtle,
              maxWidth: 1000,
            }}
          >
            {tagline}
          </div>
        )}

        {/* Bottom row — anchored, with hairline above */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 80,
            right: 80,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              height: 1,
              backgroundColor: hairline,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: 13,
              letterSpacing: 2,
              color: subtle,
              textTransform: "uppercase",
            }}
          >
            <span>workspace.handvantage.com</span>
            {meta && <span>{meta}</span>}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
