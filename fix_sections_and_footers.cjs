const fs = require('fs');
const path = require('path');

// 1. FIX SERVICES SECTION
const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Remove strict height
servicesContent = servicesContent.replace(
  'className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-white dark:bg-[#0a0a0a]',
  'className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center bg-white dark:bg-[#0a0a0a] py-12 lg:py-0'
);

// Remove the Footer Strip
const servicesFooterRegex = /\{\/\* Footer Strip \*\/\}\s*<div className="w-full border-t border-gray-200 dark:border-white\/10 bg-gray-50 dark:bg-\[#0a0a0a\]">[\s\S]*?<\/div>\s*<\/section>/;
servicesContent = servicesContent.replace(servicesFooterRegex, '</section>');
fs.writeFileSync(servicesPath, servicesContent);


// 2. FIX ABOUT SECTION (WhyUs)
const aboutPath = path.join(__dirname, 'src/features/Landing/components/WhyUsSection.jsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

aboutContent = aboutContent.replace(
  'className="relative w-full h-[100dvh] flex flex-col justify-center py-12 lg:py-16 bg-white dark:bg-[#0a0a0a]',
  'className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-white dark:bg-[#0a0a0a]'
);

// Remove Bottom Signature
const aboutFooterRegex = /\{\/\* Bottom Signature \*\/\}\s*<div className="hidden lg:flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-white\/10 pt-8 gap-4 mt-auto">[\s\S]*?<\/div>/;
aboutContent = aboutContent.replace(aboutFooterRegex, '');
fs.writeFileSync(aboutPath, aboutContent);


// 3. FIX HOW IT WORKS SECTION
const hiwPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let hiwContent = fs.readFileSync(hiwPath, 'utf8');

hiwContent = hiwContent.replace(
  'className="relative w-full h-[100dvh] bg-white dark:bg-[#0a0a0a]',
  'className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-20 bg-white dark:bg-[#0a0a0a]'
);

hiwContent = hiwContent.replace(
  'overflow-hidden flex flex-col pt-16 md:pt-20 lg:pt-0"',
  'flex flex-col pt-16 md:pt-20 lg:pt-0"'
);
fs.writeFileSync(hiwPath, hiwContent);


// 4. FIX WHY CHOOSE US SECTION
const choosePath = path.join(__dirname, 'src/features/Landing/components/WhyChooseUsSection.jsx');
let chooseContent = fs.readFileSync(choosePath, 'utf8');

chooseContent = chooseContent.replace(
  'className="relative w-full h-[100dvh] lg:h-[100dvh] flex flex-col lg:flex-row overflow-hidden border-t border-gray-200 dark:border-white/10"',
  'className="relative w-full min-h-[100dvh] h-auto flex flex-col lg:flex-row border-t border-gray-200 dark:border-white/10"'
);

// Make inner panels use flex-1 to auto-stretch instead of fixed percentages
chooseContent = chooseContent.replace(
  'className="w-full lg:w-1/2 h-[45%] lg:h-full',
  'className="w-full lg:w-1/2 flex-1 lg:h-auto min-h-[50vh] lg:min-h-[100dvh]'
);
chooseContent = chooseContent.replace(
  'className="w-full lg:w-1/2 h-[55%] lg:h-full',
  'className="w-full lg:w-1/2 flex-1 lg:h-auto min-h-[50vh] lg:min-h-[100dvh]'
);

// Remove the footer signature in WhyChooseUs
const chooseFooterRegex = /<div className="hidden lg:block mt-16 text-center border-t border-white\/10 pt-8">\s*<p className="text-sm font-serif italic text-gray-400">\s*Built on integrity\. Driven by justice\.\s*<\/p>\s*<\/div>/;
chooseContent = chooseContent.replace(chooseFooterRegex, '');

fs.writeFileSync(choosePath, chooseContent);

console.log("Removed all mini-footers and switched from strict h-[100dvh] to responsive min-h-[100dvh] to prevent cutoffs.");
