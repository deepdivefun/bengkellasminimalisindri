import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-jakarta`,
            
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cikarang`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cibubur`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-cileungsi`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/lokasi/bengkel-las-bekasi`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`
        }
    ];
}
