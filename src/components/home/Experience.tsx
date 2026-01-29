"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TechIcons } from "@/components/TechIcons";
import { workExperience, education } from "@/content/about.data";

type TabCategory = "work" | "education";

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<TabCategory>("work");
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  const items = activeCategory === "work" ? workExperience : education;
  const safeIndex = items.length > 0 ? Math.min(activeIndex, items.length - 1) : 0;
  const activeItem = items[safeIndex];

  // Update indicator position when active tab changes
  useEffect(() => {
    const activeTab = tabsRef.current[safeIndex];
    if (activeTab) {
      setIndicatorStyle({
        top: activeTab.offsetTop,
        height: activeTab.offsetHeight,
      });
    }
  }, [safeIndex, activeCategory]);

  // Reset to first tab when switching categories
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  if (!activeItem) return null;

  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          Experience
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      {/* Category toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveCategory("work")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeCategory === "work"
              ? "bg-[#1E1E1C] dark:bg-[#F5F5F4] text-white dark:text-[#1E1E1C]"
              : "text-[var(--stone)] hover:text-[var(--ink)] hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          Work
        </button>
        <button
          onClick={() => setActiveCategory("education")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeCategory === "education"
              ? "bg-[#1E1E1C] dark:bg-[#F5F5F4] text-white dark:text-[#1E1E1C]"
              : "text-[var(--stone)] hover:text-[var(--ink)] hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          Education
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tab list - vertical on desktop, horizontal scroll on mobile */}
        <div className="relative md:w-48 shrink-0">
          {/* Mobile: horizontal scroll */}
          <div className="flex md:hidden overflow-x-auto gap-1 pb-2 -mx-2 px-2 scrollbar-hide">
            {items.map((item, index) => (
              <button
                key={`${item.shortName}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-4 py-2 text-sm rounded-lg transition ${
                  activeIndex === index
                    ? "bg-[var(--ink)]/10 text-[var(--ink)] font-medium"
                    : "text-[var(--stone)] hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {item.shortName}
              </button>
            ))}
          </div>

          {/* Desktop: vertical tabs */}
          <div className="hidden md:block relative">
            {/* Animated indicator */}
            <motion.div
              className="absolute left-0 w-0.5 bg-[var(--ink)] rounded-full"
              initial={false}
              animate={{
                top: indicatorStyle.top,
                height: indicatorStyle.height,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Tab buttons */}
            <div className="flex flex-col border-l border-black/10 dark:border-white/10">
              {items.map((item, index) => (
                <button
                  key={`${item.shortName}-${index}`}
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-5 py-3 text-sm transition-colors ${
                    activeIndex === index
                      ? "text-[var(--ink)] bg-[var(--ink)]/5 font-medium"
                      : "text-[var(--stone)] hover:text-[var(--ink)] hover:bg-[var(--ink)]/5"
                  }`}
                >
                  {item.shortName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content panel */}
        <motion.div
          key={`${activeCategory}-${activeIndex}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-w-0"
        >
          <h3 className="text-lg font-semibold text-[var(--ink)]">
            {activeItem.role}
            <span className="text-[var(--stone)]">
              {" "}
              @{" "}
              {activeItem.url ? (
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  {activeItem.company.split("—")[0].trim()}
                </a>
              ) : (
                activeItem.company.split("—")[0].trim()
              )}
            </span>
          </h3>

          <p className="mt-1 text-sm text-[var(--stone)] font-mono">
            {activeItem.time}
          </p>

          {activeItem.bullets.length > 0 && (
            <ul className="mt-4 space-y-3">
              {activeItem.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-[var(--stone)]">
                  <span className="text-[var(--stone)] mt-1.5 shrink-0">▹</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {activeItem.tech && activeItem.tech.length > 0 && (
            <div className="mt-6">
              <TechIcons tech={activeItem.tech} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
