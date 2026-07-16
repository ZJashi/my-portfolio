"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SidebarProfile } from "@/components/sidebar/SidebarProfile";
import { SidebarNav, type NavItem } from "@/components/sidebar/SidebarNav";
import { useSidebar } from "@/hooks/useSidebar";

const navItems: NavItem[] = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

export default function Sidebar() {
  const {
    isOpen,
    setIsOpen,
    isHovered,
    setIsHovered,
    activeSection,
    handleNavClick,
    sidebarVisible,
  } = useSidebar();

  return (
    <>
      {/* Mobile burger */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 rounded-2xl
                   bg-white/80 dark:bg-[#252529]/80 backdrop-blur-xl
                   border border-black/10 dark:border-white/10
                   flex items-center justify-center
                   shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex flex-col gap-1.5">
          <span className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2"   : ""}`} />
          <span className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "opacity-0"                  : ""}`} />
          <span className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed left-0 top-0 h-screen w-[280px] z-40
                    bg-white/80 dark:bg-[#1E1E23]/90 backdrop-blur-2xl
                    border-r border-black/5 dark:border-white/10
                    flex flex-col
                    transition-transform duration-300 ease-out
                    ${sidebarVisible ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0`}
      >
        <SidebarProfile />

        <div className="mx-6 h-px bg-linear-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

        <SidebarNav
          items={navItems}
          activeSection={activeSection}
          onItemClick={handleNavClick}
          onNavClose={() => setIsOpen(false)}
        />

        {/* Bottom */}
        <div className="p-6 space-y-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-sm font-medium text-center rounded-xl
                       bg-(--ink) text-(--bg-main)
                       hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Download Resume
          </a>
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-[#6B6A65] dark:text-[#A8A8A6]">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
