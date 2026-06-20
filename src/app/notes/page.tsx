import { getAllNotes, getAllTags } from "@/lib/notes";
import { NotesList } from "@/components/notes/NotesList";

export const metadata = {
  title: "Notes | Zura Jashi",
  description: "Personal notes on AI, math, physics, software, finance, and more.",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const tags = getAllTags();

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
                      bg-linear-to-br from-violet-500/15 via-blue-500/8 to-transparent
                      dark:from-violet-500/8 dark:via-blue-500/4
                      blur-3xl animate-pulse"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
                      bg-linear-to-tr from-teal-500/12 via-cyan-500/8 to-transparent
                      dark:from-teal-500/6 dark:via-cyan-500/4
                      blur-3xl animate-pulse"
          style={{ animationDuration: "11s", animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-[--ink] mb-3">Notes</h1>
          <p className="text-[--stone] leading-relaxed max-w-xl">
            Working notes on things I&apos;m learning — AI, math, physics, software engineering,
            finance, and whatever else catches my attention.
          </p>
        </div>

        <NotesList notes={notes} tags={tags} />
      </div>
    </main>
  );
}