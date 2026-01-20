// data/skills.ts
export type SkillCategory =
  | 'All'
  | 'Languages'
  | 'Backend Frameworks'
  | 'Frontend/Fullstack'
  | 'Databases'
  | 'Tools & Others'
  | 'Concepts'

export interface Skill {
  name: string
  category: SkillCategory
  logoKey: string // Used to generate the CDN URL
}

const allSkillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', logoKey: 'python' },
  { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
  { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
  { name: 'PHP', category: 'Languages', logoKey: 'php' },
  { name: 'Golang', category: 'Languages', logoKey: 'go' },

  // Backend Frameworks
  { name: 'NestJS', category: 'Backend Frameworks', logoKey: 'nestjs' },
  { name: 'Laravel', category: 'Backend Frameworks', logoKey: 'laravel' },
  { name: 'Express.js', category: 'Backend Frameworks', logoKey: 'express' },
  { name: 'Flask', category: 'Backend Frameworks', logoKey: 'flask' },
  { name: 'Fiber', category: 'Backend Frameworks', logoKey: 'go' },

  // Frontend/Fullstack
  { name: 'HTML', category: 'Frontend/Fullstack', logoKey: 'html5' },
  { name: 'React.js', category: 'Frontend/Fullstack', logoKey: 'react' },
  { name: 'Next.js', category: 'Frontend/Fullstack', logoKey: 'nextjs' },
  { name: 'Vue.js', category: 'Frontend/Fullstack', logoKey: 'vuejs' },
  {
    name: 'Tailwind CSS',
    category: 'Frontend/Fullstack',
    logoKey: 'tailwindcss',
  },
  { name: 'Chakra UI', category: 'Frontend/Fullstack', logoKey: 'chakraui' },

  // Databases
  { name: 'MySQL', category: 'Databases', logoKey: 'mysql' },
  { name: 'MongoDB', category: 'Databases', logoKey: 'mongodb' },
  { name: 'PostgreSQL', category: 'Databases', logoKey: 'postgresql' },
  { name: 'Redis', category: 'Databases', logoKey: 'redis' },
  { name: 'Firebase', category: 'Databases', logoKey: 'firebase' },

  // Tools & Others
  { name: 'Docker', category: 'Tools & Others', logoKey: 'docker' },
  { name: 'YOLOv8', category: 'Tools & Others', logoKey: 'pytorch' },
  {
    name: 'Microsoft Office',
    category: 'Tools & Others',
    logoKey: 'microsoft',
  },
  { name: 'Axios', category: 'Tools & Others', logoKey: 'axios' },
  { name: 'TanStack Query', category: 'Tools & Others', logoKey: 'reactquery' },
  { name: 'Redux', category: 'Tools & Others', logoKey: 'redux' },

  // Concepts
  { name: 'RESTful API', category: 'Concepts', logoKey: 'swagger' },
  { name: 'CRUD Operations', category: 'Concepts', logoKey: 'database' },
  { name: 'Backend Development', category: 'Concepts', logoKey: 'server' },
  { name: 'Machine Learning Basics', category: 'Concepts', logoKey: 'ai' },
]

// Create the skills object with categorized data
export const skills: Record<SkillCategory, Skill[]> = {
  All: allSkillsData,
  Languages: allSkillsData.filter((skill) => skill.category === 'Languages'),
  'Backend Frameworks': allSkillsData.filter(
    (skill) => skill.category === 'Backend Frameworks',
  ),
  'Frontend/Fullstack': allSkillsData.filter(
    (skill) => skill.category === 'Frontend/Fullstack',
  ),
  Databases: allSkillsData.filter((skill) => skill.category === 'Databases'),
  'Tools & Others': allSkillsData.filter(
    (skill) => skill.category === 'Tools & Others',
  ),
  Concepts: allSkillsData.filter((skill) => skill.category === 'Concepts'),
}

// Helper functions
export const getAllSkills = () => {
  return allSkillsData
}

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[]
}
