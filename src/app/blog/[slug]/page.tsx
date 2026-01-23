import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllSlugs } from "@/lib/markdown";
import { TagIcon } from "@/components/blog/TagIcon";
import { IoArrowBack } from "react-icons/io5";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Zura Jashi`,
    description: post.excerpt,
  };
}

function formatBlogDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[var(--stone)] hover:text-[var(--ink)] transition mb-8"
      >
        <IoArrowBack size={16} />
        Back to Blog
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <TagIcon key={tag} tag={tag} />
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--ink)] leading-tight">
            {post.title}
          </h1>

          <time className="mt-3 block text-sm text-[var(--stone)]">
            {formatBlogDate(post.date)}
          </time>

          {post.coverImage && (
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
