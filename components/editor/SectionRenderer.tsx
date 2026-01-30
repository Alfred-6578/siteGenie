import { Section } from '@/types/section'
import React from 'react'
import HeroSection from '../sections/hero/HeroSection'
import FeaturesSection from '../sections/features/FeaturesSection'
import ContentSection from '../sections/content/ContentSection'
import CTASection from '../sections/cta/CTASection'
import { FooterSection } from '../sections/footer/FooterSection'
import { useLandingPage } from '@/context/LandingPageProvider'
import { HeroSkeleton } from '../sections/hero/HeroSkeleton'
import { FeaturesSkeleton } from '../sections/features/FeaturesSkeleton'
import { CTASkeleton } from '../sections/cta/CTASkeleton'
import { FooterSkeleton } from '../sections/footer/FooterSkeleton'
import { ContentSkeleton } from '../sections/content/ContentSkeleton'
import { SectionControls } from './SectionControls'

type SectionRendererProps = {
    section: Section
    isEditing?: boolean
}

const SectionRenderer = ({section, isEditing = false}:SectionRendererProps) => {
  const { regeneratingSections } = useLandingPage()
  
  if (regeneratingSections[section.id]) {
    let skeleton: React.ReactNode = null
    
    switch (section.type) {
      case 'hero':
        skeleton = <HeroSkeleton layout={section.layout as 'centered' | 'split' | 'background'} />
        break
      case 'features':
        skeleton = <FeaturesSkeleton layout={section.layout as 'grid' | 'cards' | 'alternating'} />
        break
      case 'content':
        skeleton = <ContentSkeleton layout={section.layout as 'single' | 'two-col' | 'image'} />
        break
      case 'cta':
        skeleton = <CTASkeleton />
        break
      case 'footer':
        skeleton = <FooterSkeleton />
        break
    }
    
    return <SectionControls section={section} isEditing={isEditing} visible={true}>{skeleton}</SectionControls>
  }
  
  if (!section.visible && !isEditing) return null
  
  let sectionComponent: React.ReactNode = null
  
  switch (section.type) {
    case 'hero':
      sectionComponent = <HeroSection section={section} isEditing={isEditing}/>
      break
    case 'features':
      sectionComponent = <FeaturesSection section={section} isEditing={isEditing}/>
      break
    case 'content':
      sectionComponent = <ContentSection section={section} isEditing={isEditing}/>
      break
    case 'cta':
      sectionComponent = <CTASection section={section} isEditing={isEditing} />
      break
    case 'footer':
      sectionComponent = <FooterSection section={section} isEditing={isEditing} />
      break
    default:
      return null
  }
  
  return <SectionControls section={section} isEditing={isEditing} visible={section.visible}>{sectionComponent}</SectionControls>
}

export default SectionRenderer