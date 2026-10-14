export type PortfolioProject = {
  id: number;
  title: string;
  label: string;
  year: string;
  color: string;
  img: string;
  desc: string;
  tools: string[];
  pdfUrl: string;
  layout: 'pdf';
  previewTextColor: {
    year: string;
    label: string;
    title: string;
    description: string;
    tools: string;
    arrow: string;
    cardBorder: string;
  };
  detailImages: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: 'Between Bodies',
    label: 'SPACE INSTALLATION',
    year: '2025',
    color: '#E94B2C',
    img: '/projects/between-bodies/cover.png',
    desc: 'A space installation offering a space for contemplative healing, focusing on contemporary societal perspectives regarding organ transplantation and the phenomenon of donation.',
    tools: ['Spatial Design', 'Visual Identity', 'Editorial'],
    pdfUrl: '/projects/between-bodies/between-bodies.pdf',
    layout: 'pdf',
    previewTextColor: {
      year: '#555555', label: '#777777', title: '#111111', description: '#333333',
      tools: '#111111', arrow: '#111111', cardBorder: 'rgba(0,0,0,0.12)'
    },
    detailImages: []
  },
  {
    id: 2,
    title: 'Bleach Alert',
    label: 'COOPERATIVE MULTIPLAYER GAME',
    year: '2025',
    color: '#1989A8',
    img: '/projects/bleach-alert/cover.png',
    desc: 'A cooperative multiplayer game dedicated to addressing coral bleaching through exploration, teamwork, and ocean-care storytelling.',
    tools: ['Game Design', '3D Design', 'Interaction'],
    pdfUrl: '/projects/bleach-alert/bleach-alert.pdf',
    layout: 'pdf',
    previewTextColor: {
      year: '#555555', label: '#4B7884', title: '#111111', description: '#333333',
      tools: '#111111', arrow: '#111111', cardBorder: 'rgba(0,0,0,0.12)'
    },
    detailImages: []
  },
  {
    id: 3,
    title: 'Coolcore Workwear',
    label: 'WEARABLE INTERACTION',
    year: '2024',
    color: '#F19A18',
    img: '/projects/coolcore-workwear/cover.png',
    desc: 'Adaptive water-cooling smart workwear for high-temperature industrial environments, combining responsive materials, biosensing modules, and a mobile interaction system.',
    tools: ['Product Design', 'Wearable Tech', 'Service Design'],
    pdfUrl: '/projects/coolcore-workwear/coolcore-workwear.pdf',
    layout: 'pdf',
    previewTextColor: {
      year: '#555555', label: '#9A6500', title: '#111111', description: '#333333',
      tools: '#111111', arrow: '#111111', cardBorder: 'rgba(0,0,0,0.12)'
    },
    detailImages: []
  },
  {
    id: 4,
    title: 'Coral Care',
    label: 'SUSTAINABLE COMMUNICATION',
    year: '2024',
    color: '#E83E91',
    img: '/projects/coral-care/cover.png',
    desc: 'A coral-friendly sunscreen communication system that turns reef protection into a clear, practical, and encouraging everyday choice.',
    tools: ['Brand Design', 'Information Design', 'Packaging'],
    pdfUrl: '/projects/coral-care/coral-care.pdf',
    layout: 'pdf',
    previewTextColor: {
      year: '#555555', label: '#A33268', title: '#111111', description: '#333333',
      tools: '#111111', arrow: '#111111', cardBorder: 'rgba(0,0,0,0.12)'
    },
    detailImages: []
  }
];
