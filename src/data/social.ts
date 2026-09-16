export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  email?: string;
}

// Centralized Social Links Configuration
// Add or edit URLs here. If a value is empty (""), it will automatically hide across the entire UI.
export const socialLinks: SocialLinks = {
  github: "https://github.com/aveersharma8-netizen",
  linkedin: "https://www.linkedin.com/in/aveer-sharma-31408038a",
  instagram: "https://www.instagram.com/itx_veera.02",
  twitter: "", // Hidden automatically
  youtube: "", // Hidden automatically
  email: "aveersharma8@gmail.com"
};

export type SocialPlatform = keyof SocialLinks;

export interface SocialItem {
  id: SocialPlatform;
  label: string;
  url: string;
}

export function getActiveSocialLinks(): SocialItem[] {
  const platforms: { id: SocialPlatform; label: string }[] = [
    { id: 'github', label: 'GitHub' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'twitter', label: 'X / Twitter' },
    { id: 'youtube', label: 'YouTube' },
  ];

  return platforms
    .filter(p => !!socialLinks[p.id] && socialLinks[p.id]?.trim() !== '')
    .map(p => ({
      id: p.id,
      label: p.label,
      url: socialLinks[p.id] as string,
    }));
}
