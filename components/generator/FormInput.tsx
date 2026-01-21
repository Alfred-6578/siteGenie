'use client'

import { Input } from '@/components/ui/Input'

interface FormInputProps {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
  placeholder?: string
  required?: boolean
  error?: string
}

export function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
}: FormInputProps) {
  return (
    <Input
      label={label}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      required={required}
      error={error}
    />
  )
}