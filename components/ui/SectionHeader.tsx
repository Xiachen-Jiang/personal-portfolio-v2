'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/animations'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  accent?: string
  className?: string
}

export default function SectionHeader({ eyebrow, title, accent, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={className ?? 'text-center mb-16'}
    >
      <span
        className="inline-block border-[3px] px-3 py-1 mb-5 font-bold uppercase tracking-wide text-xs -rotate-2"
        style={{
          borderColor: 'var(--nb-ink)',
          backgroundColor: accent ?? 'var(--nb-yellow)',
          color: 'var(--nb-ink)',
          boxShadow: '4px 4px 0 0 var(--nb-ink)',
        }}
      >
        {eyebrow}
      </span>
      <h2
        className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: 'var(--nb-ink)' }}
      >
        {title}
      </h2>
    </motion.div>
  )
}
