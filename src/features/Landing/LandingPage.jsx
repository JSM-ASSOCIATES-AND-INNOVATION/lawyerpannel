import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedInSection from './components/FeaturedInSection'
import ServicesSection from '../Services/ServicesSection'
import HowItWorksSection from '../HowItWorks/HowItWorksSection'
import StatsBar from './components/StatsBar'
import WhyUsSection from './components/WhyUsSection'
import TestimonialSection from '../Testimonials/TestimonialSection'
import AdvocateSection from '../Advocates/AdvocateSection'
import FAQSection from '../FAQ/FAQSection'
import CTABanner from './components/CTABanner'

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <FeaturedInSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsBar />
      <WhyUsSection />
      <TestimonialSection />
      <AdvocateSection />
      <FAQSection />
      <CTABanner />
    </div>
  )
}