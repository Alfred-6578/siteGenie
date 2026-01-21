import React from 'react';
import { Search, Bookmark, ShoppingCart, ArrowRight, ArrowLeft, Check, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import Image from 'next/image';

const RestaurantPreview = () => {
        const {ref, inView} = useInView<HTMLDivElement>()
    
          
  return (
    <div ref={ref} className={`w-full bg-[#1a1a1a] text-white overflow-hidden mockup-scroll-content animation-duration-20000 ${inView ? '':'mockup-scroll-content-paused'}`} style={{ fontSize: '0.5rem' }}>
      {/* Header */}
      <header className="bg-[#2a2a2a] border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="font-bold text-sm">Foodied</span>
            </div>
            <nav className="flex items-center gap-3 text-xs text-gray-400 max-vsm:hidden">
              <a href="#" className="hover:text-white">Popular</a>
              <a href="#" className="hover:text-white">New & featured</a>
              <a href="#" className="hover:text-white">Healthy & Diet</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-5 h-5 flex items-center justify-center hover:text-orange-500">
              <Search className="w-3 h-3" />
            </button>
            <button className="w-5 h-5 flex items-center justify-center hover:text-orange-500">
              <Bookmark className="w-3 h-3" />
            </button>
            <button className="w-5 h-5 flex items-center justify-center hover:text-orange-500">
              <ShoppingCart className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-3">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold mb-2 leading-tight">
                <p className={`${inView ? 'slide-up' : 'opacity-0'}`}>
                    <span className="text-orange-500">88 All-Time</span> 
                    <span className="text-white"> Best Dinner</span><br />
                </p>
                <p className={`${inView ? 'slide-up animate-delay-200' : 'opacity-0'}`}>
                    <span className="text-white">Recipes to</span> 
                    <span className="text-orange-500"> Savor</span>
                </p>
            </h1>
            <p className={`text-xs text-gray-400 max-w-md mx-auto mb-3 ${inView ? 'slide-up-stagger animate-delay-500':'opacity-0'}`}>
              Explore 88 of the best dinner recipes packed with flavors perfect for family meals and special occasions.
            </p>
            <button className={`px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-medium hover:bg-orange-600 flex items-center gap-1 mx-auto opacity-0 ${inView ? 'animate-slide-in-left animate-delay-800':'opacity-0'}`}>
              View Recipes <ArrowRight className="w-2 h-2" />
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className={`relative h-50 tny:h-60 max-md:object-center md:h-80 bg-gradient-to-br from-gray-900 to-black ${inView ? 'appear animate-delay-1100':'opacity-0'}`}>
                <Image loading="lazy" src={require('@/assets/restaurant_preview_hero_img.png')} alt='hero-img' />
            </div>
          </div>
        </div>
      </section>

      {/* Crave-Worthy Dishes Section */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex max-vsm:flex-col items-center justify-between mb-4">
            <div>
              <h2 className={`text-xl max-vsm:text-center font-bold mb-0.5 ${inView ? 'slide-up animate-delay-2200':'opacity-0'}`}>Crave-Worthy Dishes<br className='max-vsm:hidden'/>You'll Love</h2>
            </div>
            <div>
              <p className={`text-xs max-vsm:text-center text-gray-400 mb-2 vsm:max-w-xs ${inView ? 'slide-up animate-delay-2200':'opacity-0'}`}>
                Discover crave-worthy dishes you'll have ways to make full of flavor and deeply satisfying.
              </p>
              <div className="flex items-center gap-2 max-vsm:justify-center">
                <button className={`w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-2600':'opacity-0'}`}>
                  <ArrowLeft className="w-3 h-3" />
                </button>
                <button className={`w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 opacity-0 ${inView ? 'animate-slide-in-right animate-delay-2800':'opacity-0'}`}>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className={`relative rounded-xl overflow-hidden group ${inView ? 'appear animate-delay-3600':'opacity-0'}`}>
              <div className="h-32 bg-gradient-to-br from-yellow-900 to-orange-900 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/restaurant_preview_chicken.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-xs font-semibold mb-0.5">Juicy Chicken: Deliciously Quick</h3>
              </div>
              <button className="absolute bottom-2 right-2 w-5 h-5 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600">
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 2 */}
            <div className={`relative rounded-xl overflow-hidden group ${inView ? 'appear animate-delay-3800':'opacity-0'}`}>
              <div className="h-32 bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
                  <Image loading="lazy" src={require('@/assets/restaurant_preview_fries.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-xs font-semibold mb-0.5">Sweet Potato: Perfect Taste Favorites</h3>
              </div>
              <button className="absolute bottom-2 right-2 w-5 h-5 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600">
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 3 */}
            <div className={`relative rounded-xl overflow-hidden group ${inView ? 'appear animate-delay-4000':'opacity-0'}`}>
              <div className="h-32 bg-gradient-to-br from-green-900 to-lime-900 flex items-center justify-center">
                  <Image loading="lazy" src={require('@/assets/restaurant_preview_salad.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-xs font-semibold mb-0.5">Fresh, Flavorful Salads with Protein</h3>
              </div>
              <button className="absolute bottom-2 right-2 w-5 h-5 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600">
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-3">
          <h2 className={`text-xl font-bold text-center mb-4 ${inView ? 'slide-up animate-delay-7000':'opacity-0'}`}>Explore More</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {/* Card 1 */}
            <div className={`relative rounded-xl overflow-hidden ${inView ? 'appear animate-delay-8000':'opacity-0'}`}>
              <div className="h-24 bg-gradient-to-br from-yellow-800 to-yellow-900 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/restaurant_preview_spag.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-[0.45rem] font-semibold">Comfort Food Classics</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`relative rounded-xl overflow-hidden ${inView ? 'appear animate-delay-8300':'opacity-0'}`}>
              <div className="h-24 bg-gradient-to-br from-orange-800 to-brown-900 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/restaurant_preview_jollof.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-[0.45rem] font-semibold">Homemade Eats</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`relative rounded-xl overflow-hidden ${inView ? 'appear animate-delay-8600':'opacity-0'}`}>
              <div className="h-24 bg-gradient-to-br from-yellow-700 to-orange-800 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/restaurant_preview_breakfast.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-[0.45rem] font-semibold">Breakfast & Brunch</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className={`relative rounded-xl overflow-hidden ${inView ? 'appear animate-delay-8800':'opacity-0'}`}>
              <div className="h-24 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center">
                <Image loading="lazy" src={require('@/assets/restaurant_preview_meat_fish.jpeg')} alt='Juicy chicken'/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <h3 className="text-[0.45rem] font-semibold">Meats & Fish</h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700">
              <ArrowLeft className="w-3 h-3" />
            </button>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            </div>
            <button className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600">
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Mac and Cheese Feature Section */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Ultimate Creamy Mac and Cheese</h2>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                Indulge in the ultimate comfort food with this creamy mac and cheese recipe bring nostalgic flavor with every bite.
              </p>
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <Check className="w-3 h-3 text-orange-500" />
                  <span className="text-[0.45rem]">Comfort food made effortlessly delicious</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <Check className="w-3 h-3 text-orange-500" />
                  <span className="text-[0.45rem]">Perfect for family or solo cravings</span>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-orange-500 text-white rounded-full text-xs font-medium hover:bg-orange-600">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-28 bg-gradient-to-br from-yellow-800 to-orange-900 rounded-xl"></div>
              <div className="h-28 bg-gradient-to-br from-orange-800 to-yellow-900 rounded-xl"></div>
              <div className="h-28 bg-gradient-to-br from-yellow-900 to-orange-800 rounded-xl"></div>
              <div className="h-28 bg-gradient-to-br from-orange-900 to-yellow-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

   
     

      
    </div>
  );
};

export default RestaurantPreview;