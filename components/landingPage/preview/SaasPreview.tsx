import React from 'react';
import { TrendingUp, Target, Users, Zap, BarChart3, Clock } from 'lucide-react';
import { useInView } from '@/hooks/useInView';


const SaasPreview = () => {
  const {ref, inView} = useInView<HTMLDivElement>()


  return (
    <div ref={ref} className={`w-full mockup-scroll-content ${inView ? '':'mockup-scroll-content-paused'}  bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 overflow-hidden rounded-3xl`} style={{ fontSize: '0.5rem' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 top-0 ">
        <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-linear-to-br from-red-400 to-pink-500 rounded flex items-center justify-center">
              <Zap className="w-2 h-2 text-white" />
            </div>
            <span className="font-bold text-sm">NuroAI</span>
          </div>
          <nav className="flex items-center gap-3 text-xs">
            <a href="#" className="hover:text-purple-600 max-tny:hidden">Product</a>
            <a href="#" className="hover:text-purple-600 max-tny:hidden">Pricing</a>
            <a href="#" className="hover:text-purple-600 max-tny:hidden">Resources</a>
            <a href="#" className="hover:text-purple-600 max-tny:hidden">Blogs</a>
            <button className="px-2 py-1 bg-purple-600 text-white rounded text-xs">Sign up</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section  className="max-w-6xl mx-auto px-3 py-8 text-center">
        <h1 className={`text-2xl font-bold mb-2 leading-tight `}>
          <p className={`${inView ? 'slide-up' : 'opacity-0'}`}>AI-Driven sales teams wit</p>
          <p className={`${inView ? 'slide-up animate-delay-200' : 'opacity-0'}`}>human-level precision</p>
        </h1>
        <p className={`text-xs text-gray-600 mb-4 max-w-md mx-auto ${inView ? 'slide-up-stagger animate-delay-300' : 'opacity-0'}`}>
          Empower your business with AI-driven teams that execute tasks with human-level precision, efficiency, and reliability.
        </p>

        {/* Hero Visual Elements */}
        <div className="relative max-w-3xl mx-auto mb-6 h-32">
          {/* Left Card - Metrics */}
          <div className={`absolute left-0 tny:left-10 sm:left-24 top-0 z-3 bg-white rounded-lg shadow-lg p-1 w-28 transform -rotate-6 opacity-0 ${inView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-1 mb-1 ">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold">48%</div>
                <div className="text-[0.4rem] text-gray-500">MoM growth</div>
              </div>
            </div>
           
          </div>

          <div className={`absolute left-9 tny:left-19 sm:left-34 top-9 tny:top-8 z-2 bg-white rounded-lg shadow-lg p-1 w-28 transform -rotate-6 opacity-0 ${inView ? 'animate-slide-in-right animate-delay-400' : 'opacity-0'}`}>
             <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold">68%</div>
                <div className="text-[0.4rem] text-gray-500">Close rate</div>
              </div>
            </div>
          </div>

          {/* Center Card - Chat */}
          <div className={`absolute left-1/2 top-2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-2 w-46 h-36 ${inView ? 'appear' : 'opacity-0'}`}>
            <div className="text-[0.45rem] text-gray-400 mb-1">New chat</div>
            <div className="flex justify-center mb-2">
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-pink-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
            </div>
            <div className="text-[0.4rem] text-gray-700 mb-1">
              Provide a detailed summary of my company's latest investment
            </div>
            <div className="bg-gray-50 rounded p-1 text-[0.35rem] text-gray-500">
              What are the key performance trends...
            </div>
          </div>

          {/* Right Card - Sales Figure */}
          <div className={`absolute right-3 tny:right-13 sm:right-34 top-4 bg-white rounded-lg shadow-lg p-2 w-25 transform -rotate-6 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-200' : 'opacity-0'}`}>
            {/* <div className="text-[0.4rem] text-gray-500 mb-1">Sales Figure</div> */}
            <div className="text-sm font-bold mb-1">$4.5886B</div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1">
                <div className="text-[0.35rem] text-gray-500">Actual</div>
                <div className="flex-1 h-0.5 bg-purple-200"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[0.35rem] text-gray-500">Predicted</div>
                <div className="flex-1 h-0.5 bg-pink-200"></div>
              </div>
            </div>
          </div>

          <div className={`absolute right-0 tny:right-10 sm:right-38 -bottom-8 bg-white rounded-lg shadow-lg p-2 w-30 transform rotate-6 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-300' : 'opacity-0'}`}>
            <div className="text-[0.4rem] text-gray-500 mb-1">Sales Figure</div>
            {/* <div className="text-sm font-bold mb-1">$4.5886B</div> */} 
            <div className="space-y-0.5">
              <div className="flex items-center gap-1">
                <div className="text-[0.35rem] text-gray-500">Actual</div>
                <div className="flex-1 h-0.5 bg-purple-200"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[0.35rem] text-gray-500">Predicted</div>
                <div className="flex-1 h-0.5 bg-pink-200"></div>
              </div>
               {/* <div className="flex items-center gap-1">
                <div className="text-[0.35rem] text-gray-500">Predicted</div>
                <div className="flex-1 h-0.5 bg-pink-200"></div>
              </div> */}
            </div>
          </div>

          {/* Bottom Card - Performance */}
          <div className={`absolute left-2 tny:left-10 sm:left-34 -bottom-6 bg-white rounded-lg shadow-lg p-2 w-28 rotate-9 opacity-0 ${inView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Target className="w-3 h-3 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold">$185,421</div>
                <div className="text-[0.35rem] text-gray-500">Revenue last Q3</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-2 mb-4 mt-12">
          <button className={`px-3 py-1.5 bg-purple-700 text-white rounded text-xs font-medium hover:bg-purple-800 ${inView ? 'slide-up-stagger animate-delay-400':'opacity-0'}`}>
            Try for free
          </button>
          <button className={`px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-xs font-medium hover:bg-gray-50 ${inView ? 'slide-up-stagger animate-delay-600':'opacity-0'}`}>
            Request a Demo
          </button>
        </div>

        {/* Partner Logos */}
        <div className={`text-[0.4rem] text-gray-500 mb-2 ${inView ? 'slide-up animate-delay-600':'opacity-0'}`}>Our trusted partners</div>
        <div className="flex items-center justify-center gap-4 text-gray-400">
          <span className={`text-xs opacity-0 ${inView ? 'slide-up animate-delay-400':'opacity-0'}`}>loom</span>
          <span className={`text-xs opacity-0 ${inView ? 'slide-up animate-delay-600':'opacity-0'}`}>Evernote</span>
          <span className={`text-xs opacity-0 ${inView ? 'slide-up animate-delay-800':'opacity-0'}`}>Lattice</span>
          <span className={`text-xs opacity-0 ${inView ? 'slide-up animate-delay-1000':'opacity-0'}`}>harper</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 py-6">
        <div className="max-w-6xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-3">
            {/* Feature 1 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-1300 sm:animate-delay-1000': 'opacity-0'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-orange-600" />
                </div>
                <h3 className="text-xs font-bold">AI-Powered Sales Forecasting</h3>
              </div>
              <p className="text-[0.4rem] text-gray-600 leading-relaxed">
                Track and analyze your team's performance in real-time with detailed analytics, key sales metrics, and actionable insights to drive smarter decision-making.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 opacity-0 ${inView ? 'animate-slide-in-right animate-delay-1300 sm:animate-delay-1000': 'opacity-0'}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-purple-600" />
                </div>
                <h3 className="text-xs font-bold">Real-Time Performance Tracking</h3>
              </div>
              <p className="text-[0.4rem] text-gray-600 leading-relaxed">
                Sync effortlessly with Salesforce, HubSpot, and other major platforms to streamline workflows and boost productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-3">
          <h2 className={`text-center text-xs font-semibold text-gray-500 mb-1 ${inView ? 'slide-up animate-delay-1300': 'opacity-0'}`}>Testimonials</h2>
          <h3 className={`text-center text-lg font-bold mb-4 ${inView ? 'slide-up animate-delay-1400': 'opacity-0'}`}>What sales teams are saying</h3>
          <p className={`text-center text-[0.4rem] text-gray-500 mb-4 ${inView ? 'slide-up animate-delay-1500': 'opacity-0'}`}>Trusted by top-performing sales teams worldwide</p>

          <div className="grid md:grid-cols-3 gap-3">
            {/* Testimonial 1 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 ${inView ? 'appear animate-delay-3800': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-purple-400 to-pink-500"></div>
                <span className="text-xs font-bold">loom</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "The AI insights have transformed how we approach our sales pipeline. It's incredibly powerful and intuitive."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Jules George</div>
                  <div className="text-[0.35rem] text-gray-500">Founder, Loom</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100  ${inView ? 'appear animate-delay-4000': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-green-400 to-blue-500"></div>
                <span className="text-xs font-bold">Evernote</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "NuroAI's predictive modeling system was incredible, and the results have been impressive."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Steve Amezaid</div>
                  <div className="text-[0.35rem] text-gray-500">VP Marketing, Evernote</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100  ${inView ? 'appear animate-delay-4200': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-blue-400 to-purple-500"></div>
                <span className="text-xs font-bold">Lattice</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "We realized we're more accurately predicting production goals, simplifying workflows that drive revenue."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Sam Richardson</div>
                  <div className="text-[0.35rem] text-gray-500">Founder, CEO, Lattice</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 ${inView ? 'appear animate-delay-5600': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br to-red-400 from-pink-500"></div>
                <span className="text-xs font-bold">Sky</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "The AI insights have transformed how we approach our sales pipeline. It's incredibly powerful and intuitive."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Jules George</div>
                  <div className="text-[0.35rem] text-gray-500">Founder, Sky</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100  ${inView ? 'appear animate-delay-5800': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br to-purple-400 from-blue-500"></div>
                <span className="text-xs font-bold">Pharnel</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "NuroAI's predictive modeling system was incredible, and the results have been impressive."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Steve Amezaid</div>
                  <div className="text-[0.35rem] text-gray-500">VP Marketing, Pharnel</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100  ${inView ? 'appear animate-delay-6000': 'opacity-0'}`}>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-linear-to-br to-orange-400 from-orange-500"></div>
                <span className="text-xs font-bold">TinyTask</span>
              </div>
              <p className="text-[0.4rem] text-gray-700 leading-relaxed mb-2">
                "We realized we're more accurately predicting production goals, simplifying workflows that drive revenue."
              </p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div>
                  <div className="text-[0.4rem] font-semibold">Alfred Diokpa</div>
                  <div className="text-[0.35rem] text-gray-500">Founder, CEO, TinyTask</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-linear-to-br from-purple-600 to-pink-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-3 text-center">
          <div className="text-[0.4rem] text-purple-200 mb-1">Contact</div>
          <h2 className="text-lg font-bold mb-2">
            Supercharge your sales<br />with AI today!
          </h2>
          <button className="px-3 py-1.5 bg-white text-purple-700 rounded text-xs font-medium hover:bg-gray-100">
            Get started
          </button>
        </div>
      </section>
    </div>
  );
};

export default SaasPreview;