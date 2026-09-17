import React from 'react'
import Button from '../../../shared/components/Button'
import { Users, Scale, ShieldCheck } from 'lucide-react'

export default function WhyUsSection() {
  const points = [
    { icon: Users, title: 'Experienced Advocates', desc: 'Verified legal professionals.' },
    { icon: Scale, title: 'Transparent Process', desc: 'Clear guidance at every step.' },
    { icon: ShieldCheck, title: 'Ethical & Confidential', desc: '100% privacy maintained.' }
  ]

  return (
    <section id="about" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">
        <div className="glass-panel rounded-[3rem] p-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white mb-8 leading-[1.15] tracking-tight">Peace of Mind<br/>Is a Right, Not a Luxury.</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl leading-relaxed font-light">
            We specialize in cases related to loan defaults, cheque bouncing, and recovery agent harassment. Our panel of experts can guide and support you through these issues. Lawyer Panel has one of the largest panels of experts across all major cities of India.
          </p>
          <Button variant="primary">Learn More About Us &rarr;</Button>
        </div>
        
        <div className="glass-panel rounded-[3rem] h-full min-h-[500px] flex items-center justify-center p-10 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
          
          <div className="w-full relative z-10 flex flex-col gap-6">
             {points.map((item, idx) => {
               const Icon = item.icon;
               return (
                 <div key={idx} className="flex items-center gap-6 bg-white/60 dark:bg-[#0a1128]/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 dark:border-white/10 shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                   <div className="w-16 h-16 bg-white/80 dark:bg-white/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm border border-white/50 dark:border-white/5">
                     <Icon size={28} strokeWidth={2} />
                   </div>
                   <div>
                     <h4 className="font-bold text-xl text-secondary dark:text-white tracking-tight mb-1">{item.title}</h4>
                     <p className="text-gray-600 dark:text-gray-400 font-light">{item.desc}</p>
                   </div>
                 </div>
               )
             })}
          </div>
        </div>
      </div>
    </section>
  )
}