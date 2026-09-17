const fs = require('fs');
const path = require('path');

// 1. FIX STICKY SCROLL: Remove overflow-x-hidden from LandingPage
const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
let landingContent = fs.readFileSync(landingPath, 'utf8');
landingContent = landingContent.replace('overflow-x-hidden', 'overflow-x-clip');
fs.writeFileSync(landingPath, landingContent);

// Helper for Auto-Scroll Hook string
const autoScrollHook = `
  const scrollRef = useRef(null);
  useEffect(() => {
    let interval;
    const startScroll = () => {
      interval = setInterval(() => {
        if (scrollRef.current && window.innerWidth < 1024) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3000);
    };
    startScroll();
    return () => clearInterval(interval);
  }, []);
`;

// 2. SERVICES SECTION: Mobile Carousel + Fit Slide
const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Ensure useRef and useEffect are imported
if (!servicesContent.includes('useRef')) {
  servicesContent = servicesContent.replace("import React from 'react'", "import React, { useRef, useEffect } from 'react'");
}

// Add the hook before return
servicesContent = servicesContent.replace(
  'return (',
  autoScrollHook + '\n  return ('
);

// Fix Mobile Heights and Paddings
servicesContent = servicesContent.replace(
  'className="relative w-full h-[100dvh] md:h-auto md:min-h-[100dvh] flex flex-col bg-white dark:bg-[#0a0a0a]',
  'className="relative w-full h-[100dvh] md:min-h-[100dvh] flex flex-col bg-white dark:bg-[#0a0a0a]'
);

servicesContent = servicesContent.replace(
  'className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex-grow flex flex-col lg:flex-row relative z-10"',
  'className="max-w-[1440px] mx-auto w-full px-4 lg:px-12 flex-grow flex flex-col lg:flex-row relative z-10 h-full pt-20 lg:pt-0"'
);

// Reduce left panel height on mobile
servicesContent = servicesContent.replace(
  'className="w-full lg:w-[35%] flex flex-col justify-between py-6 md:py-12 lg:py-24 pr-0 lg:pr-16 lg:border-r border-gray-200 dark:border-white/10 flex-shrink-0"',
  'className="w-full lg:w-[35%] flex flex-col justify-center py-2 lg:py-24 pr-0 lg:pr-16 lg:border-r border-gray-200 dark:border-white/10 flex-shrink-0"'
);

// Convert Right Panel grid to Horizontal Carousel on Mobile
servicesContent = servicesContent.replace(
  'className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 py-4 md:py-12 lg:py-24 lg:pl-12 overflow-y-auto flex-grow"',
  'ref={scrollRef} className="w-full lg:w-[65%] flex lg:grid grid-flow-col lg:grid-cols-2 lg:grid-flow-row gap-4 lg:gap-8 py-4 lg:py-24 lg:pl-12 overflow-x-auto lg:overflow-visible snap-x snap-mandatory flex-grow items-center hide-scrollbar"'
);

// Make cards snap-center and fixed width on mobile
servicesContent = servicesContent.replace(
  'className="group relative flex flex-col p-8',
  'className="group relative flex flex-col p-6 lg:p-8 min-w-[85vw] lg:min-w-0 h-[320px] lg:h-auto snap-center'
);

fs.writeFileSync(servicesPath, servicesContent);

// 3. HOW IT WORKS SECTION: Mobile Carousel + Fix Sticky
const processPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let processContent = fs.readFileSync(processPath, 'utf8');

// Ensure useRef and useEffect are imported (already there)
processContent = processContent.replace(
  'const scrollRef = useRef(null);',
  'const carouselRef = useRef(null);'
);

processContent = processContent.replace(
  'return (',
  autoScrollHook.replace(/scrollRef/g, 'carouselRef') + '\n  return ('
);

// Make sure it doesn't have overflow-hidden breaking sticky, except maybe x on mobile
processContent = processContent.replace(
  'className="relative w-full h-[100dvh] md:h-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10 overflow-hidden flex flex-col"',
  'className="relative w-full h-[100dvh] md:min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500 border-t border-gray-200 dark:border-white/10 flex flex-col"'
);

// Reduce left panel padding on mobile
processContent = processContent.replace(
  'className="w-full md:w-[42%] md:sticky md:top-0 flex-shrink-0 md:h-[100dvh] flex flex-col justify-center py-6 md:py-0 pr-0 md:pr-16 z-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]"',
  'className="w-full md:w-[42%] md:sticky md:top-0 flex-shrink-0 md:h-[100dvh] flex flex-col justify-center pt-24 md:py-0 pr-0 md:pr-16 z-10 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]"'
);

// Convert Right Panel to Horizontal Carousel on Mobile
processContent = processContent.replace(
  'className="w-full md:w-[58%] flex flex-col z-0 relative overflow-y-auto flex-grow"',
  'ref={carouselRef} className="w-full md:w-[58%] flex flex-row md:flex-col z-0 relative overflow-x-auto md:overflow-visible snap-x snap-mandatory flex-grow hide-scrollbar"'
);

// Make steps fit horizontally on mobile
processContent = processContent.replace(
  /className="w-full h-auto min-h-\[40vh\] md:min-h-\[100dvh\] snap-center flex flex-col justify-center pl-0 md:pl-20 py-8 md:py-0 transition-opacity duration-700"/g,
  'className="min-w-[85vw] md:w-full h-[50vh] md:min-h-[100dvh] snap-center flex flex-col justify-center pl-4 md:pl-20 py-0 transition-opacity duration-700"'
);

fs.writeFileSync(processPath, processContent);

// 4. WHY CHOOSE US SECTION: Mobile Carousel + Fit Slide
const choosePath = path.join(__dirname, 'src/features/Landing/components/WhyChooseUsSection.jsx');
let chooseContent = fs.readFileSync(choosePath, 'utf8');

if (!chooseContent.includes('useRef')) {
  chooseContent = chooseContent.replace("import React from 'react'", "import React, { useRef, useEffect } from 'react'");
}

chooseContent = chooseContent.replace(
  'return (',
  autoScrollHook.replace(/scrollRef/g, 'chooseRef') + '\n  return ('
);

chooseContent = chooseContent.replace(
  'className="relative w-full lg:h-[100dvh] flex flex-col lg:flex-row overflow-hidden border-t border-gray-200 dark:border-white/10"',
  'className="relative w-full h-[100dvh] lg:h-[100dvh] flex flex-col lg:flex-row overflow-hidden border-t border-gray-200 dark:border-white/10"'
);

// Left Panel Padding
chooseContent = chooseContent.replace(
  'className="w-full lg:w-1/2 h-full bg-[#F9F8F6] flex flex-col justify-between p-8 lg:p-24 relative z-10 transition-colors duration-500"',
  'className="w-full lg:w-1/2 h-[45%] lg:h-full bg-[#F9F8F6] flex flex-col justify-center lg:justify-between p-6 pt-24 lg:p-24 relative z-10 transition-colors duration-500"'
);

// Hide metrics on small mobile to save space
chooseContent = chooseContent.replace(
  'className="flex flex-col gap-6 mt-16 lg:mt-0"',
  'className="hidden lg:flex flex-col gap-6 mt-16 lg:mt-0"'
);

// Right Panel Carousel
chooseContent = chooseContent.replace(
  'className="w-full lg:w-1/2 h-full bg-[#07111F] flex flex-col p-8 lg:p-24 relative z-10 transition-colors duration-500 border-t lg:border-t-0 lg:border-l border-white/10"',
  'className="w-full lg:w-1/2 h-[55%] lg:h-full bg-[#07111F] flex flex-col p-4 lg:p-24 relative z-10 transition-colors duration-500 border-t lg:border-t-0 lg:border-l border-white/10"'
);

chooseContent = chooseContent.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 flex-grow"',
  'ref={chooseRef} className="flex lg:grid lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-12 flex-grow overflow-x-auto lg:overflow-visible snap-x snap-mandatory items-center hide-scrollbar"'
);

chooseContent = chooseContent.replace(
  'className="flex flex-col group"',
  'className="flex flex-col group min-w-[70vw] lg:min-w-0 snap-center px-4 lg:px-0"'
);

// Hide footer statement on mobile to fit
chooseContent = chooseContent.replace(
  'className="mt-16 text-center border-t border-white/10 pt-8"',
  'className="hidden lg:block mt-16 text-center border-t border-white/10 pt-8"'
);

fs.writeFileSync(choosePath, chooseContent);

// Add Global hide-scrollbar CSS
const indexCssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(indexCssPath, 'utf8');
if (!cssContent.includes('hide-scrollbar')) {
  cssContent += `
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;
  fs.writeFileSync(indexCssPath, cssContent);
}

console.log("Mobile fixed: Horizontal carousels with auto-scroll and perfect slide fit. Sticky scroll restored on desktop.");
