'use client'
import BusinessForm from '@/components/generator/BusinessForm'
import GenerateNavbar from '@/components/generator/GenerateNavbar'
import AIGenerationError from '@/components/preview/AiGenerationError'
import AIGenerationLoader from '@/components/preview/AiGenerationLoader'
import { useLandingPage } from '@/context/LandingPageProvider'
import { useTheme } from '@/context/ThemeProvider'
import { useAI } from '@/hooks/useAi'
import { BusinessFormData } from '@/types/form'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const GeneratePage = () => {
    const { generate, isGenerating, progress, error } = useAI()
    const [loading, setLoading] = useState(false)
    const {landingPage, setLandingPage} = useLandingPage()

    const router = useRouter()
    

    const handleSubmit = async(formData:BusinessFormData) =>{
        const generated = await generate(formData)

        if (generated) {
            setLandingPage(generated)
            console.log(generated,'landingPage');
            localStorage.setItem('businessFormData', JSON.stringify(formData))

        }

        setLoading(false)
        router.push('/preview')
    }

    if (isGenerating) {
       return <AIGenerationLoader progress={progress}/>
    }

    if (error) {
        return (
            <AIGenerationError error={error}/>
        )
    }

  return (
    <div className="">
      <div className='flex flex-col'>
        <GenerateNavbar />
        <div className="py-20 mt-10 px-3">
          <div className="text-center mb-6">
            <h2 className="text-headings text-2xl font-bold">Generate Your Landing Page</h2>
            <p className="text-secondary-text">
              Fill in the details about your business, and our AI will create a 
              beautiful, customizable landing page in seconds.
            </p>
          </div>
          <BusinessForm onSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default GeneratePage