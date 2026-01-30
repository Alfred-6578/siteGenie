import EditableText from '@/components/editor/EditableText'
import { Button } from '../ui/Button'
import { HeroSectionProps } from './HeroSection'
import { EditableImage } from '@/components/editor/EditableImage'

export function HeroSplit({ section, isEditing }: HeroSectionProps) {
  return (
    <section className="flex items-center py-20 px-4 pt-25 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ">
        <div>
         
          <EditableText 
            sectionId={section.id}
            className='text-[40px] vsm:text-5xl lg:text-[55px] font-bold mb-6 text-[var(--color-primary)] capitalize leading-13 lg:leading-16'
            value={section.headline}
            field='headline'
            multiline = {true}
            tag='h1'
          />
        
          <EditableText 
            sectionId={section.id}
            className='text-xl mb-8 text-[var(--color-body-text-secondary)] leading-8'
            value={section.subheadline}
            field='subheadline'
            multiline = {true}
            tag='p'
          />
          <Button size="lg" className='w-full md:w-xs'>
            <EditableText 
              sectionId={section.id}
              className='text-center p-0!'
              value={section.ctaText}
              field='ctaText'
              tag='p'
            />

          </Button>
        </div>
        <div className="bg-[var(--color-surface)] rounded-lg h-100 tny:h-110 vsm:h-126 flex items-center justify-center">
          <EditableImage 
            sectionId={section.id}
            field='image'
            value={section.image}
            className='rounded-lg !w-full !h-full object-cover'
            alt={section.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}