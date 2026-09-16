import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/social';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-canvas/90 backdrop-blur-md border-b border-editorial py-3.5 shadow-subtle' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink 
          to="/" 
          className="group flex items-center space-x-3 text-ink focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-ink text-canvas font-editorial font-bold text-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-editorial font-bold text-base tracking-tight group-hover:text-vermilion transition-colors duration-200">
              AVEER SHARMA
            </span>
            <span className="font-mono text-[10px] text-ink-muted tracking-wider uppercase">
              Builder · AI
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 border border-border-subtle bg-surface/70 backdrop-blur-sm px-4 py-1.5 rounded-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-ink text-canvas shadow-sm'
                    : 'text-ink-secondary hover:text-ink hover:bg-canvas/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Contact CTA Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium px-4 py-2 rounded-full border border-border-subtle bg-canvas hover:bg-vermilion hover:text-canvas hover:border-vermilion transition-all duration-200"
            >
              <span>Say Hello</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center space-x-2 px-3 py-1.5 rounded-full border border-border-subtle bg-surface text-ink text-xs font-mono font-medium focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-canvas z-40 px-6 py-8 flex flex-col justify-between animate-fadeIn border-t border-editorial">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              Navigation
            </span>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `font-editorial text-2xl font-bold py-2 border-b border-border-subtle flex items-center justify-between ${
                      isActive ? 'text-vermilion pl-2' : 'text-ink hover:pl-2'
                    } transition-all duration-200`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-ink-muted font-normal">
                    0{navItems.indexOf(item) + 1}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-border-subtle">
            <div className="font-mono text-xs text-ink-muted">
              AVEER SHARMA · AI Generalist · Developer · Builder
            </div>
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-ink text-canvas font-mono text-sm font-medium hover:bg-vermilion transition-colors duration-200"
              >
                <span>Let's talk</span>
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
