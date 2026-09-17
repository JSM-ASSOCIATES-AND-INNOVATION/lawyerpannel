const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');

const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'
import logo from '../../../shared/assets/logo.png'

export default function HeroSection() {
  return (
    <section id="home" className="snap-section relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden !py-0">
      
      {/* Rich Dynamic Background specifically for Hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#050814]"></div>
        
        {/* Animated glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary/20 rounded-full mix-blend-screen filter blur-[130px] opacity-80 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] opacity-60 animate-blob animation-delay-2000"></div>
        
        {/* Subtle high-tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 h-full pb-12 mt-[-40px]">
        
        {/* Logo without the ugly box, purely white and glowing */}
        <div className="mb-12">
          <img src={logo} alt="Lawyer Panel Logo" className="h-20 md:h-28 w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-500" />
        </div>
        
        {/* Massive, perfectly fitted Typography */}
        <div className="text-center w-full max-w-5xl mx-auto mb-14">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black tracking-tighter text-white leading-[1.05] drop-shadow-2xl">
            Start your journey towards a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-primary drop-shadow-[0_0_25px_rgba(0,179,60,0.4)] inline-block pt-2 pb-4">stress-free life</span> today!
          </h1>
        </div>
        
        {/* Call to action */}
        <div className="flex justify-center w-full">
          <Button 
            variant="primary" 
            className="text-xl md:text-2xl py-6 px-14 shadow-[0_0_40px_rgba(0,179,60,0.5)] hover:shadow-[0_0_60px_rgba(0,179,60,0.7)] hover:scale-105 transition-all duration-300 font-bold border-2 border-[#4ade80]/50" 
            onClick={() => window.location.href='#loan-management'}
          >
            Explore Loan Management Options &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
`;

fs.writeFileSync(heroPath, heroContent.trim());
console.log('Hero section fixed for perfect fit and premium background!');
