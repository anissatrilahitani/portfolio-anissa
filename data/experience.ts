// data/experience.ts
export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  type?: 'work' | 'freelance' | 'internship' | 'leadership'
}

export const experiences: Experience[] = [
  // Freelance Experience
  {
    id: 'freelance-assessment',
    title: 'Freelance System Information Assessment Report',
    company: 'Raudhatul Athfal',
    location: 'Remote',
    startDate: 'July 2025',
    endDate: 'July 2025',
    description:
      'Developed a web-based information system for system assessment and reporting purposes as a freelance project.',
    achievements: [
      'Built backend services using NestJS with TypeScript to handle data processing and business logic',
      'Designed and implemented RESTful APIs to support system functionality',
      'Developed the frontend using Next.js, JavaScript, and Tailwind CSS for a responsive user interface',
      'Managed and integrated the database using PostgreSQL, including data modeling and CRUD operations',
    ],
    type: 'work',
  },
  // Internship Experience
  {
    id: 'backend-assistant',
    title: 'Backend Developer Assistant',
    company:
      'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Sumedang',
    location: 'Sumedang, Indonesia',
    startDate: 'September 2024',
    endDate: 'December 2024',
    description:
      'Assisted in backend development for processing, managing, and validating business registration data for micro, small, and medium enterprises (UMKM).',
    achievements: [
      'Assisted in processing, managing, and validating business registration (NIB) data for UMKM using structured backend workflows',
      'Supported CRUD operations for UMKM data, ensuring data accuracy, consistency, and integrity in the database',
      'Assisted in data verification, cleaning, and normalization to maintain compliant and reliable records',
      'Collaborated in designing backend data flows and system logic based on business requirements',
      'Helped integrate backend processes with internal systems to support efficient data management and reporting',
    ],
    type: 'work',
  },
]
