import React from 'react'
import HeroSection from './components/HeroSection'

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