const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
const servicesContent = `
import React from 'react'
import { CreditCard, Landmark, PhoneOff, FileWarning, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Credit Card Loan issues', desc: 'Expert evaluation and defense against threatening banks when you are unable to pay your Credit Card dues.', icon: CreditCard },
  { title: 'Loan Payment Issues', desc: 'Strategic solutions for financial difficulties to prevent you from being classified as a willful defaulter.', icon: Landmark },
  { title: 'Recovery Agents Harassment', desc: 'Immediate legal intervention to stop persistent and abusive harassment by recovery agents.', icon: PhoneOff },
  { title: 'Cheque Bounce', desc: 'Comprehensive legal support, representation, and defense under NI Act, Section 138.', icon: FileWarning },
]

export default function ServicesSection() {
  return (
    <section id="services" className="snap-section w-full min-h-screen flex flex-col items-center justify-center py-24 bg-white dark:bg-[#232020] transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Comprehensive legal support for financial distress.
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-gray-900 dark:hover:text-white transition-colors group">
            View All Services 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="bg-gray-50 dark:bg-[#1a1818] p-8 md:p-10 border border-gray-100 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
                {/* Background accent hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
                
                <div className="w-16 h-16 bg-white dark:bg-[#232020] text-gray-500 dark:text-gray-400 flex items-center justify-center flex-shrink-0 group-hover:text-primary transition-colors duration-300 border border-gray-100 dark:border-white/5 relative z-10">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{srv.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">{srv.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <a href="#" className="mt-8 flex md:hidden items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
          View All Services <ArrowRight size={18} />
        </a>

      </div>
    </section>
  )
}
`;
fs.writeFileSync(servicesPath, servicesContent.trim());

console.log("Services layout upgraded.");
