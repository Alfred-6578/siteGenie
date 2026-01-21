import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, ArrowRight, Star, Briefcase, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const PortfolioPreview = () => {
      const {ref, inView} = useInView<HTMLDivElement>()
    
  return (
    <div ref={ref} className={`w-full bg-gray-50 text-gray-900 overflow-hidden mockup-scroll-content animation-duration-20000 ${inView ? '':'mockup-scroll-content-paused'}`} style={{ fontSize: '0.5rem' }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
              JD
            </div>
          </div>
          <nav className="flex items-center gap-3 text-xs font-medium max-sm:hidden">
            <a href="#" className="text-purple-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Blog</a>
          </nav>
          <button className="px-2.5 py-1 bg-purple-600 text-white rounded text-xs max-sm:hidden">Contact</button>
            <Menu className='text-purple-600 font-black sm:hidden' size={22}/>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-8 ">
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex max-sm:flex-col gap-6 sm:items-center ">
            <div className='sm:w-[60%]'>
              <h1 className="text-3xl font-bold mb-2 leading-tight">
                <span className={`${inView ? 'slide-up-header':'opacity-0'}`}>I'm <span className="text-purple-600">Jon Dawson</span>,</span><br />
                <span className={`${inView ? 'slide-up-header animate-delay-200':'opacity-0'}`}>Product Designer</span>
                
              </h1>
              <p className={`text-sm text-gray-600 mb-4 leading-relaxed ${inView ? 'slide-up animate-delay-200':'opacity-0'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-2">
                <button className={`px-3 py-1.5 bg-gray-900 text-white rounded text-sm font-medium opacity-0 relative z-1 ${inView ? 'animate-slide-in-left animate-delay-400':'opacity-0'}`}>
                  About
                </button>
                <button className={`px-3 py-1.5 bg-purple-600 text-white rounded text-sm font-medium flex items-center gap-1 opacity-0  ${inView ? 'animate-slide-in-left animate-delay-600':'opacity-0'}`}>
                  Download CV <ArrowRight className="w-2 h-2" />
                </button>
              </div>
            </div>
            <div className="flex justify-center sm:w-[40%]">
              <div className={`relative ${inView ? 'slide-up animate-delay-200':'opacity-0'}`}>
                <div className="w-60 h-64 bg-purple-600 rounded-3xl overflow-hidden pt-4">
                 <Image loading="lazy" className={`${inView ? 'slide-up animate-delay-600':'opacity-0'}`} src={require('@/assets/portfolio_preview_hero_img.png')} alt='hero-image' />
                </div>
                <div className="p-2 bg-white rounded-t-3xl absolute -bottom-2 -right-2 ">
                    <div className="rotate-x-9 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <ArrowRight className={`w-4 h-4 text-white transform -rotate-45 opacity-0 ${inView ? 'animate-rotate-right animate-delay-700':'opacity-0'}`} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-4">
            <div className={`text-[0.4rem] text-purple-200 mb-1 ${inView ? 'slide-up animate-delay-1200':'opacity-0'}`}>MY EXPERTISE</div>
            <h2 className={`text-lg font-bold mb-1 ${inView ? 'slide-up animate-delay-1400':'opacity-0'}`}>Innovative Solutions</h2>
            <p className={`text-xs text-purple-100 max-w-md mx-auto ${inView ? 'slide-up-stagger animate-delay-1600':'opacity-0'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {/* Service 1 */}
            <div className={`bg-white text-gray-900 rounded-2xl p-3 relative ${inView ? 'appear animate-delay-2200':'opacity-0'}`}>
              <div className="text-sm font-bold mb-2">Service 1</div>
              <div className="h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-xl mb-2 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/portfolio_preview_service_one.png')} className="w-full h-full object-cover rounded-lg" alt='service one'/>
              </div>
              <div className="absolute bottom-3 right-1 bg-white rounded-t-4xl p-1.5">
              <div className=" w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white transform -rotate-45" />
              </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className={`bg-white text-gray-900 rounded-2xl p-3 relative ${inView ? 'appear animate-delay-2400':'opacity-0'}`}>
              <div className="text-xs font-bold mb-2">Service 2</div>
              <div className="h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl mb-2 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 p-2">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-3 right-1 bg-white rounded-t-4xl p-1.5">
              <div className=" w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white transform -rotate-45" />
              </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className={`bg-white text-gray-900 rounded-2xl p-3 relative ${inView ? 'appear animate-delay-2600':'opacity-0'}`}>
              <div className="text-xs font-bold mb-2">Service 3</div>
              <div className="h-24 bg-linear-to-br from-gray-100 to-gray-50 rounded-xl mb-2 flex items-center justify-center">
                    <Image loading="lazy" src={require('@/assets/portfolio_preview_service_three.png')} className="w-full h-full object-cover rounded-lg" alt='service one'/>

              </div>
              <div className="absolute bottom-3 right-1 bg-white rounded-t-4xl p-1.5">
              <div className=" w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white transform -rotate-45" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className={`text-[0.4rem] text-purple-600 mb-1 font-semibold ${inView ? 'slide-up animate-delay-5000':'opacity-0'}`}>MY SKILLS</div>
              <h2 className={`text-xl font-bold mb-2 ${inView ? 'slide-up animate-delay-5200':'opacity-0'}`}>Beautiful and unique digital experiences</h2>
              <p className={`text-xs text-gray-600 leading-relaxed mb-3 ${inView ? 'slide-up animate-delay-5800':'opacity-0'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <button className="text-xs text-purple-600 font-semibold flex items-center gap-1">
                Read more <ArrowRight className="w-2 h-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className={`bg-purple-600 relative rounded-xl p-2 aspect-square flex items-center justify-center opacity-0 ${inView ? 'animate-slide-in-left animate-delay-3400':'opacity-0'}`}>
                {/* <div className="absolute bg-black/20 rounded-xl top-0 left-0 w-full h-full backdrop-blur-2xl">
                    <Image loading="lazy" className='opacity-50' src={require('@/assets/portfolio_preview_ui_ux.png')} alt='ui/ux design'/>
                    <div className="bg-black/40 w-full h-full absolute z-1 top-0 "></div>
                </div> */}
                <div className="text-white text-center relative z-1">
                  <div className="text-xs font-bold mb-0.5">UI/UX</div>
                  <div className="text-[0.45rem]">Design</div>
                </div>
              </div>
              <div className={`bg-gray-800 relative rounded-xl p-2 aspect-square flex items-center justify-center opacity-0 ${inView ? 'animate-slide-in-right animate-delay-3800':'opacity-0'}`}>
                <div className="text-white text-center relative z-1">
                  <div className="text-xs font-bold mb-0.5">Wireframing </div>
                  <div className="text-[0.45rem]">& Prototyping</div>
                </div>
              </div>
              <div className={`bg-orange-500 relative rounded-xl p-2 aspect-square flex items-center justify-center opacity-0 ${inView ? 'animate-slide-in-left animate-delay-6000':'opacity-0'}`}>
                <div className="text-white text-center relative z-1">
                  
                  <div className="text-xs font-bold mb-0.5">Product Thinking</div>
                  <div className="text-[0.45rem]"> & Problem Solving</div>
                </div>
              </div>
              <div className={`bg-blue-400 relative rounded-xl p-2 aspect-square flex items-center justify-center ${inView ? 'animate-slide-in-right animate-delay-6000':'opacity-0'}`}>
                <div className="text-white text-center relative z-1">
                    <div className="text-xs font-bold mb-0.5">Figma </div>
                  <div className="text-[0.45rem]">& Design Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-3">
          <h2 className="text-xl font-bold text-center mb-6">Featured Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-yellow-50"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50"></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-50"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer / Contact */}
      <footer className="bg-purple-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold mb-1">Lets Connect there</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <Mail className="w-3 h-3" />
              </div>
              <p className="text-xs mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-1 mt-2">
                <a href="#" className="w-5 h-5 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                  <Facebook className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                  <Instagram className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                  <Twitter className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 bg-white/10 rounded flex items-center justify-center hover:bg-white/20">
                  <Linkedin className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold mb-2">Navigation</div>
              <div className="space-y-1 text-[0.4rem]">
                <div>Home</div>
                <div>About</div>
                <div>Service</div>
                <div>Resume</div>
                <div>Project</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold mb-2">Contact</div>
              <div className="space-y-1 text-[0.4rem]">
                <div>+01 234 567 8910</div>
                <div>example@domain.com</div>
                <div>123 Street, City, Country</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-3 text-center">
            <p className="text-[0.4rem] text-purple-200">
              Copyright © 2024 | Design by JonDawson
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPreview;