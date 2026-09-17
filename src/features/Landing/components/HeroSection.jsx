import React from 'react'
import Button from '../../../shared/components/Button'
import logo from '../../../shared/assets/logo.png'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100dvh] flex flex-col justify-between pt-20 md:pt-32 pb-4 md:pb-12 overflow-hidden selection:bg-primary/30">
      
      {/* Subtle Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gray-100 dark:bg-white/[0.02] rounded-full blur-[80px] md:blur-[120px] opacity-50 pointer-events-none transition-colors duration-500"></div>

      {/* Center watermark logo on mobile */}
      

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-12 flex-grow flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-4 md:gap-16 lg:gap-8 mt-2 md:mt-12 lg:mt-24 relative z-10 h-full">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">
          
          {/* Mobile-only visible logo centered */}
          <img src={logo} alt="Lawyer Panel" className="h-8 md:hidden mb-4 transition-all duration-300" style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(87%) saturate(1478%) hue-rotate(113deg) brightness(97%) contrast(101%)" }} />

          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-2 md:mb-6 lg:mb-8 transition-colors">
            Legal Support for a Safer Tomorrow
          </p>
          
          <h1 className="text-[32px] md:text-[48px] lg:text-[78px] font-serif leading-[1.05] mb-2 md:mb-6 lg:mb-8 text-gray-900 dark:text-white tracking-tight transition-colors">
            Resolve Your <br />
            <span className="text-[#00b33c] italic font-semibold">Financial Stress.</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base lg:text-lg leading-[1.4] md:leading-[1.6] mb-4 md:mb-10 max-w-[480px] font-light transition-colors">
            Expert legal support for credit card dues and loans. <br className="hidden md:block"/>Resolve unfair recovery practices safely.
          </p>
          
          <div className="flex flex-row gap-2 w-full justify-center lg:justify-start">
            <Button variant="primary" className="flex-1 sm:flex-none !px-2 md:!px-8 !py-3 !text-[10px] md:!text-xs">Talk to an Expert</Button>
            <Button variant="outline" className="flex-1 sm:flex-none !px-2 md:!px-8 !py-3 !text-[10px] md:!text-xs">How It Works</Button>
          </div>
        </div>

        {/* Right Column: Grid on mobile to save space, Vertical List on Desktop */}
        <div className="w-full lg:w-[40%] flex flex-col mt-4 md:mt-8 lg:mt-12 lg:pl-12">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-2 md:gap-x-0">
            {[
              'RBI Compliant',
              'Confidential',
              'Nationwide',
              'Top Advocates'
            ].map((item, idx) => (
              <div key={idx} className="py-2 md:py-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-center lg:justify-between group cursor-pointer transition-all duration-500 hover:border-gray-900 dark:hover:border-white/30 text-center lg:text-left">
                <span className="text-xs md:text-lg lg:text-xl text-gray-800 dark:text-gray-100 font-medium md:font-light tracking-wide transition-colors">{item}</span>
                <span className="hidden lg:block text-[#00b33c] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 font-serif text-2xl italic">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-12 mt-2 md:mt-16 lg:mt-24 relative z-10 pb-4 md:pb-0">
        <div className="pt-2 md:pt-10 border-t border-gray-200 dark:border-white/10 grid grid-cols-4 gap-2 md:gap-8 lg:gap-4 transition-colors">
          {[
            { value: '50k+', label: 'Clients' },
            { value: '100+', label: 'Advocates' },
            { value: '25+', label: 'Cities' },
            { value: '95%', label: 'Success' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-lg md:text-3xl lg:text-[40px] font-serif text-[#00b33c] mb-0 md:mb-2 leading-none">{stat.value}</span>
              <span className="text-[8px] md:text-[10px] lg:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest md:tracking-[0.15em] font-bold transition-colors">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}