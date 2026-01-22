import { SingleContentSection, TwoColContentSection } from "@/types/section";
import { Button } from "../ui/Button";

export type ContentSingleProps ={
    section: TwoColContentSection
    isEditing: boolean
}

export function ContentTwoColumn({ section, isEditing }: ContentSingleProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-background)] flex justify-center">
        <div className="max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">
                    {section.headline}
                </h2>
                {section.subheadline && (
                    <p className="text-xl text-[var(--color-body-text-secondary)]">
                    {section.subheadline}
                    </p>
                )}
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-accent)]/40">
                    <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">{section.left.title}</h3>
                    <div className="space-y-4">
                        {
                            section.left.items.map((item,index)=>(
                                <div key={index} className="flex gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <div>
                                        <div className="font-semibold text-[var(--color-body-text)]">{item?.title}</div>
                                        <div className="text-sm text-[var(--color-body-text-secondary)]">{item?.content}</div>
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>

                <div className="bg-[var(--color-primary)]/90 rounded-xl p-6 border border-[var(--color-secondary)]">
                    <h3 className="text-xl font-semibold mb-6 text-[var(--color-background)]">{section.right.title}</h3>
                    
                 
                    <div className="space-y-4">
                        {section.right.type === 'list' ? (
                            <div className="space-y-4">
                                {section.right.items.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <div>
                                    <div className="font-semibold">{item.title}</div>
                                    <div className="text-sm">{item.content}</div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <p className="text-lg leading-relaxed">
                                {section.right.content}
                            </p>
                            )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}