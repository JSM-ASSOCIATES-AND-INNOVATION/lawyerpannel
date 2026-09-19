const fs = require('fs');
const path = require('path');

const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
let content = fs.readFileSync(landingPath, 'utf8');

// Remove empty Authority & Trust Band block
content = content.replace(
  /\{\/\* Authority & Trust Band \*\/\}\s*<div className="flex flex-col w-full relative z-10 shadow-2xl">\s*<\/div>/,
  ''
);

// Remove extra blank lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

fs.writeFileSync(landingPath, content);
console.log("Cleaned up LandingPage.");
