'use client';

import Image from 'next/image';
import { Briefcase, Building2, ExternalLink, Globe, Monitor, Smartphone, Users } from 'lucide-react';
import type { PortfolioProject } from '@/data/projects';

const projectIcons = { briefcase: Briefcase, building: Building2, globe: Globe, monitor: Monitor, smartphone: Smartphone, users: Users } as const;

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character] ?? character);
}

function createCoverImage(project: PortfolioProject) {
  const title = escapeXml(project.title);
  const category = escapeXml(project.category);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6d28d9"/><stop offset="1" stop-color="#2563eb"/></linearGradient><radialGradient id="r"><stop stop-color="#ffffff" stop-opacity=".22"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="600" fill="url(#g)"/><circle cx="1000" cy="100" r="360" fill="url(#r)"/><circle cx="100" cy="550" r="400" fill="url(#r)"/><rect x="76" y="72" width="1048" height="456" rx="34" fill="#ffffff" fill-opacity=".12" stroke="#ffffff" stroke-opacity=".28"/><text x="128" y="248" fill="#ffffff" fill-opacity=".78" font-family="Arial,sans-serif" font-size="26" letter-spacing="7">${category.toUpperCase()}</text><text x="128" y="340" fill="#ffffff" font-family="Arial,sans-serif" font-size="64" font-weight="700">${title}</text><path d="M128 392h170" stroke="#ffffff" stroke-opacity=".7" stroke-width="6" stroke-linecap="round"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const Icon = projectIcons[project.icon];
  const image = project.image ?? createCoverImage(project);

  return (
    <article className="glass-strong overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden sm:h-56">
        <Image src={image} alt={`${project.title} project preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" className="object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md"><Icon aria-hidden="true" className="h-4 w-4" />{project.category}</span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{project.description}</p>
        <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${project.title} project skills`}>{project.tags.map((tag) => <li key={tag} className="glass rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-300 sm:text-sm">{tag}</li>)}</ul>
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-700 dark:text-white dark:hover:text-purple-300"><span>Visit project</span><ExternalLink aria-hidden="true" className="h-4 w-4" /><span className="sr-only">(opens in a new tab)</span></a>}
      </div>
    </article>
  );
}
