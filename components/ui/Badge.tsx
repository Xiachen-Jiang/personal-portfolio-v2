import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs font-semibold px-2.5 py-1 border-[2px] transition-transform duration-150',
        className,
      )}
      style={{
        backgroundColor: 'var(--nb-paper)',
        borderColor: 'var(--nb-ink)',
        color: 'var(--nb-ink)',
        borderRadius: '0.5rem',
        boxShadow: '2px 2px 0 0 var(--nb-ink)',
      }}
    >
      {children}
    </span>
  )
}
