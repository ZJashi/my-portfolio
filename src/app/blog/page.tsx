import { getAllPosts } from "@/lib/markdown";
import { BlogList } from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Zura Jashi",
  description:
    "Thoughts and explorations in mathematics, physics, and artificial intelligence.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-[var(--ink)]">Blog</h1>
        <p className="max-w-2xl text-[var(--stone)] leading-relaxed">
          Thoughts and explorations in mathematics, physics, and artificial
          intelligence.
        </p>
      </header>

      <BlogList posts={posts} />
    </main>
  );
}
