const fs = require('fs');
const path = require('path');

const files = {
  'src/shared/layouts/Header.jsx': `
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
        className={\`fixed inset-0 bg-white dark:bg-dark z-40 transition-opacity duration-300 lg:hidden \${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}\`}
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
`,
  'src/features/Landing/components/HeroSection.jsx': `
import React from 'react'
import logo from '../../../shared/assets/logo.png'

export default function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-light dark:bg-dark text-center px-6 py-12 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto space-y-12">
        <div className="mb-4">
          <img src={logo} alt="Lawyer Panel Logo" className="h-16 md:h-24 w-auto object-contain dark:brightness-0 dark:invert transition-all" />
        </div>
        
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-secondary dark:text-white leading-[1.1]">
            Stop Recovery Harassment. <br/>
            <span className="text-primary">Resolve Your Loan Legally.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Manage loans and stop recovery harassment with India's trusted experts. We help you deal with financial stress with dignity, legally and safely.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full pt-8">
          {[
            { id: 1, icon: '💳', title: 'Credit Card Dues', link: '#services' },
            { id: 2, icon: '🏦', title: 'Personal Loans', link: '#services' },
            { id: 3, icon: '📞', title: 'Stop Harassment', link: '#services' },
            { id: 4, icon: '📄', title: 'Cheque Bounce', link: '#services' }
          ].map(btn => (
            <a key={btn.id} href={btn.link} className="flex flex-col items-center justify-center p-6 md:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{btn.icon}</span>
              <span className="font-semibold text-secondary dark:text-white text-sm md:text-base">{btn.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/shared/components/Button.jsx': `
import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-green-700 shadow-lg hover:shadow-green-600/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-600 dark:text-white dark:hover:border-primary dark:hover:bg-primary",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    dark: "bg-secondary text-white hover:bg-blue-900 shadow-lg"
  }

  return (
    <button className={\`\${baseStyle} \${variants[variant]} \${className}\`} {...props}>
      {children}
    </button>
  )
}
`,
  'src/features/Landing/components/FeaturedInSection.jsx': `
import React from 'react'

export default function FeaturedInSection() {
  return (
    <section className="bg-white dark:bg-dark py-16 border-b border-gray-100 dark:border-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <span className="text-gray-400 dark:text-gray-600 font-semibold text-sm uppercase tracking-widest">Featured In</span>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">
          <span className="font-bold text-2xl tracking-tighter text-black dark:text-white">INDIA TODAY</span>
          <span className="font-bold text-xl tracking-tight text-black dark:text-white">Business News Week</span>
          <span className="font-bold text-xl tracking-tight text-black dark:text-white">NewsKarnataka</span>
          <span className="font-bold text-2xl tracking-tighter text-black dark:text-white">Whalesbook</span>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Services/ServicesSection.jsx': `
import React from 'react'

const services = [
  { title: 'Credit Card Loan issues', desc: 'If you are not able to pay your Credit Card dues and the bank is threatening you, our experts can evaluate the situation.', icon: '💳' },
  { title: 'Loan Payment Issues', desc: 'Find solutions to your financial difficulties and avoid becoming a willful defaulter if you are unable to pay back.', icon: '🏦' },
  { title: 'Recovery Agents Harassment', desc: 'If you are being pestered by recovery agents, our experts can guide you in stopping the harassment.', icon: '📞' },
  { title: 'Cheque Bounce', desc: 'Legal support and defense under NI Act, Section 138.', icon: '📄' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive legal support tailored for individuals facing financial distress.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5 border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 text-3xl rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 tracking-tight">{srv.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{srv.desc}</p>
              
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors flex justify-end">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}

console.log('Premium UI rebuilt!');
