import { Button } from '../ui/Button'
import { HeroSectionProps } from './HeroSection'


export function HeroCentered({ section, isEditing }: HeroSectionProps) {
  return (
    <section className="flex flex-col gap-10 items-center py-20 px-4 pt-30 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] capitalize leading-11 md:leading-14">
          {section.headline}
        </h1>
        <p className="text-[22px] mb-7 text-[var(--color-body-text-secondary)]">
          {section.subheadline}
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          {section.ctaText}
        </Button>
      </div>
      <div className="bg-[var(--color-surface)] rounded-lg flex items-center justify-center max-w-5xl w-full h-110">
          {section.image ? (
            <img src={section.image} alt="Hero" className="rounded-lg w-full h-full object-cover" />
          ) : (
            <span className="text-[var(--color-text-secondary)]">Hero Image</span>
          )}
        </div>
    </section>
  )
}