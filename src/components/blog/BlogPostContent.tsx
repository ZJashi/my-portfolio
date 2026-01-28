"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { BlogPostWithTOC } from "@/lib/markdown";

type Props = {
  post: BlogPostWithTOC;
  formattedDate: string;
  backLink: ReactNode;
  tagIcons: ReactNode;
  coverImage: ReactNode;
  toc: ReactNode;
};

export function BlogPostContent({
  post,
  formattedDate,
  backLink,
  tagIcons,
  coverImage,
  toc,
}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        {backLink}
      </motion.div>

      <div className="flex gap-12">
        <article className="flex-1 min-w-0 max-w-4xl">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {tagIcons}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--ink)] leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-4"
            >
              <time className="text-sm text-[var(--stone)]">{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-[var(--stone)]" />
              <span className="text-sm text-[var(--stone)]">
                {Math.ceil(post.content.split(" ").length / 200)} min read
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {coverImage}
            </motion.div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="blog-content prose prose-lg max-w-none
                       prose-headings:text-[var(--ink)] prose-headings:font-semibold
                       prose-p:text-[var(--stone)] prose-p:leading-relaxed
                       prose-a:text-[var(--ink)] prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-[var(--ink)]
                       prose-code:text-[var(--ink)] prose-code:bg-black/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                       prose-pre:bg-[#1a1a2e] prose-pre:rounded-xl prose-pre:shadow-lg
                       prose-blockquote:border-l-[var(--stone)] prose-blockquote:text-[var(--stone)] prose-blockquote:italic
                       prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {toc}
        </motion.div>
      </div>
    </>
  );
}
