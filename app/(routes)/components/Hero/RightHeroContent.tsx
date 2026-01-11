'use client'
import React from 'react'
import Image from 'next/image'

const RightHeroContent = () => {
  return (
    <div className="w-[100%] lg:w-[40%] flex justify-center relative opacity-100">
        <div className='  flex justify-center flex-1' style={{ perspective: '1000px' }}>
            <div className="gradient-orb fades-in"></div>
            {/* <div className="grid-pattern fades-in"></div> */}
            {/* <div className="code-brackets fades-in">
                <span className="bracket bracket1">{'}'}</span>
                <span className="bracket bracket2">{'{'}</span>
                <span className="bracket bracket3">{'}'}</span>
                <span className="bracket bracket4">{'{'}</span>
                <span className="bracket bracket5">{'}'}</span>
            </div> */}
            <div className="sparkle-particles fades-in">
                {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`sparkle sparkle${i + 1} fades-in`}></div>
                ))}
            </div>
            <div className="float"> 
            {/* <div className="bg-[#0F1629] w-[90%] appear animate-delay-300 animate-duration-1000 h-112.5 tny:h-[560px] vsm:h-[600px] md:w-[80%] md:h-[680px] lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[600px]  rotate-4 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]  transition-transform duration-500 hover:rotate-y-12"  style={{ transformStyle: 'preserve-3d' }}> */}
                <div className="w-[105%] h-[80%] lg:h-120 appear animate-delay-300 animate-duration-1000 max-lg:my-4 ">
                    <Image className='w-full h-full ' src={require('@/app/assets/hero_img_logo.png')} alt='lp' loading='eager'/>
                </div>
            </div>
            {/* </div> */}
            
        </div>
       
    </div>
  )
}

export default RightHeroContent