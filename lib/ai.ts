import { BusinessFormData } from "@/types/form";
import { LandingPage, Section } from "@/types/section";
import { generateId } from "./utils";
import { title } from "process";


const AI_TEST_MODE = process.env.NEXT_PUBLIC_AI_TEST_MODE == 'true'
const OPEN_API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY 

const generateSystemPrompt = ():string =>{
    return `You are an expert landing page designer and copywriter specializing in high-converting copy.

    CRITICAL OUTPUT FORMAT:
    Respond ONLY with valid JSON. No markdown code blocks, no explanations, no preamble.

    REQUIRED JSON SCHEMA:
    {
    "hero": {
        "headline": "string (40-60 chars, primary benefit)",
        "subheadline": "string (80-120 chars, supporting benefit)",
        "ctaText": "string (2-4 words, action verb)",
        "layout": "centered|split|background"
    },
    "features": {
        "headline": "string (30-50 chars)",
        "subheadline": "string (80-120 chars)",
        "features": [
        {
            "title": "string (20-40 chars)",
            "description": "string (60-100 chars, outcome-focused)",
            "icon": "⚡|🚀|💡|🎯|🔒|📊|⚙️|🌟"
        }
        ],
        "layout": "grid|cards|alternating"
    },
    "content": {
        "layout": "single|two-col|image",
        "data": ("object matching the selected layout") { 
            {
                "layout": "single",
                "data": {
                    "headline": "string",
                    "content": "string (80-120 chars)",
                    "ctaText": "string"
                }
            } || 
            {
                "layout": "two-col",
                "data": {
                    "headline": "string",
                    "subheadline":"string",
                    "left": {
                        "title": "string",
                        "items": [
                            {
                                title:"string",
                                content: "string"
                            }, 
                            {
                                title:"string",
                                content: "string"
                            }, 
                            {
                                title:"string",
                                content: "string"
                            }
                        ]
                    },
                    "right": {
                        "title": "string",
                        "content": "items": [
                            {
                                title:"string",
                                content: "string"
                            }, 
                            {
                                title:"string",
                                content: "string"
                            }, 
                            {
                                title:"string",
                                content: "string"
                            }
                        ]
                    },
                    "ctaText": "string"
                }
            } || 

        
        }
    },

    "cta": {
        "headline": "string (30-50 chars, urgency-driven)",
        "subheadline": "string (60-100 chars)",
        "ctaText": "string (2-4 words)",
        "layout": "centered|split"
    }
    }

    COPYWRITING PRINCIPLES:
    1. Headlines: Lead with the core benefit, not the product
    2. Subheadlines: Add specificity and credibility
    3. Features: Translate features into outcomes ("Save 10 hours/week" not "Automation")
    4. CTAs: Use action verbs (Get, Start, Join, Try, Download)
    5. Tone: Match industry context (formal for finance, friendly for lifestyle)

    LAYOUT SELECTION LOGIC:
    - Hero: centered=simple/text-focused, split=product showcase, background=visual brand
    - Features: grid=3-6 equal items, cards=detailed items, alternating=2-4 major features
    - Content: single=mission statement, two-col=benefits+details, image=visual story
    - CTA: centered=single offer, split=offer+trust element

    CONTENT LAYOUT RULES:
    - If layout = single → data must include headline and content
    - If layout = two-col → data must include left.items and right.content
    - If layout = image → data must include imagePrompt
    - Do NOT include unused fields

    CONTENT SECTION - TWO-COLUMN LAYOUT VARIATIONS:

    Choose the right two-column structure based on business type:

    1. PROBLEM vs SOLUTION (Services, Consulting, B2B)
    Left: Common pain points/challenges
    Right: How your service solves each one
    Example: Financial challenges → Strategic solutions

    2. BENEFITS vs DETAILS (Tech, SaaS, Products)
    Left: Key benefits list
    Right: Detailed explanation of how/why
    Example: Save time → Automate 80% of tasks

    3. HOW IT WORKS vs WHAT YOU GET (Platforms, Tools)
    Left: Step-by-step process
    Right: Deliverables/outcomes
    Example: 3-step process → Dashboard + Reports

    4. BEFORE vs AFTER (Transformation, Coaching)
    Left: Current pain state
    Right: Desired future state
    Example: Manual chaos → Automated ease

    Default to PROBLEM vs SOLUTION for professional services.



    AUDIENCE ADAPTATION:
    - B2B: Professional tone, ROI focus, data-driven language
    - B2C: Emotional benefits, lifestyle outcomes, friendly tone
    - Technical: Precision, specs when relevant, credibility signals
    - Creative: Personality, uniqueness, aspirational language

    ERROR HANDLING:
    - If business details are vague, create professional generic copy
    - Always generate exactly 3-6 features
    - Default to "professional" tone if style is unclear
    - Use industry-standard CTAs if none specified`;
    
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
                    icon: f.icon

                }))
            })
        }

        if (parsed.content) {
            const { layout, data } = parsed.content;

            sections.push({
                id: generateId(),
                type: 'content' as const,
                visible: true,
                order: 2,
                layout: layout || 'two-col',
                headline: data.headline,
                content: data.content,
                ...(data.ctaText
                ? {
                    ctaText: data.ctaText,
                    ctaUrl: data.ctaUrl || '#',
                    }
                : {}),
                ...(layout === 'image' && { image: (data as any).image || (data as any).imagePrompt }),
                ...(layout === 'two-col' &&
                {
                    left: (data as any).left,
                    right: (data as any).right,
                }),
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
                ctaText: parsed.cta.ctaText,
                ctaUrl: '#'
                
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
        }else if (OPEN_API_KEY) {
            
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
