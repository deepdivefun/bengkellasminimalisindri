import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import BubbleChat from '@/components/BubbleChat';
import getAllPosts from '@/lib/queries/getAllPosts'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export default async function Home() {

    // Fetch posts from WordPress.
    const posts = await getAllPosts()

    // No data? Bail...
    if (!posts || !posts.length) {
      notFound()
    }

  return (
    <main>
      <Hero />
      <Features />
      <aside>
      <section id="jasa-kami" className="mx-6 md:my-12 my-6">
      <div>
        <h2 className='my-6 font-semibold text-xl'>Jasa Kami</h2>
          <div className="md:flex md:gap-12 gap-6 w-full md:overflow-x-auto" id="slider">
            {posts.map((post) => (
              <article key={post.databaseId} className="">
                <Link href={`/`} className="">
                  <div className="w-52">
                  <Image
                      alt={post.featuredImage.node.altText}
                      height={post.featuredImage.node.mediaDetails.height}
                      src={post.featuredImage.node.sourceUrl}
                      width={post.featuredImage.node.mediaDetails.width}
                      priority={true}
                      sizes="100vw"
                      style={{objectFit: "contain"}}
                    />
                  </div>
                    <h3 className='text-center mt-5'>{post.title}</h3>
                </Link>
              </article>
            ))}
          </div>
      </div>
    </section>
    </aside>
      {/* <Products /> */}
      <Contact />
      <BubbleChat />
    </main>
  );
}
