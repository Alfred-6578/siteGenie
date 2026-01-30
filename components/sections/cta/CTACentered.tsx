import { Button } from '@/components/ui/Button'
import { CTASectionProps } from './CTASection'
import EditableText from '@/components/editor/EditableText'


export function CTACentered({ section, isEditing }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="max-w-4xl mx-auto text-center text-white">
       
        <EditableText 
          sectionId={section.id}
          className='text-3xl vsm:text-4xl font-bold mb-6 text-center'
          value={section.headline}
          field='headline'
          multiline = {true}
          tag='h2'
        />
        {section.subheadline && (
           <EditableText 
            sectionId={section.id}
            className='text-xl mb-8 opacity-90 text-center'
            value={section.subheadline}
            field='subheadline'
            multiline = {true}
            tag='h2'
          />
        )}
        <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-100">
         
           <EditableText 
            sectionId={section.id}
            className='text-center p-0!'
            value={section.ctaText}
            field='ctaText'
            tag='h2'
          />
        </Button>
      </div>
    </section>
  )
}