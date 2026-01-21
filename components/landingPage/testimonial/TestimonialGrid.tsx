"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { id: 1, author: "Sarah Chen", role: "Founder", quote: "This tool saved me hours. I generated a landing page in minutes." },
  { id: 2, author: "Alex Rivers", role: "Designer", quote: "The AI understands context perfectly. Like a senior designer." },
  { id: 3, author: "Maria Garcia", role: "Marketing", quote: "40% increase in conversion since switching to these layouts." },
  { id: 4, author: "James Wilson", role: "SaaS", quote: "Clean code and lightning-fast speed. Best investment this year." },
  { id: 5, author: "Lila Vance", role: "Founder", quote: "Professional and high-converting results. Simply incredible." },
  { id: 6, author: "David K.", role: "Dev", quote: "Ship landing pages for micro-SaaS projects in under 10 minutes." },
];

export default function TestimonialCarousel() {
  // 1. State for dots and arrow disabled status
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // 2. Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnMouseEnter: true })
  ]);

  // 3. Navigation Functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // 4. Update the "Selected Dot" when the carousel moves
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-10 px-4 vsm:px-12">
      <div className="mx-auto relative">
        
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item}/>
            ))}
          </div>
        </div>

        {/* Arrow Buttons (Desktop Only) */}
        <div className="hidden lg:block">
          <button 
            onClick={scrollPrev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mt-20">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                selectedIndex === index ? "w-10 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}