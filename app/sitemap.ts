import type { MetadataRoute } from "next";

const SITE_URL = "https://www.raveblue.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/Portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/Portfolio/MAA-Recipe-App`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/Blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
