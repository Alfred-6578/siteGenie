import React, { useEffect, useState } from 'react'

const TypingPreview = ({isVisible}:{isVisible:boolean}) => {
    const [typedText, setTypedText] = useState('');
    
    useEffect(() => {
        if (!isVisible) return;
        
        const texts = ['Business: Tech Startup...', 'Industry: SaaS Platform...', 'Audience: Entrepreneurs...'];
        let currentIndex = 0;
        let charIndex = 0;
        let currentText = '';

        const typeInterval = setInterval(() => {
            if (charIndex < texts[currentIndex].length) {
                currentText += texts[currentIndex][charIndex];
                setTypedText(currentText);
                 
                charIndex++;
            } else {
                setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                charIndex = 0;
                currentText = '';
                setTypedText('');
                }, 2000);
            }
        }, 80);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  return (
     <div className="mt-6 space-y-3">
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500/30 to-cyan-500/10 rounded-full" />
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500/30 to-cyan-500/10 rounded-full" />
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500/30 to-cyan-500/10 rounded-full" />
        </div>
        <div className="mt-4 text-cyan-400/70 text-sm font-mono min-h-[20px]">
            {typedText}
            <span className="inline-block w-1 h-4 bg-cyan-400 ml-1 animate-pulse" />
        </div>
    </div>
  )
}

export default TypingPreview