import { FeaturesSection as FeaturesSectionType } from '@/types/section'
import { FeaturesGrid } from './FeaturesGrid'
import { FeaturesCards } from './FeaturesCards'
import { FeaturesAlternating } from './FeaturesAlternating'

export type FeaturesSectionProps ={
    section: FeaturesSectionType
    isEditing: boolean
}

const FeaturesSection = ({section, isEditing}:FeaturesSectionProps) => {

    switch (section.layout) {
        case 'grid':
           return <FeaturesGrid section={section} isEditing={isEditing}/>
    
        case 'cards':
          return  <FeaturesCards section={section} isEditing={isEditing}/>
    
        case 'alternating':
          return  <FeaturesAlternating section={section} isEditing={isEditing}/>
    

        default:
            return null
    }
  
}

export default FeaturesSection