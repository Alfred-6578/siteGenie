import { Button } from '../ui/Button'
import { HeroSectionProps } from './HeroSection'

export function HeroSplit({ section, isEditing }: HeroSectionProps) {
  return (
    <section className="flex items-center py-20 px-4 pt-30 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ">
        <div>
          <h1 className="text-[40px] vsm:text-5xl lg:text-[55px] font-bold mb-6 text-[var(--color-primary)] capitalize leading-13 lg:leading-16">
            {section.headline}
          </h1>
          <p className="text-xl mb-8 text-[var(--color-body-text-secondary)] leading-8">
            {section.subheadline}
          </p>
          <Button size="lg">
            {section.ctaText}
          </Button>
        </div>
        <div className="bg-[var(--color-surface)] rounded-lg h-126 flex items-center justify-center">
          {section.image ? (
            <img src={section.image} alt="Hero" className="rounded-lg" />
          ) : (
            <span className="text-[var(--color-text-secondary)]">Hero Image</span>
          )}
        </div>
      </div>
    </section>
  )
}