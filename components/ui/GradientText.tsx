import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn('bg-gradient-to-r bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: 'linear-gradient(to right, var(--t-accent-1), var(--t-accent-2))',
      }}
    >
      {children}
    </span>
  )
}
