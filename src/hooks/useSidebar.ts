import { useState, useRef, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavItem } from "@/components/sidebar/SidebarNav";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const pendingTarget = useRef<string | null>(null);

  const [activeSection] = useActiveSection(isHome, pendingTarget.current);
  if (isHome) pendingTarget.current = null;

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    e.preventDefault();
    if (item.type === "page") {
      router.push(item.href);
    } else if (isHome) {
      document.getElementById(item.href.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      pendingTarget.current = item.href.slice(1);
      router.push("/");
    }
  };

  return {
    isOpen,
    setIsOpen,
    isHovered,
    setIsHovered,
    pathname,
    isHome,
    activeSection,
    handleNavClick,
    sidebarVisible: isOpen || isHovered,
  };
}
