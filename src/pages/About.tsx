import React from 'react';
import { bioData } from '../data/bio';
import { SocialLinks } from '../components/SocialLinks';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-editorial pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
          Background & Approach
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-ink tracking-tight">
          About Aveer
        </h1>
        <p className="font-editorial text-xl sm:text-2xl font-semibold text-ink leading-snug">
          I'm a Class 11 student who learns by building things.
        </p>
      </div>

      {/* Narrative Section */}
      <section className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-ink">
          Learning by Doing
        </h2>
        <div className="space-y-4 font-sans text-base sm:text-lg text-ink-secondary leading-relaxed bg-surface p-8 rounded-3xl border border-editorial">
          {bioData.aboutStory.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* WHAT I BUILD SECTION (4 CORE PILLARS) */}
      <section className="space-y-6">
        <div className="border-b border-editorial pb-4">
          <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block">
            Capabilities Matrix
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-ink mt-1">
            What I Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bioData.whatIBuild.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-canvas p-6 rounded-2xl border border-editorial space-y-3 hover:border-ink/30 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="font-mono text-[10px] text-ink-muted">0{idx + 1}</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-ink">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="font-mono text-[11px] text-ink-secondary bg-surface px-2.5 py-1 rounded border border-border-subtle">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Working Philosophy */}
      <section className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-ink">
          Working Philosophy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {bioData.workingPhilosophy.map((item) => (
            <div key={item.step} className="bg-surface p-6 rounded-2xl border border-editorial space-y-3">
              <span className="font-mono text-xs font-bold text-vermilion bg-vermilion/10 px-2.5 py-1 rounded-full inline-block">
                STEP {item.step}
              </span>
              <h3 className="font-editorial text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Toolkit */}
      <section className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-ink">
          Technical Tools & Stack
        </h2>
        <div className="bg-canvas border-2 border-ink rounded-3xl p-8 space-y-6">
          <div>
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider block mb-3">
              Languages & Core Logic
            </span>
            <div className="flex flex-wrap gap-2">
              {bioData.toolkit.languages.map(item => (
                <span key={item} className="font-mono text-xs font-semibold px-3 py-1 rounded-lg bg-surface border border-editorial text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider block mb-3">
              AI Tools & Data Systems
            </span>
            <div className="flex flex-wrap gap-2">
              {bioData.toolkit.aiTools.map(item => (
                <span key={item} className="font-mono text-xs font-semibold px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider block mb-3">
              Hardware & Embedded IoT
            </span>
            <div className="flex flex-wrap gap-2">
              {bioData.toolkit.hardware.map(item => (
                <span key={item} className="font-mono text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Row */}
      <section className="pt-8 border-t border-editorial flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-editorial text-xl font-bold text-ink">Connect with Aveer</h3>
          <p className="font-sans text-xs text-ink-secondary">Direct personal developer handles.</p>
        </div>
        <SocialLinks variant="pills" />
      </section>
    </div>
  );
};
