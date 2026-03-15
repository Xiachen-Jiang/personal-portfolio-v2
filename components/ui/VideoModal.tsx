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
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <h3 className="font-display font-semibold text-slate-200 text-sm truncate pr-4">{title}</h3>
            <button
              onClick={onClose}
              className="shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-all duration-200"
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
