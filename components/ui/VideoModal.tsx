'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  src: string
  title: string
  onClose: () => void
}

export default function VideoModal({ src, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl overflow-hidden border-[3px]"
          style={{
            backgroundColor: 'var(--nb-paper)',
            borderColor: 'var(--nb-ink)',
            borderRadius: '1rem',
            boxShadow: '8px 8px 0 0 var(--nb-ink)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b-[3px]"
            style={{ borderColor: 'var(--nb-ink)', backgroundColor: 'var(--nb-yellow)' }}
          >
            <h3 className="font-display font-extrabold text-sm truncate pr-4" style={{ color: 'var(--nb-ink)' }}>{title}</h3>
            <button
              onClick={onClose}
              className="shrink-0 p-1.5 border-[3px] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px]"
              style={{
                color: 'var(--nb-ink)',
                borderColor: 'var(--nb-ink)',
                backgroundColor: 'var(--nb-paper)',
                borderRadius: '0.5rem',
                boxShadow: '2px 2px 0 0 var(--nb-ink)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'none')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '2px 2px 0 0 var(--nb-ink)')}
              aria-label="Close video"
            >
              <X size={18} />
            </button>
          </div>

          {/* Video */}
          <div className="relative bg-black aspect-video">
            <video
              ref={videoRef}
              src={src}
              controls
              autoPlay
              className="w-full h-full object-contain"
              playsInline
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
