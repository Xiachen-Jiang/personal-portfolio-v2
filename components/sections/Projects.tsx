'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import VideoModal from '@/components/ui/VideoModal'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)

  return (
    <>
      <section id="projects" className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[130px]"
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
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-3)' }}>
              What I&apos;ve Built
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <GradientText>Projects</GradientText>
            </h2>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="h-full">
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
                  {/* Gradient banner */}
                  <div
                    className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <span className="font-display text-4xl font-bold text-white/10 select-none">
                      {project.title.split(' ').map((w) => w[0]).join('')}
                    </span>
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/30" />
                    <div className="absolute top-3 right-7 w-2 h-2 rounded-full bg-white/20" />

                    {/* Play overlay */}
                    {'video' in project && project.video && (
                      <button
                        onClick={() =>
                          setActiveVideo({ src: project.video as string, title: project.title })
                        }
                        className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors duration-300 group/play"
                        aria-label={`Watch demo of ${project.title}`}
                      >
                        <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover/play:opacity-100 scale-90 group-hover/play:scale-100 transition-all duration-300 backdrop-blur-sm">
                          <Play size={18} className="text-white fill-white ml-0.5" />
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {'comingSoon' in project && project.comingSoon ? (
                      <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
                        <p className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--t-text-3)' }}>
                          Coming Soon
                        </p>
                        <p className="font-body text-sm" style={{ color: 'var(--t-text-3)' }}>
                          {project.description}
                        </p>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--t-text-1)' }}>
                          {project.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--t-text-2)' }}>
                          {project.description}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>

                        {/* Links */}
                        <div
                          className="flex items-center gap-3 border-t pt-4 flex-wrap"
                          style={{ borderColor: 'var(--t-card-border)' }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-body text-xs transition-colors hover:opacity-70"
                            style={{ color: 'var(--t-text-3)' }}
                          >
                            <Github size={14} />
                            Source
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-body text-xs transition-colors hover:opacity-70"
                              style={{ color: 'var(--t-text-3)' }}
                            >
                              <ExternalLink size={14} />
                              Live Demo
                            </a>
                          )}
                          {'video' in project && project.video && (
                            <button
                              onClick={() =>
                                setActiveVideo({ src: project.video as string, title: project.title })
                              }
                              className="flex items-center gap-1.5 font-body text-xs transition-colors hover:opacity-70 ml-auto"
                              style={{ color: 'var(--t-accent-1)' }}
                            >
                              <Play size={14} />
                              Watch Demo
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Xiachen-Jiang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm transition-colors border px-6 py-3 rounded-full hover:opacity-70"
              style={{ color: 'var(--t-text-3)', borderColor: 'var(--t-card-border)' }}
            >
              <Github size={16} />
              View all projects on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          src={activeVideo.src}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  )
}
