'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={
        scrolled
          ? {
              backgroundColor: 'var(--nb-bg)',
              borderBottom: '3px solid var(--nb-ink)',
            }
          : { borderBottom: '3px solid transparent' }
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-extrabold text-lg"
          style={{ color: 'var(--nb-ink)' }}
        >
          {'<Jiang />'}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold transition-colors duration-150 hover:underline decoration-2 underline-offset-4"
              style={{ color: 'var(--nb-ink)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-display font-bold border-[3px] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
            style={{
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-yellow)',
              color: 'var(--nb-ink)',
              borderRadius: '1.5rem',
              boxShadow: '3px 3px 0 0 var(--nb-ink)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--nb-ink)')}
          >
            Resume
          </a>
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-1.5 border-[3px] transition-all"
            style={{
              color: 'var(--nb-ink)',
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-paper)',
              borderRadius: '0.75rem',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden border-b-[3px]"
            style={{
              backgroundColor: 'var(--nb-bg)',
              borderColor: 'var(--nb-ink)',
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-semibold py-1"
                  style={{ color: 'var(--nb-ink)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PROFILE.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-bold py-1"
                style={{ color: 'var(--nb-blue)' }}
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
