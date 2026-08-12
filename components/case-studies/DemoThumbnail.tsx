'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'

type DemoThumbnailProps = {
  thumbnail: string
  title: string
  videoSrc: string
}

export default function DemoThumbnail({ thumbnail, title, videoSrc }: DemoThumbnailProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className="group relative w-full overflow-hidden border-[3px] mb-12"
        style={{
          borderColor: 'var(--nb-ink)',
          boxShadow: '8px 8px 0 0 var(--nb-ink)',
          backgroundColor: 'var(--nb-paper)',
        }}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-auto block"
          priority
          unoptimized
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View demo video"
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/40"
        >
          <span
            className="inline-flex items-center gap-2 border-[3px] px-5 py-3 font-display font-extrabold text-base md:text-lg transition-transform group-hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--nb-ink)',
              backgroundColor: 'var(--nb-yellow)',
              color: 'var(--nb-ink)',
              boxShadow: '5px 5px 0 0 var(--nb-ink)',
            }}
          >
            <Play size={20} fill="currentColor" />
            View Demo
          </span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo video`}
        >
          <div
            className="relative max-w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close demo video"
              className="absolute -top-4 -right-4 z-10 border-[3px] p-1.5 transition-transform hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--nb-ink)',
                backgroundColor: 'var(--nb-red)',
                color: 'var(--nb-ink)',
                boxShadow: '3px 3px 0 0 var(--nb-ink)',
              }}
            >
              <X size={20} />
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="block w-auto h-auto max-w-full max-h-[85vh] border-[3px]"
              style={{ borderColor: 'var(--nb-ink)', backgroundColor: '#000' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
