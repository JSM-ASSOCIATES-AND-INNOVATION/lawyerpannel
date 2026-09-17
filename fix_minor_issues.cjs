const fs = require('fs');
const path = require('path');

// 1. Fix LandingPage background
const landingPath = path.join(__dirname, 'src/features/Landing/LandingPage.jsx');
let landingContent = fs.readFileSync(landingPath, 'utf8');
landingContent = landingContent.replace('dark:bg-[#232020]', 'dark:bg-[#0a0a0a]');
fs.writeFileSync(landingPath, landingContent);

// 2. We need a better auto-scroll hook that pauses on touch/hover
const betterHook = `
  const REF_NAME = useRef(null);
  useEffect(() => {
    let interval;
    let isInteracting = false;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!isInteracting && REF_NAME.current && window.innerWidth < 1024) {
          const maxScroll = REF_NAME.current.scrollWidth - REF_NAME.current.clientWidth;
          if (REF_NAME.current.scrollLeft >= maxScroll - 10) {
            REF_NAME.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = REF_NAME.current.children[0]?.clientWidth || 300;
            REF_NAME.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3500);
    };

    startScroll();

    const handleInteractionStart = () => { isInteracting = true; };
    const handleInteractionEnd = () => { 
      isInteracting = false; 
      clearInterval(interval);
      startScroll();
    };

    const el = REF_NAME.current;
    if (el) {
      el.addEventListener('touchstart', handleInteractionStart, {passive: true});
      el.addEventListener('touchend', handleInteractionEnd, {passive: true});
      el.addEventListener('mouseenter', handleInteractionStart);
      el.addEventListener('mouseleave', handleInteractionEnd);
    }

    return () => {
      clearInterval(interval);
      if (el) {
        el.removeEventListener('touchstart', handleInteractionStart);
        el.removeEventListener('touchend', handleInteractionEnd);
        el.removeEventListener('mouseenter', handleInteractionStart);
        el.removeEventListener('mouseleave', handleInteractionEnd);
      }
    };
  }, []);
`;

function upgradeHook(filePath, refName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the exact block we want to replace
  const startStr = "const " + refName + " = useRef(null);";
  const endStr = "return () => clearInterval(interval);\n  }, []);";
  
  const startIndex = content.indexOf(startStr);
  const endIndex = content.indexOf(endStr);
  
  if (startIndex !== -1 && endIndex !== -1) {
    const finalEndIndex = endIndex + endStr.length;
    const oldBlock = content.substring(startIndex, finalEndIndex);
    const newBlock = betterHook.replace(/REF_NAME/g, refName).trim();
    
    content = content.replace(oldBlock, newBlock);
    fs.writeFileSync(filePath, content);
  }
}

upgradeHook(path.join(__dirname, 'src/features/Services/ServicesSection.jsx'), 'scrollRef');
upgradeHook(path.join(__dirname, 'src/features/HowItWorks/HowItWorksSection.jsx'), 'carouselRef');
upgradeHook(path.join(__dirname, 'src/features/Landing/components/WhyChooseUsSection.jsx'), 'chooseRef');

console.log("Fixed LandingPage background and upgraded auto-scroll hooks to pause on interaction.");
