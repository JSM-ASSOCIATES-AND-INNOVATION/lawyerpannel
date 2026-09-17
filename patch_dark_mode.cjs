const fs = require('fs');
const path = require('path');

const replaceInFile = (file, replacements) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(new RegExp(search, 'g'), replace);
  }
  fs.writeFileSync(filePath, content);
};

// FeaturedInSection
replaceInFile('src/features/Landing/components/FeaturedInSection.jsx', [
  ['bg-white', 'bg-white dark:bg-dark'],
  ['border-gray-100', 'border-gray-100 dark:border-gray-800'],
  ['text-gray-400', 'text-gray-400 dark:text-gray-500'],
]);

// WhyUsSection
replaceInFile('src/features/Landing/components/WhyUsSection.jsx', [
  ['bg-gray-50', 'bg-gray-50 dark:bg-dark'],
  ['bg-white border border-gray-100', 'bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-gray-800'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-300'],
  ['bg-white p-4', 'bg-white dark:bg-gray-800 p-4'],
  ['text-gray-500', 'text-gray-500 dark:text-gray-400'],
]);

// ServicesSection
replaceInFile('src/features/Services/ServicesSection.jsx', [
  ['bg-white', 'bg-white dark:bg-dark'],
  ['border-gray-100', 'border-gray-100 dark:border-gray-800'],
  ['bg-amber-50', 'bg-amber-50 dark:bg-gray-800'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-300'],
]);

// HowItWorksSection
replaceInFile('src/features/HowItWorks/HowItWorksSection.jsx', [
  ['bg-gray-50', 'bg-gray-50 dark:bg-[#080b17]'],
  ['border-y border-gray-200', 'border-y border-gray-200 dark:border-gray-800'],
  ['bg-white border-2', 'bg-white dark:bg-gray-800 border-2'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-500', 'text-gray-500 dark:text-gray-400'],
  ['bg-gray-200', 'bg-gray-200 dark:bg-gray-800'],
]);

// TestimonialSection
replaceInFile('src/features/Testimonials/TestimonialSection.jsx', [
  ['bg-white', 'bg-white dark:bg-dark'],
  ['bg-gray-50 rounded-2xl', 'bg-gray-50 dark:bg-gray-800/50 rounded-2xl'],
  ['border-gray-100', 'border-gray-100 dark:border-gray-700'],
  ['text-gray-700', 'text-gray-700 dark:text-gray-200'],
  ['text-secondary', 'text-secondary dark:text-white'],
]);

// AdvocateSection
replaceInFile('src/features/Advocates/AdvocateSection.jsx', [
  ['bg-gray-50', 'bg-gray-50 dark:bg-[#080b17]'],
  ['bg-white rounded-2xl', 'bg-white dark:bg-gray-800 rounded-2xl'],
  ['border-gray-200', 'border-gray-200 dark:border-gray-700'],
  ['bg-amber-50', 'bg-amber-50 dark:bg-gray-700'],
  ['border-white', 'border-white dark:border-gray-800'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-500', 'text-gray-500 dark:text-gray-400'],
]);

// FAQSection
replaceInFile('src/features/FAQ/FAQSection.jsx', [
  ['bg-white', 'bg-white dark:bg-dark'],
  ['border-gray-200', 'border-gray-200 dark:border-gray-800'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-300'],
  ['border-gray-100', 'border-gray-100 dark:border-gray-800'],
]);

// SectionHeading
replaceInFile('src/shared/components/SectionHeading.jsx', [
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
]);

// Footer
replaceInFile('src/shared/layouts/Footer.jsx', [
  ['bg-gray-50', 'bg-gray-50 dark:bg-[#050814]'],
  ['border-gray-200', 'border-gray-200 dark:border-gray-800'],
  ['text-secondary', 'text-secondary dark:text-white'],
  ['text-gray-500', 'text-gray-500 dark:text-gray-400'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
]);

