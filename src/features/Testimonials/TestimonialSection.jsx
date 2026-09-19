import React from 'react'

export default function TestimonialSection() {
  const reviews = [
    { name: 'Rohit S.', city: 'Bengaluru', text: 'The team helped me stop constant recovery calls. Very professional and supportive throughout the process.', id: 1 },
    { name: 'Priya M.', city: 'Mumbai', text: 'I was worried about legal notices. Lawyer Panel explained everything clearly and helped me reach a settlement.', id: 2 },
    { name: 'Amit K.', city: 'Delhi', text: 'Highly recommend their services. They handled my case with complete confidentiality and got great results.', id: 3 },
  ]

  return (
    <section id="reviews" className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex flex-col relative h-full">
        
        <div className="w-full flex flex-col items-center text-center mb-10 lg:mb-20">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
            Real Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-serif leading-[1.1] text-gray-900 dark:text-white tracking-tight transition-colors">
            What Our Clients Say.
          </h2>
        </div>
        
        {/* Mobile Horizontal Snap, Desktop Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 snap-x snap-mandatory gap-4 lg:gap-8 pb-8 lg:pb-0 hide-scrollbar w-full">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="shrink-0 w-[85vw] sm:w-[320px] lg:w-auto snap-center flex flex-col p-8 lg:p-12 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <div className="text-[#00b33c] text-4xl font-serif leading-none mb-6">"</div>
              <p className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl font-light leading-[1.6] mb-12 flex-grow transition-colors">
                {rev.text}
              </p>
              
              <div className="flex flex-col border-t border-gray-200 dark:border-white/10 pt-6">
                <h4 className="font-serif text-lg text-gray-900 dark:text-white mb-1 transition-colors">{rev.name}</h4>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 transition-colors">{rev.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}