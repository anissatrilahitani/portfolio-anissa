export interface ProjectGalleryImage {
  src: string
  alt?: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  achievements: string[]
  image: string
  /** Gallery images to showcase project features/screenshots */
  gallery?: ProjectGalleryImage[]
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
      'React.js',
      'MongoDB',
      'Docker',
    ],
    achievements: [
      'Built a full-stack web application for learning Indonesian Sign Language (SIBI)',
      'Implemented real-time gesture recognition using YOLOv8 machine learning model',
      'Designed an interactive learning interface to improve user engagement',
      'Integrated frontend and backend with RESTful APIs for seamless data flow',
    ],
    image: '/images/projects/sibiku/sibiku.jpeg',
    gallery: [
      {
        src: '/images/projects/sibiku/sibiku.jpeg',
        alt: 'Sibiku SIBI homepage',
        caption: 'Homepage',
      },
      {
        src: '/images/projects/sibiku/sibiku.jpeg',
        alt: 'Learning interface',
        caption: 'Interactive learning',
      },
      {
        src: '/images/projects/sibiku/sibiku.jpeg',
        alt: 'Gesture recognition',
        caption: 'Gesture recognition',
      },
    ],
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
    gallery: [
      {
        src: '/images/projects/e-raport/admin dashboard.png',
        alt: 'Admin dashboard E-Raport',
        caption: 'Admin dashboard',
      },
      {
        src: '/images/projects/e-raport/arisp raport.png',
        alt: 'Arsip raport',
        caption: 'Arsip raport',
      },
      {
        src: '/images/projects/e-raport/arsip penilaian.png',
        alt: 'Arsip penilaian',
        caption: 'Arsip penilaian',
      },
      {
        src: '/images/projects/e-raport/cetak raport.png',
        alt: 'Cetak raport',
        caption: 'Cetak raport',
      },
      {
        src: '/images/projects/e-raport/dashboard guru.png',
        alt: 'Dashboard guru',
        caption: 'Dashboard guru',
      },
      {
        src: '/images/projects/e-raport/input penilaian mingguan.png',
        alt: 'Input penilaian mingguan',
        caption: 'Input penilaian mingguan',
      },
      {
        src: '/images/projects/e-raport/input raport.png',
        alt: 'Input raport',
        caption: 'Input raport',
      },
      {
        src: '/images/projects/e-raport/list penilaian.png',
        alt: 'List penilaian',
        caption: 'List penilaian',
      },
      {
        src: '/images/projects/e-raport/master data guru.png',
        alt: 'Master data guru',
        caption: 'Master data guru',
      },
      {
        src: '/images/projects/e-raport/master data kelompok usia.png',
        alt: 'Master data kelompok usia',
        caption: 'Master data kelompok usia',
      },
      {
        src: '/images/projects/e-raport/master data rombel.png',
        alt: 'Master data rombel',
        caption: 'Master data rombel',
      },
      {
        src: '/images/projects/e-raport/master data semester.png',
        alt: 'Master data semester',
        caption: 'Master data semester',
      },
      {
        src: '/images/projects/e-raport/master data silabus.png',
        alt: 'Master data silabus',
        caption: 'Master data silabus',
      },
      {
        src: '/images/projects/e-raport/master data siswa.png',
        alt: 'Master data siswa',
        caption: 'Master data siswa',
      },
      {
        src: '/images/projects/e-raport/module ajar.png',
        alt: 'Module ajar',
        caption: 'Module ajar',
      },
      {
        src: '/images/projects/e-raport/profile sekolah.png',
        alt: 'Profile sekolah',
        caption: 'Profile sekolah',
      },
      {
        src: '/images/projects/e-raport/riwayat mengajar.png',
        alt: 'Riwayat mengajar',
        caption: 'Riwayat mengajar',
      },
    ],
    featured: true,
    liveUrl: 'https://radarunaim.com',
  },
  {
    id: 'fresh-cart',
    title: 'Fresh-Cart - E-Commerce Platform',
    description:
      'An online shopping platform for browsing products, managing carts, and completing secure checkout.',
    technologies: [
      'Nuxt',
      'Go',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Elasticsearch',
      'RabbitMQ',
      'Docker',
    ],
    achievements: [
      'Built a modern e-commerce interface with product browsing and cart management',
      'Implemented checkout and payment flow for smooth purchase completion',
      'Designed responsive pages for admin and customer-side workflows',
    ],
    image: '/images/projects/fresh-cart/home.png',
    gallery: [
      {
        src: '/images/projects/fresh-cart/home.png',
        alt: 'Fresh-Cart home page',
        caption: 'Home page',
      },
      {
        src: '/images/projects/fresh-cart/home2.png',
        alt: 'Fresh-Cart home page variation',
        caption: 'Home page variation',
      },
      {
        src: '/images/projects/fresh-cart/home-3.png',
        alt: 'Fresh-Cart home page alternative layout',
        caption: 'Home page alternative layout',
      },
      {
        src: '/images/projects/fresh-cart/login.png',
        alt: 'Fresh-Cart login page',
        caption: 'Login page',
      },
      {
        src: '/images/projects/fresh-cart/checkout.png',
        alt: 'Fresh-Cart checkout page',
        caption: 'Checkout flow',
      },
      {
        src: '/images/projects/fresh-cart/checkout2.png',
        alt: 'Fresh-Cart checkout page step two',
        caption: 'Checkout step two',
      },
      {
        src: '/images/projects/fresh-cart/payment.png',
        alt: 'Fresh-Cart payment page',
        caption: 'Payment page',
      },
      {
        src: '/images/projects/fresh-cart/payment sukses.png',
        alt: 'Fresh-Cart payment success page',
        caption: 'Payment success page',
      },
      {
        src: '/images/projects/fresh-cart/admin.png',
        alt: 'Fresh-Cart admin dashboard',
        caption: 'Admin dashboard',
      },
      {
        src: '/images/projects/fresh-cart/admin2.png',
        alt: 'Fresh-Cart admin dashboard section two',
        caption: 'Admin dashboard section two',
      },
      {
        src: '/images/projects/fresh-cart/admin3.png',
        alt: 'Fresh-Cart admin dashboard section three',
        caption: 'Admin dashboard section three',
      },
      {
        src: '/images/projects/fresh-cart/admin4.png',
        alt: 'Fresh-Cart admin dashboard section four',
        caption: 'Admin dashboard section four',
      },
    ],
    featured: true,
  },
  {
    id: 'taskplus',
    title: 'TaskPlus - Task Management App',
    description:
      'An all-in-one application for managing daily tasks and notes with reminder features.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'React.js',
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
    technologies: ['JavaScript', 'Express.js', 'React.js', 'MongoDB'],
    achievements: [
      'Created a community-driven art sharing platform with user profiles and galleries',
      'Implemented like, comment, and save features to enhance user interaction',
      'Designed a visually appealing UI tailored for art display and discovery',
    ],
    image: '/images/projects/baraya-art/baraya-art.jpeg',
    gallery: [
      {
        src: '/images/projects/baraya-art/baraya-art.jpeg',
        alt: 'BarayaArt landing page',
        caption: 'Landing page',
      },
      {
        src: '/images/projects/baraya-art/home.png',
        alt: 'BarayaArt home page',
        caption: 'Home page',
      },
      {
        src: '/images/projects/baraya-art/feed.png',
        alt: 'BarayaArt feed page',
        caption: 'Feed page',
      },
      {
        src: '/images/projects/baraya-art/login.png',
        alt: 'BarayaArt login page',
        caption: 'Login page',
      },
      {
        src: '/images/projects/baraya-art/register.png',
        alt: 'BarayaArt register page',
        caption: 'Register page',
      },
      {
        src: '/images/projects/baraya-art/see post.png',
        alt: 'BarayaArt post detail page',
        caption: 'Post detail page',
      },
      {
        src: '/images/projects/baraya-art/see profile.png',
        alt: 'BarayaArt profile page',
        caption: 'Profile page',
      },
    ],
    featured: false,
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
