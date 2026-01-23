import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getPostWithTOC, getAllSlugs } from "@/lib/markdown";
import { TagIcon } from "@/components/blog/TagIcon";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
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
  const post = await getPostWithTOC(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <BlogPostContent
        post={post}
        formattedDate={formatBlogDate(post.date)}
        backLink={
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--stone)] hover:text-[var(--ultramarine)] transition-colors group"
          >
            <IoArrowBack size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        }
        tagIcons={post.tags.map((tag) => (
          <TagIcon key={tag} tag={tag} />
        ))}
        coverImage={
          post.coverImage && (
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          )
        }
        toc={<TableOfContents headings={post.headings} />}
      />
    </main>
  );
}
