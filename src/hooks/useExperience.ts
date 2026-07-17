import { useState, useRef, useEffect, type RefObject } from "react";
import { workExperience, education, type ExperienceItem } from "@/lib/experience";

type TabCategory = "work" | "education";

export type UseExperienceReturn = {
  activeCategory: TabCategory;
  setActiveCategory: (cat: TabCategory) => void;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  tabsRef: RefObject<(HTMLButtonElement | null)[]>;
  indicatorStyle: { top: number; height: number };
  items: ExperienceItem[];
  safeIndex: number;
  activeItem: ExperienceItem | undefined;
};

export function useExperience(): UseExperienceReturn {
  const [activeCategory, setActiveCategory] = useState<TabCategory>("work");
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  const items = activeCategory === "work" ? workExperience : education;
  const safeIndex = items.length > 0 ? Math.min(activeIndex, items.length - 1) : 0;
  const activeItem = items[safeIndex];

  useEffect(() => {
    const activeTab = tabsRef.current[safeIndex];
    if (activeTab) {
      setIndicatorStyle({
        top: activeTab.offsetTop,
        height: activeTab.offsetHeight,
      });
    }
  }, [safeIndex, activeCategory]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    activeIndex,
    setActiveIndex,
    tabsRef,
    indicatorStyle,
    items,
    safeIndex,
    activeItem,
  };
}
