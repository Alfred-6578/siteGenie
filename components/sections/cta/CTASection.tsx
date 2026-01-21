import { CTASection as CTASectionType} from '@/types/section'
import React from 'react'
import { CTACentered } from './CTACentered';

export type CTASectionProps ={
    section: CTASectionType
    isEditing: boolean;
}

const CTASection = ({section, isEditing}:CTASectionProps) => {
  switch (section.layout) {
    case 'centered':
        
        return  <CTACentered section={section} isEditing={isEditing}/>
  
    default:
        return null;
  }
}

export default CTASection