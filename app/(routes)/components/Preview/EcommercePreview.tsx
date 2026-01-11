import React from 'react';
import { Search, ShoppingCart, Menu, ChevronDown, ArrowRight, Heart, Star, Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';
import Image from 'next/image';

const EcommercePreview = () => {
     const {ref, inView} = useInView<HTMLDivElement>()
     
  return (
    <div ref={ref} className={`w-full bg-white text-gray-900 overflow-hidden mockup-scroll-content ${inView ? '':'mockup-scroll-content-paused'}`} style={{ fontSize: '0.5rem' }}>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 py-1 flex items-center justify-end gap-3 text-[0.4rem]">
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">FAQs</a>
          <button className="hover:text-gray-600">
            <ShoppingCart className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <button className="hover:text-gray-600">
              <Menu className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center text-white font-bold text-[0.4rem]">
                N
              </div>
              <span className="font-bold text-sm">Nextgen</span>
            </div>
            <div className="w-4"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-0.5 px-2 py-1 bg-gray-50 rounded text-[0.4rem]">
              Categories <ChevronDown className="w-2 h-2" />
            </button>
            <button className="flex items-center gap-0.5 px-2 py-1 bg-gray-50 rounded text-[0.4rem]">
              Row-Product <ChevronDown className="w-2 h-2" />
            </button>
            <div className="flex-1 flex items-center gap-1 px-2 py-1 bg-gray-50 rounded">
              <Search className="w-2.5 h-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 bg-transparent text-[0.4rem] outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 py-1.5 flex items-center justify-center gap-4 text-[0.4rem] overflow-y-hidden">
          <a href="#" className={`font-medium hover:text-gray-600 ${inView ? 'slide-up-stagger animate-delay-100':'opacity-0'}`}>Men</a>
          <a href="#" className={`font-medium hover:text-gray-600 ${inView ? 'slide-up-stagger animate-delay-300':'opacity-0'}`}>Women</a>
          <a href="#" className={`font-medium hover:text-gray-600 ${inView ? 'slide-up-stagger animate-delay-500':'opacity-0'}`}>Children</a>
          <a href="#" className={`font-medium hover:text-gray-600 ${inView ? 'slide-up-stagger animate-delay-700':'opacity-0'}`}>Boys</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative flex justify-center bg-gradient-to-br from-blue-300 to-blue-400 h-42 mx-3 my-3 rounded-2xl overflow-hidden opacity-0 ${inView ? 'appear animate-delay-800':'opacity-0'}`}>
        <div className="absolute z-1 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className={`text-2xl font-bold mb-1 ${inView ? 'slide-up animate-delay-1000':'opacity-0'}`}>Summer Arrival of Outfit</h1>
          <p className={`text-[0.45rem] mb-2 opacity-90 ${inView ? 'slide-up-stagger animate-delay-1400':'opacity-0'}`}>
            Uncover timely looks that reflect your style and help you everyday a thyrfan.
          </p>
          <button className={`px-3 py-1.5 bg-white text-black rounded-full text-[0.4rem] font-medium flex items-center gap-1 hover:bg-gray-100 ${inView ? 'slide-up-stagger animate-delay-1600':'opacity-0'}`}>
            EXPLORE PRODUCT <ArrowRight className="w-2 h-2" />
          </button>
        </div>
        {/* <div className="absolute top-0 left-0"> */}
            <Image loading="lazy" className='object-cover' src={require('@/app/assets/ecommerce_preview_hero_img.png')} alt='hero-img'/>
        {/* </div> */}
        {/* Decorative circle */}
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-300 rounded-full opacity-60"></div>
        <div className="absolute inset-0 w-full h-full bg-black/50 opacity-60"></div>
      </section>

      {/* Banner Cards */}
      <section className="max-w-6xl mx-auto px-3 mb-6">
        <div className={`grid md:grid-cols-2 gap-3`}>
          <div className={`relative bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-4 h-24 overflow-hidden  opacity-0 ${inView ? 'animate-slide-in-left animate-delay-1600':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover -translate-y-[80%] translate-x-[20%]' src={require('@/app/assets/ecommerce_preview_outfit_one.png')} alt='hero-img'/>
           
            <div className='absolute inset-0 p-3'>
              <h3 className={`text-sm font-bold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-2000':'opacity-0'}`}>Where dreams meet</h3>
              <h3 className={`text-sm font-bold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-2200':'opacity-0'}`}>couture</h3>
              <button className={`text-[0.4rem] font-medium underline opacity-0 ${inView ? 'animate-slide-in-left animate-delay-2300':'opacity-0'}`}>SHOP NOW</button>
            </div>

          </div>
          <div className={`relative bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 h-24 overflow-hidden opacity-0 ${inView ? 'animate-slide-in-right animate-delay-1600':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover -translate-y-[40%] translate-x-[30%]' src={require('@/app/assets/ecommerce_preview_outfit_two.png')} alt='hero-img'/>
            <div className={`absolute inset-0 p-3`}>
              <h3 className={`text-sm font-bold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-2000':'opacity-0'}`}>Enchanting styles</h3>
              <h3 className={`text-sm font-bold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-2300':'opacity-0'}`}>for every woman</h3>
              <button className={`text-[0.4rem] font-medium underline opacity-0 ${inView ? 'animate-slide-in-left animate-delay-2300':'opacity-0'}`}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Categories */}
      <section className="max-w-6xl mx-auto px-3 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className={`text-lg font-bold ${inView ? 'slide-up-stagger animate-delay-3000':'opacity-0'}`}>Browse by categories</h2>
          <div className="flex items-center gap-2">
            <button className={`px-2 py-1 bg-black text-white rounded-full text-[0.4rem] font-medium opacity-0 ${inView ? 'animate-slide-in-left animate-delay-3400':'opacity-0'}`}>ALL</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium hover:text-black opacity-0 ${inView ? 'animate-slide-in-left animate-delay-3600':'opacity-0'}`}>CASUAL</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium hover:text-black opacity-0 ${inView ? 'animate-slide-in-left animate-delay-3800':'opacity-0'}`}>SCHEDULE</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className={`relative bg-gray-50 rounded-xl h-24 flex items-center justify-center overflow-hidden ${inView ? 'appear animate-delay-4200':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover translate-x-10' src={require('@/app/assets/ecommerce_preview_shoejpeg.jpeg')} alt='hero-img'/>
            <div className="absolute top-2 left-2 text-xs font-bold">SHOES</div>
          </div>
          <div className={`relative bg-gray-50 rounded-xl h-24 flex items-center justify-center overflow-hidden ${inView ? 'appear animate-delay-4400':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover ' src={require('@/app/assets/ecommerce_preview_shoe_brush.jpeg')} alt='hero-img'/>
            <div className="absolute top-2 left-2 text-xs font-bold">BASICS</div>
          </div>
          <div className={`relative bg-gray-50 rounded-xl h-24 flex items-center justify-center overflow-hidden ${inView ? 'appear animate-delay-4600':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover ' src={require('@/app/assets/ecommerce_preview_bag.jpeg')} alt='hero-img'/>
            <div className="absolute top-2 left-2 text-xs font-bold">BAGS</div>
          </div>
          <div className={`relative bg-gray-50 rounded-xl h-24 flex items-center justify-center overflow-hidden ${inView ? 'appear animate-delay-4800':'opacity-0'}`}>
            <Image loading="lazy" className='object-cover ' src={require('@/app/assets/ecommerce_preview_tshirt.jpeg')} alt='hero-img'/>
            <div className="absolute top-2 left-2 text-xs font-bold">T-SHIRT</div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-6xl mx-auto px-3 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className={`text-lg font-bold ${inView ? 'slide-up-stagger animate-delay-6000':'opacity-0'}`}>Popular products</h2>
          <div className="flex items-center gap-2">
            <button className={`px-2 py-1 bg-black text-white rounded-full text-[0.4rem] font-medium opacity-0 ${inView ? 'animate-slide-in-left animate-delay-6000':'opacity-0'}`}>NEW</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium opacity-0 hover:text-black ${inView ? 'animate-slide-in-left animate-delay-6200':'opacity-0'}`}>BRAND-B</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium opacity-0 hover:text-black max-vsm:hidden ${inView ? 'animate-slide-in-left animate-delay-6400':'opacity-0'}`}>LIFESTYLE</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium opacity-0 hover:text-black ${inView ? 'animate-slide-in-left animate-delay-6600':'opacity-0'}`}>STREET</button>
            <button className={`px-2 py-1 text-gray-600 text-[0.4rem] font-medium opacity-0 hover:text-black max-vsm:hidden ${inView ? 'animate-slide-in-left animate-delay-6800':'opacity-0'}`}>T-SHIRT</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Product 1 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-7200':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-400">
                <Image loading="lazy" className='object-cover -translate-y-[40%]' src={require('@/app/assets/ecommerce_preview_casual.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5 text-red-500" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-7600':'opacity-0'}`}>Casual Shirt</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-7800':'opacity-0'}`}>$72.55</p>
          </div>

          {/* Product 2 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-7800':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300">
                <Image loading="lazy" className='object-cover scale-150' src={require('@/app/assets/ecommerce_preview_multicolor.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-7800':'opacity-0'}`}>Multi color Shirt</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-8000':'opacity-0'}`}>$175</p>
          </div>

          {/* Product 3 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-8000':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800">
                <Image loading="lazy" className='object-cover scale-150' src={require('@/app/assets/ecommerce_preview_blazer.jpeg')} alt='hero-img'/>

              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-8200':'opacity-0'}`}>Modern Blazer</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-8400':'opacity-0'}`}>$31</p>
          </div>

          {/* Product 4 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-8400':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500">
                <Image loading="lazy" className='object-cover scale-150' src={require('@/app/assets/ecommerce_preview_waterproof_jaacket.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-8600':'opacity-0'}`}>Waterproof Jacket</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-8800':'opacity-0'}`}>$23</p>
          </div>

          {/* Product 5 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-8800':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-700">
                <Image loading="lazy" className='object-cover scale-150 -translate-y-3.5 -translate-x-1.5' src={require('@/app/assets/ecommerce_preview_jaket.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-9000':'opacity-0'}`}>Jaket</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-9200':'opacity-0'}`}>$125</p>
          </div>

          {/* Product 6 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-9400':'opacity-0'}`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500`}>
                <Image loading="lazy" className='object-cover -translate-y-5.5 ' src={require('@/app/assets/ecommerce_preview_premium_jacket.jpeg')} alt='hero-img'/>
              </div>
              <button className={`"absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50"`}>
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-9600':'opacity-0'}`}>Premium Jacket</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-9800':'opacity-0'}`}>$125</p>
          </div>

          {/* Product 7 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-9800':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400">
                <Image loading="lazy" className='object-cover -translate-y-3.5 ' src={require('@/app/assets/ecommerce_preview_winter_jacket.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-10000':'opacity-0'}`}>Hoodie Winter</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-10200':'opacity-0'}`}>$23</p>
          </div>

          {/* Product 8 */}
          <div className="relative group">
            <div className={`relative bg-gray-100 rounded-xl h-32 mb-2 overflow-hidden ${inView ? 'slide-up-stagger animate-delay-10200':'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-400">
                <Image loading="lazy" className='object-cover -translate-y-9.5 scale-105 ' src={require('@/app/assets/ecommerce_preview_colorful_jacket.jpeg')} alt='hero-img'/>
              </div>
              <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-2.5 h-2.5" />
              </button>
            </div>
            <h3 className={`text-xs font-semibold mb-0.5 ${inView ? 'slide-up-stagger animate-delay-10400':'opacity-0'}`}>Colorful Jacket</h3>
            <p className={`text-[0.4rem] font-bold ${inView ? 'slide-up-stagger animate-delay-10600':'opacity-0'}`}>$95</p>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Banner */}
      <section className={`relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 h-24 mx-3 my-6 rounded-2xl overflow-hidden ${inView ? 'slide-up-stagger animate-delay-10800':'opacity-0'}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className={`text-xl font-bold mb-1 ${inView ? 'slide-up-stagger animate-delay-11000':'opacity-0'}`}>
            EXCLUSIVE FASHION OFFERS
          </h2>
          <h2 className={`text-xl font-bold mb-1 ${inView ? 'slide-up-stagger animate-delay-11200':'opacity-0'}`}>
            AWAIT FOR YOUR
          </h2>
          <button className={`px-3 py-1.5 bg-white text-black rounded-full text-[0.4rem] font-medium flex items-center gap-1 hover:bg-gray-100  ${inView ? 'slide-up-stagger animate-delay-11400':'opacity-0'}`}>
            SIGNUP NOW <ArrowRight className="w-2 h-2" />
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-6xl mx-auto px-3 mb-6 py-6">
        <h2 className="text-xl font-bold text-center mb-4">
          Over 350+ Customer<br />reviews form our client
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-400"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-400"></div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-500"></div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-300 to-red-400"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-400"></div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="max-w-6xl mx-auto px-3 mb-6">
        <h2 className="text-xl font-bold text-center mb-4">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Product 1 */}
          <div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-xl h-32 mb-2"></div>
            <h3 className="text-xs font-semibold mb-0.5">Polo with Contrast Trims</h3>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-2 h-2 text-gray-300" />
              </div>
              <span className="text-[0.35rem] text-gray-600">4.0/5</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold">$212</span>
              <span className="text-[0.4rem] text-gray-400 line-through">$242</span>
              <span className="px-1 py-0.5 bg-red-100 text-red-600 rounded text-[0.35rem] font-medium">-20%</span>
            </div>
          </div>

          {/* Product 2 */}
          <div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-32 mb-2"></div>
            <h3 className="text-xs font-semibold mb-0.5">Gradient Graphic T-shirt</h3>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-2 h-2 text-gray-300" />
                <Star className="w-2 h-2 text-gray-300" />
              </div>
              <span className="text-[0.35rem] text-gray-600">3.5/5</span>
            </div>
            <p className="text-xs font-bold">$145</p>
          </div>

          {/* Product 3 */}
          <div>
            <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-xl h-32 mb-2"></div>
            <h3 className="text-xs font-semibold mb-0.5">Polo with Tipping Details</h3>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-2 h-2 text-gray-300" />
              </div>
              <span className="text-[0.35rem] text-gray-600">4.5/5</span>
            </div>
            <p className="text-xs font-bold">$180</p>
          </div>

          {/* Product 4 */}
          <div>
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl h-32 mb-2"></div>
            <h3 className="text-xs font-semibold mb-0.5">Striped Jacket</h3>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[0.35rem] text-gray-600">5.0/5</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold">$320</span>
              <span className="text-[0.4rem] text-gray-400 line-through">$400</span>
              <span className="px-1 py-0.5 bg-red-100 text-red-600 rounded text-[0.35rem] font-medium">-20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-br from-teal-700 to-green-600 mx-3 my-6 rounded-2xl overflow-hidden py-6">
        <div className="max-w-md mx-auto text-center px-4">
          <h2 className="text-xl font-bold text-white mb-3">
            STAY UPTO DATE ABOUT OUR<br />LATEST OFFERS
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full">
              <Mail className="w-3 h-3 text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent text-[0.4rem] outline-none"
              />
            </div>
            <button className="w-full px-3 py-1.5 bg-white text-black rounded-full text-[0.4rem] font-medium hover:bg-gray-100">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center text-white font-bold text-[0.4rem]">
                  N
                </div>
                <span className="font-bold text-sm">Nextgen</span>
              </div>
              <p className="text-[0.4rem] text-gray-600 leading-relaxed mb-2">
                We have cloth that suite you style and which your're proud to wear.
              </p>
              <div className="flex gap-2">
                <a href="#" className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <Twitter className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <Facebook className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <Instagram className="w-2.5 h-2.5" />
                </a>
                <a href="#" className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <Github className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold mb-2">COMPANY</h3>
              <div className="space-y-1 text-[0.4rem] text-gray-600">
                <div className="hover:text-black cursor-pointer">About</div>
                <div className="hover:text-black cursor-pointer">Features</div>
                <div className="hover:text-black cursor-pointer">Works</div>
                <div className="hover:text-black cursor-pointer">Career</div>
              </div>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-xs font-bold mb-2">HELP</h3>
              <div className="space-y-1 text-[0.4rem] text-gray-600">
                <div className="hover:text-black cursor-pointer">Customer Support</div>
                <div className="hover:text-black cursor-pointer">Delivery Details</div>
                <div className="hover:text-black cursor-pointer">Terms & Conditions</div>
                <div className="hover:text-black cursor-pointer">Privacy Policy</div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xs font-bold mb-2">FAQ</h3>
              <div className="space-y-1 text-[0.4rem] text-gray-600">
                <div className="hover:text-black cursor-pointer">Account</div>
                <div className="hover:text-black cursor-pointer">Manage Deliveries</div>
                <div className="hover:text-black cursor-pointer">Orders</div>
                <div className="hover:text-black cursor-pointer">Payment</div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-bold mb-2">RESOURCES</h3>
              <div className="space-y-1 text-[0.4rem] text-gray-600">
                <div className="hover:text-black cursor-pointer">Free eBooks</div>
                <div className="hover:text-black cursor-pointer">Development Tutorial</div>
                <div className="hover:text-black cursor-pointer">How to - Blog</div>
                <div className="hover:text-black cursor-pointer">Youtube Playlist</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-3 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-[0.4rem] text-gray-600">
              Nextgen © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
                <span className="text-[0.35rem] font-bold">VISA</span>
              </div>
              <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
                <span className="text-[0.35rem] font-bold">PAY</span>
              </div>
              <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
                <span className="text-[0.35rem] font-bold">G</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePreview;