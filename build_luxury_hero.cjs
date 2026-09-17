const fs = require('fs');
const path = require('path');

// 1. Update CSS to include Cormorant Garamond & Inter, and lock base colors
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
const fontImports = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');\n`;
if (!cssContent.includes('Cormorant+Garamond')) {
  cssContent = fontImports + cssContent;
  cssContent = cssContent.replace('@tailwind base;', `@tailwind base;
@layer base {
  .font-serif { font-family: 'Cormorant Garamond', serif; }
  .font-sans { font-family: 'Inter', sans-serif; }
  body { 
    background-color: #07111F !important; 
    color: #F8F7F3 !important;
    font-family: 'Inter', sans-serif;
  }
}
`);
  fs.writeFileSync(cssPath, cssContent);
}

// 2. Button Component (Ultra-minimal luxury)
const buttonPath = path.join(__dirname, 'src/shared/components/Button.jsx');
const buttonContent = `
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-sans font-medium text-sm tracking-[0.05em] transition-all duration-300";
  
  const variants = {
    primary: "bg-[#D6B06A] text-[#07111F] hover:bg-[#e3be7a]",
    outline: "bg-transparent text-[#F8F7F3] border border-white/20 hover:border-[#D6B06A] hover:text-[#D6B06A]",
    ghost: "bg-transparent text-[#A8B3C7] hover:text-[#F8F7F3]"
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], 'px-8 py-4', className)} {...props}>
      {children}
    </button>
  )
}
`;
fs.writeFileSync(buttonPath, buttonContent.trim());

// 3. Header Component (Quiet Luxury, No Clutter)
const headerPath = path.join(__dirname, 'src/shared/layouts/Header.jsx');
const headerContent = `
import React from 'react'
import logo from '../assets/logo.png'
import Button from '../components/Button'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 w-full bg-transparent z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Lawyer Panel Logo" className="h-10 w-auto brightness-0 invert opacity-90" />
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex gap-10">
          {['Home', 'Services', 'How It Works', 'Advocates'].map((item) => (
            <a key={item} href={'#' + item.toLowerCase().replace(/ /g, '-')} className="text-xs font-medium tracking-widest text-[#A8B3C7] hover:text-[#F8F7F3] transition-colors">
              {item}
            </a>
          ))}
        </nav>
        
        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="outline" className="!py-3 px-6 !text-xs uppercase tracking-widest">Talk to an Expert</Button>
        </div>

        {/* Mobile Menu Toggle (Minimal) */}
        <button className="md:hidden text-[#F8F7F3]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

      </div>
    </header>
  )
}
`;
fs.writeFileSync(headerPath, headerContent.trim());

// 4. Hero Section (The Masterpiece)
const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');
const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#07111F] pt-32 pb-12 overflow-hidden selection:bg-[#D6B06A]/30">
      
      {/* Subtle Ambient Light (No skeuomorphism, just quiet luxury) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0B1628] rounded-full blur-[120px] opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex-grow flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-16 lg:gap-8 mt-12 lg:mt-24 relative z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start max-w-2xl">
          <p className="text-[#A8B3C7] text-xs tracking-[0.2em] uppercase font-medium mb-6 lg:mb-8">
            Legal Support for a Safer Tomorrow
          </p>
          
          <h1 className="text-[48px] lg:text-[78px] font-serif leading-[1.05] mb-6 lg:mb-8 text-[#F8F7F3] tracking-tight">
            Resolve Your <br />
            <span className="text-[#D6B06A] italic font-medium">Financial Stress.</span>
          </h1>
          
          <p className="text-[#A8B3C7] text-base lg:text-lg leading-[1.6] mb-10 max-w-[480px] font-light">
            Get expert legal support for credit card dues, personal loans, and unfair recovery practices—with dignity, legally and safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto uppercase tracking-widest text-xs">Talk to an Expert</Button>
            <Button variant="outline" className="w-full sm:w-auto uppercase tracking-widest text-xs">How It Works</Button>
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
            <div key={idx} className="py-6 border-b border-white/[0.08] flex items-center justify-between group cursor-pointer transition-all duration-500 hover:border-white/20">
              <span className="text-lg lg:text-xl text-[#F8F7F3] font-light tracking-wide">{item}</span>
              <span className="text-[#D6B06A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 font-serif text-2xl italic">&rarr;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 mt-24 relative z-10">
        <div className="pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: '50,000+', label: 'Clients Assisted' },
            { value: '100+', label: 'Advocates' },
            { value: '25+', label: 'Cities' },
            { value: '95%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl lg:text-[40px] font-serif text-[#D6B06A] mb-2 leading-none">{stat.value}</span>
              <span className="text-[10px] lg:text-xs text-[#A8B3C7] uppercase tracking-[0.15em] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
`;
fs.writeFileSync(heroPath, heroContent.trim());

// 5. Update LandingPage to remove redundant StatsBar since it's now baked into the perfect Hero
const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
let landingContent = fs.readFileSync(landingPath, 'utf8');
landingContent = landingContent.replace("import StatsBar from './components/StatsBar'", "");
landingContent = landingContent.replace("<StatsBar />", "");
fs.writeFileSync(landingPath, landingContent);

console.log("Ultra-premium luxury aesthetic applied successfully.");
