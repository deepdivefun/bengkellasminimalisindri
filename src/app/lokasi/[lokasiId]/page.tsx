import Features from "@/components/Features";
import { Metadata } from "next";
import getAllPosts from '@/lib/queries/getAllPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locations } from '../../../constant/location';
import CheckIcon from '@mui/icons-material/Check';

function extractLocation(lokasiId: string): string {
    const parts = lokasiId.split('-');
    return parts[parts.length - 1];
}

export async function generateMetadata({ params }: { params: { lokasiId: string } }): Promise<Metadata> {
    const location = extractLocation(params.lokasiId);

    return {
        title: `Bengkel Las ${location}`,
        description: `Layanan pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain-lain di ${location}.`,
        openGraph: {
            title: "Bengkel Las Bekasi",
            description: "Bengkel Las Bekasi Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis",
            type: "website",
            locale: "id",
            url: "https://bengkellasminimalisindri.com/",
            siteName: "bengkellasminimalisindri",
        },
        metadataBase: new URL(`https://bengkellasminimalisindri.com`),
    };
}

export default async function LokasiDetail({
    params
}: {
    params: { lokasiId: string }
}) {
    const posts = await getAllPosts();

    if (!posts || !posts.length) {
        notFound();
    }

    const locationName = extractLocation(params.lokasiId);
    const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

    if (!location) {
        notFound();
    }

    return (
        <section className="md:mx-16 mx-6">
            <div>
                {/* <h1 className="uppercase font-bold">Bengkel Las {location.name}</h1> */}
            </div>

            <div>
                <h2 className="text-2xl font-bold">Bengkel Las {location.name}</h2>
                <p>Kami melayani daerah {location.description} Kami mengerjakan tangga, kanopi, railing door, tralis, jendela, balkon dengan bahas berkualitas, cepat dan terpercaya. Segera hubungi kami untuk konsultasi. </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Bahan Meterial</h2>
                <p>Kami menawarkan material</p>
                <ul>
                    <li> <CheckIcon/> Besi</li>
                    <li>  <CheckIcon/>  Stainless Steel</li>
                    <li>  <CheckIcon/>  Galvanis</li>
                    <li>  <CheckIcon/>  Baja Ringan</li>
                </ul>
            </div>

            <aside>
                <section id="jasa-kami" className="mx-6 md:my-12 my-6">
                    <div>
                        <div className="md:flex md:gap-12 gap-6 w-full md:overflow-x-auto" id="slider">
                            {posts.map((post) => (
                                <article key={post.databaseId} className="md:my-0 my-3">
                                    <Link href={`/`} className="">
                                        <div className="w-52">
                                            <Image
                                                alt={post.featuredImage.node.altText}
                                                height={post.featuredImage.node.mediaDetails.height}
                                                src={post.featuredImage.node.sourceUrl}
                                                width={post.featuredImage.node.mediaDetails.width}
                                                priority={true}
                                                sizes="100vw"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </aside>

            <Features />
        </section>
    );
}
