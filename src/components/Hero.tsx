'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImageImport from '../assets/Profile Picture.png';

const profileImage = typeof profileImageImport === 'string' ? profileImageImport : profileImageImport.src;

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 pt-20 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-5 text-sm">
              <Sparkles size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">Product-focused UI/UX Designer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
              Ahmed Shahriyar<br />Parvez Pranto
              <span className="text-purple-600 dark:text-purple-400 block mt-3 text-2xl sm:text-3xl md:text-4xl">UI/UX Designer · Product Designer</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-7 max-w-xl text-sm sm:text-base leading-relaxed">
              I design useful web and mobile products across eCommerce, SaaS, CRM, and enterprise applications. With 4+ years of experience, I turn user and business needs into responsive interfaces and clear product experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-7 text-sm sm:text-base">Dhaka, Bangladesh · Open to product design opportunities</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                View Selected Work <ArrowRight size={20} />
              </motion.button>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="mailto:shahriyarpranto@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:shadow-md transition-all font-medium">
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-[min(72vw,18rem)] sm:w-[min(42vw,24rem)] md:w-full md:max-w-lg">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 shadow-2xl sm:rounded-[3rem]" />
              <div className="absolute inset-4 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/60 dark:ring-gray-700/60 sm:inset-6 sm:rounded-3xl lg:inset-10">
                <ImageWithFallback src={profileImage} alt="Ahmed Shahriyar Parvez Pranto, UI/UX and Product Designer" className="h-full w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 right-0 rounded-xl bg-white px-3 py-2 shadow-lg dark:bg-gray-800 sm:bottom-4 sm:-right-4 sm:px-4 sm:py-3">
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
