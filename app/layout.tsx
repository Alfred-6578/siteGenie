import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { LandingPageProvider } from '@/context/LandingPageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing Page Generator - AI-Powered Landing Pages in Seconds',
  description: 'Generate beautiful, customizable landing pages using AI. Perfect for startups, businesses, and creators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LandingPageProvider>
            {children}
          </LandingPageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}