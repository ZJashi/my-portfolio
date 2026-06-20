import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import type { Metadata } from "next";
import { getTag } from "@/lib/tags";

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return {};
  return {
    title: `${note.title} | Notes`,
    description: note.description,
  };
}

function formatDate(raw: string) {
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 pt-12 pb-24">
      {/* Back link */}
      <Link
        href="/notes"
        className="inline-flex items-center gap-1.5 text-sm text-[--stone]
                   hover:text-[--ink] dark:hover:text-white transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M9 2L4 7L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All notes
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-[--ink] leading-tight mb-4">
          {note.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          <time className="text-sm text-[--stone]">{formatDate(note.date)}</time>
          {note.tags.length > 0 && (
            <>
              <span className="text-[--stone]/30">·</span>
              {note.tags.map((tag) => {
                const cfg = getTag(tag);
                const Icon = cfg.icon;
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full ${cfg.pill}`}
                  >
                    <Icon size={10} />
                    {tag}
                  </span>
                );
              })}
            </>
          )}
        </div>

        {note.description && (
          <p className="mt-4 text-[--stone] leading-relaxed">{note.description}</p>
        )}
      </header>

      <div className="h-px bg-black/8 dark:bg-white/8 mb-10" />

      {/* Prose content */}
      <div
        className="
          prose prose-neutral dark:prose-invert max-w-none

          prose-headings:font-semibold
          prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg

          prose-p:leading-relaxed

          prose-a:text-teal-600 dark:prose-a:text-teal-400
          prose-a:no-underline prose-a:font-medium
          hover:prose-a:underline

          prose-strong:font-semibold

          prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
          prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-code:bg-black/6 dark:prose-code:bg-white/10

          prose-pre:rounded-xl prose-pre:border
          prose-pre:border-black/8 dark:prose-pre:border-white/8
          prose-pre:bg-[#F8F6F1] dark:prose-pre:bg-[#14141A]
          [&_pre_code]:bg-transparent [&_pre_code]:p-0

          prose-blockquote:border-l-teal-500/50 prose-blockquote:not-italic

          prose-table:text-sm
          prose-th:border prose-th:border-black/10 dark:prose-th:border-white/10 prose-th:p-2
          prose-td:border prose-td:border-black/8 dark:prose-td:border-white/8 prose-td:p-2

          prose-hr:border-black/8 dark:prose-hr:border-white/8
        "
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
    </main>
  );
}