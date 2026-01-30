import EditableText from '@/components/editor/EditableText'
import { Button } from '../ui/Button'
import { HeroSectionProps } from './HeroSection'
import { EditableImage } from '@/components/editor/EditableImage'


export function HeroCentered({ section, isEditing }: HeroSectionProps) {
  return (
    <section className="flex flex-col gap-10 items-center py-20 px-4 pt-25 bg-white min-h-screen">
      <div className="max-w-4xl text-center">
        
        <EditableText 
          sectionId={section.id}
          className='text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] capitalize leading-11 md:leading-14 text-center'
          value={section.headline}
          field='headline'
          multiline = {true}
          tag='h1'
        />
       
         <EditableText 
          sectionId={section.id}
          className='text-[22px] mb-7 text-[var(--color-body-text-secondary)] text-center '
          value={section.subheadline}
          field='subheadline'
          multiline = {true}
          tag='p'
        />
        <Button size="lg" className="text-lg px-8 py-4">
          <EditableText 
            sectionId={section.id}
            className='text-center p-0!'
            value={section.ctaText}
            field='ctaText'
            tag='p'
          />
        </Button>
      </div>
      <div className="bg-[var(--color-surface)] rounded-lg flex items-center justify-center max-w-5xl w-full h-100 tny:h-110 ">
          
          <EditableImage 
            sectionId={section.id}
            field='image'
            value={section.image}
            className='rounded-lg !w-full !h-full object-cover'
            alt={section.imageAlt || 'Hero Image'}
          />
        </div>
    </section>
  )
}