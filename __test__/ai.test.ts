import { generateLandingPage } from '@/lib/ai'
import { BusinessFormData } from '@/types/form'

describe('AI Integration', () => {
  it('generates landing page from form data', async () => {
    const formData: BusinessFormData = {
      businessName: 'Test SaaS',
      description: 'A test SaaS product',
      industry: 'SaaS',
      targetAudience: 'Developers',
      features: ['Feature 1', 'Feature 2'],
      benefits: [],
      ctaPreference: 'Get Started',
      style: 'Modern',
      colorMood: 'professional-blue',
    }

    const landingPage = await generateLandingPage(formData)

    expect(landingPage).toBeDefined()
    expect(landingPage.businessName).toBe('Test SaaS')
    expect(landingPage.sections.length).toBeGreaterThan(0)
  })
})