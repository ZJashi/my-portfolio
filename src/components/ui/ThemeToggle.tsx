"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.placeholder}>
        <div className={styles.placeholderInner} />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {theme === "light" ? (
          <IoSunny className={styles.icon} />
        ) : (
          <IoMoon className={styles.icon} />
        )}
      </motion.div>
    </button>
  );
}
