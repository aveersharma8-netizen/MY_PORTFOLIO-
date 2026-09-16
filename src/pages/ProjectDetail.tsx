import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { getProjectById, projects } from '../data/projects';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectVisual } from '../components/ProjectVisual';
import { WouldYouRatherGame } from '../components/WouldYouRatherGame';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project for seamless navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
      {/* Back Link */}
      <div>
        <NavLink
          to="/work"
          className="inline-flex items-center space-x-2 font-mono text-xs font-semibold text-ink-secondary hover:text-vermilion transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          <span>Back to Work Archive</span>
        </NavLink>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-editorial pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs font-bold text-ink-muted">
            CASE STUDY 0{project.order} OF 0{projects.length}
          </span>
          <StatusBadge status={project.status} size="md" />
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
          {project.title}
        </h1>

        <p className="font-editorial text-xl font-medium text-vermilion leading-relaxed">
          {project.tagline}
        </p>

        <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-ink-secondary">
          <span className="bg-surface px-3 py-1 rounded-full border border-border-subtle">
            Category: {project.category}
          </span>
        </div>
      </div>

      {/* 01. OVERVIEW */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">01.</span>
          <span>Overview</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed bg-surface p-6 rounded-2xl border border-editorial">
          {project.description}
        </p>
      </section>

      {/* 02. PROBLEM / MOTIVATION */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">02.</span>
          <span>Problem / Motivation</span>
        </h2>
        <p className="font-sans text-base text-ink-secondary leading-relaxed bg-canvas p-6 rounded-2xl border border-editorial">
          {project.whyIStartedIt}
        </p>
      </section>

      {/* 03. WHAT I'M BUILDING */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">03.</span>
          <span>What I'm Building</span>
        </h2>
        <div className="bg-surface p-6 rounded-2xl border border-editorial">
          <ul className="space-y-3 font-sans text-sm sm:text-base text-ink">
            {project.whatImBuilding.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-vermilion flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04. VISUALS / INTERACTIVE EXPERIENCE */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">04.</span>
          <span>Project Visuals & Demo</span>
        </h2>

        {project.isPlayable ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-sans text-sm flex items-center space-x-2">
              <Sparkles size={18} className="text-emerald-700" />
              <span><strong>Playable Interactive Experience:</strong> Test the Would You Rather game directly below!</span>
            </div>
            <WouldYouRatherGame />
          </div>
        ) : (
          <div className="space-y-4">
            <ProjectVisual project={project} />
          </div>
        )}
      </section>

      {/* 05. TECHNOLOGY */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">05.</span>
          <span>Technology</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full bg-surface text-ink border border-editorial"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 06. CURRENT STATUS */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">06.</span>
          <span>Current Status</span>
        </h2>
        <div className="p-6 rounded-2xl bg-canvas border border-editorial space-y-3">
          <div className="flex items-center space-x-3">
            <StatusBadge status={project.status} size="md" />
            <span className="font-mono text-xs text-ink-muted">Development Record</span>
          </div>
          <p className="font-sans text-base text-ink-secondary leading-relaxed">
            {project.currentStatusText}
          </p>
        </div>
      </section>

      {/* 07. WHAT'S NEXT */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-ink flex items-center space-x-2">
          <span className="font-mono text-xs text-vermilion font-bold">07.</span>
          <span>What's Next</span>
        </h2>
        <p className="font-sans text-base text-ink-secondary leading-relaxed bg-surface p-6 rounded-2xl border border-editorial">
          {project.whatsNext}
        </p>
      </section>

      {/* 08. NEXT PROJECT NAVIGATION */}
      <section className="pt-8 border-t border-editorial">
        <NavLink
          to={`/work/${nextProject.id}`}
          className="group block p-8 rounded-3xl bg-surface hover:bg-canvas border border-editorial hover:border-vermilion transition-all duration-300 shadow-subtle"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-1">
                Next Case Study →
              </span>
              <h3 className="font-editorial text-2xl font-bold text-ink group-hover:text-vermilion transition-colors duration-200">
                {nextProject.title}
              </h3>
              <p className="font-sans text-xs text-ink-secondary mt-1">
                {nextProject.category}
              </p>
            </div>
            <div className="p-3 rounded-full bg-canvas border border-border-subtle group-hover:bg-vermilion group-hover:text-canvas transition-colors duration-200">
              <ArrowRight size={20} />
            </div>
          </div>
        </NavLink>
      </section>
    </div>
  );
};
