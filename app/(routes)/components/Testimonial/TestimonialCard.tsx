"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

type TestimonialCardProps = {
    item: ItemProps
}

type ItemProps = {
    id: number;
    quote: string;
    author: string;
    role: string;
    // logo: string
}

const TestimonialCard = ({item}:TestimonialCardProps) => {
  // Variants for the sequential star animation
  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0, fill: "transparent" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      fill: "currentColor",
      transition: { type: "spring", stiffness: 300 } 
    }
  };

  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        borderColor: "rgba(6, 182, 212, 0.5)", // Cyan glow
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-[400px] h-[280px] p-6 vsm:p-8 rounded-[16px] flex flex-col justify-between
                 bg-gradient-to-br from-slate-900/90 to-slate-800/50 
                 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.2)]
                 transition-colors duration-300 cursor-default group flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] "
    >
      <div className="absolute top-8 left-8">
        <Quote size={48} className="text-cyan-500/20 rotate-180" />
      </div>

      <div className="relative mt-8">
        {/* Quote Text */}
        <p className="text-[18px] italic text-zinc-200 leading-[1.6] font-light">
          {item.quote}
        </p>

        <motion.div 
          variants={starContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-1 mt-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} >
              <Star size={16} className="text-cyan-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

     
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          {/* Profile Image - Placeholder */}
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
              alt="Sarah Chen"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-white leading-tight">{item.author}</h4>
            <p className="text-[14px] text-zinc-500">{item.role}</p>
          </div>
        </div>
        
        
        <div className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
          <div className="w-6 h-6 bg-cyan-500/20 rounded-md border border-cyan-500/50 flex items-center justify-center">
             {/* <span className="text-[10px] text-cyan-400 font-bold">{item.logo}</span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;