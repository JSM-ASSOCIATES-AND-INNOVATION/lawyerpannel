const fs = require('fs');
const path = require('path');

// 1. Button.jsx
const buttonPath = path.join(__dirname, 'src/shared/components/Button.jsx');
const buttonContent = `
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({ variant = 'primary', className, children, ...props }) {
  // We keep rounded-full for our existing aesthetic but add the TLH hover bar
  const baseStyle = "relative inline-flex items-center justify-center font-bold transition-all duration-300 overflow-hidden group rounded-full border";
  
  const variants = {
    primary: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    outline: "bg-transparent text-gray-900 dark:text-white border-gray-200 dark:border-white/20",
    ghost: "bg-transparent text-gray-900 dark:text-white border-transparent"
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], className)} {...props}>
      {/* TLH Left Accent Line that expands on hover */}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary transition-all duration-300 group-hover:w-full z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 px-8 py-3 flex items-center justify-center w-full h-full group-hover:text-white transition-colors duration-300">
        {children}
      </div>
    </button>
  )
}
`;
fs.writeFileSync(buttonPath, buttonContent.trim());

// 2. index.css (Dark mode charcoal)
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

if (!cssContent.includes('--tlh-dark')) {
  cssContent = cssContent.replace('@tailwind utilities;', `@tailwind utilities;

:root {
  --tlh-dark: #232020;
}

html.dark body {
  background-color: var(--tlh-dark) !important;
}

/* Ensure sections match the charcoal background */
html.dark .bg-dark, html.dark .bg-secondary, html.dark .bg-\\[\\#050814\\], html.dark .bg-\\[\\#080d20\\] {
  background-color: var(--tlh-dark) !important;
}
`);
  fs.writeFileSync(cssPath, cssContent);
}

// 3. Header.jsx (Add Banner securely)
const headerPath = path.join(__dirname, 'src/shared/layouts/Header.jsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');
if (!headerContent.includes('bannerVisible')) {
  headerContent = headerContent.replace(
    'const [isMenuOpen, setIsMenuOpen] = useState(false)',
    'const [isMenuOpen, setIsMenuOpen] = useState(false)\n  const [bannerVisible, setBannerVisible] = useState(true)'
  );
  
  headerContent = headerContent.replace(
    '<header className="w-full bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">',
    `<div className="sticky top-0 z-50 flex flex-col w-full">
      {bannerVisible && (
        <div className="bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-6 flex justify-between items-center relative z-50">
          <div className="w-full text-center">24/7 Expert Legal Consultations Now Live - Nationwide Services</div>
          <button onClick={() => setBannerVisible(false)} className="opacity-70 hover:opacity-100 absolute right-6 text-lg">&times;</button>
        </div>
      )}
      <header className="w-full bg-white/80 dark:bg-[#232020]/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">`
  );
  
  headerContent = headerContent.replace(
    '</header>\n  )',
    '</header>\n    </div>\n  )'
  );
  
  fs.writeFileSync(headerPath, headerContent);
}

console.log("TLH specific components injected safely without breaking layout.");
