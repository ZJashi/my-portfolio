"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering placeholder during SSR
  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {theme === "light" ? (
          <IoSunny className="w-5 h-5 text-(--stone)" />
        ) : (
          <IoMoon className="w-5 h-5 text-(--stone)" />
        )}
      </motion.div>
    </button>
  );
}
