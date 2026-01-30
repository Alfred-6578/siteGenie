'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { LandingPage, Section } from '@/types/section'
import { generateId } from '@/lib/utils'
import { useTheme } from './ThemeProvider'

interface LandingPageContextType {
  landingPage: LandingPage | null
  setLandingPage: (page: LandingPage) => void
  updateSection: (sectionId: string, updates: Partial<Section>) => void
  updateLandingPage: (updates: Partial<LandingPage>) => void
  reorderSections: (sectionIds: string[]) => void
  toggleSectionVisibility: (sectionId: string) => void
  isLoading: boolean
  regeneratingSections: Record<string, boolean>
  startRegeneration: (sectionId: string) => void
  finishRegeneration: (sectionId: string) => void
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
)

export function LandingPageProvider({ children }: { children: ReactNode }) {
  const [landingPage, setLandingPageState] = useState<LandingPage | null>(null)
  const {setPalette} = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [regeneratingSections, setRegeneratingSections] = useState<Record<string, boolean>>({})

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

  const updateSection = (sectionId: string, updates: Record<string, any>) => {
    if (!landingPage) return

    setLandingPageState((prev) => {
      if (!prev) return prev;

      const newSections = prev.sections.map((section) => {
        if (section.id !== sectionId) return section;

        // Create a deep clone of the section to avoid mutation issues
        const updatedSection = JSON.parse(JSON.stringify(section));

        Object.entries(updates).forEach(([path, value]) => {
          const keys = path.split('.'); // Split "stories.0.content" into ["stories", "0", "content"]
          let current = updatedSection;

          // Traverse the object until the last key
          for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            // Handle array indices or object keys
            if (!current[key]) current[key] = isNaN(Number(keys[i+1])) ? {} : [];
            current = current[key];
          }

          // Set the value at the final key
          current[keys[keys.length - 1]] = value;
        });

        return updatedSection as Section;
      });

      return {
        ...prev,
        sections: newSections,
        updatedAt: new Date(),
      };
    });
    
  };

  const updateLandingPage = (updates: Partial<LandingPage>) => {
    if (!landingPage) return;

    setLandingPageState({
      ...landingPage,
      ...updates, 
      updatedAt: new Date(),
    });
  };

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

  const startRegeneration = (sectionId: string) => {
    setRegeneratingSections((prev) => ({
      ...prev,
      [sectionId]: true,
    }))
  }

  const finishRegeneration = (sectionId: string) => {
    setRegeneratingSections((prev) => {
      const next = { ...prev }
      delete next[sectionId]
      return next
    })
  }


  return (
    <LandingPageContext.Provider
      value={{
        landingPage,
        setLandingPage,
        updateSection,
        updateLandingPage,
        reorderSections,
        toggleSectionVisibility,
        isLoading,
        regeneratingSections,
        startRegeneration,
        finishRegeneration,
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