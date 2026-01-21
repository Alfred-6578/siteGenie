'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { LandingPage, Section } from '@/types/section'
import { generateId } from '@/lib/utils'
import { useTheme } from './ThemeProvider'

interface LandingPageContextType {
  landingPage: LandingPage | null
  setLandingPage: (page: LandingPage) => void
  updateSection: (sectionId: string, updates: Partial<Section>) => void
  reorderSections: (sectionIds: string[]) => void
  toggleSectionVisibility: (sectionId: string) => void
  isLoading: boolean
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
)

export function LandingPageProvider({ children }: { children: ReactNode }) {
  const [landingPage, setLandingPageState] = useState<LandingPage | null>(null)
  const {setPalette} = useTheme()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      const stored = localStorage.getItem('currentLandingPage')

      if (stored) {
        const currentLandingPage: LandingPage = JSON.parse(stored)

        try {
          setLandingPageState(currentLandingPage)

        } catch (error) {
          console.error('Failed to parse landing page from storage', error)
        }
      }
      setIsLoading(false)
    }, [])

  
  useEffect(() => {
    if (landingPage) {
      localStorage.setItem('currentLandingPage', JSON.stringify(landingPage))
    }
  }, [landingPage])

  useEffect(() => {
    if (landingPage) {
      setPalette(landingPage.theme)
    }
  }, [landingPage, setPalette])


  const setLandingPage = (page: LandingPage) => {
    setLandingPageState(page)
  }

  const updateSection = (sectionId: string, updates: Partial<Section>) => {
    if (!landingPage) return

    setLandingPageState({
      ...landingPage,
      sections: landingPage.sections.map((section) =>
        section.id === sectionId ? { ...section, ...updates } as Section : section
      ),
      updatedAt: new Date(),
    })
  }

  const reorderSections = (sectionIds: string[]) => {
    if (!landingPage) return

    const reordered = sectionIds.map((id, index) => {
      const section = landingPage.sections.find((s) => s.id === id)!
      return { ...section, order: index }
    })

    setLandingPageState({
      ...landingPage,
      sections: reordered,
      updatedAt: new Date(),
    })
  }

  const toggleSectionVisibility = (sectionId: string) => {
    if (!landingPage) return

    setLandingPageState({
      ...landingPage,
      sections: landingPage.sections.map((section) =>
        section.id === sectionId
          ? { ...section, visible: !section.visible }
          : section
      ),
      updatedAt: new Date(),
    })
  }


  return (
    <LandingPageContext.Provider
      value={{
        landingPage,
        setLandingPage,
        updateSection,
        reorderSections,
        toggleSectionVisibility,
        isLoading
      }}
    >
      {children}
    </LandingPageContext.Provider>
  )
}

export function useLandingPage() {
  const context = useContext(LandingPageContext)
  if (!context) {
    throw new Error('useLandingPage must be used within LandingPageProvider')
  }
  return context
}