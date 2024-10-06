'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface LokasiDetailLayoutProps {
  children: React.ReactNode
  params: {
    lokasiId: string
  }
}

export default function LokasiDetailLayout({
  children,
  params
}: LokasiDetailLayoutProps) {
  const canocialLokasi = `https://bengkellasminimalisindri.com/lokasi/${params}`

  return (
    <>
      <Navbar />
      <>
        {/* Lokasi ID: {params.lokasiId} */}
        {children}
      </>
      <Footer />
    </>
  )
}
