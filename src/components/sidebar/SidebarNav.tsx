import Link from "next/link";
import { usePathname } from "next/navigation";
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

export function SidebarNav({
  items,
  activeSection,
  onItemClick,
  onNavClose,
}: Props) {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          const active =
            item.href === "/notes"
              ? pathname.startsWith("/notes")
              : pathname === "/" && activeSection === item.href.slice(1);
          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <Link
                href={
                  item.href.startsWith("#") && pathname !== "/"
                    ? `/${item.href}`
                    : item.href
                }
                aria-current={active ? "location" : undefined}
                onClick={(e) => {
                  onItemClick(e, item);
                  onNavClose();
                }}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className={styles.navBg}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`${styles.dot} ${active ? styles.dotActive : ""}`}
                />
                <span className={styles.label}>{item.label}</span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
