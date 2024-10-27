// 'use client'
import AutoTooltip from '@/components/AutoTooltip'
import BasicBreadcrumbs from '@/components/Breadcrumb'
import BubbleChat from '@/components/BubbleChat'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import TabContent from '@/components/TabContent'
// import getAllPosts from '@/lib/queries/getAllPosts'

export default async function Home() {
  // Fetch posts from WordPress.
  // const posts = await getAllPosts()

  // No data? Bail...
  // if (!posts || !posts.length) {
  //   notFound()
  // }

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
        caption: `Bengkel Las Bekasi`,
        inLanguage: 'id'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.bengkellasminimalisindri.com//#breadcrumb'`,
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
        '@id': `https://www.bengkellasminimalisindri.com/#webpage`,
        url: `https://www.bengkellasminimalisindri.com/`,
        name: 'Bengkel Las Bekasi Dengan Tukang Las Berpengalaman',
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
        headline: 'Bengkel Las Bekasi Dengan Tukang Las Berpengalaman',
        keywords: 'Bengkel Las Bekasi',
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
        description:
          'Bengkel Las Bekasi mengerjakan kanopi ✔ pintu besi ✔ pagar besi ✔ teralis ✔ railing ✔ tangga ✔ menara air ✔',
        name: 'Bengkel Las Bekasi Dengan Tukang Las Berpengalaman',
        '@id': `https://www.bengkellasminimalisindri.com/#richSnippet`,
        isPartOf: {
          '@id': `https://www.bengkellasminimalisindri.com/#webpage`
        },
        image: {
          '@id': '/hero_img.png'
        },
        inLanguage: 'id',
        mainEntityOfPage: {
          '@id': `https://www.bengkellasminimalisindri.com/#webpage`
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
      <Navbar title="Indri Teknik Las" />
      <BasicBreadcrumbs items={[{href: '/', text: ''}]} />
      <main>
        <Hero />
        <Features />
        <TabContent lokasi={'Bekasi'} />
        <aside>
          <Products />
        </aside>
        <Contact />
        <AutoTooltip />
        <BubbleChat />
      </main>
      <Footer />
    </>
  )
}
