'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-red)'

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    sub: 'https://www.linkedin.com/in/xiachen-jiang-b84434192/',
    href: PROFILE.links.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    sub: 'https://github.com/Xiachen-Jiang',
    href: PROFILE.links.github,
  },
  // {
  //   icon: Mail,
  //   label: 'Email',
  //   sub: PROFILE.email,
  //   href: `mailto:${PROFILE.email}`,
  // },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionHeader eyebrow="Let's Connect" title="Get In Touch" accent={ACCENT} className="mb-6" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-body leading-relaxed"
          style={{ color: 'var(--nb-muted)' }}
        >
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a great
          conversation about tech. Feel free to reach out!
        </motion.p>

        {/* Contact links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4 mt-10"
        >
          {contactLinks.map((item) => (
            <motion.div key={item.label} variants={fadeInUp}>
              <a
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group block"
              >
                <GlassCard className="p-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 border-[3px]"
                      style={{
                        backgroundColor: ACCENT,
                        borderColor: 'var(--nb-ink)',
                        color: '#ffffff',
                        borderRadius: '0.75rem',
                      }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-display font-extrabold" style={{ color: 'var(--nb-ink)' }}>
                        {item.label}
                      </p>
                      <p className="font-mono text-xs" style={{ color: 'var(--nb-muted)' }}>
                        {item.sub}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--nb-ink)' }}
                    />
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10"
        >
          <span
            className="inline-flex items-center gap-2 font-body text-sm font-bold border-[3px] px-4 py-2"
            style={{
              color: 'var(--nb-ink)',
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-paper)',
              borderRadius: '1.5rem',
              boxShadow: '4px 4px 0 0 var(--nb-ink)',
            }}
          >
            <span className="w-2.5 h-2.5 border-[2px]" style={{ backgroundColor: 'var(--nb-green)', borderColor: 'var(--nb-ink)' }} />
            Open to new opportunities
          </span>
        </motion.div>
      </div>
    </section>
  )
}
