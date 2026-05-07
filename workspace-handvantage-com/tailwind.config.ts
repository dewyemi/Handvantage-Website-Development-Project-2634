import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F5F1EA",
          deep: "#EAE3D5",
          rich: "#E5DDC9",
        },
        ink: {
          DEFAULT: "#1A1F1B",
          soft: "#4A4F4B",
          hairline: "#D2C9B7",
        },
        midnight: {
          DEFAULT: "#0F1A1F",
          deep: "#070D11",
          soft: "#1C2A33",
          hairline: "rgba(245,241,234,0.12)",
        },
        oxblood: {
          DEFAULT: "#722F37",
          soft: "#8B4A52",
        },
        gold: {
          DEFAULT: "#A16207",
          soft: "#C08B2C",
        },
        success: {
          ink: "#2D5A3D",
        },
        warning: {
          ink: "#8B5A1A",
        },
        error: {
          ink: "#7A2E1F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Source Serif 4", "Source Serif Pro", "Georgia", "serif"],
        ui: ["var(--font-ui)", "Inter Tight", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "JetBrains Mono", "Menlo", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.5rem, 6vw + 1rem, 4.5rem)", { lineHeight: "1.05", fontWeight: "400" }],
        "display-2": ["clamp(2rem, 4vw + 1rem, 3.25rem)", { lineHeight: "1.1", fontWeight: "400" }],
        h2: ["clamp(1.75rem, 2vw + 1rem, 2.25rem)", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        eyebrow: ["0.75rem", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.08em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1.0625rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.55", fontWeight: "400" }],
        byline: ["0.8125rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      maxWidth: {
        narrow: "640px",
        default: "960px",
        wide: "1200px",
        full: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
