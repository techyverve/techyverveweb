import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  // A fixed date, not `new Date()`: a lastmod that changes on every build is ignored by Google.
  // Bump CONTENT_UPDATED in lib/site.ts when page content changes.
  const lastModified = new Date(CONTENT_UPDATED);

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/career`, lastModified, changeFrequency: "weekly", priority: 0.6 },
  ];
}
