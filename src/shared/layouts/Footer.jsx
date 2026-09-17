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