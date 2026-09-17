import React from 'react'

export default function FeaturedInSection() {
  return (
    <section className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] py-16 px-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-[0.2em]">Featured In</span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale">
            <span className="font-bold text-3xl tracking-tighter text-black dark:text-white drop-shadow-md">INDIA TODAY</span>
            <span className="font-bold text-2xl tracking-tight text-black dark:text-white drop-shadow-md">Business News Week</span>
            <span className="font-bold text-2xl tracking-tight text-black dark:text-white drop-shadow-md">NewsKarnataka</span>
            <span className="font-bold text-3xl tracking-tighter text-black dark:text-white drop-shadow-md">Whalesbook</span>
          </div>
        </div>
      </div>
    </section>
  )
}