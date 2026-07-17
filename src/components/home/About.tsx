"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader title="About Me" />

      <div className={styles.grid}>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.column}
        >
          <p>
            I&apos;m a researcher and engineer at the intersection of{" "}
            <span className={styles.highlight}>artificial intelligence</span>,{" "}
            <span className={styles.highlight}>physics</span>, and{" "}
            <span className={styles.highlight}>mathematics</span>.
          </p>
          <p>
            Currently pursuing my Master&apos;s in Data Science at NYU while working
            as an AI researcher at the Center for Data Science.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.column}
        >
          <p>
            My journey started with theoretical physics and pure mathematics,
            giving me a strong foundation for understanding complex systems.
          </p>
          <p>
            This naturally led me to machine learning and data engineering—from
            large-scale pipelines to cutting-edge AI research.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
