import { LandingPage } from '@/types/section'
import React from 'react'
import SectionRenderer from './SectionRenderer'
import { Navbar } from '../sections/navbar/Navbar'

type PreviewPageProps ={
    landingPage: LandingPage
}

const PreviewPage = ({landingPage}:PreviewPageProps) => {
    const sortedSections = [...landingPage.sections].sort((a,b)=> a.order - b.order)

  return (
    <div className='relative'>
        <Navbar 
            landingPage={landingPage}
            
            ctaText={landingPage.sections.find(s => s.type === 'hero')?.ctaText || 'Get Started'}
        />
        <main className="mt-25">
            {
                sortedSections.map((section)=>(
                    <SectionRenderer key={section.id} section={section} isEditing={true}/>
                ))
            }
        </main>
        
    </div>
  )
}

export default PreviewPage