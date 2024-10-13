// 'use client'
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TabContent lokasi={'Bekasi'} />
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
