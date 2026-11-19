'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Design Tools',
    skills: ['Figma', 'FigJam', 'Framer', 'Adobe XD'],
  },
  {
    title: 'UX Research & Strategy',
    skills: ['User Research', 'User Interviews', 'Usability Testing', 'Competitor Analysis', 'UX Audits', 'User Flows', 'Journey Mapping', 'Information Architecture'],
  },
  {
    title: 'UI & Product Design',
    skills: ['Wireframing', 'High-Fidelity UI Design', 'Interactive Prototyping', 'Interaction Design', 'Responsive Design', 'Mobile-First Design', 'Design Systems', 'Component Libraries', 'Accessibility (WCAG)'],
  },
  {
    title: 'Product & Platforms',
    skills: ['eCommerce', 'Web Applications', 'Android & iOS Apps', 'SaaS', 'CRM', 'POS', 'HRM', 'Enterprise Applications'],
  },
  {
    title: 'Professional Skills',
    skills: ['Cross-Functional Collaboration', 'Stakeholder Management', 'Client Communication', 'Problem-Solving', 'Design Documentation', 'Developer Handoff'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Competencies</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A product design toolkit spanning research, strategy, interface design, and delivery.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-7 shadow-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">{skill}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
