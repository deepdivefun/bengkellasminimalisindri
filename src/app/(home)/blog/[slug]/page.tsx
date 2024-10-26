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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        '@id': `https://www.bengkellasminimalisindri.com/#place`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pekayon Jaya RT/RW. 003/004 Bekasi Selatan',
          addressLocality: 'Pekayon Jaya, Bekasi',
          addressRegion: 'Jawa Barat',
          postalCode: '17148',
          addressCountry: 'Indonesia'
        }
      },
      {
        '@type': ['LocalBusiness', 'Organization'],
        '@id': 'https://www.bengkellasminimalisindri.com/#organization',
        name: 'Indri Teknik Las',
        url: 'https://www.bengkellasminimalisindri.com',
        email: 'indritekniklas@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pekayon Jaya RT/RW. 003/004 Bekasi Selatan',
          addressLocality: 'Pekayon Jaya, Bekasi',
          addressRegion: 'Jawa Barat',
          postalCode: '17148',
          addressCountry: 'Indonesia'
        },
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://www.bengkellasminimalisindri.com/#logo',
          url: '/hero_img.png',
          contentUrl: '/hero_img.png',
          caption: 'Indri Teknik Las',
          inLanguage: 'id',
          width: '400',
          height: '100'
        },
        priceRange: 'Rp. 500.000 - Rp. 2.000.000',
        openingHours: [
          'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00'
        ],
        location: {'@id': 'https://www.bengkellasminimalisindri.com/#place'},
        image: {'@id': 'https://www.bengkellasminimalisindri.com/#logo'},
        telephone: '+6282249740340'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.bengkellasminimalisindri.com/#website',
        url: 'https://www.bengkellasminimalisindri.com',
        name: 'Indri Teknik Las',
        publisher: {
          '@id': 'https://www.bengkellasminimalisindri.com/#organization'
        },
        inLanguage: 'id'
      },
      {
        '@type': 'ImageObject',
        '@id': '/hero_img.png',
        url: '/hero_img.png',
        width: '720',
        height: '480',
        caption: `Bengkel Las ${location?.name}`,
        inLanguage: 'id'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.bengkellasminimalisindri.com/blog/${location?.href}/#breadcrumb'`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: '1',
            item: {
              '@id': 'https://www.bengkellasminimalisindri.com',
              name: 'Beranda'
            }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': `https://www.bengkellasminimalisindri.com/blog/${location?.name}/#webpage`,
        url: `https://www.bengkellasminimalisindri.com/blog/${location?.name}/`,
        name: `Bengkel Las ${location?.name} Dengan Tukang Las Berpengalaman`,
        datePublished: '2024-10-26T15:07:42+07:00',
        dateModified: '2024-10-26T18:30:12+07:00',
        isPartOf: {'@id': 'https://www.bengkellasminimalisindri.com/#website'},
        primaryImageOfPage: {
          '@id': '/hero_img.png'
        },
        inLanguage: 'id',
        breadcrumb: {
          '@id': '/hero_img.png'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://www.bengkellasminimalisindri.com',
        name: 'Indri Teknik Las Team',
        url: 'https://www.bengkellasminimalisindri.com',
        image: {
          '@type': 'ImageObject',
          '@id': '/hero_img.png',
          url: '/hero_img.png',
          caption: 'Indri Teknik Las Team',
          inLanguage: 'id'
        },
        sameAs: ['https://www.bengkellasminimalisindri.com'],
        worksFor: {
          '@id': 'https://www.bengkellasminimalisindri.com/#organization'
        }
      },
      {
        '@type': 'BlogPosting',
        headline: `Bengkel Las ${location?.name} Dengan Tukang Las Berpengalaman`,
        keywords: `Bengkel Las ${location?.name}, jasa las, bahan bangunan, pembuatan pagar, stainless steel, besi, galvanis, baja ringan, aluminium, bengkel las pagar, bengkel las terdekat, tukang las terdekat, bengkel las, tukang las, tukang las pagar, tukang las kanopi, las kanopi, las pintu, jasa las profesional, tukang las berpengalaman, pembuatan kanopi custom, pembuatan pagar minimalis, servis pagar besi, tukang las jakarta, las stainless steel, pembuatan struktur baja, tukang las untuk proyek bangunan, jasa las terpercaya, bengkel las berkualitas, tukang las murah, las pagar besi, jasa fabrication metal, tukang las untuk renovasi `,
        datePublished: '2024-10-26T15:07:42+07:00',
        dateModified: '2024-10-26T18:30:12+07:00',
        articleSection: 'Bengkel Las, Blog',
        author: {
          '@id': 'https://www.bengkellasminimalisindri.com',
          name: 'Indri Teknik Las Team'
        },
        publisher: {
          '@id': 'https://www.bengkellasminimalisindri.com/#organization'
        },
        description: `Bengkel Las ${location?.name} mengerjakan kanopi ✔ pintu besi ✔ pagar besi ✔ teralis ✔ railing ✔ tangga ✔ menara air ✔`,
        name: `Bengkel Las ${location?.name} Dengan Tukang Las Berpengalaman`,
        '@id': `https://www.bengkellasminimalisindri.com/blog/${location?.name}/#richSnippet`,
        isPartOf: {
          '@id': `https://www.bengkellasminimalisindri.com/blog/${location?.name}/#webpage`
        },
        image: {
          '@id': '/hero_img.png'
        },
        inLanguage: 'id',
        mainEntityOfPage: {
          '@id': `https://www.bengkellasminimalisindri.com/blog/${location?.name}/#webpage`
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
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
