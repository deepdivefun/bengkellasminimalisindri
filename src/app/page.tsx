import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import BubbleChat from '@/components/BubbleChat';
import getAllPosts from '@/lib/queries/getAllPosts'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

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
      <section id="jasa-kami" className="mx-6">
      <div>
        <h2 className='mb-2 font-medium text-xl text-center'>Gallery</h2>
          <div className="grid grid-cols-4 gap-4" id="slider">
            {posts.map((post) => (
              <Card
              isFooterBlurred
              radius="lg"
              className="border-none rounded-lg"
            >
              <Image
                alt={post.featuredImage.node.altText}
                className="object-cover"
                height={200}
                src={post.featuredImage.node.sourceUrl}
                width={200}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10  backdrop-blur-sm bg-white/30 rounded-md">
                <p className="text-black">{post.title}</p>
              </CardFooter>
            </Card>
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
