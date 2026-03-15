import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-200',
        className,
      )}
      style={{
        backgroundColor: 'var(--t-card-bg)',
        borderColor: 'var(--t-card-border)',
        color: 'var(--t-text-2)',
      }}
    >
      {children}
    </span>
  )
}
