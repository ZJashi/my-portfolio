import { motion } from "framer-motion";
import type { MouseEvent } from "react";

export type NavItem = {
  href: string;
  label: string;
  type: "anchor" | "page";
};

type Props = {
  items: NavItem[];
  activeSection: string;
  pathname: string;
  onItemClick: (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
  onNavClose: () => void;
};

function isItemActive(item: NavItem, pathname: string, activeSection: string) {
  if (item.type === "page")
    return pathname === item.href || pathname.startsWith(item.href + "/");
  return pathname === "/" && activeSection === item.href.slice(1);
}

export function SidebarNav({ items, activeSection, pathname, onItemClick, onNavClose }: Props) {
  return (
    <nav className="flex-1 py-6 px-4 overflow-y-auto">
      <ul className="space-y-1">
        {items.map((item, index) => {
          const active = isItemActive(item, pathname, activeSection);
          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  onItemClick(e, item);
                  onNavClose();
                }}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl
                           text-sm font-medium transition-all duration-300
                           ${active
                             ? "text-[#1E1E1C] dark:text-white"
                             : "text-[#6B6A65] dark:text-[#A8A8A6] hover:text-[#1E1E1C] dark:hover:text-white"
                           }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl bg-black/5 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 w-2 h-2 rounded-full transition-all duration-300
                              ${active
                                ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                                : "bg-[#6B6A65]/30 dark:bg-[#A8A8A6]/30 group-hover:bg-[#6B6A65] dark:group-hover:bg-[#A8A8A6]"
                              }`}
                />
                <span className="relative z-10">{item.label}</span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
