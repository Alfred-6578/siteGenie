'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const MockupCard = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      const rotateY = (mouseX / (rect.width / 2)) * 15
      const rotateX = -(mouseY / (rect.height / 2)) * 15
      setRotation({ x: rotateX, y: rotateY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="mockup-container">
      {/* Floating Elements */}
      <div className="gradient-orb"></div>
      <div className="grid-pattern"></div>
      <div className="code-brackets">
        <span className="bracket bracket1">{'}'}</span>
        <span className="bracket bracket2">{'{'}</span>
        <span className="bracket bracket3">{'}'}</span>
        <span className="bracket bracket4">{'{'}</span>
        <span className="bracket bracket5">{'}'}</span>
      </div>
      <div className="sparkle-particles">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className={`sparkle sparkle${i + 1}`}></div>
        ))}
      </div>
      <div className="glow-rings">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
      </div>

      {/* Main Card */}
      <div
        ref={cardRef}
        className="mockup-card"
        style={{
          transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
        }}
      >
        {/* <div className="mini-landing-page">
          <div className="mini-hero">
            <h1>SaaS Product Launch</h1>
            <p>Revolutionary solution for modern businesses</p>
          </div>
          <div className="mini-features">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Description</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Description</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Description</p>
            </div>
          </div>
          <div className="mini-cta">
            <button>Get Started</button>
          </div>
        </div> */}
        <div className="w-full h-full">
                    <Image className='w-full h-full object-cover' src={require('@/app/assets/lp.png')} alt='lp' loading='lazy'/>
                </div>
      </div>

      <style jsx>{`
        .mockup-container {
          position: relative;
          perspective: 1000px;
          width: 600px;
          height: 700px;
          margin: 0 auto;
        }

        .mockup-card {
          width: 600px;
          height: 700px;
          background: #0F1629;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, #0F1629 50%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-20px) rotateZ(2deg); }
        }

        .mini-landing-page {
          transform: scale(0.6);
          transform-origin: top center;
          background: white;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          height: 1167px; /* 700 / 0.6 */
          animation: autoScroll 15s linear infinite;
        }

        .mini-landing-page:hover {
          animation-play-state: paused;
        }

        @keyframes autoScroll {
          0% { transform: scale(0.6) translateY(0); }
          100% { transform: scale(0.6) translateY(-467px); } /* 1167 - 700 */
        }

        .mini-hero {
          padding: 40px;
          text-align: center;
          border-bottom: 1px solid #e9ecef;
        }

        .mini-hero h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .mini-features {
          display: flex;
          justify-content: space-around;
          padding: 40px;
        }

        .feature-card {
          width: 150px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .mini-cta {
          text-align: center;
          padding: 40px;
        }

        .mini-cta button {
          background: #00D4FF;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 18px;
          cursor: pointer;
        }

        /* Floating Elements */
        .gradient-orb {
          position: absolute;
          top: -200px;
          left: -200px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          filter: blur(100px);
          animation: orbFloat 20s ease-in-out infinite;
        }

        @keyframes orbFloat {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }

        .code-brackets {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .bracket {
          position: absolute;
          color: rgba(0, 212, 255, 0.3);
          font-size: 30px;
          animation: bracketFloat 6s ease-in-out infinite;
        }

        .bracket1 { top: 10%; left: 10%; animation-delay: 0s; }
        .bracket2 { top: 20%; right: 15%; animation-delay: 1s; }
        .bracket3 { bottom: 30%; left: 20%; animation-delay: 2s; }
        .bracket4 { bottom: 20%; right: 10%; animation-delay: 3s; }
        .bracket5 { top: 40%; left: 50%; animation-delay: 4s; }

        @keyframes bracketFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .sparkle-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          background: #00D4FF;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        .sparkle1 { top: 10%; left: 10%; width: 4px; height: 4px; animation-delay: 0s; }
        .sparkle2 { top: 20%; right: 20%; width: 2px; height: 2px; animation-delay: 0.5s; }
        .sparkle3 { bottom: 30%; left: 15%; width: 6px; height: 6px; animation-delay: 1s; }
        .sparkle4 { bottom: 20%; right: 25%; width: 3px; height: 3px; animation-delay: 1.5s; }
        .sparkle5 { top: 40%; left: 60%; width: 5px; height: 5px; animation-delay: 2s; }
        .sparkle6 { top: 60%; right: 10%; width: 4px; height: 4px; animation-delay: 2.5s; }
        .sparkle7 { bottom: 40%; left: 70%; width: 2px; height: 2px; animation-delay: 3s; }
        .sparkle8 { top: 30%; left: 80%; width: 6px; height: 6px; animation-delay: 3.5s; }
        .sparkle9 { bottom: 50%; right: 5%; width: 3px; height: 3px; animation-delay: 4s; }
        .sparkle10 { top: 50%; left: 30%; width: 4px; height: 4px; animation-delay: 4.5s; }
        .sparkle11 { top: 70%; right: 30%; width: 2px; height: 2px; animation-delay: 5s; }
        .sparkle12 { bottom: 10%; left: 40%; width: 5px; height: 5px; animation-delay: 5.5s; }
        .sparkle13 { top: 80%; left: 20%; width: 3px; height: 3px; animation-delay: 6s; }
        .sparkle14 { bottom: 60%; right: 40%; width: 6px; height: 6px; animation-delay: 6.5s; }
        .sparkle15 { top: 15%; left: 90%; width: 4px; height: 4px; animation-delay: 7s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .glow-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ring {
          position: absolute;
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 50%;
          animation: ringPulse 3s ease-in-out infinite;
        }

        .ring1 {
          width: 650px;
          height: 750px;
          top: -25px;
          left: -25px;
        }

        .ring2 {
          width: 700px;
          height: 800px;
          top: -50px;
          left: -50px;
          animation-delay: 1.5s;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .ring1, .ring2 {
          animation: ringPulse 3s ease-in-out infinite, ringRotate 30s linear infinite;
        }

        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default MockupCard