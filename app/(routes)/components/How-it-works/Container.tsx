'use client'
import React from 'react'
import StepCard from './StepCard';
import Arrow from './Arrow';
import { useInView } from '@/app/hooks/useInView';
import TypingPreview from './TypingPreview';
import { useEffect } from 'react';


const steps: Array<{
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  delay: number;
  scrollDelay: string;
  isVisible: boolean;
  spin: boolean;
  rotate: boolean;
}> = [
  {
    id: 1,
    number: "01",
    title: "Input Your Info",
    description:
      "Tell us about your business — name, industry, target audience, and key features.",
    icon: "📝",
    gradient: "from-cyan-400 to-blue-500",
    delay: 0,
    scrollDelay: '',
    isVisible: false,
    spin: false,
    rotate: false,
    
  },

  {
    id: 2,
    number: "02",
    title: "AI Generates",
    description:
      "Our AI creates a complete landing page with professional copy, layouts, and design in under 10 seconds.",
    icon: "🤖",
    gradient: "from-cyan-400 to-purple-500",
    delay: 0.3,
    scrollDelay: '800',
    isVisible: false,
    spin: true,
    rotate: true,

  },

  {
    id: 3,
    number: "03",
    title: "Customize & Export",
    description:
      "Edit anything with inline editing. Change colors, layouts, and content. Export clean code when ready.",
    icon: "⚙️",
    gradient: "from-cyan-400 to-emerald-500",
    delay: 0.6,
    scrollDelay: '800',
    isVisible: false,
    spin: false,
    rotate: true,


  }
];




const scrollToElementBottom = (element: HTMLElement, duration = 1000) => {

    const preventDefault = (e: Event) => e.preventDefault();

    const lockScroll = () => {
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('keydown', (e) => {
        if(['ArrowUp', 'ArrowDown', ' ', 'PageUp', 'PageDown'].includes(e.key)) {
            e.preventDefault();
        }
        });
    };

  // 2. Cleanup function to restore scrolling
  const unlockScroll = () => {
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
    // Note: To fully clean up keydown, you'd define the key handler outside
  };

  const start = window.scrollY;
  const end = Math.max(0, element.offsetTop + element.offsetHeight - window.innerHeight);
  const change = end - start;
  const startTime = performance.now();

  lockScroll()

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }else{
        unlockScroll()
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
};

const Container = () => {
  const {ref, inView} = useInView<HTMLDivElement>()

  useEffect(() => {
    if (inView && ref.current) {
      scrollToElementBottom(ref.current, 8000); // 1000ms duration
    }
  }, [inView, ref]);

  return (
    <div ref={ref} className='flex flex-col items-center justify-between w-full mt-16'>
      {
        steps.map((step,i)=>(
          <div className='flex flex-col items-center gap-3 w-full lg:w-[70%]' key={i}>
            <div className={`opacity-0 ${inView ? 'slide-down':''} w-full `}
              
            >
              <StepCard
                key={step.id}
                id={step.id}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                gradient={step.gradient}
                delay={step.delay}
                isVisible={true}
                scrollDelay={step.scrollDelay}
                
              />
            </div>
            {step.id !== 3 && <Arrow id={step.id}/>}
          </div>
        ))
      }
    </div>
  )
}

export default Container