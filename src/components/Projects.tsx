'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const featuredProjects = projects.slice(0, 4);

  return (
    <section ref={ref} className="bg-white px-4 py-12 transition-colors duration-300 dark:bg-gray-900 sm:px-6 sm:py-16 md:px-8 md:py-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 id="projects-heading" className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">Selected Projects</h2>
          <div className="mx-auto mb-4 h-1 w-40 bg-purple-600 dark:bg-purple-500 sm:mb-6" />
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            A selection of web, mobile, CRM, recruitment, and product design work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-7 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-9 flex justify-center sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            View More Projects <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
