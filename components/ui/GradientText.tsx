import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  accent?: string
}

export default function GradientText({ children, className, accent }: GradientTextProps) {
  return (
    <span
      className={cn('inline-block border-[3px] px-2 -rotate-1', className)}
      style={{
        backgroundColor: accent ?? 'var(--nb-yellow)',
        color: 'var(--nb-ink)',
        borderColor: 'var(--nb-ink)',
        boxShadow: '4px 4px 0 0 var(--nb-ink)',
      }}
    >
      {children}
    </span>
  )
}
