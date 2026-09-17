import React from 'react'

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center md:mx-auto max-w-3xl' : ''}`}>
      <h2 className="font-bold font-heading leading-tighter tracking-tighter text-3xl md:text-4xl text-secondary dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 text-lg uppercase tracking-wider">{subtitle}</p>}
    </div>
  )
}