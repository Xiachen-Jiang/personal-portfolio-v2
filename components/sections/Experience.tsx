'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { EXPERIENCE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ backgroundColor: 'var(--t-orb-1)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-3)' }}>
            My Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            <GradientText>Work Experience</GradientText>
          </h2>
        </motion.div>

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
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, var(--t-timeline-line), transparent)',
            }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job, index) => (
              <motion.div key={job.id} variants={fadeInUp} className="relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-6 w-4 h-4 rounded-full shadow-lg -translate-x-1/2"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, var(--t-accent-1), var(--t-accent-2))',
                    boxShadow: '0 0 12px var(--t-card-shadow)',
                  }}
                />
                {/* Index label */}
                <div
                  className="absolute left-0 top-5 w-6 h-6 rounded-full border flex items-center justify-center -translate-x-1/2"
                  style={{
                    borderColor: 'var(--t-timeline-line)',
                    backgroundColor: 'var(--t-bg)',
                  }}
                >
                  <span className="font-mono text-xs" style={{ color: 'var(--t-accent-1)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <GlassCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      {/* Company avatar */}
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-lg border flex items-center justify-center font-display font-bold text-sm"
                          style={{
                            backgroundImage:
                              'linear-gradient(135deg, color-mix(in srgb, var(--t-accent-1) 20%, transparent), color-mix(in srgb, var(--t-accent-2) 20%, transparent))',
                            borderColor: 'var(--t-card-border)',
                            color: 'var(--t-accent-1)',
                          }}
                        >
                          {job.company.charAt(0)}
                        </div>
                        <span className="font-body text-sm" style={{ color: 'var(--t-text-3)' }}>
                          {job.company}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        <GradientText>{job.role}</GradientText>
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5" style={{ color: 'var(--t-text-3)' }}>
                        <Calendar size={12} />
                        <span className="font-mono text-xs">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5" style={{ color: 'var(--t-text-3)' }}>
                        <MapPin size={12} />
                        <span className="font-mono text-xs">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--t-text-2)' }}>
                        <span className="shrink-0 mt-1" style={{ color: 'var(--t-accent-1)' }}>▹</span>
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
