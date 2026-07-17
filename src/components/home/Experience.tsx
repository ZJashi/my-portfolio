"use client";

import { motion } from "framer-motion";
import { TechIcons } from "@/components/ui/TechIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useExperience } from "@/hooks/useExperience";

export default function Experience() {
  const {
    activeCategory,
    setActiveCategory,
    activeIndex,
    setActiveIndex,
    tabsRef,
    indicatorStyle,
    items,
    safeIndex,
    activeItem,
  } = useExperience();

  if (!activeItem) return null;

  return (
    <section id="experience" className="space-y-8">
      <SectionHeader title="Experience" />

      {/* Category toggle */}
      <div className="flex gap-2">
        {(["work", "education"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize ${
              activeCategory === cat
                ? "bg-(--ink) text-(--bg-main)"
                : "text-(--stone) hover:text-(--ink) hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
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
                    ? "bg-(--ink)/10 text-(--ink) font-medium"
                    : "text-(--stone) hover:bg-black/5 dark:hover:bg-white/10"
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
              className="absolute left-0 w-0.5 bg-(--ink) rounded-full"
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
                    safeIndex === index
                      ? "text-(--ink) bg-(--ink)/5 font-medium"
                      : "text-(--stone) hover:text-(--ink) hover:bg-(--ink)/5"
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
          key={`${activeCategory}-${safeIndex}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-w-0"
        >
          <h3 className="text-lg font-semibold text-(--ink)">
            {activeItem.role}
            <span className="text-(--stone)">
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

          <p className="mt-1 text-sm text-(--stone) font-mono">
            {activeItem.time}
          </p>

          {activeItem.bullets.length > 0 && (
            <ul className="mt-4 space-y-3">
              {activeItem.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-(--stone)">
                  <span className="text-(--stone) mt-1.5 shrink-0">▹</span>
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
