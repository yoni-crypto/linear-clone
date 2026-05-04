import type { MetadataRoute } from "next";

const siteUrl = "https://linear.yonasaddisu.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
