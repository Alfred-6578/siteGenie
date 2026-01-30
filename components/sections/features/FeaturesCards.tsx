import EditableText from '@/components/editor/EditableText'
import { FeaturesSectionProps } from './FeaturesSection'


export function FeaturesCards({ section, isEditing }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-surface)] relative" id='features'>
      <div className="max-w-7xl mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.features.map((feature:any,index) => (
            <div 
              key={index} 
              className="bg-white/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
             
              <EditableText 
                sectionId={section.id}
                className='text-[22px] font-semibold mb-2 text-[var(--color-accent)]'
                value={feature.title}
                field={`features.${index}.title`}
                multiline = {true}
                tag='h3'
              />
              <EditableText 
                sectionId={section.id}
                className='text-[var(--color-body-text-secondary)]'
                value={feature.description}
                field={`features.${index}.description`}
                multiline = {true}
                tag='h3'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}