import React, { useEffect, useState, useRef } from 'react'
import { FileText, UserCheck, PhoneOff, Landmark, Handshake, ShieldCheck } from 'lucide-react'

const steps = [
  { 
    id: 1, 
    title: 'Share Your Case', 
    desc: 'Securely submit your financial dispute and supporting documents.', 
    icon: FileText,
    keyword: 'SECURE UPLOAD'
  },
  { 
    id: 2, 
    title: 'Dedicated Advocate', 
    desc: 'Get matched with an experienced legal professional.', 
    icon: UserCheck,
    keyword: 'EXPERT MATCH'
  },
  { 
    id: 3, 
    title: 'Recovery Calls Managed', 
    desc: 'Recovery agents communicate through your legal representative.', 
    icon: PhoneOff,
    keyword: 'HARASSMENT STOPPED'
  },
  { 
    id: 4, 
    title: 'RBI-Compliant Action', 
    desc: 'Every legal step follows applicable banking and regulatory guidelines.', 
    icon: Landmark,
    keyword: 'REGULATORY COMPLIANCE'
  },
  { 
    id: 5, 
    title: 'Negotiation & Settlement', 
    desc: 'Structured discussions with lenders for practical resolutions.', 
    icon: Handshake,
    keyword: 'STRATEGIC RESOLUTION'
  },
  { 
    id: 6, 
    title: 'Financial Peace', 
    desc: 'Reach closure with continued legal support and confidence.', 
    icon: ShieldCheck,
    keyword: 'CASE CLOSED'
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const scrollRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step'));
            setActiveStep(stepId);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative w-full h-[100dvh] md:h-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10 overflow-hidden flex flex-col">
      
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row relative h-full">
        
        {/* Left Sticky Panel (42%) */}
        <div className="w-full md:w-[42%] md:sticky md:top-0 flex-shrink-0 md:h-[100dvh] flex flex-col justify-center py-6 md:py-0 pr-0 md:pr-16 z-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6 lg:mb-8">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] mb-6 lg:mb-8 text-gray-900 dark:text-white tracking-tight">
            Your Legal Journey. <br/>
            <span className="text-[#00b33c] italic font-semibold">Simplified.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-[1.6] mb-12 max-w-[420px] font-light">
            A transparent, structured process designed to protect your rights, manage recovery harassment, and guide you toward financial peace.
          </p>

          {/* Vertical Progress Indicator (Desktop only) */}
          <div className="hidden md:flex flex-col relative h-[240px] ml-2">
            <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gray-200 dark:bg-white/10 z-0"></div>
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-6 flex-1 relative z-10">
                <div className={`w-[7px] h-[7px] rounded-full transition-all duration-500 ${activeStep === step.id ? 'bg-[#00b33c] scale-150' : 'bg-gray-300 dark:bg-white/20 scale-100'}`}></div>
                <span className={`text-xs font-serif font-bold transition-all duration-500 ${activeStep === step.id ? 'text-[#00b33c]' : 'text-gray-400 dark:text-gray-600'}`}>
                  0{step.id}
                </span>
              </div>
            ))}
          </div>

          <p className="hidden md:block mt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Trusted by thousands across India.
          </p>
        </div>

        {/* Right Scroll Panel (58%) */}
        <div className="w-full md:w-[58%] flex flex-col z-0 relative overflow-y-auto flex-grow">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <div 
                key={step.id} 
                data-step={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                className="w-full h-auto min-h-[40vh] md:min-h-[100dvh] snap-center flex flex-col justify-center pl-0 md:pl-20 py-8 md:py-0 transition-opacity duration-700"
                style={{ opacity: isActive ? 1 : 0.4 }}
              >
                <div className={`transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'scale-100 translate-y-0' : 'scale-[0.96] translate-y-4'}`}>
                  
                  <span className="text-6xl md:text-[120px] font-serif font-bold text-gray-100 dark:text-white/[0.03] leading-none block mb-6 md:mb-12">
                    0{step.id}
                  </span>
                  
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center mb-8 text-gray-900 dark:text-white">
                    <Icon size={24} strokeWidth={1} className="md:w-[32px] md:h-[32px]"/>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white leading-[1.1] mb-6">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl font-light leading-[1.6] max-w-md mb-8">
                    {step.desc}
                  </p>
                  
                  <div className="w-12 h-px bg-gray-200 dark:bg-white/20 mb-8"></div>
                  
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#00b33c]">
                    {step.keyword}
                  </span>
                  
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}