"use client";

import { useRef, useState, useEffect, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export function Timeline({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<number[]>([]);

  const childArray = Children.toArray(children);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newPositions = itemRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        return rect.top + rect.height / 2 - containerRect.top;
      });

      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [childArray.length]);

  const activePosition = activeIndex !== null ? positions[activeIndex] : null;

  return (
    <div ref={containerRef} className="relative pl-10">
      {/* Vertical line */}
      <div className="absolute left-3 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />

      {/* Static node dots */}
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute left-3 -translate-x-1/2"
          style={{ top: pos }}
          initial={false}
          animate={{
            scale: activeIndex === index ? 0 : 1,
            opacity: activeIndex === index ? 0 : 0.4,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-2 w-2 rounded-full bg-[var(--ink)]" />
        </motion.div>
      ))}

      {/* Active tracking dot */}
      <AnimatePresence>
        {activePosition !== null && (
          <motion.div
            className="absolute left-3 -translate-x-1/2 z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              top: activePosition,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              top: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-[var(--ink)]/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Outer ring */}
            <div className="absolute -inset-1.5 rounded-full border-2 border-[var(--ink)]/30 bg-[var(--bg-main)]" />
            {/* Inner dot */}
            <div className="relative h-3 w-3 rounded-full bg-[var(--ink)] shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="space-y-6">
        {childArray.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
