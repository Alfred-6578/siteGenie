'use client'

import { Textarea } from '@/components/ui/Textarea'

interface FormTextareaProps {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
  placeholder?: string
  required?: boolean
  error?: string
}

export function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
}: FormTextareaProps) {
  return (
    <Textarea
      label={label}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      required={required}
      error={error}
    />
  )
}