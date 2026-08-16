import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://joinvillage360.com/sitemap.xml",
    host: "https://joinvillage360.com",
  };
}
