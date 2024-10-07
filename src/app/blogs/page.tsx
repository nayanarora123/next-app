import Link from "next/link";

interface Post {
  id: string
  title: string
  content: string
}

export default async function Page() {
  const posts: Post[] = await fetch(`https://api.vercel.app/blog`).then((res) => res.json());
  return posts.slice(0, 5).map((post) => (
    <main key={post.id} className="blogs">
    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
    <p>{post.content}</p>
  </main>
));
}