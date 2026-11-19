'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImageImport from '../assets/LinkedIn Profile Picture.png';

const profileImage = typeof profileImageImport === 'string' ? profileImageImport : profileImageImport.src;

export function Hero() {
  return (
    <div className="flex min-h-[min(900px,100svh)] items-center justify-center px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="glass rounded-3xl p-6 sm:p-8 md:p-10 order-2 md:order-1">
            <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300"><Sparkles aria-hidden="true" size={16} /> Product-focused UI/UX Designer</p>
            <h1 className="mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">Ahmed Shahriyar<br />Parvez Pranto</h1>
            <p className="mb-6 text-xl font-medium text-gray-700 dark:text-gray-200 sm:text-2xl">UI/UX Designer · Product Designer</p>
            <p className="mb-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">I design useful web and mobile products across eCommerce, SaaS, CRM, and enterprise applications. With 4+ years of experience, I turn user and business needs into responsive interfaces and clear product experiences.</p>
            <p class="mb-8 text-sm text-gray-500 dark:text-gray-400 sm:text-base">Dhaka, Bangladesh <span aria-hidden="true">·</span> Open to product design opportunities</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gray-950 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/10 transition-colors hover:bg-purple-700 dark:bg-white dark:text-gray-900 dark:hover:bg-purple-100">View Selected Work <ArrowRight aria-hidden="true" size={18} /></motion.button>
              <a href="mailto:shahriyarpranto@gmail.com" className="glass-strong inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 font-medium text-gray-800 transition-colors hover:text-purple-700 dark:text-white dark:hover:text-purple-300">Contact Me</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none">
            <div className="glass-strong aspect-[4/4.5] overflow-hidden rounded-3xl p-2 sm:aspect-square">
              <div className="h-full w-full overflow-hidden rounded-2xl"><ImageWithFallback src={profileImage} alt="Ahmed Shahriyar Parvez Pranto, UI/UX and Product Designer" className="h-full w-full object-cover object-top" /></div>
            </div>
            <div className="glass absolute -bottom-4 right-3 rounded-xl px-4 py-3 sm:right-6"><p className="font-semibold text-gray-900 dark:text-white">4+ years</p><p className="text-xs text-gray-600 dark:text-gray-400">Product design experience</p></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
