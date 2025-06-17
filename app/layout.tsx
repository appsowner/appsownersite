import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AppsOwner - Automatización Inteligente para tu Negocio',
  description: 'Transforma tu negocio con soluciones de automatización de IA de vanguardia que impulsan la eficiencia y la innovación.',
  keywords: 'automatización, IA, inteligencia artificial, chatbots, academy, flujos de trabajo',
  authors: [{ name: 'AppsOwner' }],
  creator: 'AppsOwner',
  publisher: 'AppsOwner',
  openGraph: {
    title: 'AppsOwner - Automatización Inteligente',
    description: 'Soluciones de automatización de IA para tu negocio',
    url: 'https://www.appsowner.com',
    siteName: 'AppsOwner',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppsOwner - Automatización Inteligente',
    description: 'Soluciones de automatización de IA para tu negocio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Umami Analytics */}
        <script
          async
          src={process.env.NEXT_PUBLIC_UMAMI_URL + '/script.js'}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          data-domains="appsowner.com,www.appsowner.com"
          data-do-not-track="true"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
