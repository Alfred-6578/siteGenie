'use client'

import { COLOR_PALETTES } from '@/lib/theme'

interface FormColorMoodProps {
  name: string
  value: string
  onChange: (name: string, value: string) => void
}

export function FormColorMood({name, value, onChange }: FormColorMoodProps) {
  const palettes = Object.values(COLOR_PALETTES)

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-body-text mb-3">
        Color Mood
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {palettes.map((palette) => (
          <button
            key={palette.id}
            type="button"
            onClick={() => onChange(name, palette.id)}
            className={`p-4 rounded-lg border bg-white/8 backdrop-blur-3xl transition-all ${
              value === palette.id
                ? 'border-primary shadow-lg'
                : 'border-body-text/12 hover:border-primary'
            }`}
          >
            <div className="flex gap-1 mb-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: palette.primary }}
              />
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: palette.secondary }}
              />
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: palette.accent }}
              />
            </div>
            <p className="text-sm font-medium text-body-text">
              {palette.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}