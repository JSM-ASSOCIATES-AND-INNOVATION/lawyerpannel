const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'src/features/Landing/components/WhyUsSection.jsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

// Restore typography sizes for mobile so it is not tiny
aboutContent = aboutContent.replace(/text-\[8px\] md:text-xs/g, 'text-[10px] md:text-xs');
aboutContent = aboutContent.replace(/text-3xl md:text-5xl lg:text-\[64px\]/g, 'text-4xl md:text-5xl lg:text-[64px]');
aboutContent = aboutContent.replace(/text-\[10px\] md:text-base/g, 'text-sm md:text-base');
aboutContent = aboutContent.replace(/text-\[9px\] md:text-xs/g, 'text-[11px] md:text-xs');
aboutContent = aboutContent.replace(/w-6 h-6 lg:w-8 lg:h-8/g, 'w-8 h-8');

// Allow it to flow naturally on mobile instead of being restricted to h-[100dvh]
aboutContent = aboutContent.replace(
  'className="relative w-full h-auto lg:min-h-[100dvh]',
  'className="relative w-full min-h-[100dvh] h-auto lg:min-h-[100dvh]'
);

// Fix Padding
aboutContent = aboutContent.replace(
  'py-6 lg:py-32',
  'py-16 lg:py-32'
);

fs.writeFileSync(aboutPath, aboutContent);
console.log("About mobile sizes restored.");
