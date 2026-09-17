const fs = require('fs');
const path = require('path');

// 1. Services Section Mobile Flush Scroll
const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Ensure section is 100dvh on mobile and flex-col
servicesContent = servicesContent.replace(
  'className="relative w-full min-h-[100dvh] flex flex-col',
  'className="relative w-full h-[100dvh] md:h-auto md:min-h-[100dvh] flex flex-col'
);

// Make right panel scrollable on mobile
servicesContent = servicesContent.replace(
  'className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-12 lg:py-24 lg:pl-12"',
  'className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-4 md:py-12 lg:py-24 lg:pl-12 overflow-y-auto flex-grow"'
);

// Reduce padding on left panel for mobile
servicesContent = servicesContent.replace(
  'className="w-full lg:w-[35%] flex flex-col justify-between py-12 lg:py-24 pr-0 lg:pr-16 lg:border-r border-gray-200 dark:border-white/10"',
  'className="w-full lg:w-[35%] flex flex-col justify-between py-6 md:py-12 lg:py-24 pr-0 lg:pr-16 lg:border-r border-gray-200 dark:border-white/10 flex-shrink-0"'
);

fs.writeFileSync(servicesPath, servicesContent);

// 2. How It Works Section Mobile Flush Scroll
const processPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let processContent = fs.readFileSync(processPath, 'utf8');

processContent = processContent.replace(
  'className="relative w-full bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10"',
  'className="relative w-full h-[100dvh] md:h-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10 overflow-hidden flex flex-col"'
);

processContent = processContent.replace(
  'className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row relative"',
  'className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row relative h-full"'
);

processContent = processContent.replace(
  'className="w-full md:w-[42%] md:sticky md:top-0 h-auto md:h-[100dvh] flex flex-col justify-center py-12 md:py-0 pr-0 md:pr-16 z-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]"',
  'className="w-full md:w-[42%] md:sticky md:top-0 flex-shrink-0 md:h-[100dvh] flex flex-col justify-center py-6 md:py-0 pr-0 md:pr-16 z-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]"'
);

processContent = processContent.replace(
  'className="w-full md:w-[58%] flex flex-col z-0 relative"',
  'className="w-full md:w-[58%] flex flex-col z-0 relative overflow-y-auto flex-grow"'
);

processContent = processContent.replace(
  'className="w-full h-auto min-h-[50vh] md:min-h-[100dvh] snap-center flex flex-col justify-center pl-0 md:pl-20 py-16 md:py-0 transition-opacity duration-700"',
  'className="w-full h-auto min-h-[40vh] md:min-h-[100dvh] snap-center flex flex-col justify-center pl-0 md:pl-20 py-8 md:py-0 transition-opacity duration-700"'
);

fs.writeFileSync(processPath, processContent);

console.log("Services and How It Works optimized for single slide internal scrolling on mobile.");
