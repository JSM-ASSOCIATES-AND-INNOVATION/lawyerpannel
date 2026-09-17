const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'src/shared/layouts/Header.jsx');
const headerContent = `
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Button from '../components/Button'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)
  const [bannerVisible, setBannerVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  const navLinks = ['Home', 'Services', 'Process', 'Advocates', 'Reviews']

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex flex-col">
        {/* TLH Style Top Banner */}
        {bannerVisible && (
          <div className="bg-[#00b33c] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] py-2.5 px-6 flex justify-between items-center relative z-50">
            <div className="w-full text-center tracking-widest">24/7 Expert Legal Consultations Now Live - Nationwide</div>
            <button onClick={() => setBannerVisible(false)} className="opacity-70 hover:opacity-100 absolute right-6 text-lg transition-opacity">&times;</button>
          </div>
        )}
        
        <header className="w-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative">
            
            {/* MOBILE: Hamburger (Left) */}
            <div className="md:hidden flex-1 flex justify-start">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 dark:text-white p-2 -ml-2"
                aria-label="Toggle Menu"
              >
                <div className="w-6 flex flex-col gap-[5px]">
                  <span className={\`block h-[1.5px] w-full bg-current transition-all duration-300 \${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}\`}></span>
                  <span className={\`block h-[1.5px] w-full bg-current transition-all duration-300 \${isMenuOpen ? 'opacity-0' : ''}\`}></span>
                  <span className={\`block h-[1.5px] w-full bg-current transition-all duration-300 \${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}\`}></span>
                </div>
              </button>
            </div>

            {/* LOGO: Left on Desktop, Center on Mobile */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start">
              <a href="#" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="Lawyer Panel Logo" className="h-7 md:h-9 lg:h-10 w-auto dark:brightness-0 dark:invert transition-all duration-500" />
              </a>
            </div>
            
            {/* DESKTOP: Center Nav */}
            <nav className="hidden md:flex flex-1 justify-center gap-10">
              {navLinks.map((item) => (
                <a key={item} href={'#' + item.toLowerCase().replace(/ /g, '-')} className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group transition-colors duration-300 py-2">
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00b33c] transition-all duration-500 ease-out group-hover:w-full"></div>
                </a>
              ))}
            </nav>
            
            {/* RIGHT: Actions (Dark Mode + CTA) */}
            <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
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

      {/* MOBILE FULL-SCREEN MENU */}
      <div 
        className={\`fixed inset-0 z-[90] bg-white dark:bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] \${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }\`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-8 text-2xl font-serif italic text-gray-900 dark:text-white mb-12">
            {navLinks.map((item, idx) => (
              <a 
                key={item} 
                href={'#' + item.toLowerCase().replace(/ /g, '-')} 
                onClick={() => setIsMenuOpen(false)} 
                className="hover:text-[#00b33c] transition-colors flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-6"
                style={{ transitionDelay: \`\${isMenuOpen ? idx * 50 : 0}ms\` }}
              >
                <span>{item}</span>
                <span className="text-sm font-sans not-italic text-gray-300 dark:text-gray-700">0{idx + 1}</span>
              </a>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="uppercase tracking-widest text-[10px] font-bold text-gray-400 dark:text-gray-500">Contact Us</span>
              <a href="tel:+91000000000" className="text-lg text-gray-900 dark:text-white">hello@lawyerpanel.org</a>
            </div>
            <Button variant="primary" className="w-full py-5 text-sm" onClick={() => setIsMenuOpen(false)}>Talk to an Expert</Button>
          </div>
        </div>
      </div>
    </>
  )
}
`;
fs.writeFileSync(headerPath, headerContent.trim());

console.log("Header upgraded to ultimate luxury.");
