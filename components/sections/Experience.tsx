'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { EXPERIENCE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-pink)'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="My Journey" title="Work Experience" accent={ACCENT} />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[3px] -translate-x-1/2"
            style={{ backgroundColor: 'var(--nb-ink)' }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job, index) => (
              <motion.div key={job.id} variants={fadeInUp} className="relative pl-16">
                {/* Index marker */}
                <div
                  className="absolute left-6 top-5 w-8 h-8 border-[3px] flex items-center justify-center -translate-x-1/2"
                  style={{
                    borderColor: 'var(--nb-ink)',
                    backgroundColor: ACCENT,
                    borderRadius: '0.5rem',
                  }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--nb-ink)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <GlassCard className="p-6" hover={false}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      {/* Company avatar */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 border-[3px] flex items-center justify-center font-display font-extrabold text-sm"
                          style={{
                            backgroundColor: ACCENT,
                            borderColor: 'var(--nb-ink)',
                            color: 'var(--nb-ink)',
                            borderRadius: '0.5rem',
                          }}
                        >
                          {job.company.charAt(0)}
                        </div>
                        <span className="font-body text-sm font-semibold" style={{ color: 'var(--nb-muted)' }}>
                          {job.company}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-extrabold" style={{ color: 'var(--nb-ink)' }}>
                        {job.role}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5" style={{ color: 'var(--nb-muted)' }}>
                        <Calendar size={12} />
                        <span className="font-mono text-xs font-semibold">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5" style={{ color: 'var(--nb-muted)' }}>
                        <MapPin size={12} />
                        <span className="font-mono text-xs font-semibold">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--nb-ink)' }}>
                        <span className="shrink-0 mt-1 font-bold" style={{ color: 'var(--nb-pink)' }}>▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
