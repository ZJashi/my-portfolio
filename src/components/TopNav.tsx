"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname();

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
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
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
            </Link>
          );
        })}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-sm rounded-lg border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white dark:hover:text-[#1A1A1F] transition"
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
