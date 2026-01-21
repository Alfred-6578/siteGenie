import { useInView } from '@/hooks/useInView'
import React from 'react'

const Arrow = ({id}:{id:number}) => {
    const {ref,inView} = useInView<HTMLDivElement>({threshold:0.5})
    

  return (
    <div ref={ref} className={`flex flex-col-reverse -ml-6 gap-5 py-6 justify-center relative z-1 ${id == 2 && '-ml-6'}`}>
        {/* <span className={`rotate-90 text-cyan-500/80 text-4xl font-extralight -mb-6 -mt-11 vsm:-mt-12.5 ml-[3.8px] opacity-0 ${inView ? 'fades-in animate-delay-1400':'opacity-0'}`}>{`>`}</span> */}
        <span className={`w-7 vsm:w-8 max-vsm:hidden h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-1400':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8 max-vsm:hidden h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-1200':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8 h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-1000':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8  h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-800':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8 h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-600':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8 h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-400':'opacity-0'}`}></span>
        <span className={`w-7 vsm:w-8 h-0.5 rotate-90 bg-gradient-to-b from-cyan-500/40 to-cyan-500/80 opacity-0 ${inView ? 'animate-slide-in-left animate-delay-200':'opacity-0'}`}></span>
    </div>
  )
}

export default Arrow