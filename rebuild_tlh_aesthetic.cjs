const fs = require('fs');
const path = require('path');

// 1. Update Button.jsx for the TLH signature hover fill
const buttonPath = path.join(__dirname, 'src/shared/components/Button.jsx');
const buttonContent = `
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyle = "relative inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden text-sm";
  
  const variants = {
    primary: "bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 group",
    outline: "bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 group",
    ghost: "bg-transparent text-gray-900 dark:text-white group"
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], className)} {...props}>
      {/* TLH Left Accent Line that expands on hover */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary transition-all duration-300 group-hover:w-full z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 px-8 py-4 flex items-center justify-center w-full h-full group-hover:text-white transition-colors duration-300">
        {children}
      </div>
    </button>
  )
}
`;
fs.writeFileSync(buttonPath, buttonContent.trim());

// 2. Update Header.jsx to include top banner and sharp design
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
      {/* TLH Style Top Banner */}
      {bannerVisible && (
        <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest py-2 px-6 flex justify-between items-center">
          <div className="w-full text-center">24/7 Expert Legal Consultations Now Live - Nationwide Services</div>
          <button onClick={() => setBannerVisible(false)} className="opacity-70 hover:opacity-100">&times;</button>
        </div>
      )}
      
      <header className="w-full bg-white/90 dark:bg-[#1a1818]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="Lawyer Panel Logo" className="h-12 w-auto dark:brightness-0 dark:invert" />
            </a>
            
            <nav className="hidden md:flex gap-8">
              {['Home', 'About', 'Services', 'Process', 'Advocates', 'Reviews'].map((item) => (
                <a key={item} href={\`#\${item.toLowerCase()}\`} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group transition-colors">
                  {item}
                  {/* TLH active indicator style (left dot/line) can be applied here conceptually, but bottom line is cleaner for top nav */}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-none border border-gray-200 dark:border-white/10 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <Button className="hidden md:flex">Consult Now</Button>
          </div>
        </div>
      </header>
    </div>
  )
}
`;
fs.writeFileSync(headerPath, headerContent.trim());

// 3. Global CSS overrides for the charcoal background and sharp aesthetics
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/@tailwind base;/, \`@tailwind base;
body {
  @apply bg-white dark:bg-[#232020] text-gray-900 dark:text-gray-100 transition-colors duration-300;
  -webkit-font-smoothing: antialiased;
}
* {
  border-radius: 0 !important; /* Force stark, sharp corners TLH style */
}
\`);
fs.writeFileSync(cssPath, cssContent);

console.log("TLH Aesthetic applied: Button, Header, and Global sharpness.");
