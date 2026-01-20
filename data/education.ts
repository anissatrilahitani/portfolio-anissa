export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
}

export const education: Education[] = [
  {
    id: 'uin-bandung',
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Sunan Gunung Djati State Islamic University Bandung',
    location: 'Bandung, Indonesia',
    startDate: '2021',
    endDate: '2025',
    description:
      'Final Project: Development of a Web-Based SIBI Sign Language Learning Application Using YOLOv8 for Image Classification designed to recognize Indonesian sign language gestures (A-Z, 1-9) and support interactive learning.',
  },
]
