"use client";

import { TechIcons } from "@/components/TechIcons";
import type { TECH } from "@/content/tech";

type Props = {
  role: string;
  company: string;
  time: string;
  bullets: string[];
  tech?: (keyof typeof TECH)[];
};

export function AboutItem({ role, company, time, bullets, tech }: Props) {
  return (
    <article
      className="rounded-2xl border border-black/10 bg-white/60 p-6
                 hover:bg-white/80 transition"
      style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}
    >
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div>
          <h3 className="text-lg font-semibold text-[var(--ink)]">{role}</h3>
          <p className="text-sm italic text-[var(--stone)]">{company}</p>
        </div>

        <span className="text-sm text-[var(--stone)]">{time}</span>
      </header>

      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2 list-disc list-inside text-[var(--stone)]">
          {bullets.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}

      {tech && tech.length > 0 && (
        <div className="mt-4">
          <TechIcons tech={tech} />
        </div>
      )}
    </article>
  );
}
