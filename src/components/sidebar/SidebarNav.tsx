import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import styles from "./SidebarNav.module.css";

export type NavItem = {
  href: string;
  label: string;
};

type Props = {
  items: NavItem[];
  activeSection: string;
  onItemClick: (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
  onNavClose: () => void;
};

export function SidebarNav({ items, activeSection, onItemClick, onNavClose }: Props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          const active = activeSection === item.href.slice(1);
          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => { onItemClick(e, item); onNavClose(); }}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className={styles.navBg}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`${styles.dot} ${active ? styles.dotActive : ""}`} />
                <span className={styles.label}>{item.label}</span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
