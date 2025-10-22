// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://ithingy.dev';
    return [
        { url: `${base}/`, changeFrequency: 'monthly', priority: 1.0 },
        { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.4 },
        { url: `${base}/privacy/ua`, changeFrequency: 'yearly', priority: 0.4 },
    ];
}
