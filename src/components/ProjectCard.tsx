import React from 'react';
import { NavLink } from 'react-router-dom';
import { Project } from '../data/projects';
import { StatusBadge } from './StatusBadge';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-surface border border-editorial rounded-2xl p-6 sm:p-8 hover:border-vermilion/40 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-ink-muted">
              0{project.order}
            </span>
            <span className="font-mono text-[11px] text-ink-secondary bg-canvas px-2.5 py-1 rounded-full border border-border-subtle">
              {project.category}
            </span>
          </div>
          <StatusBadge status={project.status} size="sm" />
        </div>

        {/* Tailored Real Visual Block */}
        <div className="my-5">
          <ProjectVisual project={project} />
        </div>

        {/* Title & Human Description */}
        <h3 className="font-editorial text-2xl font-bold text-ink group-hover:text-vermilion transition-colors duration-200 mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="text-[11px] font-mono text-ink-muted bg-canvas/90 px-2.5 py-0.5 rounded border border-editorial"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-editorial flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-ink-secondary group-hover:text-ink transition-colors duration-200">
          View Case Study & Details
        </span>
        <NavLink
          to={`/work/${project.id}`}
          className="p-2 rounded-full bg-canvas border border-border-subtle group-hover:bg-vermilion group-hover:text-canvas group-hover:border-vermilion transition-all duration-200"
          aria-label={`View details for ${project.title}`}
        >
          <ArrowUpRight size={16} />
        </NavLink>
      </div>
    </div>
  );
};
