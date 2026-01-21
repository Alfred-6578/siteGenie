import React, { useState, useEffect } from 'react';
import { AlertCircle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

interface AIGenerationErrorProps {
  error?: string | null;
  onRetry?: () => void;
  onGoBack?: () => void;
  onGoHome?: () => void;
}

export default function AIGenerationError({ 
  error = "Failed to generate landing page",
  onRetry,
  onGoBack,
  onGoHome
}: AIGenerationErrorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 vsm:p-8 shadow-2xl border border-red-500/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 vsm:w-20 vsm:h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-4 animate-pulse">
              <AlertCircle className="w-8 h-8 vsm:w-10 vsm:h-10 text-white" />
            </div>
            <h2 className="text-xl vsm:text-3xl font-bold text-white mb-2">
              Oops! Something Went Wrong
            </h2>
            <p className="text-red-200">
              We encountered an issue while generating your landing page
            </p>
          </div>

          {/* Error Message Box */}
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <p className="text-sm text-red-300 font-semibold mb-1">Error Details:</p>
            <p className="text-sm text-red-100/90">{error}</p>
          </div>

          {/* Common Issues */}
          <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm font-semibold text-white mb-3">Common issues:</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                <span>API key not configured or invalid</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                <span>Network connection issues</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                <span>Service temporarily unavailable</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 hover:from-red-600 hover:via-orange-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            )}

            <div className="flex gap-3">
              {onGoBack && (
                <button
                  onClick={onGoBack}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden vsm:inline">Go Back</span>
                  <span className="vsm:hidden">Back</span>
                </button>
              )}

              {onGoHome && (
                <button
                  onClick={onGoHome}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/20"
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
              )}
            </div>
          </div>

          {/* Footer Tip */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-red-200/80 text-center">
              💡 <span className="font-semibold">Tip:</span> If the problem persists, check your API configuration or contact support
            </p>
          </div>
        </div>

        {/* Floating Particles - Only render on client to avoid hydration error */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
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