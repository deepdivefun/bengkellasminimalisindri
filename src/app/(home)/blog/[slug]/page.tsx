import BubbleChat from '@/components/BubbleChat'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import TabContent from '@/components/TabContent'
import locations from '@/constant/location'

export async function generateMetadata({params}: {params: {slug: string}}) {
  const location = locations.find(
    (loc) => loc.href.toLowerCase() === params.slug.toLowerCase()
  )

  if (location) {
    return {
      title: {
        default: `Bengkel Las ${location.name}`,
        template: '%s - las terdekat'
      },
      alternates: {
        canonical: `https://bengkellasminimalisindri.com/blog/${location.href}`
      },
      description: `Layanan pembuatan dan servis pagar, tangga, kanopi, pintu minimalis, jendela minimalis, railing dor, dan lain-lain di ${location.name}.`,
      openGraph: {
        title: `Bengkel Las ${location.name}`,
        description: `Bengkel Las ${location.name} Melayani pembuatan dan servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon, tangga, tralis.`,
        type: 'article',
        locale: 'id',
        url: `https://bengkellasminimalisindri.com/blog/${location.href}`,
        siteName: 'Bengkel Las Minimalis Indri'
      },
      metadataBase: new URL(
        `https://bengkellasminimalisindri.com/blog/${location.href}`
      )
    }
  }

  return {
    title: 'Bengkel Las Terdekat',
    description: 'Layanan jasa las profesional di sekitar Anda.',
    openGraph: {
      title: 'Bengkel Las Terdekat',
      description: 'Layanan pembuatan pagar, kanopi, dan jasa las lainnya.',
      type: 'article',
      locale: 'id',
      url: `https://bengkellasminimalisindri.com/`,
      siteName: 'Bengkel Las Minimalis Indri'
    }
  }
}
export default async function Post({params}: {params: {slug: string}}) {
  const location = locations.find(
    (loc) => loc.href.toLowerCase() === params.slug.toLowerCase()
  )

  return (
    <>
      <Navbar />
      <main>
        {location ? (
          <>
            <h1 className="mx-6 my-3 text-2xl">{`Bengkel Las ${location.name}`}</h1>
          </>
        ) : (
          <p>Location not found</p>
        )}
        <Hero />
        <Features />
        {location ? (
          <>
            <TabContent lokasi={`${location.name}`} />
          </>
        ) : (
          <p>Location not found</p>
        )}
        <aside>
          <Products />
        </aside>
        <Contact />
        <BubbleChat />
      </main>
      <Footer />
    </>
  )
}
