import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-semibold rounded-full group transition-all duration-300 gap-2 backdrop-blur-md border tracking-wide"
  
  const variants = {
    primary: "bg-primary/90 text-white border-primary/50 shadow-[0_0_20px_rgba(0,179,60,0.3)] hover:shadow-[0_0_30px_rgba(0,179,60,0.5)]",
    outline: "bg-white/10 dark:bg-white/5 text-secondary dark:text-white border-white/20 hover:bg-white/30 dark:hover:bg-white/10",
    ghost: "border-transparent bg-transparent hover:bg-white/10 dark:hover:bg-white/5",
    dark: "bg-secondary/80 text-white border-secondary/50 shadow-lg hover:bg-secondary"
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="absolute inset-0 w-full h-full rounded-full opacity-20 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
      <span className="relative flex items-center gap-2 drop-shadow-sm">{children}</span>
    </button>
  )
}