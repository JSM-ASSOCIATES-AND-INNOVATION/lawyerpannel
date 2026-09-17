const fs = require('fs');
const path = require('path');

const processPath = path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx');
let processContent = fs.readFileSync(processPath, 'utf8');

processContent = processContent.replace(
  "{ rootMargin: '-50% 0px -50% 0px' }",
  "{ threshold: 0.5 }"
);

fs.writeFileSync(processPath, processContent);
console.log("Observer fixed.");
