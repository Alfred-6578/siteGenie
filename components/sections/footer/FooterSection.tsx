import { FooterSection as FooterSectionType } from '@/types/section'
import { FooterSimple } from './FooterSimple'

interface FooterSectionProps {
  section: FooterSectionType
  isEditing?: boolean
}

export function FooterSection({ section, isEditing }: FooterSectionProps) {
  return <FooterSimple section={section} isEditing={isEditing} />
}