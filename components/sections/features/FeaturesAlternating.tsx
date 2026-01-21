import { FeaturesSectionProps } from './FeaturesSection'


export function FeaturesAlternating({ section, isEditing }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">
            {section.headline}
          </h2>
          {section.subheadline && (
            <p className="text-xl text-[var(--color-body-text-secondary)]">
              {section.subheadline}
            </p>
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
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">
                  {feature.title}
                </h3>
                <p className="text-lg text-[var(--color-bodyx-text-secondary)]">
                  {feature.description}
                </p>
              </div>
              <div className={`bg-[var(--color-accent)]/20 rounded-lg h-74 flex items-center justify-center ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <span className="text-[var(--color-accent)]/80">Feature Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}