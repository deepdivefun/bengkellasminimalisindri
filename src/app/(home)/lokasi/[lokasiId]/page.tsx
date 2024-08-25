import Features from '@/components/Features'
import getAllPosts from '@/lib/queries/getAllPosts'
import CheckIcon from '@mui/icons-material/Check'
import {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {locations} from '../../../../constant/location'

function extractLocation(lokasiId: string): string {
  const parts = lokasiId.split('-')
  return parts[parts.length - 1]
}

export async function generateMetadata({
  params
}: {
  params: {lokasiId: string}
}): Promise<Metadata> {
  const location = extractLocation(params.lokasiId)
  const locationUppercase = location.charAt(0).toUpperCase() + location.slice(1)

  return {
    title: `Bengkel Las ${locationUppercase}`,
    description: `Layanan pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain-lain di ${locationUppercase}.`,
    openGraph: {
      title: `Bengkel Las ${locationUppercase}`,
      description: `Bengkel Las ${locationUppercase} Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis`,
      type: 'website',
      locale: 'id',
      url: 'https://bengkellasminimalisindri.com/',
      siteName: 'bengkellasminimalisindri'
    },
    metadataBase: new URL(`https://bengkellasminimalisindri.com`)
  }
}

export default async function LokasiDetail({
  params
}: {
  params: {lokasiId: string}
}) {
  const posts = await getAllPosts()

  if (!posts || !posts.length) {
    notFound()
  }

  const locationName = extractLocation(params.lokasiId)
  const location = locations.find(
    (loc) => loc.name.toLowerCase() === locationName.toLowerCase()
  )

  if (!location) {
    notFound()
  }

  return (
    <>
      <section className="md:mx-6 mx-6">
        <div>
          <h1 className="uppercase text-2xl mb-3 font-bold">
            Bengkel Las {location.name}
          </h1>
        </div>
        <section className="md:grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <h2 className="text-xl font-semibold mb-3">{location.subtitle}</h2>
            <p className="text-justify">
              {location.description}. Dengan pengalaman bertahun-tahun dalam
              industri las, kami menawarkan berbagai layanan mulai dari
              pembuatan tangga, kanopi, railing door, teralis, jendela, hingga
              balkon. Kami berkomitmen untuk menggunakan bahan berkualitas
              tinggi, memberikan hasil pekerjaan yang cepat, serta menjamin
              kepercayaan pelanggan.
            </p>
          </div>
          <div className="col-span-3 my-3 flex justify-center">
            <Image
              alt="gambar-lokasi"
              height={1200}
              src={location.img}
              width={1200}
              priority={true}
              sizes="100vw"
              style={{objectFit: 'contain'}}
            />
          </div>
        </section>

        <div>
          <h2 className="text-xl font-semibold">Bahan Meterial</h2>
          <p className="text-justify">
            Kami memahami pentingnya penggunaan material berkualitas dalam
            setiap proyek. Oleh karena itu, kami hanya menggunakan bahan-bahan
            terbaik yang meliputi:
          </p>
          <ul className="text-justify">
            <li>
              {' '}
              <CheckIcon /> <span className="font-semibold">Besi</span>:
              Material besi yang kami gunakan dikenal kuat dan tahan lama. Cocok
              untuk berbagai aplikasi seperti tangga, kanopi, dan teralis.
            </li>
            <li>
              {' '}
              <CheckIcon />{' '}
              <span className="font-semibold">Stainless Steel</span>: Kami
              menggunakan stainless steel yang tahan karat dan memiliki tampilan
              yang elegan. Material ini ideal untuk pembuatan railing door,
              jendela, dan balkon.
            </li>
            <li>
              {' '}
              <CheckIcon /> <span className="font-semibold">Galvanis</span>:
              Galvanis merupakan material yang tahan terhadap korosi, sehingga
              sangat cocok digunakan untuk proyek luar ruangan seperti kanopi
              dan pagar.
            </li>
            <li>
              {' '}
              <CheckIcon /> <span className="font-semibold">Baja Ringan</span>:
              Baja ringan memiliki kekuatan tinggi dengan bobot yang lebih
              ringan dibandingkan dengan baja konvensional. Material ini sangat
              ideal untuk pembuatan struktur bangunan yang efisien dan kuat.
            </li>
          </ul>
        </div>
      </section>
      <aside>
        <section id="jasa-kami" className="mx-6 md:my-6 my-6">
          <h2 className="text-xl font-semibold">Foto</h2>
          <div>
            <div
              className="md:flex md:gap-6 gap-3 w-full md:overflow-x-auto"
              id="slider"
            >
              {posts.map((post) => (
                <article key={post.databaseId} className="md:my-0 my-3">
                  <Link href="#">
                    <div className="w-52">
                      <Image
                        alt={post.featuredImage.node.altText}
                        height={post.featuredImage.node.mediaDetails.height}
                        src={post.featuredImage.node.sourceUrl}
                        width={post.featuredImage.node.mediaDetails.width}
                        priority={true}
                        sizes="100vw"
                        style={{objectFit: 'contain'}}
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
    </>
  )
}
