const fs = require('fs');
const path = require('path');

// Fix Services Section
const servicesPath = path.join(__dirname, 'src/features/Services/ServicesSection.jsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
servicesContent = servicesContent.replace(/min-w-\[85vw\] lg:min-w-0/g, 'shrink-0 min-w-[85vw] lg:min-w-0');
fs.writeFileSync(servicesPath, servicesContent);

// Fix HowItWorks Section
const processPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let processContent = fs.readFileSync(processPath, 'utf8');
processContent = processContent.replace(/min-w-\[85vw\] md:w-full/g, 'shrink-0 min-w-[85vw] md:w-full');
// Also fix rootMargin for mobile observer if possible? The observer is currently vertical.
// Just setting shrink-0 prevents overlapping.
fs.writeFileSync(processPath, processContent);

// Fix WhyChooseUs Section
const choosePath = path.join(__dirname, 'src/features/Landing/components/WhyChooseUsSection.jsx');
let chooseContent = fs.readFileSync(choosePath, 'utf8');
chooseContent = chooseContent.replace(/min-w-\[70vw\] lg:min-w-0/g, 'shrink-0 min-w-[70vw] lg:min-w-0');
fs.writeFileSync(choosePath, chooseContent);

console.log("Added shrink-0 to all mobile carousel items to completely prevent overlapping.");
