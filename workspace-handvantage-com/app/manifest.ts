import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data-tokens";

// Web app manifest — gives mobile browsers the platform name, brand colors,
// and the icons used when a user adds the site to their home screen. Also
// drives the chrome browser tab color on Android.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: "Vantage Workspace",
    description:
      "Vantage Workspace is a sovereign agentic AI platform for regulated enterprises. One identity, one signed audit trail, A grade compliance across 11 frameworks.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1EA",
    theme_color: "#722F37",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
