import React from 'react';
import { achievements } from '../data/achievements';
import { Trophy, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-editorial pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
          Hackathons & Competitions
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-ink tracking-tight">
          Achievements & Evidence
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed">
          Competition standings and hackathon placements. Each item represents technical work evaluated by official judging panels.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-8">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-canvas border-2 border-ink rounded-3xl p-8 shadow-card space-y-6 hover:border-vermilion transition-colors duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-editorial pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-vermilion/10 text-vermilion flex items-center justify-center font-bold">
                  <Trophy size={20} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-ink">
                    {item.title}
                  </h2>
                </div>
              </div>
              <span className="font-mono text-sm font-extrabold text-canvas bg-ink px-4 py-1.5 rounded-full">
                🏆 {item.position}
              </span>
            </div>

            <p className="font-sans text-base text-ink leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-editorial text-xs font-mono text-ink-muted">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5">
                  <MapPin size={14} className="text-vermilion" />
                  <span>{item.location}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </span>
              </div>

              {item.proofText && (
                <div className="inline-flex items-center space-x-1.5 text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck size={14} />
                  <span>{item.proofText}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
