
import { useInView } from '@/app/hooks/useInView';
import React from 'react'
import TypingPreview from './TypingPreview';
import GradientProgressbar from './GradientProgressbar';
import IconsDemo from './IconsDemo';

type StepCardProps = {
  id:number,
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  gradient: string; 
  delay: number; 
  scrollDelay: string;
  isVisible: boolean; 
  spin?: boolean; 
  rotate?: boolean 
}


const StepCard = ({id, number, title, description, icon, gradient, delay, isVisible, spin, rotate, scrollDelay }: StepCardProps) => {
  const {ref,inView} = useInView<HTMLDivElement>({threshold:0.3})

  return (
    
    <div
      ref={ref}
      className={`relative w-full h-[400px] rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl p-5 tny:p-6 vms:p-8 transition-all duration-700 opacity-0 ${inView ? `${id === 1 ? 'slide-down-pan': id === 2 ?'slide-up-pan-right': 'slide-up-pan-left'} animate-delay-${scrollDelay}`:''}`}
      style={{
        boxShadow: inView 
        ? '12px 16px 40px 0 rgba(0,0,0,0.3), -4px 8px 20px 0 rgba(0,0,0,0.15)' 
        : '6px 8px 24px 0 rgba(0,0,0,0.2), -2px 4px 12px 0 rgba(0,0,0,0.1)',
      }}
    >
        <div className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} rounded-[20px] opacity-20 blur-xl -z-10`} />
        
        {/* <div className="flex justify-between"> */}
            <div className={`text-5xl tny:text-6xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
                {number}
            </div>

            <div className={`mt-4 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${spin ? 'animate-spin-slow' : ''} ${rotate ? 'animate-rotate-slow' : ''}`} style={{ transitionDelay: `${delay + 300}ms` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-15 flex items-center justify-center text-4xl animate-pulse-gentle`}>
                {icon}
                </div>
            </div>
        {/* </div> */}

        <div className="mt-6">
            <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>

        {
            id === 1 ?
                <TypingPreview isVisible={inView}/>
            : id === 2 ?
               <GradientProgressbar isVisible={inView}/>
            : <IconsDemo />
        }
    </div>
  );
};

export default StepCard
