import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../globals.css'

const inter = Inter({subsets: ['latin']})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Bengkel Las Bekasi',
      template: '%s - Bengkel Las Terpercaya Dan Berpengalaman'
    },
    description:
      'Bengkel Las Bekasi Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis',
    robots:
      'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    openGraph: {
      title: 'Bengkel Las Bekasi',
      description:
        'Bengkel Las Bekasi Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis',
      type: 'website',
      locale: 'id',
      url: 'https://bengkellasminimalisindri.com',
      siteName: 'bengkellasminimalisindri'
    },
    metadataBase: new URL(`https://bengkellasminimalisindri.com`)
  }
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header>Header untuk Halaman Utama</header>
      <div>{children}</div>
      <footer>Footer untuk Halaman Utama</footer>
    </>
  )
}
