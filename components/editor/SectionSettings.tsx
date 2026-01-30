'use client'

import { useState } from 'react'
import { useLandingPage } from '@/context/LandingPageProvider'
import { Settings, Eye, EyeOff, Trash2, RefreshCw, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { Section } from '@/types/section'
import { useAI } from '@/hooks/useAi'
import { BusinessFormData } from '@/types/form'

interface SectionSettingsProps {
  section: Section
  className?: string
}

export function SectionSettings({ section, className }: SectionSettingsProps) {
  const { updateSection, toggleSectionVisibility, startRegeneration, finishRegeneration } = useLandingPage()
  const {regenerate}  =  useAI()
  const [isOpen, setIsOpen] = useState(false)
  const [regenerateError, setRegenerateError] = useState<string | null>(null)

  const formDataString = localStorage.getItem("businessFormData")
  const formData: BusinessFormData | null = formDataString ? JSON.parse(formDataString) : null

  const getLayoutOptions = () => {
    switch (section.type) {
      case 'hero':
        return [
          { value: 'centered', label: 'Centered' },
          { value: 'split', label: 'Split' },
          { value: 'background', label: 'Background' },
        ]
      case 'features':
        return [
          { value: 'grid', label: 'Grid' },
          { value: 'cards', label: 'Cards' },
          { value: 'alternating', label: 'Alternating' },
        ]
      case 'content':
        return [
          { value: 'single', label: 'Single Column' },
          { value: 'two-col', label: 'Two Columns' },
          { value: 'image', label: 'With Image' },
        ]
      case 'social-proof':
        return [
          { value: 'testimonials', label: 'Testimonials' },
          { value: 'logos', label: 'Logo Bar' },
        ]
      case 'pricing':
        return [
          { value: 'cards', label: 'Cards' },
          { value: 'table', label: 'Table' },
        ]
      case 'cta':
        return [
          { value: 'centered', label: 'Centered' },
          { value: 'split', label: 'Split' },
        ]
      case 'footer':
        return [
          { value: 'simple', label: 'Simple' },
          { value: 'detailed', label: 'Detailed' },
        ]
      default:
        return []
    }
  }

  const layoutOptions = getLayoutOptions()
  const sectionTypeLabel = section.type.charAt(0).toUpperCase() + section.type.slice(1).replace('-', ' ')

  return (
    <div className={`absolute top-10 right-6 z-10 ${className}`}>
      <Button
        size="md"
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80"
        title="Section Settings"
      >
        <Settings className="w-6 h-6" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Settings panel */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl p-4 min-w-[280px] z-50 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-gray-900">
                {sectionTypeLabel} Settings
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Layout selector */}
            {layoutOptions.length > 0 && (
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Layout Style
                </label>
                <select
                  value={(section as any).layout}
                  onChange={(e) =>
                    updateSection(section.id, { layout: e.target.value } as any)
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {layoutOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {regenerateError && (
              <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {regenerateError}
              </div>
            )}

            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              {/* Visibility toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleSectionVisibility(section.id)
                  setIsOpen(false)
                }}
                className="w-full justify-start"
              >
                {section.visible ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hide Section
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Show Section
                  </>
                )}
              </Button>

              {/* Regenerate button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
                title="Regenerate this section with AI"
                onClick={async () => {
                  if (!formData) return
                  setRegenerateError(null)
                  startRegeneration(section.id)
                  try {
                    const regeneratedSection = await regenerate(section.type, formData, section)
                    if (regeneratedSection) {
                      updateSection(section.id, regeneratedSection as any)
                    } else {
                      setRegenerateError('Failed to regenerate section')
                    }
                  } catch (error) {
                    setRegenerateError('Error regenerating section. Please try again.')
                    console.error(error)
                  } finally {
                    finishRegeneration(section.id)
                  }
                }}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate
              </Button>

              {/* Delete button */}
              {/* {section.type !== 'hero' && section.type !== 'footer' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                  title="Remove this section"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove Section
                </Button>
              )} */}
            </div>
          </div>
        </>
      )}
    </div>
  )
}