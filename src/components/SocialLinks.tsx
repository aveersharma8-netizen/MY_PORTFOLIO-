import React from 'react';
import { getActiveSocialLinks } from '../data/social';
import { Github, Linkedin, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'icons' | 'pills' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  variant = 'icons', 
  size = 'md',
  className = '' 
}) => {
  const links = getActiveSocialLinks();

  if (links.length === 0) return null;

  const renderIcon = (id: string) => {
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;
    switch (id) {
      case 'github':
        return <Github size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'instagram':
        return <Instagram size={iconSize} />;
      case 'twitter':
        return <Twitter size={iconSize} />;
      case 'youtube':
        return <Youtube size={iconSize} />;
      default:
        return <ExternalLink size={iconSize} />;
    }
  };

  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface text-ink hover:bg-ink hover:text-canvas text-xs font-mono transition-colors duration-200 border border-border-subtle"
          >
            {renderIcon(link.id)}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group inline-flex items-center space-x-1.5 text-sm font-medium text-ink-secondary hover:text-vermilion transition-colors duration-200"
          >
            <span>{link.label}</span>
            <ExternalLink size={13} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        ))}
      </div>
    );
  }

  // Default 'icons' variant
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
          className="p-2 rounded-full bg-surface text-ink-secondary hover:text-canvas hover:bg-ink transition-all duration-200 border border-border-subtle hover:scale-105"
        >
          {renderIcon(link.id)}
        </a>
      ))}
    </div>
  );
};
