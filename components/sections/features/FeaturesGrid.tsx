import EditableText from "@/components/editor/EditableText";
import { FeaturesSectionProps } from "./FeaturesSection";


export function FeaturesGrid({ section, isEditing }: FeaturesSectionProps) {
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
        <div className="grid lg:grid-cols-3 gap-12">
          {section.features.map((feature:any, index) => (
            <div key={feature.id} className="text-center py-4">
              <div className="text-5xl mb-4">{feature.icon}</div>
              
              <EditableText 
                sectionId={section.id}
                className='text-[21px] font-semibold mb-2 text-[var(--color-accent)] text-center'
                value={feature.title}
                field={`features.${index}.title`}
                multiline = {true}
                tag='h3'
              />
              
              <EditableText 
                sectionId={section.id}
                className='text-[var(--color-body-text-secondary)] text-center'
                value={feature.description}
                field={`features.${index}.description`}
                multiline = {true}
                tag='p'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}