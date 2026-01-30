import EditableText from '@/components/editor/EditableText'
import { PaletteSwitcher } from '@/components/editor/PaletteSwitcher'
import { FooterSection  } from '@/types/section'

interface FooterSimpleProps {
  section: FooterSection
  isEditing?: boolean
}

export function FooterSimple({ section, isEditing }: FooterSimpleProps) {
  return (
    <footer className="py-12 px-4 bg-[var(--color-body-text)] text-white">
      <div className="max-w-7xl mx-auto text-center">
         <EditableText 
            sectionId={section.id}
            className='text-2xl font-bold mb-2 text-center'
            value={section.companyName}
            field='companyName'
            multiline = {true}
            tag='h3'
          />
        {section.description && (
           <EditableText 
            sectionId={section.id}
            className='text-gray-300 mb-6 text-center'
            value={section.description}
            field='description'
            multiline = {true}
            tag='p'
          />
        )}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {section.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}