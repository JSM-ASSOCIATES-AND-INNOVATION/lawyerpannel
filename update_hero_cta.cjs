const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');

const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'
import logo from '../../../shared/assets/logo.png'

export default function HeroSection() {
  return (
    <section id="home" className="snap-section pt-32 relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto space-y-16 px-6 h-full">
        <div className="mb-2 glass-panel px-10 py-5 rounded-3xl animate-fade-in-up">
          <img src={logo} alt="Lawyer Panel Logo" className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all drop-shadow-lg" />
        </div>
        
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-extrabold tracking-tight text-secondary dark:text-white leading-[1.1] drop-shadow-sm">
            Start your journey towards a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 drop-shadow-md">stress-free life</span> today!
          </h1>
        </div>
        
        <div className="pt-8 flex justify-center w-full">
          <Button 
            variant="primary" 
            className="text-xl py-6 px-12 shadow-[0_0_40px_rgba(0,179,60,0.4)] hover:scale-105 transition-transform" 
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
console.log('Hero section updated with new title and CTA!');
