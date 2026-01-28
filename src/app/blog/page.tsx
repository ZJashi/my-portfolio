"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogList } from "@/components/blog/BlogList";
import type { BlogPostMeta } from "@/content/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm tracking-[0.2em] uppercase text-[var(--stone)] mb-4"
        >
          Thoughts & Ideas
        </motion.p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          The Blog
        </h1>
        <p className="text-lg text-[var(--stone)] max-w-2xl mx-auto leading-relaxed">
          Explorations in mathematics, physics, and artificial intelligence.
          Deep dives into concepts that fascinate me.
        </p>
      </motion.header>

      {/* Blog List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[var(--stone)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <BlogList posts={posts} />
        )}
      </motion.div>
    </main>
  );
}
