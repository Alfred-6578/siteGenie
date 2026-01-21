'use client'

import { Select } from '@/components/ui/Select'

interface FormSelectProps {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
  error?: string
}

export function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required,
  error,
}: FormSelectProps) {
  return (
    <Select
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      options={options}
      required={required}
      error={error}
    />
  )
}