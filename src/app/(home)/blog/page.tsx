import BasicBreadcrumbs from '@/components/Breadcrumb'
import BubbleChat from '@/components/BubbleChat'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import locations from '@/constant/location'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Navbar title="" />
      <BasicBreadcrumbs
        items={[
          {href: '/', text: 'Beranda'},
          {href: '/blog', text: 'Blog'}
          // {text: 'Breadcrumbs'} // tanpa href untuk item terakhir
        ]}
      />
      <main className="min-h-screen">
        <section>
          <div className="padding-container mb-6 mt-3">
            <h1 className="text-xl font-semibold underline font-medium mb-6">
              Layanan Lokasi Kami
            </h1>
            <ul className="md:grid grid-cols-3 gap-3 mb-6">
              {locations.map((location, index) => (
                <li className="border-2 p-3 m-3 rounded-md" key={index}>
                  <Link href={`blog/${location.href}`}>
                    <div className="grid gap-3">
                      <h2 className="text-xl font-semibold">{location.name}</h2>
                      <h3 className="text-sm underline">
                        Klik di sini untuk informasi lebih lanjut
                      </h3>
                      <h3 className="underline">
                        Atau klik disini untuk hubungi Whatsapp Kami
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <BubbleChat />
      </main>
      <Footer />
    </>
  )
}
