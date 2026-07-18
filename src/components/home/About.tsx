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
            I&apos;m an AI engineer at{" "}
            <span className={styles.highlight}> CFG </span>
            working to build, enhance and optimize business processes for varius
            teams.
          </p>
          <p>
            In past, I have held positions at NYU (AI Engineer) and Bank of
            Georgia (Big Data Engineer). I hold MSc in Physics from esteemed
            Perimeter Institute of Theoretical Physics and BSc in Math from NYU.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.column}
        >
          <p>
            I have competitive Olympiad background, holding Silver Medal at
            International Physics Olympiad and International Math Competition.
          </p>
          <p>I love problem solving, enjoy modern technology and </p>
        </motion.div>
      </div>
    </section>
  );
}
