const fs = require('fs');
const path = require('path');

const heroPath = path.join(__dirname, 'src/features/Landing/components/HeroSection.jsx');

const heroContent = `
import React, { forwardRef } from 'react';
import { CreditCard, Landmark, PhoneOff, FileWarning, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../../shared/components/Button';
import logo from '../../../shared/assets/logo.png';

// --- ANIMATIONS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

const metricsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
  }
};

// --- COMPONENTS ---

const AnimatedHeadline = ({ text, className, style }) => {
  const words = text.split(" ");
  return (
    <h1 className={\`flex flex-wrap justify-center overflow-visible \${className}\`} style={style}>
      {words.map((word, idx) => (
        <motion.span 
          key={idx} 
          variants={wordVariants}
          className="inline-block mr-[0.25em] mb-[-0.15em] pb-[0.15em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

const HeroSection = forwardRef((props, ref) => {
  const quickLinks = [
    { id: 1, icon: CreditCard, title: 'Credit Card Dues', link: '#services' },
    { id: 2, icon: Landmark, title: 'Personal Loans', link: '#services' },
    { id: 3, icon: PhoneOff, title: 'Stop Harassment', link: '#services' },
    { id: 4, icon: FileWarning, title: 'Cheque Bounce', link: '#services' }
  ];

  return (
    <section 
      ref={ref} 
      id="home" 
      className="snap-section relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-between overflow-hidden !py-0 bg-white dark:bg-[#050814] transition-colors duration-500"
    >
      {/* BACKGROUND SCENE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        
        {/* Animated glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary/10 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[130px] opacity-80 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-60 animate-blob animation-delay-2000"></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Spacer for top navbar offset */}
      <div className="flex-shrink-0 h-[80px] w-full relative z-10"></div>

      {/* CONTENT FOREGROUND */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full max-w-[1400px] mx-auto flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 mt-[-40px]"
      >
        
        {/* Logo */}
        <motion.div variants={badgeVariants} className="mb-6">
          <img src={logo} alt="Lawyer Panel Logo" className="h-16 md:h-20 w-auto object-contain dark:brightness-0 dark:invert transition-all drop-shadow-md hover:scale-105 duration-300" />
        </motion.div>

        {/* Badge */}
        <motion.div 
          variants={badgeVariants}
          className="mb-8 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full border border-primary/30 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg text-primary"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00b33c]"></span>
          24/7 Expert Legal Support
        </motion.div>

        {/* Headline */}
        <div className="mb-6 w-full max-w-[1100px]">
          <AnimatedHeadline 
            text="Start your journey towards a" 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-secondary dark:text-white leading-[1.1] drop-shadow-xl" 
          />
          <AnimatedHeadline 
            text="stress-free life today." 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-primary dark:text-[#4ade80] leading-[1.1] drop-shadow-[0_0_20px_rgba(0,179,60,0.3)] mt-2" 
          />
        </div>

        {/* Paragraph Capsule */}
        <motion.div 
          variants={paragraphVariants}
          className="mb-10 backdrop-blur-xl rounded-full px-8 py-4 max-w-[700px] mx-auto shadow-xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10"
        >
          <p className="text-sm md:text-lg font-medium text-gray-700 dark:text-gray-300 drop-shadow-sm text-center">
            Manage loans and stop recovery harassment with India's trusted experts.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div 
          variants={buttonVariants}
          className="flex justify-center w-full"
        >
          <Button 
            variant="primary" 
            className="text-lg py-5 px-10 shadow-[0_0_30px_rgba(0,179,60,0.3)] hover:scale-105 transition-transform" 
            onClick={() => window.location.href='#loan-management'}
          >
            Explore Options <ArrowRight size={20} className="ml-1" />
          </Button>
        </motion.div>

      </motion.div>

      {/* QUICK LINKS STRIP (PCL Metrics Style) */}
      <motion.div 
        variants={metricsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full z-20 mb-8 px-4"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full h-auto md:h-[100px] rounded-3xl md:rounded-full backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-around py-4 md:py-0 px-8 relative overflow-hidden bg-white/60 dark:bg-[#0a1128]/60 border border-white/50 dark:border-white/10">
            
            {quickLinks.map((btn, idx) => {
              const Icon = btn.icon;
              return (
                <React.Fragment key={btn.id}>
                  <a href={btn.link} className="flex items-center gap-4 relative z-10 py-4 md:py-0 w-full md:w-auto justify-center group">
                    <div className="w-12 h-12 bg-white/50 dark:bg-white/10 rounded-full flex items-center justify-center text-secondary dark:text-gray-300 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-[15px] text-secondary dark:text-white group-hover:text-primary transition-colors tracking-tight">{btn.title}</h4>
                  </a>
                  {idx < quickLinks.length - 1 && (
                    <div className="hidden md:block w-px h-[40px] relative z-10 bg-gray-200 dark:bg-white/10"></div>
                  )}
                  {idx < quickLinks.length - 1 && (
                    <div className="block md:hidden h-px w-[80%] bg-gray-200 dark:bg-white/10 my-2"></div>
                  )}
                </React.Fragment>
              );
            })}

          </div>
        </div>
      </motion.div>

    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
`;

fs.writeFileSync(heroPath, heroContent.trim());
console.log('Hero section rebuilt exactly like PCL v6!');
