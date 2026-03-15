'use client'

import { motion } from 'framer-motion'
import { Monitor, Server, Database, Wrench } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
          style={{ backgroundColor: 'var(--t-orb-1)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-3)' }}>
            My Arsenal
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            <GradientText>Technical Skills</GradientText>
          </h2>
        </motion.div>

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
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: 'var(--t-eyebrow-bg)',
                      color: 'var(--t-accent-1)',
                    }}
                  >
                    <cat.icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold" style={{ color: 'var(--t-text-1)' }}>
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
          <p className="font-body text-xs uppercase tracking-widest text-center mb-4" style={{ color: 'var(--t-text-3)' }}>
            All Technologies
          </p>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--t-bg), transparent)' }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--t-bg), transparent)' }}
            />
            <div className="flex gap-3 overflow-hidden">
              <div className="flex gap-3 shrink-0 animate-[marquee_35s_linear_infinite]">
                {[...allSkills, ...allSkills].map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-4 py-1.5 rounded-full border whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--t-card-bg)',
                      borderColor: 'var(--t-card-border)',
                      color: 'var(--t-text-2)',
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

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
