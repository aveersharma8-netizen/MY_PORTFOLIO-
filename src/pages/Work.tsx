import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Cpu, Code2, Gamepad2 } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & Software' | 'IoT & Hardware' | 'Games'>('All');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'AI & Software') return p.category.includes('AI') || p.category.includes('EdTech');
    if (activeFilter === 'IoT & Hardware') return p.category.includes('IoT');
    if (activeFilter === 'Games') return p.category.includes('Game');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-editorial pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
          Project Archive & Proof
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-ink tracking-tight">
          Selected Work
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
          A comprehensive collection of software applications, artificial intelligence implementations, on-device SLMs, and IoT hardware prototypes. All statuses represented honestly.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-4 py-2 rounded-full font-mono text-xs font-medium transition-all duration-200 ${
            activeFilter === 'All'
              ? 'bg-ink text-canvas shadow-sm'
              : 'bg-surface text-ink-secondary hover:text-ink hover:bg-surface-hover border border-border-subtle'
          }`}
        >
          All Projects ({projects.length})
        </button>

        <button
          onClick={() => setActiveFilter('AI & Software')}
          className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-mono text-xs font-medium transition-all duration-200 ${
            activeFilter === 'AI & Software'
              ? 'bg-ink text-canvas shadow-sm'
              : 'bg-surface text-ink-secondary hover:text-ink hover:bg-surface-hover border border-border-subtle'
          }`}
        >
          <Code2 size={13} />
          <span>AI & Software</span>
        </button>

        <button
          onClick={() => setActiveFilter('IoT & Hardware')}
          className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-mono text-xs font-medium transition-all duration-200 ${
            activeFilter === 'IoT & Hardware'
              ? 'bg-ink text-canvas shadow-sm'
              : 'bg-surface text-ink-secondary hover:text-ink hover:bg-surface-hover border border-border-subtle'
          }`}
        >
          <Cpu size={13} />
          <span>IoT & Hardware</span>
        </button>

        <button
          onClick={() => setActiveFilter('Games')}
          className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-mono text-xs font-medium transition-all duration-200 ${
            activeFilter === 'Games'
              ? 'bg-ink text-canvas shadow-sm'
              : 'bg-surface text-ink-secondary hover:text-ink hover:bg-surface-hover border border-border-subtle'
          }`}
        >
          <Gamepad2 size={13} />
          <span>Interactive & Games</span>
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
