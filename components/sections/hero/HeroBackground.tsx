import { Button } from '@/components/ui/Button'
import { HeroSectionProps } from './HeroSection'


export function HeroBackground({ section, isEditing }: HeroSectionProps) {
  return (
    <section 
      className="flex justify-center items-center relative py-32 px-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: section.backgroundImage 
          ? `url(${section.backgroundImage})` 
          : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
      }}
    >
      <div className="absolute inset-0 bg-black/80 opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center text-[var(--color-background)] ">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {section.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          {section.subheadline}
        </p>
        <Button size="lg" className="bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-gray-100 min-w-xs">
          {section.ctaText}
        </Button>
      </div>
    </section>
  )
}