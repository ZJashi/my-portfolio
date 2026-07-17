"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SidebarProfile } from "@/components/sidebar/SidebarProfile";
import { SidebarNav, type NavItem } from "@/components/sidebar/SidebarNav";
import { useSidebar } from "@/hooks/useSidebar";
import styles from "./Sidebar.module.css";

const navItems: NavItem[] = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
];

export default function Sidebar() {
  const { isOpen, setIsOpen, setIsHovered, activeSection, handleNavClick, sidebarVisible } = useSidebar();

  return (
    <>
      {/* Mobile burger */}
      <button onClick={() => setIsOpen((v) => !v)} className={styles.burgerBtn}>
        <div className={styles.burgerLines}>
          <span className={`${styles.burgerLine} ${isOpen ? styles.line1Open : ""}`} />
          <span className={`${styles.burgerLine} ${isOpen ? styles.line2Open : ""}`} />
          <span className={`${styles.burgerLine} ${isOpen ? styles.line3Open : ""}`} />
        </div>
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${styles.panel} ${sidebarVisible ? styles.panelOpen : ""}`}
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
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
