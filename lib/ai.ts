import { BusinessFormData } from "@/types/form";
import { LandingPage, Section } from "@/types/section";
import { generateId } from "./utils";
import { title } from "process";


const AI_TEST_MODE = process.env.NEXT_PUBLIC_AI_TEST_MODE == 'true'
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY 

const generateSystemPrompt = ():string =>{
    return `
        You are an expert landing page designer and copywriter specializing in high-converting copy.

        CRITICAL OUTPUT FORMAT:
        Respond ONLY with valid JSON. No markdown code blocks, no explanations, no preamble.

        REQUIRED JSON SCHEMA:
        {
        "hero": {
            "headline": "string (40-60 chars, primary benefit)",
            "subheadline": "string (80-120 chars, supporting benefit)",
            "ctaText": "string (2-4 words, action verb)",
            "layout": "centered|split|background",
            "image": "string (image URL)",
            "backgroundImage": "string (https://picsum.photos/seed/{unique-seed}/1920/1080, required only for background layout)"
        },
        "features": {
            "headline": "string (30-50 chars)",
            "subheadline": "string (60-100 chars)",
            "features": [
            {
                "title": "string (20-40 chars)",
                "description": "string (60-100 chars, outcome-focused)",
                "icon": "⚡|🚀|💡|🎯|🔒|📊|⚙️|🌟"
                "image": "string (image URL)",

            }
            ],
            "layout": "grid|cards|alternating"
        },
        "content": {
            "layout": "single|two-col|image",
            "single": {
                "headline": "string (30-50 chars)",
                "subheadline": "string (60-100 chars, optional)",
                "content": "string (150-300 chars, cohesive paragraph)",
                "ctaText": "string (2-4 words, optional)",
                "image": "string (image URL)",
                "includeImage": "boolean (whether to include image)"
            },
            "twoCol": {
                "headline": "string (30-50 chars)",
                "subheadline": "string (60-100 chars)",
                "left": {
                    "title": "string (column heading)",
                    "items": [
                    { "title": "string", "description": "string" },
                    { "title": "string", "description": "string" },
                    { "title": "string", "description": "string" }
                    ]
                
                },
                "right": {
                    "title": "string (column heading)",
                    "type": "list|paragraph",
                    "items": [
                    { "title": "string", "description": "string" },
                    { "title": "string", "description": "string" },
                    { "title": "string", "description": "string" }
                    ],
                    "content": "string (150-250 chars, detailed explanation)"
                },
                "ctaText": "string (2-4 words, optional)"
            },
            "image": {
                "headline": "string (30-50 chars)",
                "subheadline": "string (60-100 chars, REQUIRED for context)",
                "stories": [
                    {
                    "title": "string (20-40 chars, story chapter heading)",
                    "content": "string (100-150 chars, narrative paragraph)",
                    "imagePosition": "left"
                    "image": "string (image URL)",
                    },
                    {
                    "title": "string (20-40 chars)",
                    "content": "string (100-150 chars)",
                    "imagePosition": "right"
                    "image": "string (image URL)",
                    },
                    {
                    "title": "string (20-40 chars)",
                    "content": "string (100-150 chars)",
                    "imagePosition": "left"
                    "image": "string (image URL)",
                    }
                ],
                "ctaText": "string (2-4 words, REQUIRED)"
            }
        },
        "cta": {
            "headline": "string (30-50 chars, urgency-driven)",
            "subheadline": "string (60-100 chars)",
            "ctaText": "string (2-4 words)",
            "layout": "centered|split",
            "ctaTitle": "string",
            "ctaDescription": "string"
        }
        }

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        CONTENT SECTION GENERATION REQUIREMENTS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        YOU MUST GENERATE DATA FOR ALL THREE CONTENT LAYOUTS:
        - content.single: Mission statement version
        - content.twoCol: Problem→Solution comparison version
        - content.image: Visual storytelling version

        All three variations should convey the same core message but adapted to their format.

        SINGLE LAYOUT (Mission statement, centered text):
        - Headline: Core mission/value proposition
        - Subheadline: Supporting context (optional)
        - Content: Cohesive paragraph (150-300 chars)
        - CtaText: Optional action (2-4 words)

        TWO-COLUMN LAYOUT (Problem→Solution, Benefits→Details):
        - Headline: Comparison title
        - Subheadline: Context for comparison
        - Left column: Problem/Challenge/Before side
        - Right column: Solution/Benefit/After side (choose list OR paragraph)
        * Use "type": "list" + "items" for distinct solutions
        * Use "type": "paragraph" + "content" for process explanation
        - CtaText: Optional action

        IMAGE LAYOUT (Visual storytelling with 2-3 story blocks):
        - Headline: Story arc title
        - Subheadline: REQUIRED - adds credibility/social proof
        - Stories: ALWAYS 2-3 blocks (never just 1)
        * First story (left): Beginning/problem/origin
        * Second story (right): Journey/growth/solution
        * Third story (left, optional): Result/achievement/impact
        - CtaText: REQUIRED - drive action after story

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        LAYOUT SELECTION LOGIC
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        HERO:
        - centered: Simple/text-focused, ideal for clear value propositions
        - split: Product showcase with image/visual element
        - background: Visual brand with hero image background

        FEATURES:
        - grid: 3-6 equal-priority features in balanced grid layout
        - cards: 3-6 features with detailed explanations in card format
        - alternating: 2-4 major flagship features with image/text alternating

        CONTENT (set content.layout to your recommended default):
        - single: Mission statement, company story, or focused message
        - two-col: Problem→Solution, Benefits→Details, Before→After comparison
        - image: Journey story, product showcase, visual narrative

        CTA:
        - centered: Single focused offer with centered CTA
        - split: Offer + trust element (testimonial, stats, guarantee)

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        FEATURE COUNT RULES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Grid/Cards layout:
        - User provides 1-2 features → Generate 3 total
        - User provides 3 features → Use all 3
        - User provides 4-5 features → Expand to 6
        - User provides 6+ features → Select best 6
        - Range: Minimum 3, Maximum 6

        Alternating layout:
        - User provides 1-3 features → Use 2-3 (quality over quantity)
        - User provides 4+ features → Select top 4 most impactful
        - Range: Minimum 2, Maximum 4


        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        IMAGE GENERATION RULES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Use Picsum Photos with unique seeds for all images:
        Format: https://picsum.photos/seed/{unique-seed}/{width}/{height}

        SEED NAMING CONVENTION:
        {businessType}-{section}-{descriptor}

        Examples:
        - "saas-hero-main"
        - "fitness-feature-workout" 
        - "ecommerce-story-1"

        REQUIRED IMAGES BY SECTION:

        HERO:
        - Always include both "image" AND "backgroundImage"
        - "image": "https://picsum.photos/seed/{businessType}-hero-main/1200/800"
        - "backgroundImage": "https://picsum.photos/seed/{businessType}-hero-bg/1920/1080"

        FEATURES:
        - Always include "image" for each feature
        - "image": "https://picsum.photos/seed/{businessType}-feature-{number}/800/600"

        CONTENT (all layouts):
        - single: "image": "https://picsum.photos/seed/{businessType}-content-single/1000/667"
        - twoCol: "image": "https://picsum.photos/seed/{businessType}-content-twocol/1000/667"
        - image: Each story needs "image": "https://picsum.photos/seed/{businessType}-story-{number}/1000/667"

        // CTA:
        // - Always include "image"
        // - "image": "https://picsum.photos/seed/{businessType}-cta-offer/600/400"

        BUSINESS TYPE SEEDS:
        - SaaS/Tech: "saas", "tech", "software"
        - E-commerce: "shop", "retail", "store"
        - Finance: "finance", "banking", "fintech"
        - Fitness: "fitness", "health", "gym"
        - Creative: "creative", "agency", "design"
        - Food: "food", "restaurant", "cafe"
        - Real Estate: "realestate", "property", "home"
        - Education: "education", "course", "learning"

        CRITICAL RULES:
        - Every image must have a UNIQUE seed (never reuse seeds)
        - Always include "imageAlt" with descriptive text for every image
        - Seeds must be lowercase with hyphens only
        - Increment numbers for multiple items: feature-1, feature-2, feature-3, story-1, story-2

        EXAMPLE OUTPUT:
        {
        "hero": {
            "layout": "split",
            "image": "https://picsum.photos/seed/saas-hero-main/1200/800",
            "backgroundImage": "https://picsum.photos/seed/saas-hero-bg/1920/1080",
            "imageAlt": "Project management dashboard interface"
        },
        "features": {
            "layout": "cards",
            "features": [
            {
                "image": "https://picsum.photos/seed/saas-feature-1/800/600",
                "imageAlt": "Task automation workflow"
            },
            {
                "image": "https://picsum.photos/seed/saas-feature-2/800/600",
                "imageAlt": "Team collaboration tools"
            },
            {
                "image": "https://picsum.photos/seed/saas-feature-3/800/600",
                "imageAlt": "Real-time analytics dashboard"
            }
            ]
        },
        "content": {
            "layout": "image",
            "single": {
            "image": "https://picsum.photos/seed/saas-content-single/1000/667",
            "imageAlt": "Our mission and vision"
            },
            "twoCol": {
            "image": "https://picsum.photos/seed/saas-content-twocol/1000/667",
            "imageAlt": "Problem and solution comparison"
            },
            "image": {
            "stories": [
                {
                "image": "https://picsum.photos/seed/saas-story-1/1000/667",
                "imageAlt": "Our humble beginnings"
                },
                {
                "image": "https://picsum.photos/seed/saas-story-2/1000/667",
                "imageAlt": "Rapid growth and innovation"
                },
                {
                "image": "https://picsum.photos/seed/saas-story-3/1000/667",
                "imageAlt": "Leading the industry today"
                }
            ]
            }
        },
        "cta": {
            "layout": "split",
            "image": "https://picsum.photos/seed/saas-cta-offer/600/400",
            "imageAlt": "Start your free trial today"
        }
        }

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        COPYWRITING PRINCIPLES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        1. Headlines: Lead with core benefit, not product name
        ❌ "TaskFlow Project Manager"
        ✅ "Manage Projects 10x Faster"

        2. Subheadlines: Add specificity and credibility
        ❌ "A great tool for teams"
        ✅ "Trusted by 10,000+ teams to save 15 hours weekly"

        3. Features: Translate into outcomes
        ❌ "Advanced Automation"
        ✅ "Save 10 Hours Every Week"

        4. CTAs: Action verbs only
        Good: Get, Start, Join, Try, Download, See, Launch

        5. Tone matching:
        - Finance/Legal: Professional, confident, data-driven
        - E-commerce/Lifestyle: Friendly, emotional, aspirational
        - SaaS/Tech: Clear, benefit-focused, efficient
        - Creative: Bold, unique, personality-driven

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        AUDIENCE ADAPTATION
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        B2B: ROI focus, professional tone, data-driven language
        B2C: Emotional benefits, lifestyle outcomes, friendly tone
        Technical: Precision, specifications, credibility signals
        Creative: Personality, uniqueness, aspirational language

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ERROR HANDLING
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        - If business details are vague: Create professional generic copy
        - If features are unclear: Infer industry-standard features
        - Default tone: Professional
        - Default CTAs: Industry-standard action verbs
        - Always maintain JSON validity

        - CRITICAL: Always generate all three content layout variations (single, twoCol, image)`;
}
    


const getIndustryGuidance = (industry: string): string =>{
  const guidance: Record<string, string> = {
    'SaaS': '- Focus on ROI, efficiency gains, and time savings\n- Use data-driven language\n- Emphasize scalability and integration',
    'E-commerce': '- Highlight product quality and uniqueness\n- Create urgency with limited offers\n- Focus on emotional benefits',
    'Healthcare': '- Prioritize trust and credibility\n- Use empathetic, caring language\n- Emphasize safety and results',
    'Education': '- Focus on transformation and outcomes\n- Use aspirational language\n- Emphasize expertise and support',
    'Finance': '- Build trust and credibility first\n- Use concrete numbers and results\n- Professional, confident tone',
    'default': '- Use industry-appropriate terminology\n- Focus on customer benefits\n- Build credibility'
  };
  
  return guidance[industry] || guidance['default'];
}

const getToneGuidance = (style: string): string =>{
  const guidance: Record<string, string> = {
    'Professional': '- Use formal, confident language\n- Focus on expertise and results\n- Avoid casual expressions',
    'Friendly': '- Use conversational, approachable language\n- Include warmth and personality\n- Make it feel personal',
    'Bold': '- Use strong, decisive language\n- Create excitement and energy\n- Be confident and assertive',
    'Minimalist': '- Keep copy concise and direct\n- Focus on essential information only\n- Use simple, clear language',
    'default': '- Match tone to target audience expectations\n- Be clear and authentic'
  };
  
  return guidance[style] || guidance['default'];
}

const generateUserPrompt = (formData:BusinessFormData):string => {
    return `Create landing page content for:

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    BUSINESS INFORMATION
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Name: ${formData.businessName}
    Industry: ${formData.industry}
    Target Audience: ${formData.targetAudience}

    Description:
    ${formData.description}

    Features to Highlight:
    ${formData.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}
    ${formData.benefits.length > 0 ? `\nBenefits to Emphasize:\n${formData.benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}` : ''}

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    CONTENT REQUIREMENTS
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Style: ${formData.style}
    Primary CTA: ${formData.ctaPreference}

    ${getIndustryGuidance(formData.industry)}
    ${getToneGuidance(formData.industry)}
    

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    SECTION GUIDELINES
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    HERO: Open with the core value proposition that resonates with ${formData.targetAudience}

    FEATURES: Transform each feature into a tangible outcome or benefit

    CONTENT: Tell the story of how/why this solves the audience's problem

    CTA: Create urgency and make "${formData.ctaPreference}" compelling

    Use ${formData.style} tone throughout, optimized for ${formData.industry}.

    Generate the complete JSON response.`;

}


// Update this function in your ai.ts file
const callOpenAi = async(userPrompt: string): Promise<string> => {
    const systemPrompt = generateSystemPrompt();
    
    // Call YOUR Next.js API route instead of OpenAI directly
    const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            systemPrompt,
            userPrompt
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API request failed: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data.content;
}

const generateMockResponse = (formData:BusinessFormData): string =>{
    return JSON.stringify({
        hero: {
            headline: `Transform Your Business with ${formData.businessName}`,
            subheadline: `The perfect solution for ${formData.targetAudience}`,
            ctaText: formData.ctaPreference,
            layout: 'centered',
        },
        features: {
            headline: 'Everything You Need',
            features: formData.features.slice(0, 6).map((feature) => ({
                title: feature,
                description: `Powerful ${feature.toLowerCase()} to help you succeed`,
                icon: '⚡',
            })),
            layout: 'grid',
        },
        content: {
            headline: `Why Choose ${formData.businessName}?`,
            content: `${formData.description} We're dedicated to helping ${formData.targetAudience} achieve their goals with our innovative ${formData.industry.toLowerCase()} solution.`,
            layout: 'two-col',
        },
        cta: {
            headline: 'Ready to Get Started?',
            subheadline: 'Join thousands of satisfied customers today',
            ctaText: formData.ctaPreference,
            layout: 'centered',
        },
    })
}


const parseAIResponse = (aiResponse:string, formData:BusinessFormData)=>{
    try {
        let cleanResponse = aiResponse.trim()

        if (cleanResponse.startsWith('```json')) {
            cleanResponse = cleanResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '')
        } else if (cleanResponse.startsWith('```')) {
            cleanResponse = cleanResponse.replace(/```\n?/g, '')
        }
        console.log(cleanResponse)


        const parsed = JSON.parse(cleanResponse)

        const sections : Section[] = []

        if (parsed.hero) {
            sections.push({
                id: generateId(),
                type: 'hero',
                visible: true,
                order: 0,
                layout: parsed.hero.layout || 'centered',
                headline: parsed.hero.headline,
                subheadline: parsed.hero.subheadline,
                ctaText: parsed.hero.ctaText,
                image: parsed.hero.image,
                imageAlt: parsed.hero.imageAlt,
                backgroundImage: parsed.hero.backgroundImage,
                ctaUrl: '#'
                
            })
        }


        if (parsed.features) {
            sections.push({
                id: generateId(),
                type: 'features',
                visible: true,
                order: 1,
                layout: parsed.features.layout || 'grid',
                headline: parsed.features.headline,
                subheadline: parsed.features.subheadline,
                features: parsed.features.features.map((f:any)=>({
                    id: generateId(),
                    title: f.title,
                    description: f.description,
                    icon: f.icon,
                    image: f.image,
                    imageAlt: f.imageAlt,
                }))
            })
        }

        if (parsed.content) {
            const { layout, single, twoCol, image } = parsed.content;
            
            sections.push({
                id: generateId(),
                type: 'content' as const,
                visible: true,
                order: 2,
                layout: layout || 'two-col',
                
                
                single: single,
                twoCol: twoCol,
                image: image,
                
            });
        }

        if (parsed.cta) {
            sections.push({
                id: generateId(),
                type: 'cta',
                visible: true,
                order: 3,
                layout: parsed.cta.layout || 'two-col',
                headline: parsed.cta.headline,
                subheadline: parsed.cta.subheadline,
                ctaText: parsed.cta.ctaText,
                ctaUrl: '#',
                ctaTitle: parsed.cta.ctaTitle || parsed.cta.headline,
                ctaDescription: parsed.cta.ctaDescription || parsed.cta.text,
                
                
            })
        }

        sections.push({
            id: generateId(),
            type: 'footer',
            visible: true,
            order: 4,
            layout: 'simple',
            companyName: formData.businessName,
            description: formData.description.substring(0, 100),
        })

        return sections
        
    } catch (error) {
        console.error('Error parsing AI response', error)
        throw new Error('Failed to parse AI response')
    }
}


export const generateLandingPage = async(
    formData:BusinessFormData
): Promise<LandingPage> => {
    let aiResponse : string

    try {
        if (AI_TEST_MODE) {
            await new Promise((resolve)=>setTimeout(resolve,14000))
            aiResponse = generateMockResponse(formData)
        }else if (GEMINI_API_KEY) {
            
            const prompt = generateUserPrompt(formData)
            aiResponse = await callOpenAi(prompt)

        }else{
            throw new Error('No AI API key found')
        }

        const section = parseAIResponse(aiResponse, formData)

        const landingPage = {
            id: generateId(),
            businessName: formData.businessName,
            theme: formData.colorMood,
            sections: section,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        
        return landingPage
    } catch (error) {
        console.error('Error generating landing page', error)
        throw error
    }
}


export async function regenerateSection(
  sectionType: string,
  formData: BusinessFormData,
  currentSection: Section
): Promise<Section> {
  const prompt = `Regenerate only the ${sectionType} section for a landing page. 
  
Business: ${formData.businessName}
Industry: ${formData.industry}
Target Audience: ${formData.targetAudience}

Current ${sectionType} content: ${JSON.stringify(currentSection)}

Generate ONLY the ${sectionType} section as a JSON object with the same structure as the current section. 
Return just the ${sectionType} object, not wrapped in any parent key.
Preserve the layout type but generate completely new, fresh content.`

  try {
    let aiResponse: string

    if (AI_TEST_MODE) {
      await new Promise((resolve) => setTimeout(resolve, 14000))
      aiResponse = generateMockResponse(formData)
    } else if (GEMINI_API_KEY) {
      aiResponse = await callOpenAi(prompt)
    } else {
      throw new Error('No AI API key configured')
    }

    // Parse the response - it should be a single section object
    let cleanResponse = aiResponse.trim()
    if (cleanResponse.startsWith('```json')) {
      cleanResponse = cleanResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '')
    } else if (cleanResponse.startsWith('```')) {
      cleanResponse = cleanResponse.replace(/```\n?/g, '')
    }

    const parsed = JSON.parse(cleanResponse)
    
    // Merge the regenerated content with the current section to preserve ID and other metadata
    const regeneratedSection: Section = {
      ...currentSection,
      ...parsed,
      id: currentSection.id, // Keep the original ID
      type: sectionType as any,
      visible: currentSection.visible,
      order: currentSection.order,
    }
    
    return regeneratedSection
  } catch (error) {
    console.error('Error regenerating section:', error)
    throw error
  }
}
