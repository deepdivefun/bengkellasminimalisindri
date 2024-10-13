import {MetadataRoute} from 'next'
import {locations} from '../constant/location'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const locationUrls = locations.map((location) => ({
    url: `${baseUrl}/lokasi/${location.href}`,
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
