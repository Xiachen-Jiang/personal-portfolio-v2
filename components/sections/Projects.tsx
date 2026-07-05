'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import VideoModal from '@/components/ui/VideoModal'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const ACCENT = 'var(--nb-yellow)'

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)

  return (
    <>
      <section id="projects" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="What I've Built" title="Projects" accent={ACCENT} />

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
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col" hover={false}>
                  {/* Thumbnail banner */}
                  <div className="relative h-44 overflow-hidden border-b-[3px]" style={{ borderColor: 'var(--nb-ink)' }}>
                    {'thumbnail' in project && project.thumbnail ? (
                      <Image
                        src={project.thumbnail as string}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                        <span className="font-display text-4xl font-extrabold select-none" style={{ color: 'var(--nb-ink)' }}>
                          {project.title.split(' ').map((w) => w[0]).join('')}
                        </span>
                      </div>
                    )}

                    {/* Play overlay */}
                    {'video' in project && project.video && (
                      <button
                        onClick={() =>
                          setActiveVideo({ src: project.video as string, title: project.title })
                        }
                        className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors duration-200 group/play"
                        aria-label={`Watch demo of ${project.title}`}
                      >
                        <span
                          className="w-12 h-12 border-[3px] flex items-center justify-center opacity-0 group-hover/play:opacity-100 transition-all duration-200"
                          style={{ backgroundColor: 'var(--nb-paper)', borderColor: 'var(--nb-ink)', borderRadius: '0.75rem', boxShadow: '3px 3px 0 0 var(--nb-ink)' }}
                        >
                          <Play size={18} className="ml-0.5" style={{ color: 'var(--nb-ink)', fill: 'var(--nb-ink)' }} />
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {'comingSoon' in project && project.comingSoon ? (
                      <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
                        <p className="font-display text-lg font-bold mb-2" style={{ color: 'var(--nb-ink)' }}>
                          Coming Soon
                        </p>
                        <p className="font-body text-sm" style={{ color: 'var(--nb-muted)' }}>
                          {project.description}
                        </p>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-xl font-extrabold mb-2" style={{ color: 'var(--nb-ink)' }}>
                          {project.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--nb-muted)' }}>
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
                          className="flex items-center gap-4 border-t-[3px] pt-4 flex-wrap"
                          style={{ borderColor: 'var(--nb-ink)' }}
                        >
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-body text-xs font-bold transition-transform hover:-translate-y-0.5"
                              style={{ color: 'var(--nb-ink)' }}
                            >
                              <Github size={14} />
                              Source
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-body text-xs font-bold transition-transform hover:-translate-y-0.5"
                              style={{ color: 'var(--nb-ink)' }}
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
                              className="inline-flex items-center gap-1.5 font-display text-xs font-bold border-[3px] px-3 py-1.5 ml-auto cursor-pointer transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
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
