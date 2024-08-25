import getAllBlogPosts from '@/lib/queries/getAllBlogPosts'
import {Post} from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

export default async function Blog() {
  const posts = await getAllBlogPosts()

  if (!posts || !posts.length) {
    notFound()
  }

  return (
    <main>
      <article>
        <h1></h1>
      </article>
      <aside>
        {/* <h2>Latest Posts</h2> */}
        <div className="flex mx-12 flex-wrap gap-8">
          {posts.map((post: Post) => (
            <article className="w-72" key={post.databaseId}>
              <Image
                alt={post.featuredImage.node.altText}
                height={post.featuredImage.node.mediaDetails.height}
                src={post.featuredImage.node.sourceUrl}
                width={post.featuredImage.node.mediaDetails.width}
                priority={true}
              />
              <Link href={`/blog/${post.slug}`}>
                <h2
                  className="my-3 text-xl font-semibold"
                  dangerouslySetInnerHTML={{__html: post.title}}
                />
              </Link>
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{__html: post.excerpt}}
              />
              <Link className="button" href={`/blog/${post.slug}`}>
                <div className="my-3">
                  <p className="inline-block text-sm bg-zinc-900 text-center px-2 py-3 rounded text-white">
                    Klik Selengkapnya...
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </aside>
    </main>
  )
}
