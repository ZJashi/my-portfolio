"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoList, IoClose } from "react-icons/io5";
import type { TOCHeading } from "@/lib/extractHeadings";

type Props = {
  headings: TOCHeading[];
};

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop: Sticky sidebar */}
      <aside className="hidden xl:block sticky top-24 self-start w-64 shrink-0">
        <nav className="border-l border-black/10 dark:border-white/10 pl-4">
          <h3 className="text-sm font-semibold text-[var(--ink)] mb-4">
            On this page
          </h3>
          <ul className="space-y-2">
            {headings.map(({ id, text, level }) => (
              <li key={id} style={{ paddingLeft: `${(level - 2) * 12}px` }}>
                <a
                  href={`#${id}`}
                  className={`text-sm transition-colors block truncate ${
                    activeId === id
                      ? "text-[var(--ink)] font-medium"
                      : "text-[var(--stone)] hover:text-[var(--ink)]"
                  }`}
                  title={text}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile: Floating button */}
      <div className="xl:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-white/90 dark:bg-black/90
                     border border-black/10 dark:border-white/10 shadow-lg
                     hover:scale-105 transition-transform"
          aria-label="Toggle table of contents"
        >
          {isOpen ? (
            <IoClose className="w-5 h-5 text-[var(--ink)]" />
          ) : (
            <IoList className="w-5 h-5 text-[var(--ink)]" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-72 p-4 rounded-xl
                         bg-white/95 dark:bg-black/95 backdrop-blur-md
                         border border-black/10 dark:border-white/10 shadow-xl"
            >
              <h3 className="text-sm font-semibold text-[var(--ink)] mb-3">
                On this page
              </h3>
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {headings.map(({ id, text, level }) => (
                  <li key={id} style={{ paddingLeft: `${(level - 2) * 12}px` }}>
                    <a
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm block py-1 truncate ${
                        activeId === id
                          ? "text-[var(--ink)] font-medium"
                          : "text-[var(--stone)] hover:text-[var(--ink)]"
                      }`}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
