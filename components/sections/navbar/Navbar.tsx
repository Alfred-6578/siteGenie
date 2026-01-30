import EditableText from "@/components/editor/EditableText"
import { useLandingPage } from "@/context/LandingPageProvider"
import { LandingPage } from "@/types/section"
import { Button } from "../ui/Button"

// components/preview/Navbar.tsx
interface NavbarProps {
  landingPage: LandingPage
  ctaText: string
}

export function Navbar({ landingPage,ctaText }: NavbarProps) {
  const {updateLandingPage} = useLandingPage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mt-20 bg-[var(--color-background)]/95 backdrop-blur-lg border-b border-primary/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        
        
        <EditableText 
          sectionId={landingPage.id}
          className='font-bold text-xl text-[var(--color-primary)] capitalize'
          value={landingPage.businessName}
          onSave={(newValue)=> updateLandingPage({businessName:newValue})}
          field='businessName'
          tag='p'
        />
        
        
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            Home
          </a>
          <a href="#features" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            Features
          </a>
         
          <a href="#content" className="text-secondary-text hover:text-[var(--color-primary)] transition-colors">
            About
          </a>
        </div>
        
        {/* CTA Button */}
        <button className="px-6 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-semibold rounded-lg hover:opacity-90 transition-opacity">
           <EditableText 
              sectionId={landingPage.sections[0].id}
              className='text-center p-0! w-auto'
              value={ctaText}
              field='ctaText'
              tag='p'
            />
        </button>
        
      </div>
    </nav>
  )
}