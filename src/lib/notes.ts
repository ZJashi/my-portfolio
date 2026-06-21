import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

export type Heading = { id: string; text: string; level: number };

export type NoteMetadata = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export type Note = NoteMetadata & {
  content: string;
  headings: Heading[];
};

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const re = /<h([1-3])[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h[1-3]>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    headings.push({
      level: parseInt(m[1]),
      id: m[2],
      text: m[3].replace(/<[^>]+>/g, "").trim(),
    });
  }
  return headings;
}

export function getAllNotes(): NoteMetadata[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(NOTES_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        tags: (data.tags ?? []) as string[],
        description: data.description ?? "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllNotes().forEach((n) => n.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const filePath = path.join(NOTES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: {
        light: "github-light",
        dark:  "github-dark-dimmed",
      },
      keepBackground: true,
    })
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  const html = String(processed);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tags: (data.tags ?? []) as string[],
    description: data.description ?? "",
    content: html,
    headings: extractHeadings(html),
  };
}
