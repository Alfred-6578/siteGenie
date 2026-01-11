'use client';

import { useState, useEffect } from 'react';

const ParticleSystem = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.3,
    color: ['white', 'cyan', 'purple'][Math.floor(Math.random() * 3)],
  }));

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full animate-particle-rise`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '-20px',
            backgroundColor: particle.color === 'white' ? 'rgba(255,255,255,0.6)' : 
                           particle.color === 'cyan' ? 'rgba(6,182,212,0.6)' : 
                           'rgba(168,85,247,0.6)',
            animation: `particle-rise ${particle.duration}s linear infinite, twinkle 2s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;