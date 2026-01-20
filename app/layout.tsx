import type { Metadata } from 'next'
import { ClientLayout } from './client-layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anissa Tri Lahitani | Backend Developer',
  description:
    'Backend Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.',
  metadataBase: new URL('https://anissatrilahitani.com'),

  // Basic metadata
  applicationName: 'Anissa Tri Lahitani Portfolio',
  authors: [{ name: 'Anissa Tri Lahitani' }],
  keywords: ['Backend Developer', 'Next.js', 'React', 'Backend Developer'],

  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: { url: '/apple-touch-icon.png' },
  },

  alternates: {
    canonical: 'https://anissatrilahitani.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
