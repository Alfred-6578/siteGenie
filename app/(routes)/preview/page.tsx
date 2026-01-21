'use client'
import PreviewPage from '@/components/editor/PreviewPage'
import AIGenerationError from '@/components/preview/AiGenerationError'
import AIGenerationLoader from '@/components/preview/AiGenerationLoader'
import { useLandingPage } from '@/context/LandingPageProvider'
import { useTheme } from '@/context/ThemeProvider'
import { useAI } from '@/hooks/useAi'
import { BusinessFormData } from '@/types/form'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Preview = () => {
    const {generate, error, isGenerating, progress} = useAI()
    const {landingPage, isLoading, setLandingPage} = useLandingPage()
    const [isInitializing, setIsInitializing] = useState(true)
    const router = useRouter()

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-body-text">Loading...</div>
    </div>
  }

  if (!landingPage) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-body-text mb-4">No landing page found</p>
        <a href="/generate" className="text-primary">Generate one now →</a>
      </div>
    </div>
  }

    

  return (
    <div className=''>
        <PreviewPage landingPage={landingPage}/>
    </div>
  )
}

export default Preview