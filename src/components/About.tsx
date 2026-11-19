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
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Product-focused design for real-world needs
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              I’m a product-focused UI/UX Designer with 4+ years of experience creating web and mobile applications, eCommerce platforms, SaaS products, CRM tools, and enterprise systems. I bring product requirements to life through UX research, user flows, wireframes, high-fidelity interfaces, interactive prototypes, and thoughtful developer handoff.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              At NextLab, I design customer-facing eCommerce experiences and internal POS and HRM applications. I work closely with developers and stakeholders to improve usability, build responsive experiences, and deliver scalable design systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Based in Dhaka, Bangladesh, I use Figma, FigJam, Framer, and Adobe XD to turn user and business needs into clear, accessible product experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white"
          >
            <h4 className="text-white mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">How I Work</h4>
            <ul className="space-y-4">
              {[
                'Start with user research, competitor analysis, and clear product goals',
                'Map user flows and information architecture before shaping interfaces',
                'Prototype, test, and iterate with usability feedback',
                'Build scalable design systems and partner with teams through handoff',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-purple-600 dark:text-purple-400" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
