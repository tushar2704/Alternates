import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alternates - Open Source Alternatives to Popular Software',
  description: 'Discover the best open-source alternatives to proprietary software. Find free, privacy-focused, and community-driven solutions.',
  keywords: 'open source, alternatives, free software, privacy, community',
  authors: [{ name: 'Alternates Contributors' }],
  openGraph: {
    title: 'Alternates - Open Source Alternatives',
    description: 'Discover the best open-source alternatives to proprietary software',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alternates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alternates - Open Source Alternatives',
    description: 'Discover the best open-source alternatives to proprietary software',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}