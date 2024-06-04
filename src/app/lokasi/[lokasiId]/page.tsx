import Features from "@/components/Features";
import { Metadata } from "next";

// Fungsi untuk memisahkan lokasi dari params
function extractLocation(lokasiId: string): string {
    // Memisahkan berdasarkan tanda hubung dan mengambil bagian terakhir
    const parts = lokasiId.split('-');
    return parts[parts.length - 1];
}

// Fungsi untuk menghasilkan metadata dinamis
export async function generateMetadata({ params }: { params: { lokasiId: string } }): Promise<Metadata> {
    const location = extractLocation(params.lokasiId);

    return {
        title: `Bengkel Las ${location} - Bengkel Las Dan Bengkel Las Minimalis`,
        description: `Layanan pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain-lain di ${location}.`,
        twitter: {
            card: "summary_large_image",
        },
    };
}

export default function LokasiDetail({
    params
}:{
    params:{lokasiId:string}
}) {
    const location = extractLocation(params.lokasiId);

    return (
        <section className="md:mx-16 mx-6 mt-6">
            <h1 className="uppercase font-bold">Bengkel Las {location}</h1>
            <h2 className="mt-6">Melayani pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain lain</h2>
            <Features/>
        </section>
    );
}
