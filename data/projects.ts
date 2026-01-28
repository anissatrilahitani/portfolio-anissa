export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  achievements: string[]
  image: string
  github?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'sibiku-sibi',
    title: 'Sibiku:SIBI',
    description:
      'A web-based learning platform for Indonesian Sign Language with machine learning for gesture recognition.',
    longDescription:
      'Developed as a Final Project, this web-based SIBI Sign Language Learning Application uses YOLOv8 for image classification to recognize Indonesian sign language gestures (A-Z, 1-9) and supports interactive learning.',
    technologies: [
      'Python',
      'TypeScript',
      'Flask',
      'NestJS',
      'MongoDB',
      'Docker',
      'YOLOv8',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Axios',
      'TanStack Query',
      'Redux',
      'Machine Learning',
    ],
    achievements: [
      'Built a full-stack web application for learning Indonesian Sign Language (SIBI)',
      'Implemented real-time gesture recognition using YOLOv8 machine learning model',
      'Designed an interactive learning interface to improve user engagement',
      'Integrated frontend and backend with RESTful APIs for seamless data flow',
    ],
    image: '/images/projects/sibiku/sibiku.jpeg',
    // github: '', // (Opsional) Tambahkan jika ada
    liveUrl: 'https://sibi-frontend.vercel.app',
    featured: true,
  },
  {
    id: 'e-rapor',
    title: 'E-Raport - PAUD Online Report System',
    description:
      'A web-based reporting system for early childhood education to manage and access student report cards digitally.',
    longDescription:
      'Developed a complete online reporting system for PAUD (Early Childhood Education) institutions to digitize student report cards, enabling teachers to input grades and parents to access reports securely.',
    technologies: [
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
    ],
    achievements: [
      'Created a digital solution for PAUD report management, replacing manual processes',
      'Implemented role-based access for teachers, parents, and administrators',
      'Designed a responsive UI with Tailwind CSS for easy use on various devices',
      'Built secure RESTful APIs with NestJS for data handling',
    ],
    image: '/images/projects/e-raport/e-raport.jpeg',
    featured: true,
    liveUrl: 'https://radarunaim.com',
  },
  {
    id: 'zing-zone',
    title: 'Zing-Zone - Real Estate Marketplace',
    description:
      'A marketplace platform that allows users to browse, list, and manage real estate properties online.',
    technologies: ['JavaScript', 'Firebase', 'Chakra UI', 'Tailwind CSS'],
    achievements: [
      'Developed a real estate listing platform with user authentication and property management',
      'Implemented search and filter functionalities for efficient property discovery',
      'Created a responsive design using Chakra UI and Tailwind CSS',
    ],
    image: '/images/projects/zing-zone/zing-zone.jpeg',
    featured: false,
  },
  {
    id: 'taskplus',
    title: 'TaskPlus - Task Management App',
    description:
      'An all-in-one application for managing daily tasks and notes with reminder features.',
    technologies: [
      'JavaScript',
      'Express.js',
      'React.js',
      'Tailwind CSS',
      'MongoDB',
    ],
    achievements: [
      'Built a full-stack task management application with CRUD operations',
      'Integrated reminder notifications for upcoming tasks',
      'Implemented user authentication and data persistence with MongoDB',
    ],
    image: '/images/projects/taskplus/taskplus.jpeg',
    featured: false,
  },
  {
    id: 'barayaart',
    title: 'BarayaArt - Art Sharing Social Platform',
    description:
      'A social platform for sharing, saving, and discovering artworks, with community interaction features.',
    technologies: [
      'JavaScript',
      'Express.js',
      'React.js',
      'Tailwind CSS',
      'MongoDB',
      'MongoDB',
    ],
    achievements: [
      'Created a community-driven art sharing platform with user profiles and galleries',
      'Implemented like, comment, and save features to enhance user interaction',
      'Designed a visually appealing UI tailored for art display and discovery',
    ],
    image: '/images/projects/baraya-art/baraya-art.jpeg',
    featured: true,
  },
  {
    id: 'posivibes',
    title: 'PosiVibes - Positive Social Media Application',
    description:
      'A social media platform designed to spread positivity and encourage friendly online interactions.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'React.js',
      'MongoDB',
    ],
    achievements: [
      'Built a social media app focused on positive content sharing and community support',
      'Implemented post creation, commenting, and liking features in a friendly environment',
      'Designed an uplifting UI to promote positive user engagement',
    ],
    image: '/images/projects/posivibes/posivibes.jpeg',
    featured: false,
  },
]
