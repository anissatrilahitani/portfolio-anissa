// app/metadata.ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anissa Tri Lahitani | Portfolio',
  description: 'Backend Developer & Machine Learning Enthusiast',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
}
