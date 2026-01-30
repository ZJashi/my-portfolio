"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export default function TopNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="flex items-center gap-6
                   rounded-full px-6 py-3
                   bg-white/80 dark:bg-[#252529]/80 backdrop-blur-md
                   border border-black/10 dark:border-white/10
                   shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="group relative flex flex-col items-center
                         text-sm tracking-wide transition"
            >
              <span
                className={`transition-colors duration-200
                  ${
                    isActive
                      ? "text-[var(--ink)] font-medium"
                      : "text-[var(--stone)] group-hover:text-[var(--ink)]"
                  }
                `}
              >
                {item.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-2 h-1 w-1 rounded-full bg-[var(--ink)]" />
              )}

              <span
                className="absolute -bottom-2 h-[1.5px]
                           w-0 bg-[var(--ink)]
                           transition-all duration-300
                           group-hover:w-full"
              />
            </a>
          );
        })}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-sm rounded-lg border border-(--ink) text-(--ink) hover:bg-[#1E1E1C] hover:text-white dark:hover:bg-[#F5F5F4] dark:hover:text-[#1E1E1C] transition"
        >
          Resume
        </a>

        <div className="border-l border-black/10 dark:border-white/10 pl-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
