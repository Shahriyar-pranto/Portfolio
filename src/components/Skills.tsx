'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Design Tools', skills: ['Figma', 'FigJam', 'Framer', 'Adobe XD'] },
  { title: 'UX Research & Strategy', skills: ['User Research', 'User Interviews', 'Usability Testing', 'Competitor Analysis', 'UX Audits', 'User Flows', 'Journey Mapping', 'Information Architecture'] },
  { title: 'UI & Product Design', skills: ['Wireframing', 'High-Fidelity UI Design', 'Interactive Prototyping', 'Interaction Design', 'Responsive Design', 'Mobile-First Design', 'Design Systems', 'Component Libraries', 'Accessibility'] },
  { title: 'Product & Platforms', skills: ['eCommerce', 'Web Applications', 'Android & iOS Apps', 'SaaS', 'CRM', 'POS', 'HRM', 'Enterprise Applications'] },
  { title: 'Professional Skills', skills: ['Cross-Functional Collaboration', 'Stakeholder Management', 'Client Communication', 'Problem-Solving', 'Design Documentation', 'Developer Handoff'] },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <div ref={ref} className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="mb-10 text-center sm:mb-12 md:mb-16"><h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">Core Competencies</h2><div className="mx-auto mb-4 h-1 w-40 bg-purple-600 dark:bg-purple-500 sm:mb-6" /><p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:text-base">A product design toolkit spanning research, strategy, interface design, and delivery.</p></motion.div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article key={category.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-strong rounded-3xl p-5 sm:p-7"><h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">{category.title}</h3><ul className="flex flex-wrap gap-2">{category.skills.map((skill) => <li key={skill} className="glass rounded-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300">{skill}</li>)}</ul></motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
