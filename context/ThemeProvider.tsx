'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ColorPalette } from '@/types/theme'
import { getPalette } from '@/lib/theme'

interface ThemeContextType {
  palette: ColorPalette
  setPalette: (paletteId: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPaletteState] = useState<ColorPalette>(
    getPalette('professional-blue')
  )

  const setPalette = (paletteId: string) => {
    const newPalette = getPalette(paletteId)
    setPaletteState(newPalette)
  }

  return (
    <ThemeContext.Provider value={{ palette, setPalette }}>
      <div
        style={{
          '--color-primary': palette.primary,
          '--color-secondary': palette.secondary,
          '--color-accent': palette.accent,
          '--color-background': palette.background,
          '--color-surface': palette.surface,
          '--color-body-text': palette.text,
          '--color-body-text-secondary': palette.textSecondary,
          '--color-border': palette.border,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}