'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const NavLinks = [
    {id: 1, name: 'Home', href: 'home'},
    {id: 2, name: 'Preview', href: 'preview'},
    {id: 3, name: 'Features', href: 'features'},
    {id: 4, name: 'How It Works', href: 'how-it-works'},
    {id: 5, name: 'Testimonial', href: 'testimonial'},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const goToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            // This calculates the offset if you have a fixed navbar
            const offset = 80; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
  return (
    <div className="fixed z-50 w-full">
        <nav className={`flex z-10 relative items-center justify-between translate-down backdrop-blur-sm ${scrolled || isOpen ? 'bg-background/60':'bg-white/5'}  w-full h-20 tny:h-24 px-5 vsm:px-8 md:px-12 transition-colors duration-300 border-b border-white/10`}>
            <Link href={'/'}>
                <Image className="w-38 h-18 tny:w-40 tny:h-20 pulse" src={require('@/assets/logo.png')} alt='Logo' loading='eager'/>
            </Link>
            <div className="flex lg:gap-4 xl:gap-8 max-lg:hidden">
                {
                    NavLinks.map((link)=>(
                        <Link key={link.id} href='' onClick={() => goToSection(link.href)} className='link text-headings'>{link.name}</Link>
                    ))
                }
            </div>

            <Link href={'/generate'} className='button-gradient text-body-text! rounded px-4 py-2 font-semibold max-lg:hidden'>
                Get Started
            </Link>
            <div className={`lg:hidden! burger-icon ${isOpen ? 'active' : ''} max-tny:h-4!`} onClick={() => setIsOpen(!isOpen)}>
               <span className='max-tny:w-6! max-tny:h-0.5!'></span>
               <span className='max-tny:w-6! max-tny:h-0.5!'></span>
               <span className='max-tny:w-6! max-tny:h-0.5!'></span>
            </div>
        </nav>
        
        
        <div className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-screen h-full fixed inset-0  bg-black/5 backdrop-blur-sm flex justify-between items-center shadow-lg border border-white/10`}>
           <div className={`flex flex-col justify-between h-[100%] w-70 max-w-screen fixed pt-20 tny:pt-24 right-0 transition-transform ease duration-500 transform p-6 px-5 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-background/90 border border-white/10 shadow-lg`}>
                <nav className="flex flex-col pt-8">
                {
                    NavLinks.map((link,i)=>(
                        <Link key={link.id} href='' onClick={() => goToSection(link.href)} className={`link text-headings font-medium 
                        ${i !== NavLinks.length - 1 ? 'border-b border-white/20' : ''} py-3 px-2`}>{link.name}</Link>
                    ))
                }
                </nav>
                <button className='button-gradient text-white rounded px-4 py-2 font-semibold'>
                    Get Started
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar