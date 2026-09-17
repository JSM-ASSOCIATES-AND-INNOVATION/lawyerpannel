const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Fix the height on desktop so it expands if necessary
servicesContent = servicesContent.replace(
  'className="relative w-full h-[100dvh] md:min-h-[100dvh]',
  'className="relative w-full h-[100dvh] md:h-auto md:min-h-[100dvh]'
);

fs.writeFileSync(servicesPath, servicesContent);
console.log("Fixed Services height overlap issue.");
