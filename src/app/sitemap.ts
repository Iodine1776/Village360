import type { MetadataRoute } from "next";

const routes = [
  "",
  "/the-movement",
  "/the-model",
  "/programs",
  "/impact",
  "/resources",
  "/about",
  "/join",
  "/bring-village360-here",
  "/launch-a-village",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `https://joinvillage360.com${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/bring-village360-here" ? 0.9 : 0.7,
  }));
}
