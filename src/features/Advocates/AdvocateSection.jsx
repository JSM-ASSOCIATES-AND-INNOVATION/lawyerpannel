import React from 'react'

export default function AdvocateSection() {
  const advocates = [
    { name: 'Adv. Rahul Mehta', spec: 'Debt Recovery | Civil Law', city: 'New Delhi', id: 1 },
    { name: 'Adv. Sneha Iyer', spec: 'Banking & Finance | NI Act', city: 'Mumbai', id: 2 },
    { name: 'Adv. K. Srinivas', spec: 'Consumer Law | Settlement', city: 'Hyderabad', id: 3 },
    { name: 'Adv. Pooja Sharma', spec: 'RBI Compliance | Harassment', city: 'Bengaluru', id: 4 },
  ]

  return (
    <section id="advocates" className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-gray-50 dark:bg-[#070707] transition-colors duration-500 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex flex-col relative h-full">
        
        <div className="w-full flex flex-col items-start mb-10 lg:mb-20">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-serif leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tight transition-colors">
            Verified Professionals.<br className="hidden lg:block"/>
            <span className="text-[#00b33c] italic font-semibold">Nationwide.</span>
          </h2>
        </div>
        
        {/* Mobile Horizontal Snap, Desktop Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 snap-x snap-mandatory gap-4 lg:gap-8 pb-8 lg:pb-0 hide-scrollbar w-full">
          {advocates.map((adv) => (
            <div 
              key={adv.id} 
              className="shrink-0 w-[85vw] sm:w-[320px] lg:w-auto snap-center flex flex-col items-center text-center p-8 lg:p-12 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] group hover:border-[#00b33c]/50 transition-colors duration-500"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 dark:bg-white/5 flex items-center justify-center rounded-full mb-6 lg:mb-8 transition-colors">
                <span className="text-2xl lg:text-3xl font-serif text-gray-400 dark:text-gray-500 group-hover:text-[#00b33c] transition-colors">{adv.name.charAt(5)}</span>
              </div>
              <h4 className="font-serif text-xl lg:text-2xl text-gray-900 dark:text-white mb-2 transition-colors">
                {adv.name}
              </h4>
              <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-[#00b33c] mb-4">
                {adv.spec}
              </p>
              <div className="w-8 h-px bg-gray-200 dark:bg-white/20 mb-4 transition-colors"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light transition-colors">
                {adv.city}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}