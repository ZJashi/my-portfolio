export default function About() {
  return (
    <section id="about" className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
        About Me
      </h2>

      <div className="space-y-4 text-[var(--stone)] leading-relaxed max-w-3xl">
        <p>
          I&apos;m a researcher and engineer passionate about the intersection of{" "}
          <span className="text-[var(--ink)] font-medium">artificial intelligence</span>,{" "}
          <span className="text-[var(--ink)] font-medium">physics</span>, and{" "}
          <span className="text-[var(--ink)] font-medium">mathematics</span>.
          Currently, I&apos;m pursuing my Master&apos;s in Data Science at NYU while working
          as an AI researcher at the Center for Data Science.
        </p>

        <p>
          My journey started with theoretical physics and pure mathematics, which
          gave me a strong foundation for understanding complex systems. This
          naturally led me to machine learning and data engineering, where I&apos;ve
          worked on everything from large-scale data pipelines to cutting-edge
          AI research.
        </p>

        <p>
          When I&apos;m not coding or reading papers, you&apos;ll find me exploring new
          ideas at the boundary of physics and computation, or diving deep into
          mathematical structures that power modern AI.
        </p>
      </div>
    </section>
  );
}
