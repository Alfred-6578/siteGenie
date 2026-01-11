import React from 'react'
import Header from '../Header'
import TestimonialCarousel from './TestimonialGrid'

const Testimonial = () => {
  return (
    <div className='py-20 pb-10 px-5 vsm:px-8 md:px-12 overflow-x-hidden w-screen'>
        <Header 
            preHeadline='LOVED BY MAKERS'
            mainHeading='Join Thousands Building Better Landing Page'
            subHeading='See what founders, designers, and developers are saying.'
        />
        <TestimonialCarousel />
    </div>
  )
}

export default Testimonial