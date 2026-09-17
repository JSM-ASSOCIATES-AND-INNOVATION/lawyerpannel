import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Button from '../components/Button'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Banner */}
      {bannerVisible && (
        <div className="bg-[#00b33c] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-6 flex justify-between items-center relative z-50">
          <div className="w-full text-center">24/7 Expert Legal Consultations Now Live - Nationwide Services</div>
          <button onClick={() => setBannerVisible(false)} className="opacity-70 hover:opacity-100 absolute right-6 text-lg">&times;</button>
        </div>
      )}
      
      <header className="w-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-12">
            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="Lawyer Panel Logo" className="h-10 w-auto dark:brightness-0 dark:invert transition-all duration-300" />
            </a>
            
            <nav className="hidden md:flex gap-10">
              {['Home', 'Services', 'Process', 'Advocates'].map((item) => (
                <a key={item} href={'#' + item.toLowerCase().replace(/ /g, '-')} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group transition-colors">
                  {item}
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00b33c] transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="hidden md:block">
              <Button className="!py-0 h-10 px-6">Consult Now</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}