"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[72px] h-10 rounded-full bg-muted border border-border" />; // Placeholder
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex items-center w-[72px] h-10 p-1 rounded-full transition-colors duration-500 shadow-inner",
        isDark 
          ? "bg-[#0a0f25] border border-primary/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]" 
          : "bg-surface-raised border border-border shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
      )}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sliding background puck */}
      <motion.div
        className={cn(
          "absolute w-8 h-8 rounded-full shadow-md flex items-center justify-center z-10",
          isDark 
            ? "bg-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
            : "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
        )}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-blue-400" />
        ) : (
          <Sun className="w-4 h-4 text-orange-500" />
        )}
      </motion.div>

      {/* Decorative Icons underneath */}
      <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
        <Sun className={cn("w-4 h-4 transition-colors", isDark ? "text-slate-600" : "opacity-0")} />
        <Moon className={cn("w-4 h-4 transition-colors", isDark ? "opacity-0" : "text-slate-400")} />
      </div>
    </button>
  );
}
