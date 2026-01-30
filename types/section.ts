export type SectionType = 
  | 'hero'
  | 'features'
  | 'content'
  | 'social-proof'
  | 'pricing'
  | 'cta'
  | 'faq'
  | 'footer'

export type HeroLayout = 'centered' | 'split' | 'background'
export type FeaturesLayout = 'grid' | 'cards' | 'alternating'
export type ContentLayout = 'single' | 'two-col' | 'image'
export type SocialProofLayout = 'testimonials' | 'logos'
export type PricingLayout = 'cards' | 'table'
export type CTALayout = 'centered' | 'split'
export type FooterLayout = 'simple' | 'detailed'

export interface BaseSection {
  id: string
  type: SectionType
  visible: boolean
  order: number
}

export interface HeroSection extends BaseSection {
  type: 'hero'
  layout: HeroLayout
  headline: string
  subheadline: string
  ctaText: string
  ctaUrl: string
  image?: string
  imageAlt?: string
  backgroundImage?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  imageAlt?: string
  image?: string
}

export interface FeaturesSection extends BaseSection {
  type: 'features'
  layout: FeaturesLayout
  headline: string
  subheadline?: string
  features: Feature[]
}


interface items {
  title: string
  description: string
}

export type RightColumnContent = 
  | { type: 'list'; items: items[] }
  | { type: 'paragraph'; content: string }


interface ImageContentStories {
  title: string ,
  content: string,
  imagePosition: 'left' | 'right',   
  imageAlt?: string 
  image?: string
}


export interface ContentSection extends BaseSection {
  type: 'content'
  layout: 'single' | 'two-col' | 'image'
  
  single: {
    headline: string
    subheadline?: string
    content: string
    ctaText?: string
    ctaUrl?: string
    image?: string
    imageAlt?: string 
    includeImage?: boolean
  }
  
  twoCol: {
    headline: string
    subheadline?: string
    left: {
      title?: string
      items: items[]
    }
    right: {
      title?: string
    } & RightColumnContent
    ctaText?: string
    ctaUrl?: string
  }
  
  image: {
    headline: string
    subheadline?: string
    stories: ImageContentStories[]
    ctaText?: string
    ctaUrl?: string
  }
}


export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
  rating?: number
}

export interface SocialProofSection extends BaseSection {
  type: 'social-proof'
  layout: SocialProofLayout
  headline?: string
  testimonials?: Testimonial[]
  logos?: string[]
}

export interface PricingTier {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaUrl: string
}

export interface PricingSection extends BaseSection {
  type: 'pricing'
  layout: PricingLayout
  headline: string
  subheadline?: string
  tiers: PricingTier[]
}

export interface CTASection extends BaseSection {
  type: 'cta'
  layout: CTALayout
  headline: string
  subheadline?: string
  ctaText: string
  ctaUrl: string
  image?: string
  ctaTitle: string;
  ctaDescription: string;
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface FAQSection extends BaseSection {
  type: 'faq'
  headline: string
  items: FAQItem[]
}

export interface FooterLink {
  text: string
  url: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterSection extends BaseSection {
  type: 'footer'
  layout: FooterLayout
  companyName: string
  description?: string
  columns?: FooterColumn[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    facebook?: string
    instagram?: string
  }
}

export type Section = 
  | HeroSection
  | FeaturesSection
  | ContentSection
  | SocialProofSection
  | PricingSection
  | CTASection
  | FAQSection
  | FooterSection

export interface LandingPage {
  id: string
  businessName: string
  theme: string
  sections: Section[]
  createdAt: Date
  updatedAt: Date
}