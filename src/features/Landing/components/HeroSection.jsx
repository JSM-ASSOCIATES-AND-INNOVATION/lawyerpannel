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