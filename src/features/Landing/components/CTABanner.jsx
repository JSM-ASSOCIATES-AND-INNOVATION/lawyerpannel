import React from 'react'
import Button from '../../../shared/components/Button'

export default function CTABanner() {
  return (
    <section className="snap-section">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-secondary to-dark p-12 md:p-24 rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl pointer-events-none mix-blend-overlay"></div>
        
        <div className="text-center md:text-left relative z-10 w-full md:w-3/5">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-8 leading-tight">Get Expert Legal Support Today</h2>
          <p className="text-gray-200 text-2xl font-light">Talk to our team and understand your options. Your consultation is completely confidential.</p>
        </div>
        
        <div className="flex flex-col gap-6 w-full md:w-auto relative z-10">
          <Button variant="primary" className="py-5 px-12 text-xl w-full justify-center">Talk to an Expert</Button>
          <Button variant="outline" className="py-5 px-12 text-xl w-full justify-center border-white/30 text-white hover:bg-white/10 backdrop-blur-md">Chat on WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}