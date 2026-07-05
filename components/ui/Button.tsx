'use client'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  href?: string
  target?: string
  accent?: string
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  href,
  target,
  accent,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 border-[3px] font-display font-bold text-sm cursor-pointer transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]'

  const style: React.CSSProperties = {
    borderColor: 'var(--nb-ink)',
    borderRadius: '1.5rem',
    boxShadow: '6px 6px 0 0 var(--nb-ink)',
    backgroundColor: variant === 'primary' ? accent ?? 'var(--nb-blue)' : 'var(--nb-paper)',
    color: variant === 'primary' ? '#ffffff' : 'var(--nb-ink)',
  }

  const onEnter = (e: React.MouseEvent<HTMLElement>) =>
    (e.currentTarget.style.boxShadow = '3px 3px 0 0 var(--nb-ink)')
  const onLeave = (e: React.MouseEvent<HTMLElement>) =>
    (e.currentTarget.style.boxShadow = '6px 6px 0 0 var(--nb-ink)')

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(base, className)}
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cn(base, className)}
      style={style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </button>
  )
}
