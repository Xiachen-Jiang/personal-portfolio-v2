'use client'

import { motion } from 'framer-motion'
import { Code2, Users, Zap, Globe } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/lib/animations'

const stats = [
  { icon: Code2, label: 'Years Experience', value: '2+' },
  { icon: Zap, label: 'Projects Shipped', value: '10+' },
  { icon: Users, label: 'Team Environments', value: 'Agile' },
  { icon: Globe, label: 'Deployment Platforms', value: 'Azure / AWS' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* Background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[130px]"
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
            Get to know me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            <GradientText>About Me</GradientText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--t-text-1)' }}>
              Building great software, one line at a time.
            </h3>
            <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--t-text-2)' }}>
              {PROFILE.bio}
            </p>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--t-text-2)' }}>
              I specialize in the full stack — from crafting intuitive React interfaces with TypeScript to engineering
              robust back-end APIs with C# ASP.NET Core and designing efficient SQL databases. I thrive in Agile
              environments and enjoy solving real-world problems with clean, maintainable code.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--t-text-2)' }}>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open-source, and
              staying up to date with the latest in web development.
            </p>
          </motion.div>

          {/* Right: Avatar + Stats */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {/* Avatar */}
            <GlassCard className="p-8 flex items-center justify-center" hover={false}>
              <div className="relative">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-display font-bold text-white shadow-2xl"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, var(--t-accent-1), var(--t-accent-2))',
                    boxShadow: '0 20px 40px var(--t-card-shadow)',
                  }}
                >
                  JJ
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--t-bg)' }}
                >
                  <span className="text-xs">✓</span>
                </div>
              </div>
            </GlassCard>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <GlassCard className="p-4 text-center">
                    <stat.icon
                      className="mx-auto mb-2"
                      size={20}
                      style={{ color: 'var(--t-accent-1)' }}
                    />
                    <p className="font-display text-2xl font-bold" style={{ color: 'var(--t-text-1)' }}>
                      {stat.value}
                    </p>
                    <p className="font-body text-xs mt-1" style={{ color: 'var(--t-text-3)' }}>
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
