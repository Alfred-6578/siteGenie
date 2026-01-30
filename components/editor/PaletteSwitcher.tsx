
'use client'

import { COLOR_PALETTES } from '@/lib/theme'
import { useTheme } from '@/context/ThemeProvider'
import { Palette } from 'lucide-react'
import { useLandingPage } from '@/context/LandingPageProvider'
import { useEffect, useRef, useState } from 'react'

export function PaletteSwitcher() {
  const { palette, setPalette } = useTheme()
  const { updateLandingPage } = useLandingPage()
  const palettes = Object.values(COLOR_PALETTES)
  const [isActive, setIsActive] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  // close when clicking outside or pressing Escape
  useCloseOnOutside(rootRef, isActive, () => setIsActive(false))

  return (
    <div ref={rootRef} className="relative group">
      <button onClick={()=> setIsActive((prev)=> !prev)} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
        <Palette className="w-4 h-4" />
        <span className="text-sm font-medium max-vsm:hidden">Colors</span>
      </button>

      {isActive &&
        <div className="absolute top-full -right-[40%] mt-2 bg-white rounded-lg shadow-xl p-4 opacity-100 transition-all z-50 min-w-75">
        <h3 className="text-sm font-semibold mb-3">Color Palette</h3>
        <div className="grid grid-cols-2 gap-3">
          {palettes.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                updateLandingPage({theme:p.id})
                setIsActive(false)
              }}
              className={`p-3 rounded-lg border-2 transition-all text-left ${
                palette.id === p.id
                  ? 'border-blue-500 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex gap-1 mb-2">
                <div
                  className="w-5 h-5 rounded"
                  style={{ backgroundColor: p.primary }}
                />
                <div
                  className="w-5 h-5 rounded"
                  style={{ backgroundColor: p.secondary }}
                />
                <div
                  className="w-5 h-5 rounded"
                  style={{ backgroundColor: p.accent }}
                />
              </div>
              <p className="text-xs font-medium text-gray-900">{p.name}</p>
            </button>
          ))}
        </div>
        </div>
      }
    </div>
  )
}

// Close the palette when clicking outside or pressing Escape
function useCloseOnOutside(ref: React.RefObject<HTMLElement | null>, active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!ref || !ref.current || !active) return

    const handlePointerDown = (e: PointerEvent) => {
      if (!ref.current) return
      if (!(e.target instanceof Node)) return
      if (!ref.current.contains(e.target as Node)) onClose()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, active, onClose])
}