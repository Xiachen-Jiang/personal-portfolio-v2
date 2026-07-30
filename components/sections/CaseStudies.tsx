'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-yellow)'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Selected Work" title="Case Studies" accent={ACCENT} />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-body text-center max-w-2xl mx-auto mb-16 -mt-8"
          style={{ color: 'var(--nb-muted)' }}
        >
          Deep dives into production software — the problem, what I built, and the outcome.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CASE_STUDIES.map((study) => (
            <motion.div key={study.slug} variants={fadeInUp} className="h-full">
              <GlassCard className="p-0 overflow-hidden h-full flex flex-col" hover={false}>
                <div
                  className="relative h-44 overflow-hidden border-b-[3px]"
                  style={{ borderColor: 'var(--nb-ink)' }}
                >
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-extrabold mb-2" style={{ color: 'var(--nb-ink)' }}>
                    {study.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--nb-muted)' }}>
                    {study.description}
                  </p>

                  <div className="border-t-[3px] pt-4" style={{ borderColor: 'var(--nb-ink)' }}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-bold border-[3px] px-3 py-1.5 transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
                      style={{
                        color: 'var(--nb-ink)',
                        backgroundColor: ACCENT,
                        borderColor: 'var(--nb-ink)',
                        borderRadius: '1.5rem',
                        boxShadow: '3px 3px 0 0 var(--nb-ink)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--nb-ink)')}
                    >
                      View
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
