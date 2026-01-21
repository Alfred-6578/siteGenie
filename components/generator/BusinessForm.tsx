'use client'
import React, { useState } from 'react'
import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextArea'
import { BusinessFormData } from '@/types/form'
import { FormSelect } from './FormSelect'
import { CTA_OPTIONS, INDUSTRIES, STYLES } from '@/lib/constants'
import { FormMultiInput } from './FormMultiInput'
import { FormColorMood } from './FormColorMood'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation'
import Popup from './Popup'
import { useTheme } from '@/context/ThemeProvider'
import { form } from 'framer-motion/client'

type BusinessFormProps ={
    onSubmit: (formData:BusinessFormData) => void
}

const BusinessForm = ({onSubmit}:BusinessFormProps) => {
    const [formData, setFormData] = useState<BusinessFormData>({
        businessName: '',
        description: '',
        industry: '',
        targetAudience: '',
        features: [],
        benefits: [],
        ctaPreference: '',
        style: '',
        colorMood: '',
    })
    const [error, setError] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const {setPalette} = useTheme()

    const router = useRouter()

    const handleChange = (name: string, value: string | string[]) =>{
        setFormData((prev)=>(
            {...prev, [name]:value}
        ))
    }

    const validate = () =>{
        const newErrors : Record<string,string> = {}

        if (!formData.businessName.trim()) {
            newErrors.businessName = 'Business name is required'
            
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Business description is required'
        }

        if (!formData.targetAudience.trim()) {
            newErrors.targetAudience = 'Target audience is required'
        }

        if (formData.features.length === 0) {
            newErrors.features = 'Add at least one feature'
        }

        setError(newErrors)
        setIsOpen(true)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        setLoading(true)

        if (!validate()){
            setLoading(false)
            return
        }

        onSubmit(formData)
        
        
    }

  return (
    <form className='max-w-2xl mx-auto space-y-6' onSubmit={handleSubmit}>
        <FormInput 
            name='businessName'
            label='Business Name'
            value={formData.businessName}
            onChange={handleChange}
            required
            placeholder='e.g, Acme Saas'
        />
        
        <FormTextarea 
            name='description'
            label='Business Description'
            value={formData.description}
            onChange={handleChange}
            required
            placeholder='Briefly describe what your business does...'
        />

        <div className="grid md:grid-cols-2 gap-5.5">

            <FormSelect 
                name='industry'
                label='Industry'
                value={formData.industry}
                onChange={handleChange}
                options={INDUSTRIES.map((industry)=>({
                    label: industry,
                    value: industry,
                }))}
            />

            <FormSelect 
                name='style'
                label='Style Preference'
                value={formData.style}
                onChange={handleChange}
                options={STYLES.map((style)=>({
                    label: style,
                    value: style,
                }))}
            />

       
        </div>

        <FormInput 
            name='targetAudience'
            label='Target Audience'
            value={formData.targetAudience}
            onChange={handleChange}
            required
            placeholder='e.g., Small business owners, Developers, Students'
        />

         <FormColorMood 
            name='colorMood'
            value={formData.colorMood}
            onChange={handleChange}
        />

        <FormMultiInput 
            name='features'
            label='Key Features (3-5 recommended)'
            values={formData.features}
            onChange={handleChange}
            placeholder='Enter a feature and press Enter'
            max={8}
            
        />

        <FormMultiInput 
            name='benefits'
            label='Key Benefits (optional)'
            values={formData.benefits}
            onChange={handleChange}
            placeholder='Enter a benefit and press Enter'
            max={2}
        />

        <FormSelect
            name='ctaPreference'
            label='Call-to-Action Text'
            value={formData.ctaPreference}
            onChange={handleChange}
            options={CTA_OPTIONS.map((option)=>({
                label: option,
                value: option
            }))}
        />

        <div className="flex justify-end pt-6">
            <Button 
                variant='gradient' 
                className='py-3 flex-1' 
                disabled={loading}
            >
                Generate Landing Page  → 
            </Button>
        </div>

       
        <Popup 
            isOpen={isOpen}
            error={Object.values(error)[0]}
            onClose={()=> setIsOpen(false)}
            position='top-right'
        />
        
       
    </form>
  )
}

export default BusinessForm