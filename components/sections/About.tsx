'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Users, Zap, Globe } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-blue)'

const stats = [
  { icon: Code2, label: 'Years Experience', value: '2+' },
  { icon: Zap, label: 'Projects Shipped', value: '12+' },
  { icon: Users, label: 'Team Environments', value: 'Agile' },
  { icon: Globe, label: 'Deployment Platforms', value: 'Azure / AWS' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Get to know me" title="About Me" accent={ACCENT} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <h3 className="font-display text-2xl font-extrabold mb-4" style={{ color: 'var(--nb-ink)' }}>
              Building great software.
            </h3>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--nb-muted)' }}>
              I&apos;m a Full Stack Developer specialising in modern frontend frameworks, backend services and modern cloud technologies.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--nb-muted)' }}>
              Over the past two years, I&apos;ve delivered production applications across education, e-commerce and business services.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--nb-muted)' }}>
            I enjoy solving real-world problems, whether that means building a new feature, improving an existing system or finding a simpler way to get things done. I’m always keen to learn new technologies and put them into practice. Whatever I’m working on, my goal is always the same: to create software that makes life easier for users.
            </p>
            <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--nb-muted)' }}>
            Outside of work, I enjoy exploring new ideas in technology and working on personal projects, but I also value having a balanced life. Music, gym and staying active help me recharge, stay curious and bring fresh energy to my work.
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
            <GlassCard className="p-8 flex items-center justify-center" hover={false} accent={ACCENT}>
              <div className="relative">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden border-[3px]"
                  style={{ borderColor: 'var(--nb-ink)' }}
                >
                  <Image
                    src="/james-hero-2.png"
                    alt="James Jiang"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-8 h-8 border-[3px] flex items-center justify-center"
                  style={{ backgroundColor: 'var(--nb-green)', borderColor: 'var(--nb-ink)', borderRadius: '0.5rem' }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--nb-ink)' }}>✓</span>
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
                  <GlassCard className="p-4 text-center h-full" hover={false}>
                    <stat.icon className="mx-auto mb-2" size={22} style={{ color: 'var(--nb-ink)' }} />
                    <p className="font-display text-2xl font-extrabold" style={{ color: 'var(--nb-ink)' }}>
                      {stat.value}
                    </p>
                    <p className="font-body text-xs mt-1 font-semibold" style={{ color: 'var(--nb-muted)' }}>
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
