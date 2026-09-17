const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');

const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'
import logo from '../../../shared/assets/logo.png'
import { CreditCard, Landmark, PhoneOff, FileWarning } from 'lucide-react'

export default function HeroSection() {
  const quickLinks = [
    { id: 1, icon: CreditCard, title: 'Credit Card Dues', link: '#services' },
    { id: 2, icon: Landmark, title: 'Personal Loans', link: '#services' },
    { id: 3, icon: PhoneOff, title: 'Stop Harassment', link: '#services' },
    { id: 4, icon: FileWarning, title: 'Cheque Bounce', link: '#services' }
  ]

  return (
    <section id="home" className="snap-section relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden !py-0">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-white dark:bg-[#050814] transition-colors duration-500"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary/10 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[130px] opacity-80 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 h-full mt-[-20px]">
        
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="Lawyer Panel Logo" className="h-14 md:h-16 w-auto object-contain dark:brightness-0 dark:invert opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300" />
        </div>
        
        {/* Typography - Scaled Down & Cleaned Up */}
        <div className="text-center w-full max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-secondary dark:text-white leading-[1.15] transition-colors duration-500">
            Start your journey towards a <br className="hidden md:block" />
            <span className="text-primary dark:text-[#4ade80] inline-block pt-1 pb-2">stress-free life</span> today.
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light">
            Manage loans and stop recovery harassment with India's trusted experts.
          </p>
        </div>
        
        {/* Call to action */}
        <div className="flex justify-center w-full mb-12">
          <Button 
            variant="primary" 
            className="text-lg py-4 px-10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-semibold" 
            onClick={() => window.location.href='#loan-management'}
          >
            Explore Loan Management Options &rarr;
          </Button>
        </div>

        {/* Interactive Quick Toggles Restored */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
          {quickLinks.map(btn => {
            const Icon = btn.icon;
            return (
              <a key={btn.id} href={btn.link} className="glass-panel flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-3 text-secondary dark:text-gray-300 border border-black/5 dark:border-white/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-medium text-secondary dark:text-gray-200 text-sm tracking-wide text-center">{btn.title}</span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  )
}
`;

fs.writeFileSync(heroPath, heroContent.trim());
console.log('Hero section fixed with reduced text size and quick toggles restored!');
