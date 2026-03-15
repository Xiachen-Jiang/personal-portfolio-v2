'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '@/lib/constants'
import { usePersona } from '@/lib/PersonaContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { persona, togglePersona } = usePersona()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = persona === 'tech'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backgroundColor: 'color-mix(in srgb, var(--t-surface) 92%, transparent)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--t-card-border)',
              boxShadow: isDark
                ? '0 4px 20px rgba(0,0,0,0.3)'
                : '0 1px 8px rgba(0,0,0,0.06)',
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--t-accent-1), var(--t-accent-2))',
            }}
          >
            JJ
          </span>
          <span className="ml-2 hidden sm:inline" style={{ color: 'var(--t-text-2)' }}>
            James Jiang
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--t-text-2)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROFILE.links.resume}
            className="px-4 py-1.5 rounded-full text-sm font-display font-semibold border transition-all duration-200 hover:opacity-80"
            style={{
              borderColor: 'var(--t-accent-1)',
              color: 'var(--t-accent-1)',
            }}
          >
            Resume
          </a>

          {/* Dark / Light toggle */}
          <ThemeToggleButton isDark={isDark} onToggle={togglePersona} />
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton isDark={isDark} onToggle={togglePersona} compact />
          <button
            className="transition-colors p-1"
            style={{ color: 'var(--t-text-2)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-md border-b"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--t-surface) 95%, transparent)',
              borderColor: 'var(--t-card-border)',
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm transition-colors py-1"
                  style={{ color: 'var(--t-text-2)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PROFILE.links.resume}
                className="font-body text-sm transition-colors py-1"
                style={{ color: 'var(--t-accent-1)' }}
                onClick={() => setMenuOpen(false)}
              >
                Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ── Dark / Light toggle button ─────────────────────────────── */
function ThemeToggleButton({
  isDark,
  onToggle,
  compact = false,
}: {
  isDark: boolean
  onToggle: () => void
  compact?: boolean
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="relative flex items-center justify-center rounded-full border transition-all duration-300"
      style={{
        width: compact ? 32 : 36,
        height: compact ? 32 : 36,
        borderColor: 'var(--t-card-border)',
        backgroundColor: 'var(--t-card-bg)',
        color: 'var(--t-text-2)',
      }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Moon size={compact ? 14 : 15} /> : <Sun size={compact ? 14 : 15} />}
      </motion.div>
    </button>
  )
}
