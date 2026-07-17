"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  title: string;
  className?: string;
};

export function SectionHeader({ title, className }: Props) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4${className ? ` ${className}` : ""}`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-(--ink)">
        {title}
      </h2>
      <div className="flex-1 h-px bg-linear-to-r from-black/10 to-transparent dark:from-white/10" />
    </motion.div>
  );
}
