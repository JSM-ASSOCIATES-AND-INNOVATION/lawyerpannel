const fs = require('fs');
const path = require('path');

// 1. Restore global Light/Dark CSS (White/Black)
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
const fontImports = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');\n`;

cssContent = fontImports + `@tailwind base;
@layer base {
  .font-serif { font-family: 'Cormorant Garamond', serif; }
  .font-sans { font-family: 'Inter', sans-serif; }
  body { 
    background-color: #ffffff !important; 
    color: #111827 !important;
    font-family: 'Inter', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  html.dark body {
    background-color: #0a0a0a !important; 
    color: #F8F7F3 !important;
  }
}
@tailwind components;
@tailwind utilities;

* {
  border-radius: 0 !important;
}
`;
fs.writeFileSync(cssPath, cssContent);

// 2. Perfect the TLH Button in Green
const buttonPath = path.join(__dirname, 'src/shared/components/Button.jsx');
const buttonContent = `
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyle = "relative inline-flex items-center justify-center font-sans font-bold tracking-[0.1em] uppercase transition-all duration-500 overflow-hidden text-xs cursor-pointer group border";
  
  const variants = {
    primary: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    outline: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    ghost: "bg-transparent border-transparent text-gray-900 dark:text-white"
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], 'px-8 py-4', className)} {...props}>
      {/* TLH Left Accent Line - Green */}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#00b33c] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full h-full group-hover:text-white transition-colors duration-500">
        {children}
      </div>
    </button>
  )
}
`;
fs.writeFileSync(buttonPath, buttonContent.trim());

// 3. Hero Section mapping to White/Green & Black/Green
const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');
const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex flex-col justify-between pt-32 pb-12 overflow-hidden selection:bg-primary/30">
      
      {/* Subtle Ambient Blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-100 dark:bg-white/[0.02] rounded-full blur-[120px] opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex-grow flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-16 lg:gap-8 mt-12 lg:mt-24 relative z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start max-w-2xl">
          <p className="text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase font-bold mb-6 lg:mb-8 transition-colors">
            Legal Support for a Safer Tomorrow
          </p>
          
          <h1 className="text-[48px] lg:text-[78px] font-serif leading-[1.05] mb-6 lg:mb-8 text-gray-900 dark:text-white tracking-tight transition-colors">
            Resolve Your <br />
            <span className="text-[#00b33c] italic font-semibold">Financial Stress.</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-[1.6] mb-10 max-w-[480px] font-light transition-colors">
            Get expert legal support for credit card dues, personal loans, and unfair recovery practices—with dignity, legally and safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto">Talk to an Expert</Button>
            <Button variant="outline" className="w-full sm:w-auto">How It Works</Button>
          </div>
        </div>

        {/* Right Column: Vertical List */}
        <div className="w-full lg:w-[40%] flex flex-col mt-8 lg:mt-12 lg:pl-12">
          {[
            'RBI Compliant',
            'Confidential',
            'Nationwide Support',
            'Experienced Advocates'
          ].map((item, idx) => (
            <div key={idx} className="py-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-between group cursor-pointer transition-all duration-500 hover:border-gray-900 dark:hover:border-white/30">
              <span className="text-lg lg:text-xl text-gray-800 dark:text-gray-100 font-light tracking-wide transition-colors">{item}</span>
              <span className="text-[#00b33c] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 font-serif text-2xl italic">&rarr;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 mt-24 relative z-10">
        <div className="pt-10 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 transition-colors">
          {[
            { value: '50,000+', label: 'Clients Assisted' },
            { value: '100+', label: 'Advocates' },
            { value: '25+', label: 'Cities' },
            { value: '95%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl lg:text-[40px] font-serif text-[#00b33c] mb-2 leading-none">{stat.value}</span>
              <span className="text-[10px] lg:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] font-bold transition-colors">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
`;
fs.writeFileSync(heroPath, heroContent.trim());

// 4. Header: Restore Light/Dark toggle & dynamic backgrounds
const headerPath = path.join(__dirname, 'src/shared/layouts/Header.jsx');
const headerContent = `
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Button from '../components/Button'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Banner */}
      {bannerVisible && (
        <div className="bg-[#00b33c] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-6 flex justify-between items-center relative z-50">
          <div className="w-full text-center">24/7 Expert Legal Consultations Now Live - Nationwide Services</div>
          <button onClick={() => setBannerVisible(false)} className="opacity-70 hover:opacity-100 absolute right-6 text-lg">&times;</button>
        </div>
      )}
      
      <header className="w-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="Lawyer Panel Logo" className="h-10 w-auto dark:brightness-0 dark:invert transition-all duration-300" />
            </a>
            
            <nav className="hidden md:flex gap-10">
              {['Home', 'Services', 'Process', 'Advocates'].map((item) => (
                <a key={item} href={'#' + item.toLowerCase().replace(/ /g, '-')} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group transition-colors">
                  {item}
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00b33c] transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="hidden md:block">
              <Button className="!py-0 h-10 px-6">Consult Now</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
`;
fs.writeFileSync(headerPath, headerContent.trim());

console.log("White/Green and Black/Green theme mapped with perfected TLH buttons.");
