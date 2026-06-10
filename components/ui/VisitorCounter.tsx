'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

// function ordinal(n: number) {
//   const s = ['th', 'st', 'nd', 'rd']
//   const v = n % 100
//   return n + (s[(v - 20) % 10] || s[v] || s[0])
// }

function ChibiAvatar({ size }: { size: number }) {
  return (
    <Image
      src="/visitor/james-chibi.png"
      alt="James chibi avatar"
      width={size}
      height={size}
      className="w-full h-full object-cover"
      unoptimized
    />
  )
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    const recorded = sessionStorage.getItem('view_recorded')

    if (recorded) {
      fetch('/api/views')
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => {})
    } else {
      fetch('/api/views', { method: 'POST' })
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count)
          sessionStorage.setItem('view_recorded', '1')
        })
        .catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (count === null) return
    setShowDialog(true)
  }, [count])

  useEffect(() => {
    if (!showDialog) return
    const timer = window.setTimeout(() => setShowDialog(false), 5000)
    return () => window.clearTimeout(timer)
  }, [showDialog])

  if (count === null) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showDialog && (
          <motion.div
            key="dialog"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative max-w-[220px] px-4 py-3 rounded-2xl border backdrop-blur-md shadow-lg"
            style={{
              backgroundColor: 'var(--t-card-bg)',
              borderColor: 'var(--t-card-border)',
            }}
          >
            <p className="font-display text-sm font-semibold mb-1" style={{ color: 'var(--t-text-1)' }}>
              Hello, viewer No.{count}.
            </p>
            <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--t-text-2)' }}>
              Hope you have a good day!
            </p>
            {/* <div
              className="absolute -bottom-2 right-5 w-3 h-3 rotate-45 border-r border-b"
              style={{
                backgroundColor: 'var(--t-card-bg)',
                borderColor: 'var(--t-card-border)',
              }}
            /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={() => setShowDialog(true)}
        aria-label="Open visitor greeting"
        className="w-14 h-14 rounded-full border overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
        style={{
          backgroundColor: 'var(--t-card-bg)',
          borderColor: 'var(--t-card-border)',
        }}
      >
        <ChibiAvatar size={56} />
      </motion.button>
    </div>
  )
}
