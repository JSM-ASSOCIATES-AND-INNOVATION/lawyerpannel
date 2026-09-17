import React from 'react'
import { CreditCard, Landmark, PhoneOff, FileWarning, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Credit Card Loan issues', desc: 'If you are not able to pay your Credit Card dues and the bank is threatening you, our experts can evaluate the situation.', icon: CreditCard },
  { title: 'Loan Payment Issues', desc: 'Find solutions to your financial difficulties and avoid becoming a willful defaulter if you are unable to pay back.', icon: Landmark },
  { title: 'Recovery Agents Harassment', desc: 'If you are being pestered by recovery agents, our experts can guide you in stopping the harassment.', icon: PhoneOff },
  { title: 'Cheque Bounce', desc: 'Legal support and defense under NI Act, Section 138.', icon: FileWarning },
]

export default function ServicesSection() {
  return (
    <section id="services" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto font-light">Comprehensive legal support tailored for individuals facing financial distress.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="glass-panel rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:border-primary/30">
                <div className="w-16 h-16 bg-white/50 dark:bg-white/5 text-secondary dark:text-white border border-white/30 dark:border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 tracking-tight">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{srv.desc}</p>
                
                <div className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors flex justify-end">
                  <ArrowRight size={28} strokeWidth={2} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}