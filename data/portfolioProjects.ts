import projectPages from './projectPages.json';

export type PortfolioProject = {
  id: number;
  title: string;
  label: string;
  color: string;
  desc: string;
  pdfUrl: string;
  videoUrl?: string;
  pages: { src: string; width: number; height: number }[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: 'Between Bodies',
    label: 'SPACE INSTALLATION',
    color: '#E94B2C',
    desc: 'A space installation offering a space for contemplative healing, focusing on contemporary societal perspectives regarding organ transplantation and the phenomenon of donation.',
    pdfUrl: '/projects/between-bodies/between-bodies.pdf',
    videoUrl: '/projects/between-bodies/between-bodies.mp4',
    pages: projectPages['between-bodies']
  },
  {
    id: 2,
    title: 'Bleach Alert',
    label: 'COOPERATIVE MULTIPLAYER GAME',
    color: '#1989A8',
    desc: 'A cooperative multiplayer game dedicated to addressing coral bleaching.',
    pdfUrl: '/projects/bleach-alert/bleach-alert.pdf',
    pages: projectPages['bleach-alert']
  },
  {
    id: 3,
    title: 'Coolcore Workwear',
    label: 'WEARABLE INTERACTION',
    color: '#F19A18',
    desc: 'Adaptive water-cooling smart workwear for high-temperature industrial environments, combining responsive materials, biosensing modules, and a mobile interaction system.',
    pdfUrl: '/projects/coolcore-workwear/coolcore-workwear.pdf',
    pages: projectPages['coolcore-workwear']
  },
  {
    id: 4,
    title: 'Coral Care',
    label: 'SUSTAINABLE COMMUNICATION',
    color: '#E83E91',
    desc: 'A coral-friendly sunscreen communication system that turns reef protection into a clear, practical, and encouraging everyday choice.',
    pdfUrl: '/projects/coral-care/coral-care.pdf',
    pages: projectPages['coral-care']
  }
];

export const OTHER_WORKS: PortfolioProject = {
  id: 5,
  title: 'Other Works',
  label: 'MORE EXPLORATIONS',
  color: '#7963a8',
  desc: 'A collection of additional works and creative explorations.',
  pdfUrl: '/projects/other-works/other-works.pdf',
  pages: projectPages['other-works'],
};
