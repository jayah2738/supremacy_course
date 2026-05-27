"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <motion.button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/70 text-burgundy-700 shadow-sm backdrop-blur-xl transition-colors hover:border-gold-500/70 dark:border-white/10 dark:bg-white/10 dark:text-gold-300"
    >
      <Sun className="h-5 w-5 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0" />
      <Moon className="absolute h-5 w-5 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100" />
    </motion.button>
  );
}
