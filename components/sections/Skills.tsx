'use client'

import { motion } from 'framer-motion'
import { Monitor, Server, Database, Wrench } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-green)'

const categories = [
  { icon: Monitor, label: 'Frontend', skills: [...PROFILE.skills.frontend] },
  { icon: Server, label: 'Backend', skills: [...PROFILE.skills.backend] },
  { icon: Database, label: 'Databases', skills: [...PROFILE.skills.databases] },
  { icon: Wrench, label: 'Tools & DevOps', skills: [...PROFILE.skills.tools] },
]

const allSkills = [
  ...PROFILE.skills.frontend,
  ...PROFILE.skills.backend,
  ...PROFILE.skills.databases,
  ...PROFILE.skills.tools,
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="My Arsenal" title="Technical Skills" accent={ACCENT} />

        {/* Category cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((cat) => (
            <motion.div key={cat.label} variants={fadeInUp} className="h-full">
              <GlassCard className="p-6 h-full" hover={false}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2 border-[3px]"
                    style={{
                      backgroundColor: ACCENT,
                      borderColor: 'var(--nb-ink)',
                      color: 'var(--nb-ink)',
                      borderRadius: '0.75rem',
                    }}
                  >
                    <cat.icon size={20} />
                  </div>
                  <h3 className="font-display font-extrabold" style={{ color: 'var(--nb-ink)' }}>
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="overflow-hidden"
        >
          <p className="font-body text-xs uppercase tracking-widest text-center mb-4 font-bold" style={{ color: 'var(--nb-muted)' }}>
            All Technologies
          </p>
          <div className="relative border-y-[3px] py-4" style={{ borderColor: 'var(--nb-ink)' }}>
            <div className="flex gap-3 overflow-hidden">
              <div className="flex gap-3 shrink-0 animate-[marquee_35s_linear_infinite]">
                {[...allSkills, ...allSkills].map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs font-semibold px-4 py-1.5 border-[2px] whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--nb-paper)',
                      borderColor: 'var(--nb-ink)',
                      color: 'var(--nb-ink)',
                      borderRadius: '0.5rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
