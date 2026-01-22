export type BlogTag = "math" | "physics" | "ai";

export const TAG_LABELS: Record<BlogTag, string> = {
  math: "Mathematics",
  physics: "Physics",
  ai: "AI",
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  tags: BlogTag[];
  excerpt: string;
  coverImage?: string;
  content: string; // Rendered HTML content
};

export type BlogPostMeta = Omit<BlogPost, "content">;
