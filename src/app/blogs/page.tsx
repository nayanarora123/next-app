interface Post {
  id: string
  title: string
  content: string
}

export default async function Page() {
  const posts: Post[] = await fetch(`https://api.vercel.app/blog`).then((res) => res.json());
  return posts.map((post) => (
    <main>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </main>
));
}