'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const GenerateNavbar = () => {
  return (
    <div className='w-screen fixed z-50'>
        <nav className={`flex z-10 relative items-center justify-between translate-down backdrop-blur-sm bg-white/2 w-full h-20 tny:h-22 px-5 vsm:px-8 md:px-12 transition-colors duration-300 border-b border-white/10`}>
            <Link href={'/'}>
                <Image className="w-38 h-18 tny:w-40 pulse" src={require('@/assets/logo.png')} alt='Logo' loading='eager'/>
            </Link>
            
            <span className="text-headings flex gap-2">
                <ArrowLeft />
                Back
            </span>
            
        </nav>
    </div>
  )
}

export default GenerateNavbar