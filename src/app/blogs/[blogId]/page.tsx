import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Post {
  id: string
  title: string
  content: string
}

type Props = {
  params: {
    blogId: string
  }
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(`Blog ${params.blogId}`), 1000);
  });
  return {
    title 
  }
}


export default async function Page({ params }: Props) {
  const post = await fetch(`https://api.vercel.app/blog/${params.blogId}`).then(
    (res) => res.json()
  )

  if (post.error) {
    notFound();
  }

  return (
    <main className="">
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <div className="pt-2">
        {[...Array(5).keys()].map(i =>
          <Link className="block" key={i} href={`/blogs/${params.blogId}/comments/${i+1}`}>Comment {i+1}</Link>
        )}
      </div>
    </main>
  )
}