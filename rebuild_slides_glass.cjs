const fs = require('fs');
const path = require('path');

const files = {
  'src/index.css': `
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.glass-panel {
  @apply bg-white/40 dark:bg-[#0a1128]/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl;
}

.snap-section {
  @apply min-h-screen snap-start flex flex-col justify-center relative py-24;
}
`,
  'src/App.jsx': `
import React from 'react'
import LandingPage from './features/Landing/LandingPage'
import Header from './shared/layouts/Header'
import Footer from './shared/layouts/Footer'

function App() {
  return (
    <div className="flex flex-col font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Liquid Mesh Background */}
      <div className="fixed inset-0 z-[-1] bg-light dark:bg-dark transition-colors duration-500 overflow-hidden">
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 dark:bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-300/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
         <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-green-200/30 dark:bg-green-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
      </div>

      <Header />
      <main className="flex-grow w-full">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
`,
  'src/shared/components/Button.jsx': `
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
    <button className={\`\${baseStyle} \${variants[variant]} \${className}\`} {...props}>
      <span className="absolute inset-0 w-full h-full rounded-full opacity-20 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
      <span className="relative flex items-center gap-2 drop-shadow-sm">{children}</span>
    </button>
  )
}
`,
  'src/features/Landing/components/HeroSection.jsx': `
import React from 'react'
import { CreditCard, Landmark, PhoneOff, FileWarning } from 'lucide-react'
import logo from '../../../shared/assets/logo.png'

export default function HeroSection() {
  const quickLinks = [
    { id: 1, icon: CreditCard, title: 'Credit Card Dues', link: '#services' },
    { id: 2, icon: Landmark, title: 'Personal Loans', link: '#services' },
    { id: 3, icon: PhoneOff, title: 'Stop Harassment', link: '#services' },
    { id: 4, icon: FileWarning, title: 'Cheque Bounce', link: '#services' }
  ]

  return (
    <section id="home" className="snap-section pt-32">
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto space-y-12 px-6">
        <div className="mb-2 glass-panel px-8 py-4 rounded-3xl">
          <img src={logo} alt="Lawyer Panel Logo" className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all drop-shadow-lg" />
        </div>
        
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-extrabold tracking-tight text-secondary dark:text-white leading-[1.1] drop-shadow-sm">
            Stop Recovery Harassment. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 drop-shadow-md">Resolve Your Loan Legally.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Manage loans and stop recovery harassment with India's trusted experts. We help you deal with financial stress with dignity, legally and safely.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full pt-10">
          {quickLinks.map(btn => {
            const Icon = btn.icon;
            return (
              <a key={btn.id} href={btn.link} className="glass-panel flex flex-col items-center justify-center p-6 rounded-3xl hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white/50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-secondary dark:text-gray-300 border border-white/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-secondary dark:text-white text-sm md:text-base tracking-tight text-center">{btn.title}</span>
              </a>
            );
          })}
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
    <section className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] py-16 px-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-[0.2em]">Featured In</span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale">
            <span className="font-bold text-3xl tracking-tighter text-black dark:text-white drop-shadow-md">INDIA TODAY</span>
            <span className="font-bold text-2xl tracking-tight text-black dark:text-white drop-shadow-md">Business News Week</span>
            <span className="font-bold text-2xl tracking-tight text-black dark:text-white drop-shadow-md">NewsKarnataka</span>
            <span className="font-bold text-3xl tracking-tighter text-black dark:text-white drop-shadow-md">Whalesbook</span>
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Services/ServicesSection.jsx': `
import React from 'react'
import { CreditCard, Landmark, PhoneOff, FileWarning, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Credit Card Loan issues', desc: 'If you are not able to pay your Credit Card dues and the bank is threatening you, our experts can evaluate the situation.', icon: CreditCard },
  { title: 'Loan Payment Issues', desc: 'Find solutions to your financial difficulties and avoid becoming a willful defaulter if you are unable to pay back.', icon: Landmark },
  { title: 'Recovery Agents Harassment', desc: 'If you are being pestered by recovery agents, our experts can guide you in stopping the harassment.', icon: PhoneOff },
  { title: 'Cheque Bounce', desc: 'Legal support and defense under NI Act, Section 138.', icon: FileWarning },
]

export default function ServicesSection() {
  return (
    <section id="services" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto font-light">Comprehensive legal support tailored for individuals facing financial distress.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="glass-panel rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:border-primary/30">
                <div className="w-16 h-16 bg-white/50 dark:bg-white/5 text-secondary dark:text-white border border-white/30 dark:border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 tracking-tight">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{srv.desc}</p>
                
                <div className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors flex justify-end">
                  <ArrowRight size={28} strokeWidth={2} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/HowItWorks/HowItWorksSection.jsx': `
import React from 'react'

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
    <section id="how-it-works" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight">How does it work?</h2>
            </div>
            <a href="#" className="text-primary font-semibold hover:text-green-700 transition-colors flex items-center gap-2 pb-2">View Detailed Guide &rarr;</a>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="group relative">
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-white/30 dark:bg-white/10 -z-10 group-last:hidden"></div>
                  <div className="w-16 h-16 bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 text-secondary dark:text-white font-bold text-2xl rounded-full flex items-center justify-center mb-8 shadow-lg backdrop-blur-sm group-hover:border-primary group-hover:text-primary transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-xl text-secondary dark:text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
    <section className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-heading font-extrabold text-5xl text-secondary dark:text-white mb-6 tracking-tight">Our Impact</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed font-light">Numbers that reflect trust and our commitment to justice across the nation.</p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left w-full">
            {stats.map((stat, idx) => (
              <div key={idx} className="md:border-l border-white/30 dark:border-white/10 md:pl-8">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-4 tracking-tighter drop-shadow-sm">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold tracking-wider text-xs uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Landing/components/WhyUsSection.jsx': `
import React from 'react'
import Button from '../../../shared/components/Button'
import { Users, Scale, ShieldCheck } from 'lucide-react'

export default function WhyUsSection() {
  const points = [
    { icon: Users, title: 'Experienced Advocates', desc: 'Verified legal professionals.' },
    { icon: Scale, title: 'Transparent Process', desc: 'Clear guidance at every step.' },
    { icon: ShieldCheck, title: 'Ethical & Confidential', desc: '100% privacy maintained.' }
  ]

  return (
    <section id="about" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">
        <div className="glass-panel rounded-[3rem] p-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white mb-8 leading-[1.15] tracking-tight">Peace of Mind<br/>Is a Right, Not a Luxury.</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl leading-relaxed font-light">
            We specialize in cases related to loan defaults, cheque bouncing, and recovery agent harassment. Our panel of experts can guide and support you through these issues. Lawyer Panel has one of the largest panels of experts across all major cities of India.
          </p>
          <Button variant="primary">Learn More About Us &rarr;</Button>
        </div>
        
        <div className="glass-panel rounded-[3rem] h-full min-h-[500px] flex items-center justify-center p-10 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
          
          <div className="w-full relative z-10 flex flex-col gap-6">
             {points.map((item, idx) => {
               const Icon = item.icon;
               return (
                 <div key={idx} className="flex items-center gap-6 bg-white/60 dark:bg-[#0a1128]/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 dark:border-white/10 shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                   <div className="w-16 h-16 bg-white/80 dark:bg-white/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm border border-white/50 dark:border-white/5">
                     <Icon size={28} strokeWidth={2} />
                   </div>
                   <div>
                     <h4 className="font-bold text-xl text-secondary dark:text-white tracking-tight mb-1">{item.title}</h4>
                     <p className="text-gray-600 dark:text-gray-400 font-light">{item.desc}</p>
                   </div>
                 </div>
               )
             })}
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/Testimonials/TestimonialSection.jsx': `
import React from 'react'

export default function TestimonialSection() {
  const reviews = [
    { name: 'Rohit S.', city: 'Bengaluru', text: 'The team helped me stop constant recovery calls. Very professional and supportive throughout the process.' },
    { name: 'Priya M.', city: 'Mumbai', text: 'I was worried about legal notices. Lawyer Panel explained everything clearly and helped me reach a settlement.' },
    { name: 'Amit K.', city: 'Delhi', text: 'Highly recommend their services. They handled my case with complete confidentiality and got great results.' },
  ]

  return (
    <section id="client-reviews" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Real Stories</span>
          <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-10 relative hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col">
              <p className="text-gray-700 dark:text-gray-200 mb-10 relative z-10 text-xl leading-relaxed font-light">"{rev.text}"</p>
              
              <div className="flex items-center gap-5 mt-auto border-t border-white/20 dark:border-white/10 pt-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-secondary to-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border border-white/20">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary dark:text-white tracking-tight">{rev.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{rev.city}</p>
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
import { User } from 'lucide-react'

export default function AdvocateSection() {
  const advocates = [
    { name: 'Adv. Rahul Mehta', spec: 'Debt Recovery | Civil Law', city: 'New Delhi' },
    { name: 'Adv. Sneha Iyer', spec: 'Banking & Finance | NI Act', city: 'Mumbai' },
    { name: 'Adv. K. Srinivas', spec: 'Consumer Law | Settlement', city: 'Hyderabad' },
    { name: 'Adv. Pooja Sharma', spec: 'RBI Compliance | Harassment', city: 'Bengaluru' },
  ]

  return (
    <section id="advocates" className="snap-section">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
            <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Advocate Panel</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-light">Experienced. Verified. Nationwide.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {advocates.map((adv, idx) => (
              <div key={idx} className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/50 dark:border-white/10 text-center hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                <div className="w-28 h-28 mx-auto bg-white/60 dark:bg-[#0a1128]/80 rounded-full mb-6 border-[4px] border-white/80 dark:border-white/10 shadow-lg overflow-hidden flex items-center justify-center text-gray-400 dark:text-gray-500">
                   <User size={48} strokeWidth={1} />
                </div>
                <h4 className="font-bold text-secondary dark:text-white text-xl tracking-tight mb-2">{adv.name}</h4>
                <p className="text-sm text-primary font-bold mb-3">{adv.spec}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{adv.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`,
  'src/features/FAQ/FAQSection.jsx': `
import React, { useState } from 'react'

function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200/50 dark:border-white/10 group">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={\`font-bold text-xl tracking-tight transition-colors \${isOpen ? 'text-primary' : 'text-secondary dark:text-white group-hover:text-primary'}\`}>{question}</span>
        <span className={\`text-2xl transition-transform duration-300 \${isOpen ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary'}\`}>+</span>
      </button>
      <div className={\`overflow-hidden transition-all duration-300 \${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}\`}>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">{answer}</p>
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
    <section className="snap-section">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-4 drop-shadow-sm">Frequently Asked Questions</h2>
        </div>
        
        <div className="glass-panel rounded-[3rem] p-8 md:p-16">
           {faqs.map((faq, idx) => (
             <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
           ))}
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
    <section className="snap-section">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-secondary to-dark p-12 md:p-24 rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl pointer-events-none mix-blend-overlay"></div>
        
        <div className="text-center md:text-left relative z-10 w-full md:w-3/5">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-8 leading-tight">Get Expert Legal Support Today</h2>
          <p className="text-gray-200 text-2xl font-light">Talk to our team and understand your options. Your consultation is completely confidential.</p>
        </div>
        
        <div className="flex flex-col gap-6 w-full md:w-auto relative z-10">
          <Button variant="primary" className="py-5 px-12 text-xl w-full justify-center">Talk to an Expert</Button>
          <Button variant="outline" className="py-5 px-12 text-xl w-full justify-center border-white/30 text-white hover:bg-white/10 backdrop-blur-md">Chat on WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}

console.log('Liquid glass slides rebuilt!');
