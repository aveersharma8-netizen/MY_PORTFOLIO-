import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas-dark text-canvas border-t border-editorial-dark pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-dark">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-vermilion text-canvas font-editorial font-bold text-xs flex items-center justify-center">
                A
              </div>
              <span className="font-editorial font-bold text-lg text-canvas tracking-tight">
                AVEER SHARMA
              </span>
            </div>
            <p className="text-sm text-ink-muted max-w-md font-sans">
              AI Generalist · Developer · Builder combining AI, software, hardware, and product design to turn ideas into practical digital experiences.
            </p>
            <div className="pt-2">
              <SocialLinks variant="icons" size="sm" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <NavLink to="/work" className="text-canvas/80 hover:text-vermilion transition-colors duration-200">
                  Selected Work & Archive
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-canvas/80 hover:text-vermilion transition-colors duration-200">
                  About & Philosophy
                </NavLink>
              </li>
              <li>
                <NavLink to="/achievements" className="text-canvas/80 hover:text-vermilion transition-colors duration-200">
                  Hackathons & Proof
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-canvas/80 hover:text-vermilion transition-colors duration-200">
                  Get in Touch
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Focus Areas Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Core Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-canvas/70">
              <li>· AI & Quantized SLMs</li>
              <li>· Full-Stack Web Development</li>
              <li>· Embedded IoT & Hardware</li>
              <li>· Product Thinking & UI/UX</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-muted space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Aveer Sharma. All rights reserved.
          </div>
          <div>
            Editorial + Minimal + Technical + Human
          </div>
        </div>
      </div>
    </footer>
  );
};
