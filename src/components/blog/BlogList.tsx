"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--stone)] text-center py-12"
        >
          No posts yet. Check back soon!
        </motion.p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-black/10 dark:border-white/10
                           bg-white/40 dark:bg-white/5 overflow-hidden
                           hover:shadow-xl hover:scale-[1.02]
                           transition-all duration-300"
              >
                {post.coverImage && (
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Read badge */}
                    <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                                     bg-white/90 dark:bg-black/70 text-xs font-medium
                                     text-[var(--ink)] opacity-0 -translate-y-2
                                     group-hover:opacity-100 group-hover:translate-y-0
                                     transition-all duration-300">
                      Read Article →
                    </span>
                  </div>
                )}

                <div className="p-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <TagIcon key={tag} tag={tag} size={14} />
                    ))}
                  </div>

                  <h2 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--stone)] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <time className="block text-xs text-[var(--stone)]">
                    {formatBlogDate(post.date)}
                  </time>

                  <p className="text-sm text-[var(--stone)] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
