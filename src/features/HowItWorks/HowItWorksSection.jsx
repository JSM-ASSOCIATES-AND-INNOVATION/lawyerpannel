import React, { useState, useEffect } from 'react'
import { FileText, UserCheck, PhoneOff, Landmark, Handshake, ShieldCheck } from 'lucide-react'

const steps = [
  { id: 1, title: 'Share Your Case', desc: 'Securely submit your financial dispute.', icon: FileText, keyword: 'SECURE UPLOAD' },
  { id: 2, title: 'Dedicated Advocate', desc: 'Matched with a legal professional.', icon: UserCheck, keyword: 'EXPERT MATCH' },
  { id: 3, title: 'Calls Managed', desc: 'We handle recovery agents.', icon: PhoneOff, keyword: 'HARASSMENT STOPPED' },
  { id: 4, title: 'RBI-Compliant Action', desc: 'Every step follows regulations.', icon: Landmark, keyword: 'REGULATORY COMPLIANCE' },
  { id: 5, title: 'Negotiation', desc: 'Structured lender discussions.', icon: Handshake, keyword: 'STRATEGIC RESOLUTION' },
  { id: 6, title: 'Financial Peace', desc: 'Reach closure with confidence.', icon: ShieldCheck, keyword: 'CASE CLOSED' },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-play the tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => prev === 6 ? 1 : prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeData = steps.find(s => s.id === activeStep);
  const ActiveIcon = activeData.icon;

  return (
    <section id="process" className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10 flex flex-col pt-16 md:pt-20 lg:pt-0">
      
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex flex-col lg:flex-row relative h-full">
        
        {/* Left Panel: Dashboard Navigation */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center h-auto lg:h-full lg:border-r border-gray-200 dark:border-white/10 pr-0 lg:pr-12 z-10 mb-8 lg:mb-0">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-serif leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tight transition-colors">
            Your Journey. <br className="hidden lg:block"/>
            <span className="text-[#00b33c] italic font-semibold">Simplified.</span>
          </h2>

          <div className="hidden lg:flex flex-col gap-2 w-full mt-4">
            {steps.map((step) => (
              <button 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center justify-between w-full p-4 border-l-2 transition-all duration-300 text-left ${activeStep === step.id ? 'border-[#00b33c] bg-gray-50 dark:bg-white/[0.02]' : 'border-transparent hover:bg-gray-50/50 dark:hover:bg-white/[0.01]'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-serif italic ${activeStep === step.id ? 'text-[#00b33c]' : 'text-gray-400'}`}>
                    0{step.id}
                  </span>
                  <span className={`text-sm font-bold tracking-wide ${activeStep === step.id ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Tabs */}
          <div className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory gap-2 pb-2 hide-scrollbar">
             {steps.map((step) => (
                <button 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`shrink-0 snap-center px-4 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${activeStep === step.id ? 'border-[#00b33c] bg-[#00b33c]/10 text-[#00b33c]' : 'border-gray-200 dark:border-white/10 text-gray-500'}`}
                >
                  {step.title}
                </button>
             ))}
          </div>
        </div>

        {/* Right Panel: Active Display Area */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-center h-full relative z-0 pl-0 lg:pl-16 pb-12 lg:pb-0">
          
          <div key={activeStep} className="w-full max-w-lg flex flex-col animate-fade-in-up">
             
             <div className="flex items-center justify-between mb-8 lg:mb-12">
               <span className="text-[80px] lg:text-[140px] font-serif font-bold text-gray-100 dark:text-white/[0.03] leading-none transition-colors">
                  0{activeStep}
               </span>
               <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white group-hover:border-[#00b33c] transition-colors">
                  <ActiveIcon size={32} strokeWidth={1} />
               </div>
             </div>

             <h3 className="text-3xl lg:text-5xl font-serif text-gray-900 dark:text-white leading-[1.1] mb-6 transition-colors">
                {activeData.title}
             </h3>
             
             <p className="text-gray-600 dark:text-gray-400 text-base lg:text-xl font-light leading-[1.6] mb-8 lg:mb-12 transition-colors">
                {activeData.desc}
             </p>
             
             <div className="w-16 h-px bg-gray-200 dark:bg-white/20 mb-8 transition-colors"></div>
             
             <span className="text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase text-[#00b33c]">
                {activeData.keyword}
             </span>

          </div>

        </div>

      </div>
    </section>
  )
}