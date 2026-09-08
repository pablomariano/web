import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pablo Mariano — Desarrollo de productos digitales',
  description: 'Portfolio de Pablo Mariano, analista programador especializado en sistemas de gestión, Laravel, React y TypeScript.',
  keywords: ['PHP', 'Laravel', 'React', 'TypeScript', 'desarrollo web', 'sistemas de gestión'],
  authors: [{ name: 'Pablo Andrés Mariano M.' }],
  creator: 'Pablo Andrés Mariano M.',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    title: 'Pablo Mariano — Desarrollo de productos digitales',
    description: 'Sistemas robustos, interfaces claras y productos digitales mantenibles.',
    siteName: 'Pablo Mariano Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Pablo Mariano — Desarrollo de productos digitales',
    description: 'Sistemas robustos, interfaces claras y productos digitales mantenibles.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d0f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
