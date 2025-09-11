import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dimitri Rayer - Tech Lead & Architecte solution',
  description: 'Développeur expérimenté avec plus de 16 ans d\'expérience dans la livraison de projets IT complexes pour des partenaires européens.',
  keywords: ['Dimitri Rayer', 'Tech Lead', 'Architecte solution', 'Développeur', 'IT', 'Consultant'],
  authors: [{ name: 'Dimitri Rayer' }],
  creator: 'Dimitri Rayer',
  publisher: 'Dimitri Rayer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deka.github.io/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dimitri Rayer - Tech Lead & Architecte solution',
    description: 'Développeur expérimenté avec plus de 16 ans d\'expérience dans la livraison de projets IT complexes.',
    url: 'https://deka.github.io/',
    siteName: 'Dimitri Rayer',
    images: [
      {
        url: '/logo-cercle.png',
        width: 1200,
        height: 630,
        alt: 'Dimitri Rayer - Tech Lead & Architecte solution',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimitri Rayer - Tech Lead & Architecte solution',
    description: 'Développeur expérimenté avec plus de 16 ans d\'expérience dans la livraison de projets IT complexes.',
    images: ['/log-cercle.png'],
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
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-blue text-white px-4 py-2 rounded-md z-50"
        >
          Passer au contenu principal
        </a>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
          <main id="main-content" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 