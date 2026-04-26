import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export function AnimatedThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white/80 text-slate-800 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
    >
      <motion.span
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.span>

      <motion.span
        initial={false}
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.span>
    </motion.button>
  );
}

export function AnimatedThemeTogglerDemo() {
  return (
    <div className="flex justify-center p-6">
      <AnimatedThemeToggler />
    </div>
  );
}
