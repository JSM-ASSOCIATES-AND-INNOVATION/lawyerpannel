import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FAQAccordion({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-white/10 group">
      <button 
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`font-serif text-lg lg:text-2xl tracking-tight transition-colors pr-8 ${isOpen ? 'text-[#00b33c]' : 'text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300'}`}>
          {question}
        </span>
        <span className={`transition-colors duration-300 flex-shrink-0 ${isOpen ? 'text-[#00b33c]' : 'text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base font-light max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: 'Is this service legal and RBI compliant?', a: 'Yes, all our services are 100% legal and strictly follow RBI guidelines regarding loan recovery. We ensure your rights are protected at every step.' },
    { q: 'How do I share my case details?', a: 'You can sign up on our platform and securely upload your documents or share details directly with your assigned legal advocate through our encrypted portal.' },
    { q: 'Will you really stop recovery calls?', a: 'By setting up call forwarding, we handle the recovery agents on your behalf. This provides you immediate relief from constant harassment while we negotiate.' },
    { q: 'What types of loans do you handle?', a: 'We handle Credit Card dues, Personal Loans, Business Loans, and issues related to Cheque Bouncing across all major banks and NBFCs.' },
    { q: 'Do I have to pay upfront?', a: 'We offer a free initial consultation. Any fees for legal services will be transparently discussed and agreed upon before proceeding with your case.' },
  ]

  return (
    <section id="faq" className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-gray-50 dark:bg-[#070707] transition-colors duration-500 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex flex-col lg:flex-row relative h-full gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="w-full lg:w-[40%] flex flex-col items-start pt-4 lg:pt-8">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
            Questions?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-serif leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tight transition-colors">
            Frequently Asked.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base font-light leading-[1.6] max-w-sm mb-8 transition-colors">
            Find clarity on our process, compliance, and how we protect you from financial harassment.
          </p>
        </div>
        
        {/* Right Column - Accordion */}
        <div className="w-full lg:w-[60%] flex flex-col">
           {faqs.map((faq, idx) => (
             <FAQAccordion 
               key={idx} 
               question={faq.q} 
               answer={faq.a} 
               isOpen={openIndex === idx}
               onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
             />
           ))}
        </div>

      </div>
    </section>
  )
}