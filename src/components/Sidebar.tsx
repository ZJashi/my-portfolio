"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SidebarProfile } from "@/components/sidebar/SidebarProfile";
import { SidebarNav, type NavItem } from "@/components/sidebar/SidebarNav";
import { useSidebar } from "@/hooks/useSidebar";
import { notesEnabled } from "@/lib/notes-visibility";
import styles from "./Sidebar.module.css";

const navItems: NavItem[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  ...(notesEnabled ? [{ href: "/notes", label: "Notes" }] : []),
];

export default function Sidebar() {
  const {
    isOpen,
    setIsOpen,
    isCollapsed,
    setIsCollapsed,
    activeSection,
    handleNavClick,
    sidebarVisible,
  } = useSidebar();

  return (
    <>
      <button
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        aria-controls="site-sidebar"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className={styles.mobileToggle}
      >
        <WindowIcon />
      </button>
      <button
        aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
        title={isCollapsed ? "Open sidebar" : "Close sidebar"}
        aria-controls="site-sidebar"
        aria-expanded={!isCollapsed}
        onClick={() => setIsCollapsed((v) => !v)}
        className={`${styles.desktopToggle} ${isCollapsed ? styles.toggleCollapsed : ""}`}
      >
        <WindowIcon />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        id="site-sidebar"
        data-collapsed={isCollapsed}
        className={`${styles.panel} ${sidebarVisible ? styles.panelOpen : ""} ${isCollapsed ? styles.panelCollapsed : ""}`}
      >
        <SidebarProfile />

        <div className={styles.divider} />

        <SidebarNav
          items={navItems}
          activeSection={activeSection}
          onItemClick={handleNavClick}
          onNavClose={() => setIsOpen(false)}
        />

        <div className={styles.bottom}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
          <div className={styles.themeRow}>
            <span className={styles.themeLabel}>Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}

function WindowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M5.5 8h1M5.5 11h1" />
    </svg>
  );
}
