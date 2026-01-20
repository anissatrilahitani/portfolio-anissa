export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/anissatrilahitani',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anissa-tri-lahitani/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:anissatrilahitani2@gmail.com',
    icon: 'mail',
  },
  {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+6285294943505',
    icon: 'phone',
  },
]
