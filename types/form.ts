export interface BusinessFormData {
  businessName: string
  description: string
  industry: string
  targetAudience: string
  features: string[]
  benefits: string[]
  ctaPreference: string
  style: string
  colorMood: string
}

export interface AIPromptData extends BusinessFormData {
  template?: string
}

export interface GenerateOptions {
  includePricing?: boolean
  includeFAQ?: boolean
  includeTestimonials?: boolean
  customInstructions?: string
}