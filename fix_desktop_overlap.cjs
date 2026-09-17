const fs = require('fs');
const path = require('path');

const processPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let processContent = fs.readFileSync(processPath, 'utf8');

// Fix the height on desktop so it expands to contain all 6 cards
processContent = processContent.replace(
  'className="relative w-full h-[100dvh] md:min-h-screen bg-white dark:bg-[#0a0a0a]',
  'className="relative w-full h-[100dvh] md:h-auto bg-white dark:bg-[#0a0a0a]'
);

fs.writeFileSync(processPath, processContent);
console.log("Fixed height overlap issue.");
