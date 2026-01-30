import { Button } from '@/components/ui/Button'
import { CTASectionProps } from './CTASection'
import EditableText from '@/components/editor/EditableText'


export function CTASplit({ section, isEditing }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Text */}
            <div className="text-white">
            <EditableText 
                sectionId={section.id}
                className="text-3xl vsm:text-4xl font-bold mb-6"
                value={section.headline}
                field="headline"
                multiline
                tag="h2"
            />

            {section.subheadline && (
                <EditableText 
                sectionId={section.id}
                className="text-xl opacity-90 max-w-xl"
                value={section.subheadline}
                field="subheadline"
                multiline
                tag="p"
                />
            )}
            </div>

            {/* RIGHT: CTA CARD */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-md mx-auto w-full">
            <EditableText 
                sectionId={section.id}
                className="text-xl font-semibold text-[var(--color-primary)] mb-3"
                value={section.ctaTitle || 'Get started in minutes'}
                field="ctaTitle"
                multiline
                tag="h3"
            />

            <EditableText 
                sectionId={section.id}
                className="text-sm text-gray-600 mb-6"
                value={section.ctaDescription || 'No credit card required. Cancel anytime.'}
                field="ctaDescription"
                multiline
                tag="p"
            />

            <Button size="lg" className="w-full bg-[var(--color-primary)] text-white hover:opacity-90">
                <EditableText 
                    sectionId={section.id}
                    className="p-0!"
                    value={section.ctaText}
                    field="ctaText"
                    tag="span"
                />
            </Button>
            </div>

        </div>
    </section>

  )
}