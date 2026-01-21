import React from 'react'
import LeftHeroContent from './LeftHeroContent'
import RightHeroContent from './RightHeroContent'

const Hero = () => {
  return (
    <div id='home' className='flex max-lg:flex-col max-lg:gap-8 items-center hero-gradient max-lg:py-10  lg:min-h-[calc(100vh-6rem)] px-5 vsm:px-8 md:px-12 w-screen overflow-hidden'>
        <LeftHeroContent />
        <RightHeroContent/>
    </div>
  )
}

export default Hero