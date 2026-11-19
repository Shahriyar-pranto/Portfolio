'use client';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { PortfolioProject } from '@/data/projects';

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const Icon = project.icon;

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br sm:h-48 ${project.color}`}>
        <Icon aria-hidden="true" className="h-16 w-16 text-white/90" />
        <span className="absolute bottom-4 left-5 text-sm font-semibold text-white">{project.category}</span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{project.description}</p>
        <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${project.title} project skills`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300 sm:text-sm">
              {tag}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Visit project <ExternalLink aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
