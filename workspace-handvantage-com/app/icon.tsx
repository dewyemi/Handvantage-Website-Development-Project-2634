import { ImageResponse } from "next/og";

// Browser tab favicon — programmatically rendered so it's crisp at 16x16,
// 32x32, and the larger sizes Next.js generates from this single source.
// A solid oxblood square with a large cream serif H reads as the brand at
// any size; the detailed H-mark with network dots stays on the larger
// apple-icon.png where the detail can actually be seen.

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#722F37",
          fontFamily: "Georgia, 'Source Serif 4', serif",
          fontSize: 48,
          fontWeight: 700,
          color: "#F5F1EA",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        H
      </div>
    ),
    size
  );
}
