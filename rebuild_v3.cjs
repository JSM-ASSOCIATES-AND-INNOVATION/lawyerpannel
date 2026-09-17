const fs = require('fs');
const path = require('path');

const files = {
  'tailwind.config.js': `
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b33c",
        secondary: "#0a1128",
        dark: "#050814",
        light: "#fcfdfd",
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
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-light dark:bg-dark text-center px-6 py-12 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto space-y-12">
        <div className="mb-2">
          <img src={logo} alt="Lawyer Panel Logo" className="h-20 md:h-24 w-auto object-contain dark:brightness-0 dark:invert transition-all" />
        </div>
        
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-secondary dark:text-white leading-[1.15]">
            Stop Recovery Harassment. <br/>
            <span className="text-primary dark:text-[#00e64d] drop-shadow-sm">Resolve Your Loan Legally.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Manage loans and stop recovery harassment with India's trusted experts. We help you deal with financial stress with dignity, legally and safely.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full pt-12">
          {quickLinks.map(btn => {
            const Icon = btn.icon;
            return (
              <a key={btn.id} href={btn.link} className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#0a0f1e] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800/50 rounded-2xl flex items-center justify-center mb-5 text-gray-500 dark:text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-secondary dark:text-white text-sm md:text-base tracking-tight">{btn.title}</span>
              </a>
            );
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
    <section id="services" className="py-32 px-6 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive legal support tailored for individuals facing financial distress.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#0a0f1e] rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 tracking-tight">{srv.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{srv.desc}</p>
                
                <div className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors flex justify-end">
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
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 h-[500px] bg-gray-50 dark:bg-[#0a0f1e] border border-gray-100 dark:border-gray-800 flex items-center justify-center p-10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
          
          <div className="w-full relative z-10 flex flex-col gap-8">
             {points.map((item, idx) => {
               const Icon = item.icon;
               return (
                 <div key={idx} className="flex items-start gap-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-3xl border border-white dark:border-gray-700 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                   <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                     <Icon size={24} strokeWidth={2} />
                   </div>
                   <div>
                     <h4 className="font-bold text-xl text-secondary dark:text-white tracking-tight mb-1">{item.title}</h4>
                     <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
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
    <section id="advocates" className="py-32 px-6 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary dark:text-white tracking-tight mb-6">Our Advocate Panel</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Experienced. Verified. Nationwide.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {advocates.map((adv, idx) => (
            <div key={idx} className="bg-light dark:bg-[#0a0f1e] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-28 h-28 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full mb-6 border-[6px] border-white dark:border-dark shadow-sm overflow-hidden flex items-center justify-center text-gray-400 dark:text-gray-500">
                 <User size={48} strokeWidth={1} />
              </div>
              <h4 className="font-bold text-secondary dark:text-white text-xl tracking-tight mb-2">{adv.name}</h4>
              <p className="text-sm text-primary font-semibold mb-2">{adv.spec}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{adv.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`,
  'src/shared/layouts/Footer.jsx': `
import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#050814] border-t border-gray-200 dark:border-gray-800 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Lawyer Panel Logo" className="h-8 w-auto object-contain dark:brightness-0 dark:invert transition-all" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Providing legal support for financial disputes with integrity, transparency, and compassion. Your rights, our support.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#home" className="hover:text-primary dark:hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-primary dark:hover:text-primary transition-colors">Services</a></li>
            <li><a href="#advocates" className="hover:text-primary dark:hover:text-primary transition-colors">Our Advocates</a></li>
            <li><a href="#about" className="hover:text-primary dark:hover:text-primary transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Credit Card Dues</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Personal Loans</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Recovery Harassment</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Cheque Bounce</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary dark:text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +91 1800 309 5223</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-primary" /> support@lawyerpanel.org</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> Bengaluru, India</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Disclaimer</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Lawyer Panel. All rights reserved.</p>
      </div>
    </footer>
  )
}
`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}

console.log('Rebuild V3 complete!');
