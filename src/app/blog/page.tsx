export const metadata = {
  title: "Blog | Zura Jashi",
  description:
    "Thoughts, tutorials, and insights on software development and technology.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-[var(--ink)]">Blog</h1>
        <p className="max-w-2xl text-[var(--stone)] leading-relaxed">
          Thoughts, tutorials, and insights on software development and
          technology.
        </p>
      </header>

      <div className="text-[var(--stone)]">Coming soon...</div>
    </main>
  );
}
