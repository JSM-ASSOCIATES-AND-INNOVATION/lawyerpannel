const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Force strict h-[100dvh] and remove overflow
servicesContent = servicesContent.replace(
  'className="relative w-full h-[100dvh] md:h-auto md:min-h-[100dvh] flex flex-col',
  'className="relative w-full h-[100dvh] flex flex-col overflow-hidden'
);

// Reduce padding drastically so 2x2 grid always fits in 1 slide
servicesContent = servicesContent.replace(
  'py-4 lg:py-24',
  'py-4 lg:py-12'
);
servicesContent = servicesContent.replace(
  'py-2 lg:py-24',
  'py-2 lg:py-12'
);
servicesContent = servicesContent.replace(
  'mb-16',
  'mb-8 lg:mb-12'
);
servicesContent = servicesContent.replace(
  'mb-10',
  'mb-6'
);
servicesContent = servicesContent.replace(
  'mt-16',
  'mt-8 lg:mt-12'
);
servicesContent = servicesContent.replace(
  'h-[320px] lg:h-auto',
  'h-[280px] lg:h-auto'
);

fs.writeFileSync(servicesPath, servicesContent);
console.log("Services shrunk to fit exactly in one slide.");
