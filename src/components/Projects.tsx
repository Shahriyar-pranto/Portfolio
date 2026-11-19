'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, ArrowRight, ShoppingBag, Smartphone, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Apple Gadgets',
    category: 'eCommerce',
    description: 'UX/UI improvements for the eCommerce website and mobile app, focused on navigation, shopping journeys, and purchase interactions.',
    tags: ['eCommerce', 'Web', 'Mobile App', 'UX Optimization'],
    icon: ShoppingBag,
    color: 'from-orange-500 to-rose-500',
    link: 'https://applegadgets.com.bd',
    linkLabel: 'Visit Website',
  },
  {
    title: 'AGmart',
    category: 'eCommerce',
    description: 'Website and mobile app product experience design, with usability improvements across web and mobile shopping journeys.',
    tags: ['eCommerce', 'Web', 'Mobile App', 'Product Design'],
    icon: ShoppingBag,
    color: 'from-purple-500 to-blue-500',
    link: 'https://agmart.com.bd',
    linkLabel: 'Visit Website',
  },
  {
    title: 'Internal POS & HRM Systems',
    category: 'Enterprise Applications',
    description: 'Interface and workflow design for internal business applications, making operational tasks and employee processes easier to use.',
    tags: ['POS', 'HRM', 'Enterprise', 'Workflow Design'],
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Recell',
    category: 'Independent UX Case Study',
    description: 'An independent UX case study exploring a product problem, user needs, and a proposed user-centered solution.',
    tags: ['UX Research', 'Case Study', 'Product Design'],
    icon: Smartphone,
    color: 'from-emerald-500 to-teal-600',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Selected Projects</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Selected product design work across eCommerce, mobile, and enterprise applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <Icon aria-hidden="true" className="w-16 h-16 text-white/90" />
                  <span className="absolute bottom-4 left-5 text-white font-semibold text-sm">{project.category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => <li key={tag} className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">{tag}</li>)}
                  </ul>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      {project.linkLabel}<ExternalLink className="w-4 h-4" /><ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
