import { ContentSection } from "@/types/section";
import { Button } from "../ui/Button";
import EditableText from "@/components/editor/EditableText";

export type ContentTwoColumnProps ={
    section: ContentSection
    isEditing: boolean
}

export function ContentTwoColumn({ section, isEditing }: ContentTwoColumnProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-background)] flex justify-center relative"id='content' >
        
        <div className="max-w-7xl">
            <div className="text-center mb-16">
                <EditableText 
                    sectionId={section.id}
                    key={section?.twoCol?.headline}
                    className='text-3xl vsm:text-4xl font-bold mb-4 text-[var(--color-primary)] text-center'
                    value={section?.twoCol?.headline}
                    field='twoCol.headline'
                    multiline = {true}
                    tag='h1'
                />
                {section?.twoCol?.subheadline && (
                    <EditableText 
                    sectionId={section.id}
                    key={section?.twoCol?.subheadline}
                    className='text-lg vsm:text-xl text-[var(--color-body-text-secondary)] text-center'
                    value={section?.twoCol?.subheadline}
                    field='twoCol.subheadline'
                    multiline = {true}
                    tag='p'
                    />
                )}
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-accent)]/40">
                    {section?.twoCol?.left?.title &&
                        <EditableText 
                            sectionId={section.id}
                            key={section?.twoCol?.left?.title}
                            className='text-xl font-semibold mb-6 text-[var(--color-primary)]'
                            value={section?.twoCol?.left?.title}
                            field={`twoCol.left.title`}
                            multiline = {true}
                            tag='h3'
                        />
                    }
                 
                    <div className="space-y-4">
                        {
                            section?.twoCol?.left?.items?.map((item,index)=>(
                                <div key={index} className="flex gap-3 w-full">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <div className="w-full">
                                        <EditableText 
                                            sectionId={section.id}
                                            key={item.title}
                                            className='font-bold text-[var(--color-body-text)]'
                                            value={item.title}
                                            field={`twoCol.left.items.${index}.title`}
                                            multiline = {true}
                                            tag='h3'
                                        />
                                        
                                        <EditableText 
                                            sectionId={section.id}
                                            key={item.description}
                                            className='text-sm text-[var(--color-body-text-secondary)]'
                                            value={item.description}
                                            field={`twoCol.left.items.${index}.description`}
                                            multiline = {true}
                                            tag='p'
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>

                <div className="bg-[var(--color-primary)]/90 rounded-xl p-6 border border-[var(--color-secondary)]">
                    {section?.twoCol?.right?.title &&
                        <EditableText 
                            sectionId={section.id}
                            key={section.twoCol.right.title}
                            className='text-xl font-semibold mb-6 text-[var(--color-background)]'
                            value={section.twoCol.right.title}
                            field={`twoCol.right.title`}
                            multiline = {true}
                            tag='h3'
                        />
                    }
                 
                    <div className="space-y-4">
                        {section?.twoCol?.right?.type === 'list' ? (
                            <div className="space-y-4">
                                {section.twoCol.right.items.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <div className="w-full">
                                             <EditableText 
                                                sectionId={section.id}
                                                key={item.title}
                                                className='font-semibold text-[var(--color-body-text)]'
                                                value={item.title}
                                                field={`twoCol.right.items.${index}.title`}
                                                multiline = {true}
                                                tag='h3'
                                            />
                                            
                                            <EditableText 
                                                sectionId={section.id}
                                                key={item.description}
                                                className='text-sm text-[var(--color-background)]/80 '
                                                value={item.description}
                                                field={`twoCol.right.items.${index}.description`}
                                                multiline = {true}
                                                tag='p'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            ) : (
                           
                             <EditableText 
                                sectionId={section.id}
                                key={section.twoCol.right.content}
                                className='text-lg leading-relaxed'
                                value={section.twoCol.right.content}
                                field={`twoCol.right.content`}
                                multiline = {true}
                                tag='p'
                            />
                 
                
                            )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}