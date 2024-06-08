import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-jakarta`,
            lastModified: new Date(),
            
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cikarang`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cibubur`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cileungsi`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-bekasi`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
        }
    ];
}
