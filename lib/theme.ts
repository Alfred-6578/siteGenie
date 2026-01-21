import { ColorPalette } from '@/types/theme'

export const COLOR_PALETTES: Record<string, ColorPalette> = {
  'professional-blue': {
    id: 'professional-blue',
    name: 'Professional Blue',
    mood: 'professional',
    primary: '#0ea5e9',
    secondary: '#0284c7',
    accent: '#38bdf8',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
  },
  'energetic-orange': {
    id: 'energetic-orange',
    name: 'Energetic Orange',
    mood: 'energetic',
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c',
    background: '#ffffff',
    surface: '#fff7ed',
    text: '#1c1917',
    textSecondary: '#78716c',
    border: '#fed7aa',
  },
  'calm-green': {
    id: 'calm-green',
    name: 'Calm Green',
    mood: 'calm',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    background: '#ffffff',
    surface: '#f0fdf4',
    text: '#14532d',
    textSecondary: '#6b7280',
    border: '#d1fae5',
  },
  'bold-purple': {
    id: 'bold-purple',
    name: 'Bold Purple',
    mood: 'creative',
    primary: '#a855f7',
    secondary: '#9333ea',
    accent: '#c084fc',
    background: '#ffffff',
    surface: '#faf5ff',
    text: '#581c87',
    textSecondary: '#6b7280',
    border: '#e9d5ff',
  },
  'elegant-black': {
    id: 'elegant-black',
    name: 'Elegant Black',
    mood: 'elegant',
    primary: '#18181b',
    secondary: '#27272a',
    accent: '#71717a',
    background: '#ffffff',
    surface: '#fafafa',
    text: '#09090b',
    textSecondary: '#71717a',
    border: '#e4e4e7',
  },
  'warm-red': {
    id: 'warm-red',
    name: 'Warm Red',
    mood: 'passionate',
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#f87171',
    background: '#ffffff',
    surface: '#fef2f2',
    text: '#7f1d1d',
    textSecondary: '#737373',
    border: '#fecaca',
  },
  'trustworthy-navy': {
    id: 'trustworthy-navy',
    name: 'Trustworthy Navy',
    mood: 'trustworthy',
    primary: '#1e40af',
    secondary: '#1e3a8a',
    accent: '#3b82f6',
    background: '#ffffff',
    surface: '#eff6ff',
    text: '#1e3a8a',
    textSecondary: '#64748b',
    border: '#dbeafe',
  },
  'creative-pink': {
    id: 'creative-pink',
    name: 'Creative Pink',
    mood: 'playful',
    primary: '#ec4899',
    secondary: '#db2777',
    accent: '#f472b6',
    background: '#ffffff',
    surface: '#fdf2f8',
    text: '#831843',
    textSecondary: '#737373',
    border: '#fbcfe8',
  },
}

export function getPalette(id: string): ColorPalette {
  return COLOR_PALETTES[id] || COLOR_PALETTES['professional-blue']
}

export function getPaletteByMood(mood: string): ColorPalette {
  const palette = Object.values(COLOR_PALETTES).find(
    (p) => p.mood === mood.toLowerCase()
  )
  return palette || COLOR_PALETTES['professional-blue']
}

export function generateCSSVariables(palette: ColorPalette): string {
  return `
    --color-primary: ${palette.primary};
    --color-secondary: ${palette.secondary};
    --color-accent: ${palette.accent};
    --color-background: ${palette.background};
    --color-surface: ${palette.surface};
    --color-body-text: ${palette.text};
    --color-body-text-secondary: ${palette.textSecondary};
    --color-border: ${palette.border};
  `.trim()
}