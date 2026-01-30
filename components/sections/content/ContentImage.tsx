import { EditableImage } from '@/components/editor/EditableImage';
import EditableText from '@/components/editor/EditableText';
import { ContentSection } from '@/types/section';
import React from 'react';

export type ContentImageLayoutProps ={
    section: ContentSection
    isEditing: boolean
}

export default function ContentImageLayout({ section, isEditing }: ContentImageLayoutProps) {
  // Sample data


  return (
    <div className="min-h-screen bg-[var(--color-background)] relative" id='content' >
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
           
            <EditableText 
                sectionId={section.id}
                className='text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center'
                value={section.image?.headline}
                field='image.headline'
                multiline = {true}
                tag='h1'
            />
            {section?.image?.subheadline && (
                <EditableText 
                    sectionId={section.id}
                    className='text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center'
                    value={section.image.subheadline}
                    field='image.subheadline'
                    multiline = {true}
                    tag='p'
                />
            )}
          </div>

          
          <div className="space-y-20">
            {section?.image?.stories?.map((story, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  story.imagePosition === 'right' ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`${
                    story.imagePosition === 'right' ? 'md:col-start-2' : ''
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

                    <div className="relative bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl aspect-video flex items-center justify-center border border-[var(--color-primary)]/30 overflow-hidden"> 
                      <EditableImage 
                        sectionId={section.id}
                        field={`image.stories.${index}.image`}
                        value={story.image}
                        className='rounded-lg !w-full !h-full object-cover'
                        alt={section.image?.stories?.[index]?.imageAlt || 'Story Image' }
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`${
                    story.imagePosition === 'right' ? 'md:col-start-1 md:row-start-1' : ''
                  }`}
                >
                
                <EditableText 
                    sectionId={section.id}
                    className='text-3xl font-bold text-[var(--color-body-text)] mb-4'
                    value={story.title}
                    field={`image.stories.${index}.title`}
                    multiline = {true}
                    tag='h3'
                />
                 
                <EditableText 
                    sectionId={section.id}
                    className='text-lg text-[var(--color-body-text-secondary)] leading-relaxed'
                    value={story.content}
                    field={`image.stories.${index}.content`}
                    multiline = {true}
                    tag='p'
                />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {section?.image?.ctaText && (
            <div className="text-center mt-16">
              <a
                // href={section.ctaUrl}
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#00D4FF]/30"
              >
                <EditableText 
                    sectionId={section.id}
                    className='text-center p-0!'
                    value={section.image.ctaText}
                    field='image.ctaText'
                    tag='h3'
                />
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}