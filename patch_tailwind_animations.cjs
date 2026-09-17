const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'tailwind.config.js');
let config = fs.readFileSync(configPath, 'utf8');

const keyframes = `
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      },
      animation: {
        blob: "blob 7s infinite"
      },
      colors: {
`;
config = config.replace('colors: {', keyframes);
fs.writeFileSync(configPath, config);
console.log('Animations patched');
