import { ContentSection } from "@/types/section";
import { Button } from "../ui/Button";
import EditableText from "@/components/editor/EditableText";
import { EditableImage } from "@/components/editor/EditableImage";

export type ContentSingleProps ={
    section: ContentSection
    isEditing: boolean
}

export function ContentSingle({ section, isEditing }: ContentSingleProps) {
  return (
    <section className="py-20 px-5 bg-[var(--color-background)] flex justify-center relative" id='content'>
       
      <div className="flex flex-col items-center  lg:flex-row-reverse vsm:gap-12 w-full max-w-7xl vsm:px-4 lg:items-center justify-center">
       <div className={`mb-12 ${section?.single?.includeImage ? 'lg:max-w-xl':'max-w-4xl mx-auto ' } md:text-center`}>
          <EditableText 
              sectionId={section.id}
              className='text-3xl vsm:text-4xl font-bold mb-4 vsm:mb-6 text-[var(--color-primary)] md:text-center'
              value={section?.single?.headline}
              field='single.headline'
              multiline = {true}
              tag='h1'
          />
          
        
          <EditableText 
              sectionId={section.id}
              className='text-lg text-[var(--color-body-text-secondary)] whitespace-pre-wrap md:text-center'
              value={section?.single?.content}
              field='single.content'
              multiline = {true}
              tag='p'
          />
          {section?.single?.ctaText && (
              <Button
                  className="inline-block mt-8 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:opacity-90 transition"
              >
                  <a                 
                      // href={section.ctaUrl || '#'}
                  >
                      <EditableText 
                        sectionId={section.id}
                        className='md:text-center p-0!'
                        value={section?.single?.ctaText}
                        field='single.ctaText'
                        tag='p'
                      />

                  </a>
              </Button>
          )}
        </div>
        {section?.single?.includeImage && 
          <EditableImage 
            sectionId={section.id}
            field={`single.image`}
            value={section?.single?.image}
            className='rounded-lg !w-full !h-full object-cover min-h-80'
            alt={section?.single?.imageAlt || 'Content Image'}
          />
        }

      </div>

    </section>
  )
}