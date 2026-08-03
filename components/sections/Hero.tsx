'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import { PROFILE } from '@/lib/constants'

const INK = '#111111'
const CREAM = '#F5F1E8'
const BLUE = '#4D5BF9'
const YELLOW = '#FFD43B'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      {/* Decorative sticker — top right */}
      <div
        className="absolute top-24 right-8 hidden md:block rotate-6 border-[3px] px-4 py-2 font-bold uppercase text-sm"
        style={{
          borderColor: INK,
          backgroundColor: YELLOW,
          color: INK,
          boxShadow: `5px 5px 0 0 ${INK}`,
        }}
      >
        Seeking New Opportunities ✦
      </div>

      {/* Decorative star — bottom right */}
      <div
        className="absolute bottom-24 right-16 hidden lg:block text-6xl -rotate-12 select-none"
        style={{ color: BLUE }}
        aria-hidden
      >
        ✸
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-6"
        >
          <span
            className="inline-block border-[3px] px-3 py-1 font-bold uppercase tracking-wide text-sm -rotate-2"
            style={{
              borderColor: INK,
              backgroundColor: YELLOW,
              color: INK,
              boxShadow: `4px 4px 0 0 ${INK}`,
            }}
          >
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 leading-[0.95] tracking-tight"
          style={{ color: INK }}
        >
          Hi, I&apos;m
          <br />
          <span
            className="inline-block border-[3px] px-3 mt-3 -rotate-1"
            style={{
              backgroundColor: BLUE,
              color: '#ffffff',
              borderColor: INK,
              boxShadow: `8px 8px 0 0 ${INK}`,
            }}
          >
            James Jiang
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
          style={{ color: INK }}
        >
          Building software that people actually enjoy using.
          <br />
          I&apos;m a Full Stack Developer who enjoys turning complex business requirements into {' '}
          <span className="font-bold" style={{ backgroundColor: YELLOW, padding: '0 4px' }}>
            clean
          </span>
          , {' '}
          <span className="font-bold" style={{ backgroundColor: YELLOW, padding: '0 4px' }}>
            scalable
          </span>
          software.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-5 mb-12"
        >
          <a
            href="#case-studies"
            className="border-[3px] px-6 py-3 font-display font-bold text-base transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]"
            style={{
              backgroundColor: BLUE,
              color: '#ffffff',
              borderColor: INK,
              borderRadius: '1.5rem',
              boxShadow: `6px 6px 0 0 ${INK}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `3px 3px 0 0 ${INK}`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `6px 6px 0 0 ${INK}`)}
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="border-[3px] p-2.5 transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
            style={{
              backgroundColor: '#ffffff',
              borderColor: INK,
              borderRadius: '1.5rem',
              boxShadow: `3px 3px 0 0 ${INK}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `3px 3px 0 0 ${INK}`)}
          >
            <Github size={22} style={{ color: INK }} />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border-[3px] p-2.5 transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
            style={{
              backgroundColor: '#ffffff',
              borderColor: INK,
              borderRadius: '1.5rem',
              boxShadow: `3px 3px 0 0 ${INK}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `3px 3px 0 0 ${INK}`)}
          >
            <Linkedin size={22} style={{ color: INK }} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex items-center gap-2 border-[3px] px-4 py-2 font-bold uppercase text-sm -rotate-2 transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
          style={{
            borderColor: INK,
            backgroundColor: '#ffffff',
            color: INK,
            borderRadius: '1.5rem',
            boxShadow: `4px 4px 0 0 ${INK}`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `2px 2px 0 0 ${INK}`)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `4px 4px 0 0 ${INK}`)}
          aria-label="Scroll down"
        >
          Scroll
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
