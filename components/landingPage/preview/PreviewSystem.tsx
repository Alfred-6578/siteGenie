'use client'
import React, { useEffect, useRef, useState } from 'react'
import SaasPreview from './SaasPreview'
import PortfolioPreview from './PortfolioPreview'
import RestaurantPreview from './RestaurantPreview'
import EcommercePreview from './EcommercePreview'
import { useInView } from '@/hooks/useInView'

const industries = [
  { id: 'saas', name: 'SaaS', icon: '💼', color: 'from-blue-500 to-cyan-500' },
  { id: 'portfolio', name: 'Portfolio', icon: '👤', color: 'from-gray-500 to-black' },
  { id: 'restaurant', name: 'Restaurant', icon: '🍽️', color: 'from-orange-500 to-red-500' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛍️', color: 'from-green-500 to-blue-500' },
]

const PreviewSystem = () => {
    const [activeTab, setActiveTab] = useState('saas')
    const [rotation, setRotation] = useState({ x: 5, y: 0 })
    const {ref, inView} = useInView<HTMLDivElement>()
    
    const cardRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return
            const rect = cardRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const mouseX = e.clientX - centerX
            const mouseY = e.clientY - centerY
            const rotateY = (mouseX / (rect.width / 2)) * 10
            const rotateX = 5 - (mouseY / (rect.height / 2)) * 10
            setRotation({ x: Math.max(-10, Math.min(10, rotateX)), y: Math.max(-10, Math.min(10, rotateY)) })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

  return (
    <div className='flex flex-col items-center  mt-7' >
        <div className="flex gap-2 vsm:gap-4 mb-8">
            {
                industries.map((industry,i)=>(
                    <div 
                        key={industry.id}
                        onClick={()=>setActiveTab(industry.id)}
                        ref={ref}
                        className={`px-3 py-1 vsm:px-6 vsm:py-1.5 rounded-full cursor-pointer font-medium text-[12px] vsm:text-sm relative overflow-hidden opacity-0 ${inView ? `animate-slide-in-left animate-delay-${200*i}`:'opacity-0'} ${activeTab == industry.id ? 'text-white' : 'text-body-text bg-white/5 border border-white/10'}`}
                    >
                        
                        <p className="relative z-10">{industry.name}</p>
                        <div className={`absolute inset-0 rounded-full transition-transform duration-400 ease-out origin-top-left bg-gradient-to-r ${industry.color} ${activeTab == industry.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    </div>
                ),[])
            }
        </div>
        <div
            ref={cardRef}
            
            className="mockup-card w-full max-w-2xl h-[600px] bg-white rounded-3xl shadow-2xl relative overflow-hidden translate-x-[1%] transition-transform duration-100 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {
                activeTab === 'saas' ? <SaasPreview /> :
                activeTab === 'portfolio' ? <PortfolioPreview/> : 
                activeTab === 'restaurant' ? <RestaurantPreview/> : 
                activeTab === 'ecommerce' ? <EcommercePreview/> : null
            }
          </div>

    </div>
  )
}

export default PreviewSystem