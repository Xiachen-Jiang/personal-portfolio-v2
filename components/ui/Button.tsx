import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  href?: string
  children: React.ReactNode
}

export default function Button({ variant = 'primary', href, children, className, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95'

  const sharedStyle =
    variant === 'primary'
      ? {
          backgroundImage: 'linear-gradient(to right, var(--t-accent-1), var(--t-accent-2))',
          boxShadow: '0 10px 25px -5px var(--t-card-shadow)',
        }
      : {
          borderColor: 'var(--t-card-border)',
          color: 'var(--t-text-2)',
        }

  const variantClass =
    variant === 'primary'
      ? 'text-white hover:opacity-90 shadow-lg'
      : 'border hover:scale-105 active:scale-95'

  if (href) {
    return (
      <a href={href} className={cn(base, variantClass, className)} style={sharedStyle}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(base, variantClass, className)} style={sharedStyle} {...props}>
      {children}
    </button>
  )
}
