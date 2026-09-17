const fs = require('fs');
const path = require('path');

// 1. Upgrade LandingPage.jsx for perfect narrative flow
const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
const landingContent = `
import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedInSection from './components/FeaturedInSection'
import StatsBar from './components/StatsBar'
import WhyUsSection from './components/WhyUsSection'
import ServicesSection from '../Services/ServicesSection'
import HowItWorksSection from '../HowItWorks/HowItWorksSection'
import AdvocateSection from '../Advocates/AdvocateSection'
import TestimonialSection from '../Testimonials/TestimonialSection'
import FAQSection from '../FAQ/FAQSection'
import CTABanner from './components/CTABanner'

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-[#232020] transition-colors duration-300">
      <HeroSection />
      
      {/* Authority & Trust Band */}
      <div className="flex flex-col w-full relative z-10 shadow-2xl">
        <FeaturedInSection />
        <StatsBar />
      </div>

      {/* Main Content Flow */}
      <WhyUsSection />
      <ServicesSection />
      <HowItWorksSection />
      
      {/* Social Proof & Team */}
      <AdvocateSection />
      <TestimonialSection />
      
      {/* Conversion & Support */}
      <FAQSection />
      <CTABanner />
    </div>
  )
}
`;
fs.writeFileSync(landingPath, landingContent.trim());

// 2. Upgrade StatsBar to be a sleek dark band that acts as a transition, not a full slide
const statsPath = path.join(__dirname, 'src/features/Landing/components/StatsBar.jsx');
const statsContent = `
import React from 'react'

export default function StatsBar() {
  const stats = [
    { value: '50,000+', label: 'Clients Assisted' },
    { value: '100+', label: 'Advocates' },
    { value: '25+', label: 'Cities Covered' },
    { value: '95%', label: 'Success Rate' },
  ]

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-[#1a1818] border-b border-gray-200 dark:border-white/5 !h-auto flex-none snap-align-none transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/4 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">Our Impact</h2>
          <div className="w-12 h-1 bg-primary mt-3 mx-auto md:mx-0"></div>
        </div>
        
        <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-bold tracking-widest text-[10px] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
`;
fs.writeFileSync(statsPath, statsContent.trim());

console.log("Layout upgraded and rearranged successfully.");
