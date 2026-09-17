const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src/App.jsx');
const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');

const appContent = `
import React from 'react'
import LandingPage from './features/Landing/LandingPage'
import Header from './shared/layouts/Header'
import Footer from './shared/layouts/Footer'

function App() {
  return (
    <div className="flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-secondary transition-colors duration-300 min-h-screen">
      <Header />
      <main className="flex-grow w-full">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
`;

const heroContent = `
import React from 'react'
import Button from '../../../shared/components/Button'
import logo from '../../../shared/assets/logo.png'
import { CreditCard, Landmark, PhoneOff, FileWarning } from 'lucide-react'

export default function HeroSection() {
  const quickLinks = [
    { id: 1, icon: CreditCard, title: 'Credit Card Dues', link: '#services' },
    { id: 2, icon: Landmark, title: 'Personal Loans', link: '#services' },
    { id: 3, icon: PhoneOff, title: 'Stop Harassment', link: '#services' },
    { id: 4, icon: FileWarning, title: 'Cheque Bounce', link: '#services' }
  ]

  return (
    <section id="home" className="snap-section relative w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-secondary transition-colors duration-300 !py-0 !m-0 border-b border-gray-100 dark:border-gray-800">
      
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <img src={logo} alt="Lawyer Panel Logo" className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300" />
        </div>
        
        {/* Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-300">
          Start your journey towards a <br className="hidden md:block" />
          <span className="text-primary">stress-free life</span> today.
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto mb-8 transition-colors duration-300">
          Manage loans and stop recovery harassment with India's trusted experts.
        </p>
        
        {/* Call to action */}
        <div className="mb-10">
          <Button 
            variant="primary" 
            className="text-lg py-3.5 px-8 font-semibold shadow-sm hover:shadow-md transition-all duration-300" 
            onClick={() => window.location.href='#loan-management'}
          >
            Explore Loan Management Options &rarr;
          </Button>
        </div>

        {/* Quick Toggles */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map(btn => {
            const Icon = btn.icon;
            return (
              <a key={btn.id} href={btn.link} className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-white dark:hover:bg-white/10 transition-all duration-200 group">
                <Icon size={24} className="text-gray-400 dark:text-gray-400 group-hover:text-primary mb-2 transition-colors duration-200" strokeWidth={2} />
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{btn.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}
`;

fs.writeFileSync(appPath, appContent.trim());
fs.writeFileSync(heroPath, heroContent.trim());
console.log('Stripped AI flair, made it clean, professional, and compact.');
