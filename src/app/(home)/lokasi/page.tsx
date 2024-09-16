import BubbleChat from '@/components/BubbleChat'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import {locations} from '../../../constant/location'

export default function LokasiPage() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="padding-container my-6">
            <h1 className="text-xl font-medium mb-2">Layanan Lokasi Kami</h1>
            <ul className="md:grid grid-cols-3 gap-8 mb-6">
              {locations.map((location, index) => (
                <li key={index}>
                  <div className="flex flex-col space-y-1 bg-[#f5f5f5] border p-3 my-3 rounded-md">
                    <Image
                      width={312}
                      height={312}
                      src={location.img}
                      alt={location.name}
                    ></Image>
                  </div>

                  <Link href={location.href}>
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
