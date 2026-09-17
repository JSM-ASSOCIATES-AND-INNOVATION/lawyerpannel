const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'src/features/Landing/components/WhyUsSection.jsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

aboutContent = aboutContent.replace(
  'className="relative w-full min-h-[100dvh] h-auto lg:min-h-[100dvh]',
  'className="relative w-full h-[100dvh]'
);

aboutContent = aboutContent.replace(
  'py-16 lg:py-32',
  'py-12 lg:py-16'
);

aboutContent = aboutContent.replace(
  'gap-6 lg:gap-24',
  'gap-4 lg:gap-12'
);

fs.writeFileSync(aboutPath, aboutContent);
console.log("About shrunk to fit exactly in one slide.");
