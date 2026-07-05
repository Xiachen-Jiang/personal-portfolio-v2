'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { WEBSITES } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-orange)'
const PAGE_SIZE = 10

export default function ClientWork() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleSites = WEBSITES.slice(0, visibleCount)
  const hasMore = visibleCount < WEBSITES.length

  return (
    <section id="work" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Built Websites" title="My Work" accent={ACCENT} className="text-center mb-6" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-body text-center max-w-2xl mx-auto mb-16"
          style={{ color: 'var(--nb-muted)' }}
        >
          Real-world client websites currently serving businesses, councils and organisations across Australia.
        </motion.p>

        {/* Website grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {visibleSites.map((site) => (
              <motion.div
                key={site.url}
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                exit="hidden"
                layout
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  aria-label={`Visit ${site.name}`}
                >
                  <GlassCard className="p-4 h-full flex flex-col items-center text-center gap-3">
                    {/* Logo */}
                    <div
                      className="w-16 h-16 border-[3px] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-200 p-2"
                      style={{
                        backgroundColor: 'var(--nb-paper)',
                        borderColor: 'var(--nb-ink)',
                        borderRadius: '0.75rem',
                      }}
                    >
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>

                    {/* Site name */}
                    <div className="flex-1">
                      <p className="font-display text-sm font-bold leading-tight mb-1" style={{ color: 'var(--nb-ink)' }}>
                        {site.name}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / Count badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mt-10"
        >
          {hasMore ? (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, WEBSITES.length))}
              className="inline-flex items-center gap-2 font-body text-sm font-bold border-[3px] px-5 py-2 cursor-pointer transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
              style={{
                color: 'var(--nb-ink)',
                borderColor: 'var(--nb-ink)',
                backgroundColor: 'var(--nb-paper)',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 0 0 var(--nb-ink)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 0 var(--nb-ink)')}
            >
              <span className="w-2.5 h-2.5 border-[2px]" style={{ backgroundColor: ACCENT, borderColor: 'var(--nb-ink)' }} />
              {WEBSITES.length} websites delivered
              <span>· Show more</span>
              <ChevronDown size={14} />
            </button>
          ) : (
            <span
              className="inline-flex items-center gap-2 font-body text-sm font-bold border-[3px] px-5 py-2"
              style={{
                color: 'var(--nb-ink)',
                borderColor: 'var(--nb-ink)',
                backgroundColor: 'var(--nb-paper)',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 0 0 var(--nb-ink)',
              }}
            >
              <span className="w-2.5 h-2.5 border-[2px]" style={{ backgroundColor: ACCENT, borderColor: 'var(--nb-ink)' }} />
              {WEBSITES.length} websites delivered in production
            </span>
          )}
        </motion.div>
      </div>
    </section>
  )
}
