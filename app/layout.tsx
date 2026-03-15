import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import ClientProviders from '@/components/ClientProviders'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'James Jiang — Full Stack Developer',
  description:
    'Full Stack Web Developer specializing in React, TypeScript, C# ASP.NET Core, and scalable cloud-deployed applications.',
  keywords: ['James Jiang', 'Full Stack Developer', 'React', 'TypeScript', 'ASP.NET Core', 'Vancouver'],
  authors: [{ name: 'James Jiang' }],
  openGraph: {
    title: 'James Jiang — Full Stack Developer',
    description: 'Full Stack Web Developer specializing in React, TypeScript, and ASP.NET Core.',
    url: 'https://www.james-jiang.com',
    siteName: "James Jiang's Portfolio",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
