"use client";

import { motion } from "framer-motion";
import { TECH } from "@/lib/tech";
import { skillGroups } from "@/lib/skills";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.content}>
        <motion.p
          {...slideUp}
          transition={{ duration: 0.6 }}
          className={styles.subtitle}
        >
          Data • AI • Physics • Math
        </motion.p>

        <motion.h1
          {...slideUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={styles.heading}
        >
          Building the future
          <br />
          <span className={styles.headingGradient}>with AI</span>
        </motion.h1>

        <motion.p
          {...slideUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.description}
        >
          AI Engineer at <span className={styles.highlight}>NYU</span>.
          Passionate about the intersection of physics, mathematics, and machine
          learning.
        </motion.p>

        <motion.div
          {...slideUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.ctaRow}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.btnPrimary}
          >
            <span className={styles.btnPrimaryLabel}>View my work</span>
            <div className={styles.btnPrimaryOverlay} />
          </a>

          <a
            href="https://www.linkedin.com/in/zurab-jashi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.blockquote
        {...slideUp}
        transition={{ duration: 0.8, delay: 0.45 }}
        className={styles.quote}
      >
        <p className={styles.quoteText}>
          "The important thing is not to stop questioning. Curiosity has its own
          reason for existence. One cannot help but be in awe when he
          contemplates the mysteries of eternity, of life, of the marvelous
          structure of reality. It is enough if one tries merely to comprehend a
          little of this mystery each day."
        </p>
        <footer className={styles.quoteAuthor}>— Albert Einstein</footer>
      </motion.blockquote>

      {/* Skills — grouped */}
      <motion.div
        {...slideUp}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={styles.skills}
      >
        <div className={styles.skillsDivider} />

        <div className={styles.skillsGrid}>
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              <p className={styles.groupLabel}>{group.label}</p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                transition={{ delayChildren: gi * 0.1 }}
                className={styles.badges}
              >
                {group.keys.map((key) => {
                  const tech = TECH[key];
                  return (
                    <motion.span
                      key={key}
                      variants={staggerItem}
                      className={styles.badge}
                    >
                      <tech.Icon size={14} style={{ color: tech.color }} />
                      {tech.name}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
