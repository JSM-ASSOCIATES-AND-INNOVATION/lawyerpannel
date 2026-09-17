import React from 'react'

export default function StatsBar() {
  const stats = [
    { value: '50,000+', label: 'Clients Assisted' },
    { value: '100+', label: 'Advocates' },
    { value: '25+', label: 'Cities Covered' },
    { value: '95%', label: 'Success Rate' },
  ]

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-[#1a1818] border-b border-gray-200 dark:border-white/5 !h-auto flex-none snap-align-none transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/4 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">Our Impact</h2>
          <div className="w-12 h-1 bg-primary mt-3 mx-auto md:mx-0"></div>
        </div>
        
        <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-bold tracking-widest text-[10px] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}