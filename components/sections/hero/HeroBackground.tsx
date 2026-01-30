import { Button } from '@/components/ui/Button'
import { HeroSectionProps } from './HeroSection'
import  EditableText  from '@/components/editor/EditableText'


export function HeroBackground({ section, isEditing }: HeroSectionProps) {
  return (
    <section 
      className="flex justify-center items-center relative py-32 px-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: section.backgroundImage 
          ? `url(${section.backgroundImage})` 
          : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
      }}
    >
      <div className="absolute inset-0 bg-black/80 opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center text-[var(--color-background)] ">
        
        <EditableText 
          sectionId={section.id}
          className='text-5xl md:text-6xl font-bold mb-6 text-center'
          value={section.headline}
          field='headline'
          multiline = {true}
          tag='h1'
        />

        <EditableText 
          sectionId={section.id}
          className='text-xl md:text-2xl mb-10 opacity-90 text-center'
          value={section.subheadline}
          field='subheadline'
          multiline = {true}
          tag='p'
        />

        <Button size="lg" className="bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-gray-100 min-w-xs">
           <EditableText 
              sectionId={section.id}
              className='text-center p-0!'
              value={section.ctaText}
              field='ctaText'
              tag='p'
            />
        </Button>
      </div>
    </section>
  )
}