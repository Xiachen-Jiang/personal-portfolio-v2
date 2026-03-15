'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse"
          style={{ backgroundColor: 'var(--t-orb-1)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] animate-pulse delay-1000"
          style={{ backgroundColor: 'var(--t-orb-2)' }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--t-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--t-grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4"
        >
          <span
            className="font-body text-sm uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
            style={{
              color: 'var(--t-accent-1)',
              backgroundColor: 'var(--t-eyebrow-bg)',
              borderColor: 'var(--t-eyebrow-border)',
            }}
          >
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--t-text-1)' }}
        >
          Hi, I&apos;m{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--t-accent-1), var(--t-accent-2))',
            }}
          >
            James Jiang
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--t-text-2)' }}
        >
          Building scalable, user-centric applications with{' '}
          <span style={{ color: 'var(--t-text-1)' }}>React</span>,{' '}
          <span style={{ color: 'var(--t-text-1)' }}>TypeScript</span>, and{' '}
          <span style={{ color: 'var(--t-text-1)' }}>ASP.NET Core</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <Button href="#projects">View Projects</Button>
          <Button variant="ghost" href={PROFILE.links.resume}>
            Download Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 hover:scale-110"
            style={{ color: 'var(--t-text-3)' }}
          >
            <Github size={22} />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:scale-110"
            style={{ color: 'var(--t-text-3)' }}
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors animate-bounce"
        style={{ color: 'var(--t-text-3)' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
