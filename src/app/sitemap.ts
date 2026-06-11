import type { MetadataRoute } from "next";

const BASE_URL = "https://aftech.co.id";

const staticRoutes = [
  { url: "", priority: 1, changeFreq: "weekly" as const },
  { url: "/about", priority: 0.9, changeFreq: "monthly" as const },
  { url: "/team", priority: 0.7, changeFreq: "monthly" as const },
  { url: "/roadmap", priority: 0.6, changeFreq: "monthly" as const },
  { url: "/contact", priority: 0.8, changeFreq: "monthly" as const },
  { url: "/careers", priority: 0.7, changeFreq: "weekly" as const },
  { url: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
  { url: "/terms", priority: 0.3, changeFreq: "yearly" as const },
  { url: "/cookies", priority: 0.3, changeFreq: "yearly" as const },
];

const blogSlugs = [
  "digital-transformation-indonesia-2026",
  "implementing-iot-manufacturing-guide",
  "cybersecurity-best-practices-sme",
  "future-of-erp-cloud-integration",
  "fire-early-warning-system-industrial",
  "career-growth-tech-industry-indonesia",
];

const products = [
  "iot-sensors", "erp-connect", "smart-dashboards",
  "security-hub", "mobile-ops", "cloud-bridge",
];

const services = [
  "iot", "ai-ml", "system-integrator",
  "digital-security", "fews-camera", "software-dev",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));

  for (const slug of products) {
    entries.push({
      url: `${BASE_URL}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const slug of services) {
    entries.push({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const slug of blogSlugs) {
    entries.push({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  entries.push({
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  });

  return entries;
}
