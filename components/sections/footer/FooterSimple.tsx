import { FooterSection  } from '@/types/section'

interface FooterSimpleProps {
  section: FooterSection
  isEditing?: boolean
}

export function FooterSimple({ section, isEditing }: FooterSimpleProps) {
  return (
    <footer className="py-12 px-4 bg-[var(--color-text)] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{section.companyName}</h3>
        {section.description && (
          <p className="text-gray-300 mb-6">{section.description}</p>
        )}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {section.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}