'use client'
import React from 'react'
import Pill from './ui/Pill'
import { useInView } from '@/hooks/useInView';

type HeaderProps = {
    preHeadline: string;
    mainHeading: string;
    subHeading: string
}

const Header = ({preHeadline, mainHeading, subHeading}:HeaderProps) => {
    const {ref, inView} = useInView<HTMLDivElement>({threshold:0.6});

  return (
    <div ref={ref} className='text-center flex flex-col items-center '>
        <Pill title={preHeadline} className="bg-white/5 border inline border-white/10 text-[12px] opacity-0" fade={inView ? 'fades-in': ''} slide={inView ? 'slide-up-stagger': ''}/>
      {/* <h6 className="text-primary text-[12px] fades-in slide-up-stagger">{preHeadline}</h6> */}
      <h2 className="text-headings text-3xl tny:text-4xl md:text-5xl font-bold my-3 leading-10 tny:leading-12 md:leading-18">
        {
          mainHeading.split(' ').map((word:string, index:number) => (
            <span key={index} className={`${inView ? 'slide-up-header animate-delay-' + (index * 100) + ' mr-3' : ''} opacity-0`}>
              {word}
            </span>
          ))
        }
        </h2>
      <p className={`max-tny:text-sm text-secondary-text ${inView ? 'slide-up animate-delay-400' : ''}`}>{subHeading}</p>
    </div>
  )
}

export default Header