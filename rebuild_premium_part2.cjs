const fs = require('fs');
const path = require('path');

const files = {
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
    <section id="how-it-works" className="py-32 px-6 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight">How does Anti-Harassment Service work?</h2>
          </div>
          <a href="#" className="text-primary font-semibold hover:text-green-700 transition-colors flex items-center gap-2 pb-2">View Detailed Guide &rarr;</a>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="group relative">
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-800 -z-10 group-last:hidden"></div>
                <div className="w-16 h-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-secondary dark:text-white font-bold text-2xl rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl text-secondary dark:text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
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
    <section className="bg-light dark:bg-[#050814] py-24 px-6 border-y border-gray-100 dark:border-gray-900/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-4xl text-secondary dark:text-white mb-4 tracking-tight">Our Impact</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">Numbers that reflect trust and our commitment to justice across the nation.</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="md:border-l border-gray-200 dark:border-gray-800 md:pl-8">
              <div className="text-5xl font-extrabold text-primary mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
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
    <section id="about" className="py-32 px-6 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white mb-8 leading-[1.15] tracking-tight">Peace of Mind<br/>Is a Right, Not a Luxury.</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-xl leading-relaxed font-light">
            We specialize in cases related to loan defaults, cheque bouncing, and recovery agent harassment. Our panel of experts can guide and support you through these issues. Lawyer Panel has one of the largest panels of experts across all major cities of India.
          </p>
          <Button variant="primary">Learn More About Us &rarr;</Button>
        </div>
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 h-[500px] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center p-10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
          
          <div className="w-full relative z-10 flex flex-col gap-8">
             {[
               { icon: '👥', title: 'Experienced Advocates', desc: 'Verified legal professionals.' },
               { icon: '⚖️', title: 'Transparent Process', desc: 'Clear guidance at every step.' },
               { icon: '🔒', title: 'Ethical & Confidential', desc: '100% privacy maintained.' }
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 rounded-3xl border border-white dark:border-gray-700 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                 <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">{item.icon}</div>
                 <div>
                   <h4 className="font-bold text-xl text-secondary dark:text-white tracking-tight mb-1">{item.title}</h4>
                   <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                 </div>
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

export default function TestimonialSection() {
  const reviews = [
    { name: 'Rohit S.', city: 'Bengaluru', text: 'The team helped me stop constant recovery calls. Very professional and supportive throughout the process.' },
    { name: 'Priya M.', city: 'Mumbai', text: 'I was worried about legal notices. Lawyer Panel explained everything clearly and helped me reach a settlement.' },
    { name: 'Amit K.', city: 'Delhi', text: 'Highly recommend their services. They handled my case with complete confidentiality and got great results.' },
  ]

  return (
    <section id="client-reviews" className="py-32 px-6 bg-light dark:bg-[#050814]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800 relative shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300">
              <p className="text-gray-600 dark:text-gray-300 mb-10 relative z-10 text-lg leading-relaxed">"{rev.text}"</p>
              
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white tracking-tight">{rev.name}</h4>
                  <p className="text-sm text-gray-500">{rev.city}</p>
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

export default function AdvocateSection() {
  const advocates = [
    { name: 'Adv. Rahul Mehta', spec: 'Debt Recovery | Civil Law', city: 'New Delhi' },
    { name: 'Adv. Sneha Iyer', spec: 'Banking & Finance | NI Act', city: 'Mumbai' },
    { name: 'Adv. K. Srinivas', spec: 'Consumer Law | Settlement', city: 'Hyderabad' },
    { name: 'Adv. Pooja Sharma', spec: 'RBI Compliance | Harassment', city: 'Bengaluru' },
  ]

  return (
    <section id="advocates" className="py-32 px-6 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Advocate Panel</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Experienced. Verified. Nationwide.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {advocates.map((adv, idx) => (
            <div key={idx} className="bg-light dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-28 h-28 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full mb-6 border-[6px] border-white dark:border-dark shadow-sm overflow-hidden flex items-center justify-center text-3xl text-gray-400">
                 👤
              </div>
              <h4 className="font-bold text-secondary dark:text-white text-xl tracking-tight mb-2">{adv.name}</h4>
              <p className="text-sm text-primary font-semibold mb-2">{adv.spec}</p>
              <p className="text-sm text-gray-500">{adv.city}</p>
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
    <div className="border-b border-gray-100 dark:border-gray-800 group">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={\`font-semibold text-lg tracking-tight transition-colors \${isOpen ? 'text-primary' : 'text-secondary dark:text-white group-hover:text-primary'}\`}>{question}</span>
        <span className={\`text-2xl transition-transform duration-300 \${isOpen ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary'}\`}>+</span>
      </button>
      <div className={\`overflow-hidden transition-all duration-300 \${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}\`}>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">{answer}</p>
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
    <section className="py-32 px-6 bg-light dark:bg-[#050814]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none p-8 md:p-12">
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
    <section className="bg-white dark:bg-dark py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-secondary dark:bg-gray-900 p-12 md:p-20 rounded-[3rem] border-8 border-light dark:border-gray-800 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
        
        <div className="text-center md:text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">Get Expert Legal Support Today</h2>
          <p className="text-gray-300 text-xl font-light max-w-lg">Talk to our team and understand your options. Your consultation is completely confidential.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
          <Button variant="primary" className="py-4 px-10 text-lg w-full sm:w-auto">Talk to an Expert</Button>
          <Button variant="outline" className="py-4 px-10 text-lg w-full sm:w-auto border-gray-500 text-white hover:border-white hover:bg-white/10 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">Chat on WhatsApp</Button>
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

console.log('Premium UI part 2 rebuilt!');
