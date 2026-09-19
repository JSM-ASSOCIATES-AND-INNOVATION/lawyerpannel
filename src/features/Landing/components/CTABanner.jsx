import React from 'react'
import Button from '../../../shared/components/Button'

export default function CTABanner() {
  return (
    <section className="relative w-full py-16 lg:py-32 bg-[#00b33c] transition-colors duration-500 border-t border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative h-full gap-10 lg:gap-0">
        
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-white/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4">
            Take Control
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] text-white tracking-tight mb-6">
            Get Expert Legal <br className="hidden lg:block"/>
            Support Today.
          </h2>
          <p className="text-white/90 text-sm lg:text-lg font-light max-w-md">
            Talk to our team and understand your options. Your consultation is completely confidential.
          </p>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
          <button className="px-8 py-4 bg-white text-[#00b33c] text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
            Talk to an Expert
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
            Chat on WhatsApp
          </button>
        </div>

      </div>
    </section>
  )
}