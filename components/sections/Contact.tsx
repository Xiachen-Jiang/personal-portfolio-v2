'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { PROFILE } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    sub: 'linkedin.com/in/xiachen-jiang',
    href: PROFILE.links.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    sub: 'github.com/Xiachen-Jiang',
    href: PROFILE.links.github,
  },
  {
    icon: Mail,
    label: 'Email',
    sub: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px]"
          style={{ backgroundColor: 'var(--t-orb-1)' }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Section title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-6"
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-3)' }}>
            Let&apos;s Connect
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <GradientText>Get In Touch</GradientText>
          </h2>
          <p className="font-body leading-relaxed" style={{ color: 'var(--t-text-2)' }}>
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a great
            conversation about tech. Feel free to reach out!
          </p>
        </motion.div>

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
                      className="p-3 rounded-xl transition-colors duration-300"
                      style={{
                        backgroundColor: 'var(--t-eyebrow-bg)',
                        color: 'var(--t-accent-1)',
                      }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-display font-semibold" style={{ color: 'var(--t-text-1)' }}>
                        {item.label}
                      </p>
                      <p className="font-mono text-xs" style={{ color: 'var(--t-text-3)' }}>
                        {item.sub}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--t-text-3)' }}
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
            className="inline-flex items-center gap-2 font-body text-sm border px-4 py-2 rounded-full"
            style={{ color: 'var(--t-text-2)', borderColor: 'var(--t-card-border)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to new opportunities
          </span>
        </motion.div>
      </div>
    </section>
  )
}
