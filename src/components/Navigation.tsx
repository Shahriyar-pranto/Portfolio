'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-300 sm:px-6 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className={`mx-auto max-w-7xl rounded-2xl px-4 transition-all duration-300 sm:px-6 ${isScrolled ? 'glass shadow-lg' : 'py-1'}`}>
        <div className="flex min-h-12 items-center justify-between">
          <motion.button type="button" whileHover={{ scale: 1.03 }} className="cursor-pointer text-left" onClick={() => scrollToSection('home')}>
            <span className="font-inertia text-base tracking-wide text-purple-900 dark:text-purple-300 sm:text-lg md:text-xl lg:text-2xl">Ahmed Shahriyar</span>
          </motion.button>

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`relative whitespace-nowrap text-sm transition-colors lg:text-base ${activeSection === item.id ? 'text-gray-950 dark:text-white' : 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white'}`}>
                {item.label}
                {activeSection === item.id && <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-purple-600 dark:bg-purple-400" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button type="button" className="rounded-lg p-2 text-gray-900 dark:text-white" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-3 mt-2 overflow-hidden rounded-2xl md:hidden">
            <div className="space-y-1 p-3">
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${activeSection === item.id ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-white/60 dark:text-gray-200 dark:hover:bg-white/10'}`}>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
