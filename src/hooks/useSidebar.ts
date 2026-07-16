import { useState, type MouseEvent } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/components/sidebar/SidebarNav";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection] = useActiveSection();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    document.getElementById(item.href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    isOpen,
    setIsOpen,
    isHovered,
    setIsHovered,
    activeSection,
    handleNavClick,
    sidebarVisible: isOpen || isHovered,
  };
}
