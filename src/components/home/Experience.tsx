"use client";

import { motion } from "framer-motion";
import { TechIcons } from "@/components/ui/TechIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useExperience } from "@/hooks/useExperience";
import styles from "./Experience.module.css";

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
    <section id="experience" className={styles.section}>
      <SectionHeader title="Experience" />

      {/* Category toggle */}
      <div className={styles.categoryRow}>
        {(["work", "education"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.catBtn} ${
              activeCategory === cat ? styles.catBtnActive : styles.catBtnInactive
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.layout}>
        {/* Tab column */}
        <div className={styles.tabCol}>
          {/* Mobile: horizontal scroll */}
          <div className={styles.mobileTabList}>
            {items.map((item, index) => (
              <button
                key={`${item.shortName}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`${styles.mobileTab} ${
                  activeIndex === index ? styles.mobileTabActive : styles.mobileTabInactive
                }`}
              >
                {item.shortName}
              </button>
            ))}
          </div>

          {/* Desktop: vertical tabs */}
          <div className={styles.desktopTabWrapper}>
            <motion.div
              className={styles.indicator}
              initial={false}
              animate={{
                top: indicatorStyle.top,
                height: indicatorStyle.height,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <div className={styles.desktopTabList}>
              {items.map((item, index) => (
                <button
                  key={`${item.shortName}-${index}`}
                  ref={(el) => { tabsRef.current[index] = el; }}
                  onClick={() => setActiveIndex(index)}
                  className={`${styles.desktopTab} ${
                    safeIndex === index ? styles.desktopTabActive : styles.desktopTabInactive
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
          className={styles.content}
        >
          <h3 className={styles.role}>
            {activeItem.role}
            <span className={styles.company}>
              {" "}@{" "}
              {activeItem.url ? (
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.companyLink}
                >
                  {activeItem.company.split("—")[0].trim()}
                </a>
              ) : (
                activeItem.company.split("—")[0].trim()
              )}
            </span>
          </h3>

          <p className={styles.time}>{activeItem.time}</p>

          {activeItem.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {activeItem.bullets.map((bullet, i) => (
                <li key={i} className={styles.bullet}>
                  <span className={styles.bulletMarker}>▹</span>
                  <span className={styles.bulletText}>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {activeItem.tech && activeItem.tech.length > 0 && (
            <div className={styles.techRow}>
              <TechIcons tech={activeItem.tech} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
