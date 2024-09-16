import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} static`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
