import { SingleContentSection } from "@/types/section";
import { Button } from "../ui/Button";

export type ContentSingleProps ={
    section: SingleContentSection
    isEditing: boolean
}

export function ContentSingle({ section, isEditing }: ContentSingleProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">
          {section.headline}
        </h2>
        <p className="text-lg text-[var(--color-body-text-secondary)] whitespace-pre-wrap">
          {section.content}
        </p>
        {section.ctaText && (
            <Button
                className="inline-block mt-8 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
                <a                 
                    href={section.ctaUrl || '#'}
                >
                    {section.ctaText}

                </a>
            </Button>
        )}

      </div>
    </section>
  )
}