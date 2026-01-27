'use client';

import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      type="button"
      className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'light' || !theme ? (
          <Sun className="w-3 h-3 text-yellow-500" />
        ) : (
          <Moon className="w-3 h-3 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
