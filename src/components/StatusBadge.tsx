import React from 'react';
import { ProjectStatus } from '../data/projects';

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getColors = () => {
    switch (status) {
      case 'Built':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'In Progress':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
      case 'Project / Prototype':
      case 'Project':
        return 'bg-stone-100 text-stone-800 border-stone-300/80';
      case 'Concept / Development':
        return 'bg-zinc-100 text-zinc-700 border-zinc-300/80';
      default:
        return 'bg-surface text-ink border-border-subtle';
    }
  };

  const getDotColor = () => {
    switch (status) {
      case 'Built':
        return 'bg-emerald-500';
      case 'In Progress':
        return 'bg-amber-500 animate-pulse';
      case 'Project / Prototype':
      case 'Project':
        return 'bg-stone-500';
      case 'Concept / Development':
        return 'bg-zinc-400';
      default:
        return 'bg-ink';
    }
  };

  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2 py-0.5 space-x-1.5' 
    : 'text-xs px-2.5 py-1 space-x-2';

  return (
    <span className={`inline-flex items-center font-mono font-medium rounded-full border ${getColors()} ${sizeClasses}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} />
      <span>{status}</span>
    </span>
  );
};
