'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Briefcase, MapPin } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '4+', label: 'Years of Experience' },
  { icon: Users, value: 'Web & Mobile', label: 'Product Design' },
  { icon: Award, value: '5', label: 'Certifications' },
  { icon: MapPin, value: 'Dhaka', label: 'Bangladesh' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="mb-10 text-center sm:mb-12 md:mb-16"><h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">About Me</h2><div className="mx-auto h-1 w-40 bg-purple-600 dark:bg-purple-500" /></motion.div>
        <div className="mb-12 grid items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass rounded-3xl p-6 sm:p-8"><h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">Product-focused design for real-world needs</h3><p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">I’m a product-focused UI/UX Designer with 4+ years of experience creating web and mobile applications, eCommerce platforms, SaaS products, CRM tools, and enterprise systems. I bring research, strategy, and design craft together to create clear and useful experiences.</p><p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">At NextLab, I design customer-facing eCommerce experiences and internal POS and HRM applications. I work closely with developers and stakeholders to improve usability, build responsive interfaces, and prepare accessible handoff specifications.</p><p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">Based in Dhaka, Bangladesh, I use Figma, FigJam, Framer, and Adobe XD to turn user and business needs into clear, accessible product experiences.</p></motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.6, delay: 0.4 }} className="glass-strong rounded-3xl p-6 text-gray-900 sm:p-8 dark:text-white"><h4 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">How I Work</h4><ul className="space-y-4">{['Start with user research, competitor analysis, and clear product goals', 'Map user flows and information architecture before shaping interfaces', 'Prototype, test, and iterate with usability feedback', 'Build scalable design systems and partner with teams through handoff'].map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" /><span>{item}</span></li>)}</ul></motion.div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6">{stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }} className="glass rounded-2xl p-4 text-center sm:p-6"><stat.icon className="mx-auto mb-2 h-6 w-6 text-purple-600 dark:text-purple-400 sm:mb-3 sm:h-8 sm:w-8" /><div className="mb-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">{stat.value}</div><div className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">{stat.label}</div></motion.div>)}</div>
      </div>
    </div>
  );
}
