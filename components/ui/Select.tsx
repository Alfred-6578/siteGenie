import { useState, useRef, useEffect, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectProps {
  name?:string;
  label?: string
  error?: string
  options: { value: string; label: string }[]
  value?: string
  onChange?: (name:string, value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  required?: boolean
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ name, className, label, error, options, value, onChange, placeholder = 'Select...', disabled, required }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectedOption = options.find(opt => opt.value === value)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])


    const handleSelect = (optionValue: string) => {
        if (onChange && name) {
          onChange(name, optionValue)        
        }
        setIsOpen(false)
    }

    return (
      <div className="w-full" ref={ref}>
        {label && (
          <label className="block text-sm font-medium text-body-text mb-2">
            {label}
          </label>
        )}
        
        <div className="relative" ref={containerRef}>
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            aria-required={required}
            className={cn(
              'w-full px-3 py-2 rounded-lg border border-body-text/10',
              'bg-white/10 text-body-text text-left',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'flex items-center justify-between',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
          >
            <span className={cn(!selectedOption && 'text-gray-400') }>
              {selectedOption?.label || placeholder}
            </span>
            <ChevronDown className={cn(
              'w-4 h-4 transition-transform',
              isOpen && 'transform rotate-180'
            )} />
          </button>

          {isOpen && (
            <div className={cn(
              'absolute top-full mt-10 left-0 right-0 mt-1 z-50',
              'select-modal text-body-text backdrop-blur-2xl bor rounded-lg shadow-lg',
              'max-h-60 overflow-y-auto' 
            )}>
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'w-full px-3 py-2 text-left hover:bg-primary/50',
                    'transition-colors',
                    option.value === value && 'bg-primary/10 text-primary font-medium'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'