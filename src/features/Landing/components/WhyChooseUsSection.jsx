import React, { useRef, useEffect } from 'react'
import Button from '../../../shared/components/Button'
import { CheckCircle2, Lock, MapPin, Search, Clock, Users, Scale } from 'lucide-react'

const features = [
  { id: 1, title: 'RBI Compliant', desc: 'Strict adherence to guidelines.', icon: CheckCircle2, tag: 'REGULATORY' },
  { id: 2, title: '100% Confidential', desc: 'Your data is absolutely secure.', icon: Lock, tag: 'PRIVACY' },
  { id: 3, title: 'Pan-India Network', desc: 'Advocates across all states.', icon: MapPin, tag: 'REACH' },
  { id: 4, title: 'Transparent Process', desc: 'No hidden fees or surprises.', icon: Search, tag: 'HONESTY' },
  { id: 5, title: 'Fast Response', desc: 'Immediate legal intervention.', icon: Clock, tag: 'SPEED' },
  { id: 6, title: 'Client-First', desc: 'Empathy-driven legal approach.', icon: Users, tag: 'EMPATHY' },
]

export default function WhyChooseUsSection() {
  
  const chooseRef = useRef(null);
  useEffect(() => {
    let interval;
    const startScroll = () => {
      interval = setInterval(() => {
        if (chooseRef.current && window.innerWidth < 1024) {
          const maxScroll = chooseRef.current.scrollWidth - chooseRef.current.clientWidth;
          if (chooseRef.current.scrollLeft >= maxScroll - 10) {
            chooseRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = chooseRef.current.children[0]?.clientWidth || 300;
            chooseRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3000);
    };
    startScroll();
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full h-[100dvh] lg:h-[100dvh] flex flex-col lg:flex-row overflow-hidden border-t border-gray-200 dark:border-white/10">
      
      {/* Center scales emblem (Desktop only) */}
      <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F9F8F6] dark:bg-[#0a0a0a] rounded-full border border-gray-300 dark:border-white/20 items-center justify-center z-50 shadow-2xl transition-colors duration-500">
        <Scale size={32} className="text-[#00b33c]" strokeWidth={1.5} />
      </div>

      {/* LEFT PANEL (Light Ivory) */}
      <div className="w-full lg:w-1/2 h-[45%] lg:h-full bg-[#F9F8F6] flex flex-col justify-center lg:justify-between p-6 pt-24 lg:p-24 relative z-10 transition-colors duration-500">
        <div className="flex flex-col items-start max-w-lg">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6 lg:mb-8">
            Why Lawyer Panel
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] mb-6 lg:mb-8 text-gray-900 tracking-tight">
            Trust Is Our Strongest <br className="hidden lg:block"/>
            <span className="text-[#00b33c] italic font-semibold">Argument.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-[1.6] mb-10 font-light">
            We operate with an absolute commitment to regulatory compliance, transparency, and a client-first approach. Your peace of mind is not just our priority—it is the foundation of our entire legal practice.
          </p>
          <Button variant="primary" className="uppercase tracking-widest text-xs !px-8 !py-4">Get Started Today</Button>
        </div>

        <div className="hidden lg:flex flex-col gap-6 mt-16 lg:mt-0">
          <div className="flex items-center gap-8 border-b border-gray-200 pb-6">
            {[
              { value: '50,000+', label: 'Individuals Assisted' },
              { value: '100+', label: 'Advocates' },
              { value: 'Pan-India', label: 'Support' }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-xl font-serif text-gray-900">{metric.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{metric.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            People. Law. Solutions. A Stronger Tomorrow.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL (Dark Charcoal) */}
      <div className="w-full lg:w-1/2 h-[55%] lg:h-full bg-[#07111F] flex flex-col p-4 lg:p-24 relative z-10 transition-colors duration-500 border-t lg:border-t-0 lg:border-l border-white/10">
        <div ref={chooseRef} className="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-12 flex-grow overflow-x-auto lg:overflow-visible snap-x snap-mandatory items-center hide-scrollbar">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col group min-w-[70vw] lg:min-w-0 snap-center px-4 lg:px-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#00b33c] group-hover:text-[#00b33c] transition-colors duration-300">
                    <Icon size={20} strokeWidth={1} />
                  </div>
                  <span className="text-xs font-serif italic text-gray-500">0{feature.id}</span>
                </div>
                
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#00b33c] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed max-w-[200px] mb-6">
                  {feature.desc}
                </p>
                
                <div className="w-full h-px bg-white/10 mb-4 overflow-hidden relative">
                   <div className="absolute top-0 left-0 h-full w-0 bg-[#00b33c] transition-all duration-700 group-hover:w-full"></div>
                </div>
                
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#00b33c]">
                  {feature.tag}
                </span>
              </div>
            )
          })}
        </div>

        <div className="hidden lg:block mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-sm font-serif italic text-gray-400">
            Built on integrity. Driven by justice.
          </p>
        </div>
      </div>

    </section>
  )
}