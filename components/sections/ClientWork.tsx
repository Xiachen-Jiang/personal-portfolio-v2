'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { WEBSITES } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

export default function ClientWork() {
  return (
    <section id="work" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[300px] rounded-full blur-[130px]"
          style={{ backgroundColor: 'var(--t-orb-2)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-6"
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-3)' }}>
            JABA Web Design
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            <GradientText>Client Websites</GradientText>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-body text-center max-w-2xl mx-auto mb-16"
          style={{ color: 'var(--t-text-2)' }}
        >
          A selection of live websites I developed and maintained during my role at JABA Web Design — spanning
          sports, e-commerce, professional services, and local government sectors.
        </motion.p>

        {/* Website grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {WEBSITES.map((site) => (
            <motion.div key={site.url} variants={fadeInUp}>
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
                    className="w-16 h-16 rounded-xl border flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 p-2"
                    style={{
                      backgroundColor: 'var(--t-card-bg)',
                      borderColor: 'var(--t-card-border)',
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
                    <p className="font-display text-sm font-semibold leading-tight mb-1" style={{ color: 'var(--t-text-1)' }}>
                      {site.name}
                    </p>
                    <p className="font-mono text-[10px] truncate w-full" style={{ color: 'var(--t-text-3)' }}>
                      {site.domain}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className="flex items-center gap-1 transition-colors duration-200 group-hover:opacity-100 opacity-40"
                    style={{ color: 'var(--t-accent-1)' }}
                  >
                    <ExternalLink size={12} />
                    <span className="font-body text-[10px]">View Live</span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Count badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mt-10"
        >
          <span
            className="inline-flex items-center gap-2 font-body text-sm border px-5 py-2 rounded-full"
            style={{ color: 'var(--t-text-3)', borderColor: 'var(--t-card-border)' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--t-accent-1)' }} />
            {WEBSITES.length} websites delivered in production
          </span>
        </motion.div>
      </div>
    </section>
  )
}
