import React from 'react'

export default function HowItWorksSection() {
  const steps = [
    { num: 1, title: 'Sign up with Us', desc: 'For Anti-Harassment Service.' },
    { num: 2, title: 'Get a Number', desc: 'Receive a unique call forwarding number.' },
    { num: 3, title: 'Set up forwarding', desc: 'Set up call forwarding to avoid harassment.' },
    { num: 4, title: 'Calls forwarded', desc: 'Harassment calls get forwarded to experts.' },
    { num: 5, title: 'Experts intervene', desc: 'Our experts intervene where necessary.' },
    { num: 6, title: 'Team works', desc: 'Our loan management team works in parallel.' },
  ]

  return (
    <section id="how-it-works" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight">How does it work?</h2>
            </div>
            <a href="#" className="text-primary font-semibold hover:text-green-700 transition-colors flex items-center gap-2 pb-2">View Detailed Guide &rarr;</a>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="group relative">
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-white/30 dark:bg-white/10 -z-10 group-last:hidden"></div>
                  <div className="w-16 h-16 bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 text-secondary dark:text-white font-bold text-2xl rounded-full flex items-center justify-center mb-8 shadow-lg backdrop-blur-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-xl text-secondary dark:text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}