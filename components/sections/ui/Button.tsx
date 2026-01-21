import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium cursor-pointer transition-colors duration-500',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:to-[var(--color-secondary)]':
              variant === 'primary',
            'bg-[var(--color-surface)] text-[var(--color-body-text)] hover:bg-border':
              variant === 'secondary',
            'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white':
              variant === 'outline',
            'text-[var(--color-body-text)] hover:bg-[var(--color-surface)]':
              variant === 'ghost',
            'button-gradient text-[var(--color-body-text)]' :
                variant === 'gradient',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'