import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pablo Andrés Mariano M. - Analista Programador Computacional',
  description: 'Portfolio profesional de Pablo Andrés Mariano M., especialista en PHP/Laravel y desarrollo full-stack. Experiencia en sistemas de gestión, análisis de datos y transformación digital.',
  keywords: 'PHP, Laravel, React, TypeScript, Full-Stack Developer, Analista Programador, Desarrollo Web, MediTrack, Chile',
  authors: [{ name: 'Pablo Andrés Mariano M.' }],
  creator: 'Pablo Andrés Mariano M.',
  publisher: 'Pablo Andrés Mariano M.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-dominio.com/',
    title: 'Pablo Andrés Mariano M. - Analista Programador Computacional',
    description: 'Portfolio profesional especializado en PHP/Laravel y desarrollo full-stack',
    siteName: 'Pablo Mariano Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pablo Andrés Mariano M. - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Andrés Mariano M. - Analista Programador Computacional',
    description: 'Portfolio profesional especializado en PHP/Laravel y desarrollo full-stack',
    images: ['/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}