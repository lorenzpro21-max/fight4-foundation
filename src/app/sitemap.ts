import type { MetadataRoute } from 'next';

const BASE = 'https://fight4-foundation.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/resources', '/quick-guides', '/movement', '/ask'];
  const now = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}
