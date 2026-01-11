
import React from 'react'
import Header from '../Header'
import PreviewSystem from './PreviewSystem'


const Preview = () => {
 
  return (
    <div id='preview' className='py-10 px-5 vsm:px-8 md:px-12 relative overflow-hidden w-screen'>
         <div className="gradient-orb-bottom"></div>
        <div className="grid-pattern"></div>
        <Header
            preHeadline="SEE IT IN ACTION"
            mainHeading="Watch Your Landing Page Come to Life"
            subHeading="Choose an industry and see how our AI adapts the design, copy, and layout specifically for your needs."
        />

        <PreviewSystem />
        {/* <MPreviewSystem /> */}
       
    </div>
  )
}

export default Preview