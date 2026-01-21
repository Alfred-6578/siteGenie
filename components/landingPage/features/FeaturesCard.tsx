'use client'
import { FeatureCard } from '@/types/features'
import { IoCheckmarkSharp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView';

const FeaturesCard:React.FC<FeatureCard> = ({id, icon, title, description, features, visuals}) => {
  const {ref, inView} = useInView<HTMLDivElement>({threshold:0.1});
  const cardRef = useRef<HTMLDivElement>(null);

 
  return (
    <div ref={ref} className={`feature-card bg-white/5 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-2xl p-7 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-400 ease-out hover:bg-white/8 hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:-translate-y-2 aspect-[3/4] ${inView ? 'appear' : ''} opacity-0`}>
        <div className={`icon-container w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center mb-6 ${id === 'ai-copy-generator' ? 'animate-slow-rotate' : id === 'custom-layouts' ? 'animate-layout-rotate' : id === 'responsive-design' ? 'animate-device-cycle' : id === 'instant-export' ? 'animate-pulse-subtle' : id === 'color-themes' ? 'animate-float-subtle' : 'animate-float-subtle'} hover:scale-110 hover:animate-faster-rotate`}>
            <span className="text-3xl">{icon.emoji}</span>
        </div>
        <h2 className="text-2xl font-semibold text-headings mb-3 relative">
            {title}
            <div className="gradient-underline w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 mt-2 transition-all duration-300 hover:w-full"></div>
        </h2>
        <p className="text-secondary-text text-base leading-relaxed mb-6">
            {description}
        </p>
        {visuals?.colorDots && (
            <div className="color-dots flex gap-2 mb-6">
                {Array.from({ length: visuals.colorDots }, (_, i) => (
                    <div key={i} className={`color-dot w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${
                        i === 0 ? 'bg-blue-500' :
                        i === 1 ? 'bg-green-500' :
                        i === 2 ? 'bg-purple-500' :
                        i === 3 ? 'bg-red-500' :
                        i === 4 ? 'bg-yellow-500' :
                        i === 5 ? 'bg-pink-500' :
                        i === 6 ? 'bg-indigo-500' :
                        'bg-teal-500'
                    }`}></div>
                ))}
            </div>
        )}
        <div className="features-list flex flex-col gap-3">
            {features.map((feature, index) => (
                <div className="flex items-center gap-2" key={index}>
                    <IoCheckmarkSharp className='text-cyan-400 text-sm'/>
                    <span className="text-headings text-sm">{feature}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesCard