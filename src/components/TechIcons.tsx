"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TECH } from "@/content/tech";

type Props = {
  tech: (keyof typeof TECH)[];
  size?: number;
  showLabelsOnHover?: boolean;
};

export function TechIcons({ tech, size = 20, showLabelsOnHover = false }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className="flex flex-wrap gap-3"
    >
      {tech.map((key, index) => {
        const entry = TECH[key];
        if (!entry) return null;

        const { Icon, name } = entry;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={key}
            variants={{
              hidden: { opacity: 0, y: 4 },
              show: { opacity: 1, y: 0 },
            }}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {showLabelsOnHover ? (
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, width: size, scale: 0.9 }}
                    animate={{ opacity: 1, width: "auto", scale: 1 }}
                    exit={{ opacity: 0, width: size, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                               bg-[var(--ultramarine)]/10 border border-[var(--ultramarine)]/20"
                  >
                    <Icon size={size} className="text-[var(--ultramarine)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--ultramarine)] whitespace-nowrap">
                      {name}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-1.5"
                  >
                    <Icon
                      size={size}
                      className="text-[var(--stone)] transition duration-200
                                 group-hover:text-[var(--ink)]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <>
                <Icon
                  size={size}
                  className="text-[var(--stone)] transition duration-200
                             group-hover:text-[var(--ink)]
                             group-hover:-translate-y-0.5
                             group-hover:scale-110"
                />
                <span
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                             rounded-md bg-black/90 px-2 py-1
                             text-xs text-white whitespace-nowrap
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-200"
                >
                  {name}
                </span>
              </>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
