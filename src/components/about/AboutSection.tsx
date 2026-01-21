import { about } from "@/content/about.data";
import { AboutItem } from "./AboutItem";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <header className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--ink)]">
            About
          </h2>
          <p className="text-[var(--stone)] max-w-2xl">
            Research, engineering, and teaching experience across academia and
            industry.
          </p>
        </header>

        <div className="space-y-6">
          {about.map((item) => (
            <AboutItem key={`${item.role}-${item.company}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
