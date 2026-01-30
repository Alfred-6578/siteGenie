'use client'

import { Section } from '@/types/section'
import { SectionSettings } from './SectionSettings'

interface SectionControlsProps {
  section: Section
  isEditing: boolean
  visible: boolean
  children: React.ReactNode
}

/**
 * Wrapper that renders section content with settings overlay.
 * - Settings always visible in edit mode (allows toggling visibility)
 * - Content hidden if !visible (except during regeneration which bypasses this)
 */
export function SectionControls({ section, isEditing, visible, children }: SectionControlsProps) {
//   const placeholderHeightClass = (() => {
//     // Provide a reasonable placeholder height depending on section type/layout
//     switch (section.type) {
//       case 'hero':
//         if ((section as any).layout === 'background') return 'min-h-[420px]'
//         return 'min-h-[320px]'
//       case 'features':
//         return 'min-h-[280px]'
//       case 'content':
//         return 'min-h-[240px]'
//       case 'cta':
//         return 'min-h-[160px]'
//       case 'footer':
//         return 'min-h-[120px]'
//       default:
//         return 'min-h-[200px]'
//     }
//   })()

  return (
    <div className="relative">
      {isEditing && <SectionSettings section={section} />}

      
      {visible ? (
        children
      ) : (
        <div
          className={`w-full min-h-[200px] bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center text-sm text-gray-500 z-0`}
          aria-hidden
        >
          <div className="flex items-center gap-3">
            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Hidden</span>
            <span className="text-xs text-gray-400">This section is hidden but still occupies space.</span>
          </div>
        </div>
      )}
    </div>
  )
}
