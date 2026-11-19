'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImageImport from '../assets/Profile Picture.png';

const profileImage = typeof profileImageImport === 'string' ? profileImageImport : profileImageImport.src;

export function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-20 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 md:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800">
              <Sparkles size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">Product-focused UI/UX Designer</span>
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ahmed Shahriyar<br />Parvez Pranto
              <span className="mt-3 block text-2xl text-purple-600 dark:text-purple-400 sm:text-3xl md:text-4xl">UI/UX Designer · Product Designer</span>
            </h1>
            <p className="mb-7 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              I design useful web and mobile products across eCommerce, SaaS, CRM, and enterprise applications. With 4+ years of experience, I turn user and business needs into responsive interfaces and clear product experiences.
            </p>
            <p className="mb-7 text-sm text-gray-600 dark:text-gray-400 sm:text-base">Dhaka, Bangladesh · Open to product design opportunities</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
              >
                View Selected Work <ArrowRight size={20} />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:shahriyarpranto@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-md md:max-w-lg">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 shadow-2xl sm:rounded-[3rem]" />
              <div className="absolute inset-6 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/60 dark:ring-gray-700/60 sm:inset-10 sm:rounded-3xl">
                <ImageWithFallback src={profileImage} alt="Ahmed Shahriyar Parvez Pranto, UI/UX and Product Designer" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-2 rounded-xl bg-white px-4 py-3 shadow-lg dark:bg-gray-800 sm:bottom-4 sm:-right-5">
                <p className="font-semibold text-gray-900 dark:text-white">4+ years</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Product design experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
