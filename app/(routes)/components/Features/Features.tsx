import React from 'react'
import Header from '../Header'
import { featureCards } from '@/app/data/FeatureCards'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <div className='py-10 px-5 vsm:px-8 md:px-12 w-screen overflow-hidden' id='features'>
        <Header 
            preHeadline="POWERFUL FEATURES"
            mainHeading="Everything You Need to Launch Fast"
            subHeading="From AI copy generation to instant export, weve built the complete toolkit"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {
                featureCards.map((card)=>(
                    <FeaturesCard 
                        key={card.id}
                        id={card.id}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        features={card.features}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Features