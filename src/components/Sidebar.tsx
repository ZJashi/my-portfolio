"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { href: "/", icon: FaHome, label: "Home" },
  { href: "/#about", icon: FaUser, label: "About" },
  { href: "/#projects", icon: FaProjectDiagram, label: "Projects" },
  { href: "/#notes", icon: FaBriefcase, label: "Notes" },
  { href: "/#contact", icon: FaEnvelope, label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["about", "notes", "projects", "contact"];
    const els = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: string; el: HTMLElement } => Boolean(x.el));

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      for (const s of els) {
        const top = s.el.offsetTop;
        const bottom = top + s.el.offsetHeight;
        if (mid >= top && mid < bottom) {
          setActiveSection(s.id);
          return;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <nav
      className={[
        "fixed left-6 top-1/2 -translate-y-1/2 z-50",
        "group",
        "w-14 hover:w-52 transition-[width] duration-300",
        "rounded-2xl border border-black/10 shadow-lg",
        "bg-white/60 backdrop-blur-md",
        "overflow-hidden",
      ].join(" ")}
    >
      <div className="flex flex-col items-center py-3">
        <ul className="w-full px-2 space-y-2 list-none p-0 m-0">
          {navItems.map(({ href, icon: Icon, label }) => {
            const sectionId = href.includes("#") ? href.split("#")[1] : "";
            const isActive = sectionId && activeSection === sectionId;

            return (
              <li key={href} className="list-none">
                <Link
                  href={href}
                  className={[
                    "flex items-center h-10 rounded-xl transition",
                    "hover:bg-black/5",
                    isActive ? "bg-black/5" : "",
                    "justify-center group-hover:justify-start",
                    "px-0 group-hover:px-3",
                    "gap-0 group-hover:gap-3",
                  ].join(" ")}
                >
                  <span className="w-10 flex justify-center group-hover:justify-start">
                    <Icon
                      className={[
                        "block text-lg",
                        isActive
                          ? "text-[var(--ink)] opacity-95"
                          : "text-[var(--ink)] opacity-80",
                      ].join(" ")}
                    />
                  </span>

                  <span
                    className={[
                      "hidden group-hover:inline whitespace-nowrap",
                      "text-sm text-[var(--ink)]/80",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 w-full px-2 hidden group-hover:block">
          <a
            href="/resume.pdf"
            className={[
              "block w-full text-center",
              "rounded-xl px-4 py-2 text-sm",
              "border border-black/15 bg-white/50 hover:bg-white/70 transition",
            ].join(" ")}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
