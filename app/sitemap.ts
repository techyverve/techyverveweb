import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.techyverve.in";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/career`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
