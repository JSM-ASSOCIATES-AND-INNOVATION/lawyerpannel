import React from 'react'
import Button from '../../shared/components/Button'
import { CreditCard, Landmark, PhoneOff, FileWarning, ArrowUpRight } from 'lucide-react'

const mainServices = [
  {
    id: 1,
    title: 'Credit Card Dues',
    desc: 'Expert evaluation and defense against threatening banks when you are unable to pay.',
    icon: CreditCard
  },
  {
    id: 2,
    title: 'Personal Loans',
    desc: 'Strategic solutions for financial difficulties to prevent willful defaulter classification.',
    icon: Landmark
  },
  {
    id: 3,
    title: 'Recovery Harassment',
    desc: 'Immediate legal intervention to stop persistent and abusive recovery agents.',
    icon: PhoneOff
  },
  {
    id: 4,
    title: 'Cheque Bounce (NI Act)',
    desc: 'Comprehensive legal support, representation, and defense under Section 138.',
    icon: FileWarning
  }
]

const extraServices = [
  'Legal Notices',
  'SARFAESI Matters',
  'Debt Restructuring',
  'Consumer Complaints',
  'Settlement Advisory'
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full h-[100dvh] md:h-auto md:min-h-[100dvh] flex flex-col bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-gray-200 dark:border-white/10">
      
      {/* Main Split Content */}
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex-grow flex flex-col lg:flex-row relative z-10">
        
        {/* Left Panel (35%) */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between py-6 md:py-12 lg:py-24 pr-0 lg:pr-16 lg:border-r border-gray-200 dark:border-white/10 flex-shrink-0">
          
          <div className="flex flex-col items-start">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-6 lg:mb-8 transition-colors">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] mb-6 lg:mb-8 text-gray-900 dark:text-white tracking-tight transition-colors">
              Legal Solutions,<br className="hidden lg:block"/> Tailored to You.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-[1.6] mb-10 max-w-[420px] font-light transition-colors">
              We offer RBI-compliant legal assistance for financial disputes. Our experienced team stands between you and unfair banking practices, ensuring your rights are protected at every step.
            </p>
            <Button variant="outline" className="uppercase tracking-widest text-xs !px-6 !py-4">Explore All Services</Button>
          </div>

          <div className="flex flex-col gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
            {[
              '50,000+ Individuals Assisted',
              '100+ Expert Advocates',
              'Pan-India Support'
            ].map((metric, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00b33c]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">{metric}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Panel (65%) */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-4 md:py-12 lg:py-24 lg:pl-12 overflow-y-auto flex-grow">
          {mainServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.id} className="group relative flex flex-col p-8 border border-gray-200 dark:border-white/10 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
                
                <div className="flex justify-between items-start mb-16">
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white group-hover:border-[#00b33c] group-hover:text-[#00b33c] transition-colors duration-500">
                    <Icon size={20} strokeWidth={1} />
                  </div>
                  <span className="text-sm font-serif italic text-gray-400 dark:text-gray-600 font-medium">0{srv.id}</span>
                </div>

                <div className="flex flex-col mt-auto relative z-10">
                  <h3 className="text-2xl font-serif text-gray-900 dark:text-white leading-[1.2] mb-3 group-hover:text-[#00b33c] transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <div className="relative w-full h-px bg-gray-200 dark:bg-white/10 mb-6 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-[#00b33c] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></div>
                  </div>

                  <div className="flex justify-end w-full">
                    <ArrowUpRight size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-[#00b33c] transform transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Footer Strip */}
      <div className="w-full border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-6 justify-center md:justify-start">
            {extraServices.map((s, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#00b33c] dark:hover:text-[#00b33c] transition-colors cursor-pointer">
                  {s}
                </span>
                {idx !== extraServices.length - 1 && (
                  <span className="hidden md:block w-px h-3 bg-gray-300 dark:bg-white/20"></span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[10px] md:text-[11px] font-serif italic text-gray-900 dark:text-white tracking-wide flex-shrink-0">
            A Financially Safer Tomorrow.
          </div>

        </div>
      </div>

    </section>
  )
}