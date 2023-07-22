import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://jaksimonds.dev/sitemap.xml'
  }
}

export default robots