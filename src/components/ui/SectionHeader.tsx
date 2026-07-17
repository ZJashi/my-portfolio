"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import styles from "./SectionHeader.module.css";

type Props = {
  title: string;
  className?: string;
};

export function SectionHeader({ title, className }: Props) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5 }}
      className={`${styles.wrapper}${className ? ` ${className}` : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
    </motion.div>
  );
}
