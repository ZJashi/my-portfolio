import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import type { BlogPost, BlogPostMeta, BlogTag } from "@/content/blog";
import { extractHeadings, TOCHeading } from "./extractHeadings";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  return result.toString();
}

export type BlogPostWithTOC = BlogPost & { headings: TOCHeading[] };

export async function getPostWithTOC(
  slug: string
): Promise<BlogPostWithTOC | null> {
  const post = await getPostBySlug(slug);
  if (!post) return null;

  const headings = extractHeadings(post.content);
  return { ...post, headings };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    posts.push({
      slug: file.replace(".md", ""),
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      tags: (data.tags as BlogTag[]) || [],
      excerpt: data.excerpt || "",
      coverImage: data.coverImage,
    });
  }

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = await processMarkdown(content);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    tags: (data.tags as BlogTag[]) || [],
    excerpt: data.excerpt || "",
    coverImage: data.coverImage,
    content: htmlContent,
  };
}

export async function getPostsByTag(tag: BlogTag): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export async function getAllSlugs(): Promise<string[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => f.replace(".md", ""));
}
