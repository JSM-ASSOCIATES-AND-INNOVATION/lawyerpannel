import React from 'react'

export default function StatsBar() {
  const stats = [
    { value: '50,000+', label: 'Clients Assisted' },
    { value: '100+', label: 'Advocates Across India' },
    { value: '25+', label: 'Cities' },
    { value: '95%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-heading font-extrabold text-5xl text-secondary dark:text-white mb-6 tracking-tight">Our Impact</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed font-light">Numbers that reflect trust and our commitment to justice across the nation.</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="md:border-l border-white/30 dark:border-white/10 md:pl-8">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-4 tracking-tighter drop-shadow-sm">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold tracking-wider text-xs uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}