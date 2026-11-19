'use client';

import { Briefcase, Building2, ExternalLink, Globe, Monitor, Smartphone, Users } from 'lucide-react';
import type { PortfolioProject } from '@/data/projects';

const projectIcons = { briefcase: Briefcase, building: Building2, globe: Globe, monitor: Monitor, smartphone: Smartphone, users: Users } as const;

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const Icon = projectIcons[project.icon];
  return (
    <article className="glass-strong overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br sm:h-48 ${project.color}`}><Icon aria-hidden="true" className="h-16 w-16 text-white/90 drop-shadow-lg" /><span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md">{project.category}</span></div>
      <div className="p-5 sm:p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{project.description}</p>
        <ul className="mb-5 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="glass rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-300 sm:text-sm">{tag}</li>)}</ul>
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-700 dark:text-white dark:hover:text-purple-300"><span>Visit project</span><ExternalLink aria-hidden="true" className="h-4 w-4" /><span className="sr-only">(opens in a new tab)</span></a>}
      </div>
    </article>
  );
}
