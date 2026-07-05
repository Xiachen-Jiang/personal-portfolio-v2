'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  accent?: string
}

export default function GlassCard({ children, className, hover = true, accent }: GlassCardProps) {
  const [hovered, setHovered] = useState(false)

  const bg = accent ?? 'var(--nb-paper)'

  return (
    <div
      className={cn('border-[3px]', hover ? 'rounded-2xl' : '', className)}
      style={{
        backgroundColor: bg,
        borderColor: 'var(--nb-ink)',
        boxShadow:
          hover && hovered ? '2px 2px 0 0 var(--nb-ink)' : '6px 6px 0 0 var(--nb-ink)',
        transform:
          hover && hovered ? 'translate(4px, 4px)' : 'translate(0, 0)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
    >
      {children}
    </div>
  )
}
