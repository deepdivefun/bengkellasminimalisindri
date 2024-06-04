import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import BubbleChat from '@/components/BubbleChat';
import getAllPosts from '@/lib/queries/getAllPosts'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default async function Home() {

    // Fetch posts from WordPress.
    const posts = await getAllPosts()

    // No data? Bail...
    if (!posts || !posts.length) {
      notFound()
    }

  return (
    <main className='relative'>
      <Hero />
      <Features />
      <aside>
      <section id="jasa-kami" className="mx-6 md:my-24 my-6">
      <div className="mt-3">
          <div className="row-container md:flex gap-12" id="slider">
            {posts.map((post) => (
              <article key={post.databaseId} className="row-item">
                <Link href={`/`} className="link border rounded-md p-3">
                  <div className="item-header w-52">
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
                    <h3>{post.title}</h3>
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
