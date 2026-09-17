import React from 'react'

export default function TestimonialSection() {
  const reviews = [
    { name: 'Rohit S.', city: 'Bengaluru', text: 'The team helped me stop constant recovery calls. Very professional and supportive throughout the process.' },
    { name: 'Priya M.', city: 'Mumbai', text: 'I was worried about legal notices. Lawyer Panel explained everything clearly and helped me reach a settlement.' },
    { name: 'Amit K.', city: 'Delhi', text: 'Highly recommend their services. They handled my case with complete confidentiality and got great results.' },
  ]

  return (
    <section id="client-reviews" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Real Stories</span>
          <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-10 relative hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col">
              <p className="text-gray-700 dark:text-gray-200 mb-10 relative z-10 text-xl leading-relaxed font-light">"{rev.text}"</p>
              
              <div className="flex items-center gap-5 mt-auto border-t border-white/20 dark:border-white/10 pt-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-secondary to-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border border-white/20">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary dark:text-white tracking-tight">{rev.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{rev.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}