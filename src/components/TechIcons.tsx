"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TECH } from "@/content/tech";

type Props = {
  tech: (keyof typeof TECH)[];
  size?: number;
  showLabelsOnHover?: boolean;
};

export function TechIcons({
  tech,
  size = 20,
  showLabelsOnHover = false,
}: Props) {
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

        const { Icon, name, color } = entry;
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
                               bg-(--ink)/10 border border-(--ink)/20"
                  >
                    <Icon
                      size={size}
                      style={{ color }}
                      className="shrink-0"
                    />
                    <span className="text-sm font-medium text-(--ink) whitespace-nowrap">
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
                      style={{ color }}
                      className="transition duration-200"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <>
                <Icon
                  size={size}
                  style={{ color }}
                  className="transition duration-200
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
