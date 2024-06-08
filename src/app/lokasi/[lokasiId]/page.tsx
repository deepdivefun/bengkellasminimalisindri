import Features from "@/components/Features";
import { Metadata } from "next";
import getAllPosts from '@/lib/queries/getAllPosts'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

function extractLocation(lokasiId: string): string {
    // Memisahkan berdasarkan tanda hubung dan mengambil bagian terakhir
    const parts = lokasiId.split('-');
    return parts[parts.length - 1];
}

export async function generateMetadata({ params }: { params: { lokasiId: string } }): Promise<Metadata> {
    const location = extractLocation(params.lokasiId);

    return {
        title: `Bengkel Las ${location}`,
        description: `Layanan pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain-lain di ${location}.`,
        openGraph :{
          title:"Bengkel Las Bekasi",
          description: "Bengkel Las Bekasi Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis",
          type:"website",
          locale:"id",
          url:"https://bengkellasminimalisindri.com/",
          siteName:"bengkellasminimalisindri",
        },
        metadataBase: new URL(`https://bengkellasminimalisindri.com`),
    };
}

export default async function LokasiDetail({
    params
}:{
    params:{lokasiId:string}
}) {


        // Fetch posts from WordPress.
        const posts = await getAllPosts()

        // No data? Bail...
        if (!posts || !posts.length) {
          notFound()
        }
    const location = extractLocation(params.lokasiId);

    return (
        <section className="md:mx-16 mx-6 mt-6">
            <h1 className="uppercase font-bold">Bengkel Las {location}</h1>
            <h2 className="mt-6">Melayani pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain lain</h2>

            <aside>
      <section id="jasa-kami" className="mx-6 md:my-12 my-6">
      <div>
          <div className="md:flex md:gap-12 gap-6 w-full md:overflow-x-auto" id="slider">
            {posts.map((post) => (
              <article key={post.databaseId} className="">
                <Link href={`/`} className="">
                  <div className="w-52">
                  <Image
                      alt={post.featuredImage.node.altText}
                      height={post.featuredImage.node.mediaDetails.height}
                      src={post.featuredImage.node.sourceUrl}
                      width={post.featuredImage.node.mediaDetails.width}
                      priority={true}
                      sizes="100vw"
                      style={{objectFit: "contain"}}
                    />
                  </div>
                    <h3 className='text-center mt-5'>{post.title}</h3>
                </Link>
              </article>
            ))}
          </div>
      </div>
    </section>
    </aside>

            <Features/>
        </section>
    );
}
