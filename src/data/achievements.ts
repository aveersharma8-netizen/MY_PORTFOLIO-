export interface Achievement {
  id: string;
  title: string;
  position: string;
  category: string;
  date: string;
  location: string;
  description: string;
  verified: boolean;
  tags: string[];
  proofText?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'aaroh-iiitd',
    title: 'AAROH XII IIITD Hackathon',
    position: '2nd Position',
    category: 'Robotics Category',
    date: 'August 2026',
    location: 'IIIT Delhi',
    description: 'Secured 2nd Position in the Robotics category at IIIT Delhi\'s annual technical hackathon AAROH for building an autonomous disaster relief bot hardware prototype.',
    verified: true,
    tags: ['Robotics', 'Hardware', 'IIIT Delhi'],
    proofText: 'Verified Placement & On-site Hardware Demo'
  },
  {
    id: 'matrix-delhi',
    title: 'MATRIX Delhi',
    position: '4th Position',
    category: 'Tech & Innovation Competition',
    date: '2026',
    location: 'Delhi',
    description: 'Achieved 4th Position in the regional tech competition for software architecture and hardware-software integration.',
    verified: true,
    tags: ['Software', 'Hardware Integration', 'Delhi'],
    proofText: 'Verified Regional Finalist Placement'
  }
];
