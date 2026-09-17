const fs = require('fs');
const path = require('path');

const files = {
  'src/features/Landing/LandingPage.jsx': `
import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedInSection from './components/FeaturedInSection'
import WhyUsSection from './components/WhyUsSection'
import ServicesSection from '../Services/ServicesSection'
import HowItWorksSection from '../HowItWorks/HowItWorksSection'
import StatsBar from './components/StatsBar'
import TestimonialSection from '../Testimonials/TestimonialSection'
import AdvocateSection from '../Advocates/AdvocateSection'
import FAQSection from '../FAQ/FAQSection'
import CTABanner from './components/CTABanner'

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <FeaturedInSection />
      <WhyUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsBar />
      <AdvocateSection />
      <TestimonialSection />
      <FAQSection />
      <CTABanner />
    </div>
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
    <section id="about" className="snap-section w-full min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-[#080d20] transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 dark:text-white mb-8 leading-[1.15] tracking-tight">
            Peace of Mind<br/>Is a Right, Not a Luxury.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
            We specialize in cases related to loan defaults, cheque bouncing, and recovery agent harassment. Our panel of experts can guide and support you through these issues. Lawyer Panel has one of the largest panels of experts across all major cities of India.
          </p>
          <Button variant="primary">Learn More About Us &rarr;</Button>
        </div>
        
        <div className="flex flex-col gap-6">
           {points.map((item, idx) => {
             const Icon = item.icon;
             return (
               <div key={idx} className="flex items-center gap-6 bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
                 <div className="w-16 h-16 bg-gray-50 dark:bg-white/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                   <Icon size={28} strokeWidth={2} />
                 </div>
                 <div>
                   <h4 className="font-bold text-xl text-gray-900 dark:text-white tracking-tight mb-1">{item.title}</h4>
                   <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                 </div>
               </div>
             )
           })}
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
    <section id="services" className="snap-section w-full min-h-screen flex flex-col items-center justify-center py-20 bg-white dark:bg-secondary transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive legal support tailored for individuals facing financial distress.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10 hover:-translate-y-2 hover:border-primary dark:hover:border-primary transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-white dark:bg-white/10 text-gray-500 dark:text-gray-300 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100 dark:border-white/5">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm">{srv.desc}</p>
                
                <div className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors flex justify-end mt-auto">
                  <ArrowRight size={24} strokeWidth={2} />
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
    { num: 3, title: 'Set up forwarding', desc: 'Set up call forwarding.' },
    { num: 4, title: 'Calls forwarded', desc: 'Harassment gets forwarded.' },
    { num: 5, title: 'Experts intervene', desc: 'Our experts intervene.' },
    { num: 6, title: 'Team works', desc: 'Loan team works in parallel.' },
  ]

  return (
    <section id="how-it-works" className="snap-section w-full min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-[#080d20] transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">How does it work?</h2>
          </div>
          <a href="#" className="text-primary font-semibold hover:text-green-700 transition-colors flex items-center gap-2 pb-2">View Detailed Guide &rarr;</a>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="group relative bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:border-primary dark:hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/10 border border-gray-100 dark:border-white/5 text-gray-900 dark:text-white font-bold text-xl rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
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
    <section className="snap-section w-full min-h-[50vh] flex items-center justify-center py-20 bg-white dark:bg-secondary transition-colors duration-300 border-y border-gray-100 dark:border-white/5">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-4xl text-gray-900 dark:text-white mb-4 tracking-tight">Our Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Numbers that reflect trust and our commitment to justice across the nation.</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="md:border-l border-gray-200 dark:border-white/10 md:pl-8">
              <div className="text-4xl font-extrabold text-primary mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 font-semibold tracking-wider text-xs uppercase">{stat.label}</div>
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
    <section id="advocates" className="snap-section w-full min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-[#080d20] transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">Our Advocate Panel</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Experienced. Verified. Nationwide.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {advocates.map((adv, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10 text-center hover:-translate-y-2 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto bg-gray-50 dark:bg-white/10 rounded-full mb-6 border-[4px] border-white dark:border-secondary shadow-sm overflow-hidden flex items-center justify-center text-gray-400">
                 <User size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-xl tracking-tight mb-1">{adv.name}</h4>
              <p className="text-sm text-primary font-bold mb-3">{adv.spec}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{adv.city}</p>
            </div>
          ))}
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
    <section id="client-reviews" className="snap-section w-full min-h-screen flex items-center justify-center py-20 bg-white dark:bg-secondary transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-white/5 rounded-3xl p-10 border border-gray-100 dark:border-white/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
              <p className="text-gray-700 dark:text-gray-300 mb-10 text-lg leading-relaxed font-normal">"{rev.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white tracking-tight">{rev.name}</h4>
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
  'src/features/FAQ/FAQSection.jsx': `
import React, { useState } from 'react'

function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200 dark:border-white/10 group">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={\`font-bold text-lg md:text-xl tracking-tight transition-colors \${isOpen ? 'text-primary' : 'text-gray-900 dark:text-white group-hover:text-primary'}\`}>{question}</span>
        <span className={\`text-2xl transition-transform duration-300 \${isOpen ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary'}\`}>+</span>
      </button>
      <div className={\`overflow-hidden transition-all duration-300 \${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}\`}>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-normal">{answer}</p>
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
    <section className="snap-section w-full min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-[#080d20] transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm p-8 md:p-12">
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
    <section className="snap-section w-full min-h-[60vh] flex items-center justify-center py-20 bg-white dark:bg-secondary transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="w-full max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-secondary dark:bg-[#080d20] p-12 md:p-20 rounded-[3rem] border border-gray-800 dark:border-white/10 shadow-xl overflow-hidden relative">
          
          <div className="text-center md:text-left relative z-10 w-full md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight">Get Expert Legal Support Today</h2>
            <p className="text-gray-300 text-lg md:text-xl font-normal">Talk to our team and understand your options. Your consultation is completely confidential.</p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
            <Button variant="primary" className="py-4 px-10 text-lg w-full justify-center shadow-lg">Talk to an Expert</Button>
            <Button variant="outline" className="py-4 px-10 text-lg w-full justify-center border-gray-600 text-white hover:bg-white/10">Chat on WhatsApp</Button>
          </div>
          
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

console.log('Rebuilt all pages! Clean, non-AI, properly sized, reordered.');
