import { Space_Grotesk } from 'next/font/google'
import React from 'react'
import Pill from './Pill'
import {ArrowRight} from 'lucide-react'


const spaceGrotesk = Space_Grotesk({ subsets: ['latin']})


const LeftHeroContent = () => {
  return (
    <div className='w-full lg:w-[60%] relative z-1 max-l max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center'>
        <h6 className="text-primary text-[12px] fades-in slide-up-stagger">✨ AI-POWERED LANDING PAGE GENERATOR</h6>
        <h1 className={`text-headings text-3xl smk:text-4xl md:text-[55px] font-bold my-3 leading-9 smk:leading-12 md:leading-18`}>
            <span className="slide-up-header mr-3">Generate </span> 
            <span className="slide-up-header stunning animate-delay-100 mr-3"> Stunning </span>  <br />
            <span className="slide-up-header animate-delay-200 mr-3">Landing</span> 
            <span className="slide-up-header animate-delay-300 mr-3">Pages</span> 
            <span className="slide-up-header animate-delay-400 mr-3">in</span> 
            <span className="slide-up-header animate-delay-500 mr-3">Seconds</span>
        </h1>
        <p className="max-w-147.5 tny:text-lg text-secondary-text slide-up animate-delay-400">
            AI-powered landing pages that adapt to your business style — from startup to SaaS to portfolio. No code, no design skills required.
        </p>
        <div className="flex flex-wrap gap-5 lg:gap-3 my-6 max-lg:hidden">
           { ['✓ No credit card required','⚡ Generate in few seconds','🎨 Fully customizable'].map((btnText, index) => (
                <Pill key={btnText} title={btnText} className={`bg-white/5 max-tny:w-[100%] sm:text-sm border border-white/10 animate-delay-${(150 * index ) + 500} ${index == 2 ? 'lg:hidden xl:flex':''}`} fade='fades-in' slide='slide-up-stagger'/>
            ))}
        </div>
        <button className="flex gap-2 max-smk:w-full max-lg:justify-center max-smk:px-3! max max-tny:w-[90%] max-tny:px-4 justify-between items-center button-gradient rounded-lg cursor-pointer py-3 px-6 font-semibold mt-6 lg:mt-3 fade-in slide-up animate-delay-600">
            Generate Your First Page <ArrowRight />
        </button>
    </div>
  )
}

export default LeftHeroContent