import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyle = "relative inline-flex items-center justify-center font-sans font-bold tracking-[0.1em] uppercase transition-all duration-500 overflow-hidden text-xs cursor-pointer group border";
  
  const variants = {
    primary: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    outline: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    ghost: "bg-transparent border-transparent text-gray-900 dark:text-white"
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], 'px-8 py-4', className)} {...props}>
      {/* TLH Left Accent Line - Green */}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#00b33c] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full h-full group-hover:text-white transition-colors duration-500">
        {children}
      </div>
    </button>
  )
}