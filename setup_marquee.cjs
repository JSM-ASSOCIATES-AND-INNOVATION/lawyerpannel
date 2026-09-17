const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

if (!cssContent.includes('@keyframes marquee')) {
  cssContent += `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
  width: max-content;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`;
  fs.writeFileSync(cssPath, cssContent);
}

const featuredPath = path.join(__dirname, 'src/features/Landing/components/FeaturedInSection.jsx');

const featuredContent = `
import React from 'react'

export default function FeaturedInSection() {
  const logos = [
    "https://lawyerpanel.org/_astro/india-today.CrPwHZW3.png",
    "https://lawyerpanel.org/_astro/moneycontrol.BfZAVfv3.png",
    "https://lawyerpanel.org/_astro/founder-media.CCdGmSuf.png",
    "https://lawyerpanel.org/_astro/abp-live.D_YVfx4r.webp",
    "https://lawyerpanel.org/_astro/times-tech.BxuVz2L1.png",
    "https://lawyerpanel.org/_astro/the-hans-india.BYmwkxWT.png",
    "https://lawyerpanel.org/_astro/sunday-guardian.BqDDnih-.png",
    "https://lawyerpanel.org/_astro/the-banker-media.Jrj1P1y3.webp",
    "https://lawyerpanel.org/_astro/indian-startup-times.D6V5Oh9l.webp",
    "https://lawyerpanel.org/_astro/the-tribune.DJOrFr5F.webp",
    "https://lawyerpanel.org/_astro/the-print.BmEOkUdD.webp",
    "https://lawyerpanel.org/_astro/republic-world.BLt-ysKq.webp",
    "https://lawyerpanel.org/_astro/news-nation.BSifNKGl.webp",
    "https://lawyerpanel.org/_astro/business-standard.BNMm6HCb.webp"
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="snap-section bg-light dark:bg-dark py-12 md:py-20 border-b border-gray-100 dark:border-gray-800/50 overflow-hidden !py-0 !m-0 !h-auto flex-none snap-align-none">
      <div className="w-full mx-auto py-12">
        <div className="text-center mb-8">
          <span className="text-gray-400 dark:text-gray-500 font-semibold text-xs md:text-sm uppercase tracking-[0.2em]">Featured & Trusted By</span>
        </div>
        
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-light dark:from-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-light dark:from-dark to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-12 md:gap-24 px-12 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
            {marqueeLogos.map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt="Featured Publication" 
                className="h-10 md:h-14 w-auto object-contain dark:brightness-0 dark:invert grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
`;

fs.writeFileSync(featuredPath, featuredContent.trim());
console.log('Featured section updated with auto marquee and real logos!');
