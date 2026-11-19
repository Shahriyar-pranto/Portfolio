'use client';

import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

/** Loads project records inside the client boundary so icon/component values
 * can never be serialized from the /projects server page as props. */
export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-7 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
