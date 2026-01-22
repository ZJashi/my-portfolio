"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TagFilter, TagIcon } from "./TagIcon";
import type { BlogPostMeta, BlogTag } from "@/content/blog";

type Props = {
  posts: BlogPostMeta[];
};

function formatBlogDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogList({ posts }: Props) {
  const [activeTag, setActiveTag] = useState<BlogTag | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  const allTags: BlogTag[] = ["math", "physics", "ai"];

  return (
    <div className="space-y-8">
      <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />

      {filteredPosts.length === 0 ? (
        <p className="text-[var(--stone)]">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-black/10 bg-white/40 p-5 transition hover:bg-white/60 hover:shadow-sm"
            >
              {post.coverImage && (
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <TagIcon key={tag} tag={tag} size={14} />
                ))}
              </div>

              <h2 className="text-lg font-semibold text-[var(--ink)] group-hover:underline underline-offset-2">
                {post.title}
              </h2>

              <time className="mt-1 block text-xs text-[var(--stone)]">
                {formatBlogDate(post.date)}
              </time>

              <p className="mt-3 text-sm text-[var(--stone)] line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
