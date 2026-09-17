const fs = require('fs');
const path = require('path');

// 1. Build the ultra-premium About + Featured In combo section
const aboutPath = path.join(__dirname, 'src/features/Landing/components/WhyUsSection.jsx');
const aboutContent = `
import React from 'react'
import Button from '../../../shared/components/Button'
import { Users, ShieldCheck, MapPin, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  { icon: Users, title: 'People First', desc: 'Empathy-driven legal approach.' },
  { icon: ShieldCheck, title: 'Transparent Process', desc: 'No hidden fees or surprises.' },
  { icon: MapPin, title: 'Pan-India Support', desc: 'Resolving issues nationwide.' },
  { icon: Award, title: 'Trusted Expertise', desc: 'Vetted financial advocates.' },
]

export default function WhyUsSection() {
  return (
    <section id="about" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex flex-col gap-16 lg:gap-24 relative z-10">
        
        {/* Top Row: About (45%) | Features (35%) | Legacy (20%) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col items-start pr-0 lg:pr-12">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6 lg:mb-8 transition-colors">
              About Lawyer Panel
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] mb-8 text-gray-900 dark:text-white tracking-tight transition-colors">
              A Safer Tomorrow for Every Borrower.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-[1.6] mb-10 max-w-[480px] font-light transition-colors">
              We provide expert legal support for credit card dues, personal loans, and recovery harassment. Our mission is to protect you from unfair practices and help you regain financial stability with absolute dignity.
            </p>
            <Button variant="outline" className="uppercase tracking-widest text-[10px] lg:text-xs">More About Us</Button>
          </div>

          {/* Center Column (35%) */}
          <div className="w-full lg:w-[35%] grid grid-cols-2 gap-8 lg:gap-10 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 pt-10 lg:pt-0 lg:pl-10">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center mb-5 text-gray-900 dark:text-white hover:border-[#00b33c] hover:text-[#00b33c] transition-colors duration-300 cursor-default">
                    <Icon size={14} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase mb-2">{item.title}</h3>
                  <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Right Column (20%) */}
          <div className="w-full lg:w-[20%] flex flex-col justify-between bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-8 group cursor-pointer hover:border-[#00b33c]/50 dark:hover:border-[#00b33c]/50 transition-all duration-500 mt-8 lg:mt-0">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
                Our Story
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white leading-[1.2] mb-8 group-hover:text-[#00b33c] transition-colors duration-300">
                Built on Trust.<br/>Driven by Justice.
              </h3>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-white">Learn More</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">About our journey</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-[#00b33c] group-hover:border-[#00b33c] group-hover:text-white transition-all duration-300">
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

        </div>

        {/* Featured In Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center border-t border-gray-200 dark:border-white/10 pt-16 gap-8 lg:gap-0">
          
          <div className="w-full lg:w-[30%] flex flex-col pr-8">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold mb-3">
              Featured In
            </p>
            <p className="text-gray-900 dark:text-gray-300 text-sm font-light max-w-xs">
              Recognised by leading media for our work and impact.
            </p>
          </div>
          
          <div className="w-full lg:w-[70%] flex flex-col">
            <div className="relative flex items-center overflow-hidden mb-6">
              <div className="flex items-center gap-16 md:gap-24 animate-marquee whitespace-nowrap">
                 {['INDIA TODAY', 'BUSINESS NEWS WEEK', 'NEWS KARNATAKA', 'WHALESBOOK', 'THE HINDU'].map((pub, i) => (
                    <span key={i} className="text-xl md:text-2xl font-serif font-bold text-gray-300 dark:text-gray-800 tracking-wider hover:text-gray-900 dark:hover:text-white transition-colors duration-500 cursor-default">
                      {pub}
                    </span>
                 ))}
                 {['INDIA TODAY', 'BUSINESS NEWS WEEK', 'NEWS KARNATAKA', 'WHALESBOOK', 'THE HINDU'].map((pub, i) => (
                    <span key={i + 'dup'} className="text-xl md:text-2xl font-serif font-bold text-gray-300 dark:text-gray-800 tracking-wider hover:text-gray-900 dark:hover:text-white transition-colors duration-500 cursor-default">
                      {pub}
                    </span>
                 ))}
              </div>
              
              {/* Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            </div>
            
            {/* Subtle Controls */}
            <div className="flex justify-end gap-3 px-4">
              <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-white/10 pt-8 gap-4 mt-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">TRUSTED · TRANSPARENT · PEOPLE FIRST</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00b33c]">YOUR RIGHTS. OUR SUPPORT.</span>
        </div>

      </div>
    </section>
  )
}
`;
fs.writeFileSync(aboutPath, aboutContent.trim());

// 2. Remove FeaturedInSection from LandingPage (it's now integrated)
const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
let landingContent = fs.readFileSync(landingPath, 'utf8');
landingContent = landingContent.replace("import FeaturedInSection from './components/FeaturedInSection'\n", "");
landingContent = landingContent.replace("<FeaturedInSection />\n", "");
// Since I also removed StatsBar earlier, the top div in LandingPage is just <HeroSection /> then <WhyUsSection />
// Let's just make sure there are no floating tags from earlier if any.
fs.writeFileSync(landingPath, landingContent);

console.log("Ultra-premium About + Featured In section created.");
