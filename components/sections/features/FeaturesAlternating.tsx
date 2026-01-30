import EditableText from '@/components/editor/EditableText'
import { FeaturesSectionProps } from './FeaturesSection'
import { features } from 'process'
import { EditableImage } from '@/components/editor/EditableImage'


export function FeaturesAlternating({ section, isEditing }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-surface)] relative" id='features'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
      
           <EditableText 
            sectionId={section.id}
            className='text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center'
            value={section.headline}
            field='headline'
            multiline = {true}
            tag='h1'
          />
          {section.subheadline && (
            
            <EditableText 
              sectionId={section.id}
              className='text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center'
              value={section.subheadline}
              field='subheadline'
              multiline = {true}
              tag='p'
            />
          )}
        </div>
        <div className="space-y-16">
          {section.features.map((feature:any, index:any) => (
            <div
              key={feature.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                
                <EditableText 
                  sectionId={section.id}
                  key={feature.title}
                  className='text-2xl font-bold mb-4 text-[var(--color-accent)]'
                  value={feature.title}
                  field={`features.${index}.title`}
                  multiline = {true}
                  tag='h3'
                />
                 <EditableText 
                  sectionId={section.id}
                  key={feature.description}
                  className='text-lg text-[var(--color-bodyx-text-secondary)]'
                  value={feature.description}
                  field={`features.${index}.description`}
                  multiline = {true}
                  tag='h3'
                />
              </div>
              <div className={`bg-[var(--color-accent)]/20 rounded-lg h-74 flex items-center justify-center ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                 <EditableImage 
                  sectionId={section.id}
                  field={`features.${index}.image`}
                  key={feature.image}
                  value={feature.image}
                  className='rounded-lg !w-full !h-full object-cover'
                  alt={feature.imageAlt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}