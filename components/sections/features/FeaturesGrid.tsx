import { FeaturesSectionProps } from "./FeaturesSection";


export function FeaturesGrid({ section, isEditing }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid lg:grid-cols-3 gap-12">
          {section.features.map((feature:any) => (
            <div key={feature.id} className="text-center py-4">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-[21px] font-semibold mb-2 text-[var(--color-accent)]">
                {feature.title}
              </h3>
              <p className="text-[var(--color-body-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}