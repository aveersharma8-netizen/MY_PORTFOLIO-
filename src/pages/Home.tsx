import React from 'react';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { ProjectCard } from '../components/ProjectCard';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectVisual } from '../components/ProjectVisual';
import { ArrowRight, ArrowUpRight, Cpu, ShieldCheck, Code2, Flame, Layers } from 'lucide-react';
import { socialLinks } from '../data/social';

export const Home: React.FC = () => {
  // Selected Work: NCERT Nexus, Offline AI Student App, FrostAlert Pro
  const selectedProjects = projects.filter(p => p.featured && p.id !== 'would-you-rather-roast');
  // Current in-progress builds
  const currentBuilds = projects.filter(p => p.status === 'In Progress');

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-editorial text-xs font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-vermilion" />
              <span>Available for collaborations & projects</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink leading-[1.08]">
                AVEER SHARMA
              </h1>
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-vermilion uppercase">
                AI Generalist · Developer · Builder
              </p>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="font-editorial text-2xl sm:text-3xl font-semibold text-ink leading-snug">
                I build things worth using.
              </p>
              <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed">
                Class 11 builder combining artificial intelligence, software engineering, hardware, and product design to solve real problems and build functional projects.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <NavLink
                to="/work"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-all duration-200 shadow-card hover:scale-[1.02]"
              >
                <span>View my work</span>
                <ArrowRight size={15} />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-surface text-ink border border-border-subtle font-mono text-xs font-bold hover:bg-canvas hover:border-ink transition-all duration-200"
              >
                <span>Let's talk</span>
                <ArrowUpRight size={15} />
              </NavLink>
            </div>

            {/* Core Capability Pills */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-editorial text-xs font-mono text-ink-muted">
              <span className="flex items-center space-x-1.5">
                <Code2 size={14} className="text-vermilion" />
                <span>AI & Document Systems</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Cpu size={14} className="text-amber-600" />
                <span>ESP32 Hardware & Sensors</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Layers size={14} className="text-sky-600" />
                <span>Web & Mobile Apps</span>
              </span>
            </div>
          </div>

          {/* Right Visual Composition Column (Real Project Material & Demos) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface border-2 border-ink rounded-3xl p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between border-b border-editorial pb-3">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  Active Builds & Project Visuals
                </span>
                <span className="font-mono text-[10px] text-vermilion font-bold">REAL EVIDENCE</span>
              </div>

              {/* Real Project Previews */}
              <div className="space-y-3">
                <div className="bg-canvas rounded-xl p-3.5 border border-editorial">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-editorial text-sm font-bold text-ink">NCERT Nexus</span>
                    <StatusBadge status="In Progress" size="sm" />
                  </div>
                  <ProjectVisual project={projects[0]} compact />
                </div>

                <div className="bg-canvas rounded-xl p-3.5 border border-editorial">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-editorial text-sm font-bold text-ink">FrostAlert Pro</span>
                    <StatusBadge status="Project / Prototype" size="sm" />
                  </div>
                  <ProjectVisual project={projects[2]} compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP (VERIFIED HACKATHONS & PROOF) */}
      <section className="bg-surface border-y border-editorial py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-vermilion font-bold block">
                Competition Proof & Standings
              </span>
              <h2 className="font-editorial text-2xl font-bold text-ink mt-1">
                Verified Evidence
              </h2>
            </div>
            <NavLink
              to="/achievements"
              className="font-mono text-xs font-semibold text-ink-secondary hover:text-vermilion flex items-center space-x-1"
            >
              <span>View details</span>
              <ArrowRight size={14} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div 
                key={item.id} 
                className="bg-canvas p-6 rounded-2xl border border-editorial space-y-3 hover:border-ink/30 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-vermilion bg-vermilion/10 px-3 py-1 rounded-full border border-vermilion/20">
                    🏆 {item.position}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">{item.location} · {item.date}</span>
                </div>
                <h3 className="font-editorial text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-emerald-800">
                  <ShieldCheck size={14} />
                  <span>{item.proofText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-editorial pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-1">
              Featured Case Studies
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-ink">
              Selected Work
            </h2>
          </div>
          <NavLink
            to="/work"
            className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-ink hover:text-vermilion transition-colors duration-200"
          >
            <span>View all work archive (7 projects) →</span>
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CURRENTLY BUILDING SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-canvas border-2 border-ink rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial pb-6">
            <div>
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
                ACTIVE LAB BUILD
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-ink">
                Currently In Progress
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-xs">
              Clear status updates on what I'm actively building right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentBuilds.map((build) => (
              <div key={build.id} className="p-6 rounded-2xl bg-surface border border-editorial space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-xl font-bold text-ink">{build.title}</h3>
                  <StatusBadge status={build.status} size="sm" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {build.currentStatusText}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-border-subtle">
                  <span className="font-mono text-[11px] text-ink-muted">{build.category}</span>
                  <NavLink 
                    to={`/work/${build.id}`} 
                    className="font-mono text-xs font-semibold text-ink hover:text-vermilion flex items-center space-x-1"
                  >
                    <span>Read case study →</span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALITY CALLOUT: "I DON'T ONLY BUILD SERIOUS STUFF" */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-surface border border-editorial rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 font-mono text-xs text-vermilion font-bold uppercase tracking-wider">
                <Flame size={16} />
                <span>Interactive Experience</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
                I don't only build serious stuff.
              </h2>
              <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                Great products require engaging user experiences, not just AI algorithms or hardware circuits. I built the <strong className="text-ink">Would You Rather — Fully Roasting Game</strong> as a fast-paced, interactive web game.
              </p>
              <div className="pt-2">
                <NavLink
                  to="/work/would-you-rather-roast"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-colors duration-200"
                >
                  <span>Play the Game →</span>
                </NavLink>
              </div>
            </div>

            {/* Playable Game Preview Visual Card */}
            <div className="lg:col-span-6">
              <ProjectVisual project={projects.find(p => p.id === 'would-you-rather-roast')!} />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="bg-canvas-dark text-canvas rounded-3xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden border border-editorial-dark shadow-card">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
            Let's Collaborate
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-canvas leading-tight max-w-3xl mx-auto">
            Have something worth building?
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
            Whether it's an AI product idea, an IoT hardware project, or software collaboration — let me know.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-vermilion text-canvas font-mono text-xs font-bold hover:bg-vermilion-hover transition-all duration-200 hover:scale-105"
              >
                <span>Let's talk ({socialLinks.email})</span>
                <ArrowUpRight size={16} />
              </a>
            )}
            <NavLink
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-surface-dark text-canvas font-mono text-xs font-bold hover:bg-surface-dark-hover transition-all duration-200"
            >
              <span>Contact Details →</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
