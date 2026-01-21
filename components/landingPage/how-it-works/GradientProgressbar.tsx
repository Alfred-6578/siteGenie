import React, { useEffect, useState } from 'react'

const GradientProgressbar = ({isVisible}:{isVisible:boolean}) => {
    const [showParticles, setShowParticles] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);


    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval);
                setIsComplete(true);
                setTimeout(() => setShowParticles(true), 100);
                setTimeout(() => setShowParticles(false), 1000);
                return 100;
            }
            return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isVisible]);
    
  return (
    <div className="">
        <div className="mt-6">
            <div className="text-sm text-white/60 mb-2">
                {isComplete ? '✓ Complete!' : 'Generating your page...'}
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
                />
            </div>
        </div>
         {/* {showParticles && <Particles />} */}
    </div>

  )
}

export default GradientProgressbar