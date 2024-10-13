import locations from '@/constant/location'
import {MetadataRoute} from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const locationUrls = locations.map((location) => ({
    url: `${baseUrl}/blog/${location.href}`,
    lastModified: new Date()
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date()
    },
    ...locationUrls
  ]
}
