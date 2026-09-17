import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import logo from '../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 z-50 relative">
            <a href="/" onClick={closeMenu} className="flex items-center gap-3">
              <img src={logo} alt="Lawyer Panel Logo" className="h-8 md:h-10 w-auto object-contain transition-all dark:brightness-0 dark:invert" />
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 font-semibold text-sm tracking-wide text-secondary dark:text-gray-300">
            <a href="#home" className="hover:text-primary dark:hover:text-white transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-primary dark:hover:text-white transition-colors">Process</a>
            <a href="#services" className="hover:text-primary dark:hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-primary dark:hover:text-white transition-colors">About</a>
            <a href="#client-reviews" className="hover:text-primary dark:hover:text-white transition-colors">Reviews</a>
          </nav>
          
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-400 hover:text-secondary dark:hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <Button variant="primary">Talk to an Expert</Button>
          </div>

          <div className="lg:hidden flex items-center gap-4 z-50 relative">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-400 hover:text-secondary dark:hover:text-white transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button 
              className="p-2 text-secondary dark:text-white transition-transform duration-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`fixed inset-0 bg-white dark:bg-dark z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-8 text-2xl font-bold tracking-tight text-secondary dark:text-white">
            <a href="#home" onClick={closeMenu} className="hover:text-primary transition-colors">Home</a>
            <a href="#how-it-works" onClick={closeMenu} className="hover:text-primary transition-colors">Process</a>
            <a href="#services" onClick={closeMenu} className="hover:text-primary transition-colors">Services</a>
            <a href="#about" onClick={closeMenu} className="hover:text-primary transition-colors">About</a>
            <a href="#client-reviews" onClick={closeMenu} className="hover:text-primary transition-colors">Reviews</a>
          </nav>
          <div className="mt-auto">
            <Button variant="primary" className="w-full justify-center py-4 text-lg">Talk to an Expert</Button>
          </div>
        </div>
      </div>
    </header>
  )
}