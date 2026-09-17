import React, { useState } from 'react'

function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200/50 dark:border-white/10 group">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold text-xl tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-secondary dark:text-white group-hover:text-primary'}`}>{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
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