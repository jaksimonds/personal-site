import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jaksimonds.dev',
      lastModified: new Date()
    },
    {
      url: 'https://jaksimonds.dev/projects',
      lastModified: new Date()
    },
    {
      url: 'https://jaksimonds.dev/about',
      lastModified: new Date()
    },
    {
      url: 'https://jaksimonds.dev/contact',
      lastModified: new Date()
    },
  ]
}