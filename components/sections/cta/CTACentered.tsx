import { Button } from '@/components/ui/Button'
import { CTASectionProps } from './CTASection'


export function CTACentered({ section, isEditing }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          {section.headline}
        </h2>
        {section.subheadline && (
          <p className="text-xl mb-8 opacity-90">
            {section.subheadline}
          </p>
        )}
        <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-100">
          {section.ctaText}
        </Button>
      </div>
    </section>
  )
}