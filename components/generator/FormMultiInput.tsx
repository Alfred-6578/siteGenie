'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { X, Plus } from 'lucide-react'

interface FormMultiInputProps {
  label: string
  name: string
  values: string[]
  onChange: (name: string, values: string[]) => void
  placeholder?: string
  max?: number
}

export function FormMultiInput({
  label,
  name,
  values,
  onChange,
  placeholder,
  max = 10,
}: FormMultiInputProps) {
  const [inputValue, setInputValue] = useState('')

  const addItem = () => {
    if (inputValue.trim() && values.length < max) {
      onChange(name, [...values, inputValue.trim()])
      setInputValue('')
    }
  }

  const removeItem = (index: number) => {
    onChange(name, values.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-body-text mb-2">
        {label}
      </label>
      
      {/* Item list */}
      <div className="grid grid-cols-2 flex-wrap gap-2 mb-3">
        {values.map((value, index) => (
          <div key={index} className="flex items-center justify-between gap-2 bg-white/5 border border-white/10  rounded-full px-3 py-2">
            <div className={`text-body-text text-sm font-medium pl-1 capitalize`}>
                {value}
            </div>
           
            <X className="w-4 h-4 text-body-text"  onClick={() => removeItem(index)}/>
         
          </div>
        ))}
      </div>

      {/* Add input */}
      {values.length < max && (
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addItem()
              }
            }}
          />
          <Button
            type="button"
            onClick={addItem}
            disabled={!inputValue.trim()}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}