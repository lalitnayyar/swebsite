import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

const routes = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/projects',
  '/case-studies',
  '/industries',
  '/blog',
  '/resources',
  '/downloads',
  '/certifications',
  '/partners',
  '/testimonials',
  '/careers',
  '/media',
  '/contact',
  '/book-consultation',
  '/privacy',
  '/terms',
  '/search'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now
  }));
}
