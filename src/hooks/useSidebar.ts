import { useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/components/sidebar/SidebarNav";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [homeSection] = useActiveSection();
  const pathname = usePathname();
  const activeSection = pathname.startsWith("/notes") ? "notes" : homeSection;

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (!item.href.startsWith("#") || pathname !== "/") return;
    e.preventDefault();
    document.getElementById(item.href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    isOpen,
    setIsOpen,
    isCollapsed,
    setIsCollapsed,
    activeSection,
    handleNavClick,
    sidebarVisible: isOpen,
  };
}
