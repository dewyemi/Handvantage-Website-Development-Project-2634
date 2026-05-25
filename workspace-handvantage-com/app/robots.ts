import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data-tokens";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  };
}
