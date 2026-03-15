'use client'

import ThemeVars from '@/components/ThemeVars'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import ClientWork from '@/components/sections/ClientWork'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function PortfolioApp() {
  return (
    <>
      {/* Injects --t-* CSS custom properties on :root at runtime */}
      <ThemeVars />

      <main className="min-h-screen" style={{ backgroundColor: 'var(--t-bg)' }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ClientWork />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
