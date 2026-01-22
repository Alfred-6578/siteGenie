'use client';

import React, { useState, useEffect, useRef } from 'react';
import FloatingShape from './FloatingShape';
import ParticleSystem from './ParticleSystem';
import Confetti from './Confetti';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';

const FinalCTA = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const {ref, inView} = useInView<HTMLDivElement>();

 
  const handleCTAClick = () => {
    setShowConfetti(true);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-[500px] vsm:h-[600px] overflow-hidden bg-gradient-to-br from-cyan-600 via-purple-600 to-indigo-700 flex items-center justify-center overflow-x-hidden w-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-indigo-700 animate-gradient-shift" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-light-ray-1">
          <div className="absolute top-0 left-1/4 w-32 h-full bg-white/3 rotate-45 blur-2xl" />
        </div>
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-light-ray-2">
          <div className="absolute top-0 right-1/4 w-24 h-full bg-white/3 -rotate-45 blur-2xl" />
        </div>
      </div>

      <FloatingShape 
        size={300} 
        type="circle" 
        top="10%" 
        left="5%" 
        duration={25}
        delay={0}
      />
      <FloatingShape 
        size={250} 
        type="square" 
        top="60%" 
        left="15%" 
        duration={28}
        delay={3}
      />
      <FloatingShape 
        size={200} 
        type="triangle" 
        top="20%" 
        right="10%" 
        duration={22}
        delay={5}
      />
      <FloatingShape 
        size={350} 
        type="circle" 
        top="70%" 
        right="8%" 
        duration={30}
        delay={2}
      />
      <FloatingShape 
        size={180} 
        type="square" 
        top="45%" 
        left="80%" 
        duration={26}
        delay={4}
      />

      <ParticleSystem />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-3xl vsm:text-5xl md:text-6xl font-bold text-white mb-5 transition-all duration-1000 ${
            inView 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-125'
          }`}
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
        >
          Ready to Launch Your Landing Page?
        </h2>
        <p
          className={`text-lg vsm:text-2xl text-white/90 mb-8 transition-all duration-1000 delay-200 ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          Join 10,000+ makers who've launched faster with AI-powered landing pages.
        </p>

        <div className="relative flex justify-center">
          <button
            onClick={handleCTAClick}
            className="group relative flex justify-center w-[90%] vsm:w-100 py-5 vsm:py-6 text-lg font-semibold uppercase bg-white text-indigo-700 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_rgba(255,255,255,0.5)] animate-pulse-gentle overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <Link href={'/generate'} className="relative z-10 flex max-vsm:text-[15px] items-center gap-3 group-hover:text-white transition-colors duration-300">
              Start Building Free
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100">
                →
              </span>
            </Link>
          </button>

         
          {/* {showSuccess && (
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce-in">
              ✓ Let's go! Redirecting...
            </div>
          )} */}
        </div>

        <div
          className={`mt-8 text-sm text-white/70 flex items-center justify-center gap-6 flex-wrap transition-all duration-1000 delay-400 ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free forever
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            2 min setup
          </span>
        </div>
      </div>

      {showConfetti && <Confetti />}
    </div>
  );
};


export default FinalCTA;
