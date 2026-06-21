"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/notes";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -75% 0px" },
    );

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-24">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[--stone]/60 mb-3">
          On this page
        </p>
        <nav>
          <ul className="space-y-0.5">
            {headings.map(({ id, text, level }) => (
              <li
                key={id}
                style={{ paddingLeft: level === 3 ? "12px" : "0px" }}
              >
                <a
                  href={`#${id}`}
                  className={`block py-1 text-sm leading-snug transition-colors ${
                    activeId === id
                      ? "text-teal-600 dark:text-teal-400 font-medium"
                      : level === 3
                        ? "text-[--stone]/60 hover:text-[--stone] dark:hover:text-white/70"
                        : "text-[--stone] hover:text-[--ink] dark:hover:text-white"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
