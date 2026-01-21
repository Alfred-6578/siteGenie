import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Wand2, Palette, Rocket } from 'lucide-react';

export default function AIGenerationLoader({ progress }: { progress: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    { icon: Sparkles, text: "Analyzing your business...", color: "text-blue-500", percentage: 0 },
    { icon: Wand2, text: "Crafting compelling copy...", color: "text-purple-500", percentage: 25 },
    { icon: Palette, text: "Designing your layout...", color: "text-pink-500", percentage: 50 },
    { icon: Zap, text: "Optimizing for conversions...", color: "text-yellow-500", percentage: 75 },
    { icon: Rocket, text: "Almost ready to launch...", color: "text-green-500", percentage: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 vsm:p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 vsm:w-18 vsm:h-18 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
              <Sparkles className="w-8 h-8 vsm:w-10 vsm:h-10 text-white" />
            </div>
            <h2 className="text-xl vsm:text-3xl font-bold text-white mb-2">
              Creating Your Landing Page
            </h2>
            <p className="text-purple-200">
              Our AI is working its magic...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-white/30 animate-pulse"></div>
              </div>
            </div>
            <div className="text-right mt-2">
              <span className="text-sm text-purple-200 font-medium">
                {Math.ceil(progress)}%
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const nextStepPercentage = steps[index + 1]?.percentage || 100;
              
              // Fix: Check if progress is within this step's range
              const isActive = progress >= step.percentage && progress < nextStepPercentage;
              const isCompleted = progress >= nextStepPercentage;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 ${
                    isActive
                      ? 'bg-white/20 scale-105'
                      : isCompleted
                      ? 'bg-white/5 opacity-60'
                      : 'bg-white/5 opacity-40'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 vsm:w-10 vsm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-white/30 scale-110'
                        : isCompleted
                        ? 'bg-green-500/30'
                        : 'bg-white/10'
                    }`}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-4 h-4 vsm:w-6 vsm:h-6 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <Icon
                        className={`w-4 h-4 vsm:w-6 vsm:h-6 ${
                          isActive ? step.color + ' animate-pulse' : 'text-white/60'
                        }`}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`font-medium transition-all duration-500 text-sm vsm:text-base ${
                        isActive
                          ? 'text-white vsm:text-lg'
                          : isCompleted
                          ? 'text-green-300'
                          : 'text-white/60'
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>

                  {isActive && (
                    <div className="flex gap-0.5 vsm:gap-1">
                      <span className="w-1 h-1 vsm:w-2 vsm:h-2 bg-white rounded-full animate-bounce"></span>
                      <span className="w-1 h-1 vsm:w-2 vsm:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-1 h-1 vsm:w-2 vsm:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Tip */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-purple-200 text-center">
              💡 <span className="font-semibold">Pro tip:</span> Your landing page will be fully customizable once generated!
            </p>
          </div>
        </div>

        {/* Floating Particles - Only render on client to avoid hydration error */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}