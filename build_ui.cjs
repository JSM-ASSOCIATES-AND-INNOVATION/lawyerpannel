const fs = require('fs');
const path = require('path');

const files = {
  'tailwind.config.js': `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 139, 13)",
        secondary: "rgb(15, 25, 78)",
        dark: "rgb(3, 6, 32)",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
`,
  'src/shared/components/Button.jsx': `
import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-green-700 shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-100",
    dark: "bg-secondary text-white hover:bg-blue-900"
  }

  return (
    <button className={\`\${baseStyle} \${variants[variant]} \${className}\`} {...props}>
      {children}
    </button>
  )
}
`,
  'src/shared/components/SectionHeading.jsx': `
import React from 'react'

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={\`mb-12 \${centered ? 'text-center md:mx-auto max-w-3xl' : ''}\`}>
      <h2 className="font-bold font-heading leading-tighter tracking-tighter text-3xl md:text-4xl text-secondary mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 text-lg uppercase tracking-wider">{subtitle}</p>}
    </div>
  )
}
`,
  'src/shared/layouts/Header.jsx': `
import React, { useState } from 'react'
import Button from '../components/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="w-full bg-amber-50 border-b border-amber-200 py-1 px-4 text-center">
        <p className="text-xs text-amber-900">
          Payments accepted only via <strong>official payment links</strong>. Never pay to personal accounts.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LP</span>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-secondary">Lawyer Panel</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#client-reviews" className="hover:text-primary transition-colors">Reviews</a>
          </nav>
          
          <div className="hidden lg:block">
            <Button variant="primary">Talk to an Expert →</Button>
          </div>

          <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          <a href="#home" className="block text-gray-700 font-medium">Home</a>
          <a href="#how-it-works" className="block text-gray-700 font-medium">How it Works</a>
          <a href="#services" className="block text-gray-700 font-medium">Services</a>
          <a href="#about" className="block text-gray-700 font-medium">About</a>
          <Button variant="primary" className="w-full mt-4">Talk to an Expert</Button>
        </div>
      )}
    </header>
  )
}
`,
  'src/shared/layouts/Footer.jsx': `
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <span className="font-heading font-bold text-xl text-secondary">Lawyer Panel</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Providing legal support for financial disputes with integrity, transparency, and compassion. Your rights, our support.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#advocates" className="hover:text-primary">Our Advocates</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-primary">Credit Card Dues</a></li>
            <li><a href="#" className="hover:text-primary">Personal Loans</a></li>
            <li><a href="#" className="hover:text-primary">Recovery Harassment</a></li>
            <li><a href="#" className="hover:text-primary">Cheque Bounce</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span>📞</span> +91 1800 309 5223</li>
            <li className="flex items-center gap-2"><span>✉️</span> support@lawyerpanel.org</li>
            <li className="flex items-center gap-2"><span>📍</span> Bengaluru, India</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Disclaimer</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Lawyer Panel. All rights reserved.</p>
      </div>
    </footer>
  )
}
`,
  'src/features/Landing/components/HeroSection.jsx': `
import React from 'react'
import Button from '../../../shared/components/Button'

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-secondary text-white overflow-hidden py-16 md:py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-dark opacity-90 z-0"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Stop Recovery Harassment. <br/>
            <span className="text-primary">Resolve Your Loan Legally.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Manage loans and stop recovery harassment with India's trusted experts. We help you deal with financial stress with dignity, legally and safely.
          </p>
          
          <div className="flex flex-wrap gap-4 py-2">
            <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full"><span className="text-primary">✓</span> RBI Compliant Process</div>
            <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full"><span className="text-primary">👥</span> 100+ Advocates</div>
            <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full"><span className="text-primary">🔒</span> 100% Confidential</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" className="text-lg py-3 px-8">Talk to an Expert →</Button>
            <Button variant="outline" className="border-gray-500 text-white hover:border-primary text-lg py-3 px-8 bg-transparent hover:text-white">Learn How It Works</Button>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-end relative h-[500px]">
           <div className="w-full max-w-md h-full bg-gradient-to-tr from-primary/20 to-transparent rounded-t-full border border-white/10 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm p-8 text-center">
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-64 h-64 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
             </div>
             <h3 className="z-10 text-3xl font-heading italic text-white font-semibold">"Financial difficulties do not define you. Your rights protect you."</h3>
           </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/components/FeaturedInSection.jsx': `
import React from 'react'

export default function FeaturedInSection() {
  return (
    <section className="bg-white py-10 border-b border-gray-100 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Featured In</span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-bold text-2xl text-red-600">INDIA TODAY</span>
          <span className="font-bold text-xl text-gray-800">Business News Week</span>
          <span className="font-bold text-xl text-red-700">NewsKarnataka</span>
          <span className="font-bold text-xl text-blue-600">Whalesbook</span>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/components/StatsBar.jsx': `
import React from 'react'

export default function StatsBar() {
  const stats = [
    { value: '50,000+', label: 'Clients Assisted' },
    { value: '100+', label: 'Advocates Across India' },
    { value: '25+', label: 'Cities' },
    { value: '95%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="bg-secondary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="font-heading font-bold text-3xl mb-3">Our Impact</h2>
          <p className="text-gray-400 text-lg">Numbers that reflect trust and our commitment to justice.</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="md:border-l border-gray-700 md:pl-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/components/WhyUsSection.jsx': `
import React from 'react'
import Button from '../../../shared/components/Button'

export default function WhyUsSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">Peace of Mind<br/>Is a Right, Not a Luxury.</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We specialize in cases related to loan defaults, cheque bouncing, and recovery agent harassment. Our panel of experts can guide and support you through these issues. Lawyer Panel has one of the largest panels of experts across all major cities of India.
          </p>
          <Button variant="primary">Learn More About Us →</Button>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] bg-white border border-gray-100 flex items-center">
          <div className="absolute inset-0 bg-secondary/5"></div>
          
          <div className="w-full p-8 relative z-10 grid gap-6">
             <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">👥</div>
               <div><h4 className="font-bold text-secondary">Experienced Advocates</h4><p className="text-sm text-gray-500">Verified legal professionals.</p></div>
             </div>
             
             <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 ml-8">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">⚖️</div>
               <div><h4 className="font-bold text-secondary">Transparent Process</h4><p className="text-sm text-gray-500">Clear guidance at every step.</p></div>
             </div>

             <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">🔒</div>
               <div><h4 className="font-bold text-secondary">Ethical & Confidential</h4><p className="text-sm text-gray-500">100% privacy maintained.</p></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/components/CTABanner.jsx': `
import React from 'react'
import Button from '../../../shared/components/Button'

export default function CTABanner() {
  return (
    <section className="bg-secondary text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <div className="text-center md:text-left">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Take The First Step</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get Expert Legal Support Today</h2>
          <p className="text-gray-300 max-w-md">Talk to our team and understand your options. Your consultation is completely confidential.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button variant="primary" className="py-4 px-8 text-lg w-full sm:w-auto">Talk to an Expert →</Button>
          <Button variant="outline" className="py-4 px-8 text-lg w-full sm:w-auto border-gray-600 text-white hover:border-primary hover:text-white bg-transparent">Chat on WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Services/ServicesSection.jsx': `
import React from 'react'
import SectionHeading from '../../shared/components/SectionHeading'

const services = [
  { title: 'Credit Card Loan issues', desc: 'If you are not able to pay your Credit Card dues and the bank is threatening you, our experts can evaluate the situation.', icon: '💳' },
  { title: 'Loan Payment Issues', desc: 'Find solutions to your financial difficulties and avoid becoming a willful defaulter if you are unable to pay back.', icon: '🏦' },
  { title: 'Recovery Agents Harassment', desc: 'If you are being pestered by recovery agents, our experts can guide you in stopping the harassment.', icon: '📞' },
  { title: 'Cheque Bounce', desc: 'Legal support and defense under NI Act, Section 138.', icon: '📄' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Our Services" centered />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="w-14 h-14 bg-amber-50 text-primary text-2xl rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{srv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{srv.desc}</p>
              
              <div className="absolute bottom-6 right-8 text-gray-400 group-hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/HowItWorks/HowItWorksSection.jsx': `
import React from 'react'
import SectionHeading from '../../shared/components/SectionHeading'

export default function HowItWorksSection() {
  const steps = [
    { num: 1, title: 'Sign up with Us', desc: 'For Anti-Harassment Service.' },
    { num: 2, title: 'Get a Number', desc: 'Receive a unique call forwarding number.' },
    { num: 3, title: 'Set up forwarding', desc: 'Set up call forwarding to avoid harassment.' },
    { num: 4, title: 'Calls forwarded', desc: 'Harassment calls get forwarded to experts.' },
    { num: 5, title: 'Experts intervene', desc: 'Our experts intervene where necessary.' },
    { num: 6, title: 'Team works', desc: 'Our loan management team works in parallel.' },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading title="How does Anti-Harassment Service (AHS) work?" subtitle="A SIMPLE, TRANSPARENT PROCESS" />
          <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2 pb-12">View Detailed Guide →</a>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary font-bold text-xl rounded-full flex items-center justify-center mb-6 shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Testimonials/TestimonialSection.jsx': `
import React from 'react'
import SectionHeading from '../../shared/components/SectionHeading'

export default function TestimonialSection() {
  const reviews = [
    { name: 'Rohit S.', city: 'Bengaluru', text: 'The team helped me stop constant recovery calls. Very professional and supportive throughout the process.' },
    { name: 'Priya M.', city: 'Mumbai', text: 'I was worried about legal notices. Lawyer Panel explained everything clearly and helped me reach a settlement.' },
    { name: 'Amit K.', city: 'Delhi', text: 'Highly recommend their services. They handled my case with complete confidentiality and got great results.' },
  ]

  return (
    <section id="client-reviews" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading title="What Our Clients Say" subtitle="REAL PEOPLE. REAL STORIES." />
          <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2 pb-12">View All Testimonials →</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative shadow-sm">
              <div className="text-primary opacity-20 absolute top-6 right-8 text-6xl font-serif">"</div>
              <p className="text-gray-700 mb-8 relative z-10 text-lg">"{rev.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{rev.name}</h4>
                  <p className="text-xs text-gray-500">{rev.city}</p>
                  <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Advocates/AdvocateSection.jsx': `
import React from 'react'
import SectionHeading from '../../shared/components/SectionHeading'
import Button from '../../shared/components/Button'

export default function AdvocateSection() {
  const advocates = [
    { name: 'Adv. Rahul Mehta', spec: 'Debt Recovery | Civil Law', city: 'New Delhi' },
    { name: 'Adv. Sneha Iyer', spec: 'Banking & Finance | NI Act', city: 'Mumbai' },
    { name: 'Adv. K. Srinivas', spec: 'Consumer Law | Settlement', city: 'Hyderabad' },
    { name: 'Adv. Pooja Sharma', spec: 'RBI Compliance | Harassment', city: 'Bengaluru' },
  ]

  return (
    <section id="advocates" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading title="Our Advocate Panel" subtitle="EXPERIENCED. VERIFIED. NATIONWIDE." />
          <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2 pb-12">View All Advocates →</a>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {advocates.map((adv, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto bg-amber-50 rounded-full mb-4 border-4 border-white shadow-md overflow-hidden">
                 <div className="w-full h-full bg-secondary flex items-center justify-center text-white text-2xl font-bold">
                   {adv.name.charAt(5)}
                 </div>
              </div>
              <h4 className="font-bold text-secondary text-lg mb-1">{adv.name}</h4>
              <p className="text-xs text-primary font-medium mb-1">{adv.spec}</p>
              <p className="text-xs text-gray-500 mb-6">{adv.city}</p>
              
              <Button variant="outline" className="w-full text-sm py-2">View Profile</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/FAQ/FAQSection.jsx': `
import React, { useState } from 'react'
import SectionHeading from '../../shared/components/SectionHeading'

function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-secondary text-lg">{question}</span>
        <span className={\`text-primary text-2xl transition-transform duration-300 \${isOpen ? 'rotate-45' : ''}\`}>+</span>
      </button>
      <div className={\`overflow-hidden transition-all duration-300 \${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}\`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const faqs = [
    { q: 'Is this service legal and RBI compliant?', a: 'Yes, all our services are 100% legal and strictly follow RBI guidelines regarding loan recovery.' },
    { q: 'How do I share my case details?', a: 'You can sign up on our platform and securely upload your documents or share details with your assigned advocate.' },
    { q: 'Will you really stop recovery calls?', a: 'By setting up call forwarding, we handle the recovery agents on your behalf, providing you immediate relief from constant harassment.' },
    { q: 'What types of loans do you handle?', a: 'We handle Credit Card dues, Personal Loans, Business Loans, and issues related to Cheque Bouncing.' },
    { q: 'Do I have to pay upfront?', a: 'We offer a free initial consultation. Any fees for legal services will be transparently discussed before proceeding.' },
    { q: 'Can you help with legal notices?', a: 'Yes, our expert advocates can reply to legal notices and represent you in court if necessary.' },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Frequently Asked Questions" subtitle="QUICK ANSWERS TO COMMON QUERIES" centered />
        
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
             {faqs.map((faq, idx) => (
               <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/LandingPage.jsx': `
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
`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}

console.log('UI successfully built!');
