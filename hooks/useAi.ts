'use client'

import { generateLandingPage, regenerateSection } from "@/lib/ai"
import { BusinessFormData } from "@/types/form"
import { Section } from "@/types/section"
import { useState } from "react"

export const useAI = ()=>{
    const [isGenerating, setIsGenerating] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [progress, setProgress] = useState(0)

    const generate = async(formData:BusinessFormData)=>{
        setIsGenerating(true)
        setError(null)

        const progressInterval = setInterval(() => {
            setProgress((prev)=>{
                if (prev < 70) return prev + 2
                if (prev < 90) return prev + 0.5
                if (prev >= 99){
                     return 99 
                }else{
                return prev + 0.1
                }
            })
            
        }, 100);


        try {
            const response = await generateLandingPage(formData)

            clearInterval(progressInterval)
            setProgress(100)

            return response
        } catch (error) {
            clearInterval(progressInterval)

            setError('Failed to generate landing')
            console.error(error)
            return null
        }finally{
            clearInterval(progressInterval)

            setIsGenerating(false)
        }
    }

    const regenerate = async (
        sectionType: string,
        formData: BusinessFormData,
        currentSection: Section
    ): Promise<Section | null> => {
        setIsGenerating(true)
        setError(null)

        const progressInterval = setInterval(() => {
            setProgress((prev)=>{
                if (prev < 70) return prev + 2
                if (prev < 90) return prev + 0.5
                if (prev >= 99){
                     return 99 
                }else{
                return prev + 0.1
                }
            })
            
        }, 100);

        try {
            const newSection = await regenerateSection(sectionType, formData, currentSection)

            clearInterval(progressInterval)
            setProgress(100)

            return newSection
        } catch (err) {
            clearInterval(progressInterval)

            setError('Failed to regenerate section. Please try again.')
            console.error(err)
            return null
        } finally {
            clearInterval(progressInterval)

            setIsGenerating(false)
        }
    }

    return{
        generate,
        regenerate,
        isGenerating,
        error ,
        progress,
    }
} 