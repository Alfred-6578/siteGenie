import { HeroSection as HeroSectionType } from '@/types/section'
import React from 'react'
import { HeroCentered } from './HeroCentered'
import { HeroSplit } from './HeroSplit'
import { HeroBackground } from './HeroBackground'


export type HeroSectionProps ={
    section: HeroSectionType
    isEditing: boolean
}

const HeroSection = ({section, isEditing}:HeroSectionProps) => {
    switch (section.layout) {
        case 'centered':
            return  <HeroCentered section={section} isEditing={isEditing}/>;
        case 'split':
            return  <HeroSplit section={section} isEditing={isEditing}/>;
        case 'background':
            return  <HeroBackground section={section} isEditing={isEditing}/>;
    
        default:
            return null;
    }
}

export default HeroSection