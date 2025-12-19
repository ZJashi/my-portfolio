// app/components/Sidebar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
  { href: "/#about", icon: FaUser, label: "About" },
  { href: "/#experience", icon: FaBriefcase, label: "Experience" },
  { href: "/#projects", icon: FaProjectDiagram, label: "Projects" },
  { href: "/#contact", icon: FaEnvelope, label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["about", "experience", "projects", "contact"];
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
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={[
        "fixed left-0 top-0 h-screen z-50",
        "border-r border-black/10 bg-[var(--bg-sidebar)] backdrop-blur",
        "transition-all duration-300 overflow-hidden",
        expanded ? "w-56" : "w-16",
      ].join(" ")}
    >
      <div className="flex flex-col items-center h-full py-8">
        {/* Profile */}
        <div className={expanded ? "w-24 h-24" : "w-10 h-10"}>
          <div className="rounded-full overflow-hidden border border-black/15">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className={expanded ? "mt-4 opacity-100" : "mt-4 opacity-0"}>
          <div className="text-sm tracking-wide text-[var(--ink)]/80">Zura</div>
        </div>

        {/* Nav */}
        <ul className="mt-8 w-full px-2 space-y-2">
          {navItems.map(({ href, icon: Icon, label }) => {
            const sectionId = href.split("#")[1]; // <-- correct
            const isActive = sectionId && activeSection === sectionId;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "relative flex items-center gap-3 rounded-lg px-3 py-2",
                    "hover:bg-black/5 transition",
                    isActive ? "bg-black/5" : "",
                  ].join(" ")}
                >
                  <Icon className="text-[var(--ink)]/70" />
                  <span className={expanded ? "opacity-100" : "opacity-0"}>
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Resume */}
        <a
          href="/resume.pdf"
          className={[
            "mt-auto mb-6 rounded-lg px-4 py-2 text-sm",
            "border border-black/15 bg-white/40 hover:bg-white/60 transition",
            expanded ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          Download Resume
        </a>
      </div>

      {/* This little spacer tells the layout how far content should be pushed */}
      <style jsx global>{`
        body > div > div {
          margin-left: ${expanded ? "14rem" : "4rem"};
          transition: margin-left 300ms;
        }
      `}</style>
    </nav>
  );
}
