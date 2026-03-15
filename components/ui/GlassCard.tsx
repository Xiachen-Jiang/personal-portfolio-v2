'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={cn('backdrop-blur-md rounded-2xl border', className)}
      style={{
        backgroundColor: 'var(--t-card-bg)',
        borderColor: 'var(--t-card-border)',
        boxShadow: hover && hovered
          ? 'var(--t-card-shadow-hover)'
          : 'var(--t-card-shadow)',
        transform: hover && hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: hover
          ? 'transform 0.25s ease, box-shadow 0.25s ease, background-color 0.4s ease, border-color 0.4s ease'
          : 'background-color 0.4s ease, border-color 0.4s ease',
      }}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
    >
      {children}
    </div>
  )
}
