"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TECH } from "@/lib/tech";
import { staggerContainer, staggerItem } from "@/lib/animations";
import styles from "./TechIcons.module.css";

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
      variants={staggerContainer}
      className={styles.container}
    >
      {tech.map((key, index) => {
        const entry = TECH[key];
        if (!entry) return null;

        const { Icon, name, color } = entry;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={key}
            variants={staggerItem}
            className={styles.item}
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
                    className={styles.expanded}
                  >
                    <Icon size={size} style={{ color }} className={styles.shrink0} />
                    <span className={styles.expandedLabel}>{name}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.iconOnly}
                  >
                    <Icon size={size} style={{ color }} />
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <>
                <Icon
                  size={size}
                  style={{ color }}
                  className={styles.iconContainer}
                />
                <span className={styles.tooltip}>{name}</span>
              </>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
