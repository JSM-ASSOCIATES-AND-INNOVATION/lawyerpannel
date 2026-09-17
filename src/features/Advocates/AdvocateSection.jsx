import React from 'react'
import { User } from 'lucide-react'

export default function AdvocateSection() {
  const advocates = [
    { name: 'Adv. Rahul Mehta', spec: 'Debt Recovery | Civil Law', city: 'New Delhi' },
    { name: 'Adv. Sneha Iyer', spec: 'Banking & Finance | NI Act', city: 'Mumbai' },
    { name: 'Adv. K. Srinivas', spec: 'Consumer Law | Settlement', city: 'Hyderabad' },
    { name: 'Adv. Pooja Sharma', spec: 'RBI Compliance | Harassment', city: 'Bengaluru' },
  ]

  return (
    <section id="advocates" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
            <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Advocate Panel</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-light">Experienced. Verified. Nationwide.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {advocates.map((adv, idx) => (
              <div key={idx} className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/50 dark:border-white/10 text-center hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                <div className="w-28 h-28 mx-auto bg-white/60 dark:bg-[#0a1128]/80 rounded-full mb-6 border-[4px] border-white/80 dark:border-white/10 shadow-lg overflow-hidden flex items-center justify-center text-gray-400 dark:text-gray-500">
                   <User size={48} strokeWidth={1} />
                </div>
                <h4 className="font-bold text-secondary dark:text-white text-xl tracking-tight mb-2">{adv.name}</h4>
                <p className="text-sm text-primary font-bold mb-3">{adv.spec}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{adv.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}