import { Section } from '@/types/section'
import React from 'react'
import HeroSection from '../sections/hero/HeroSection'
import FeaturesSection from '../sections/features/FeaturesSection'
import ContentSection from '../sections/content/ContentSection'
import CTASection from '../sections/cta/CTASection'
import { FooterSection } from '../sections/footer/FooterSection'

type SectionRendererProps = {
    section: Section
    isEditing?: boolean
}

const SectionRenderer = ({section, isEditing = false}:SectionRendererProps) => {
  if (!section.visible) return null
  
  switch (section.type) {
    case 'hero':
        return <HeroSection section={section} isEditing={isEditing}/>
    case 'features':
        return <FeaturesSection section={section} isEditing={isEditing}/>
    case 'content':
        return <ContentSection section={section} isEditing={isEditing}/>
    // case 'social-proof':
    //   return <SocialProofSection section={section} isEditing={isEditing} />
    // case 'pricing':
    //   return <PricingSection section={section} isEditing={isEditing} />
    case 'cta':
      return <CTASection section={section} isEditing={isEditing} />
    // case 'faq':
    //   return <FAQSection section={section} isEditing={isEditing} />
    case 'footer':
      return <FooterSection section={section} isEditing={isEditing} />
    default:
        return null;
  }
}

export default SectionRenderer