import React from 'react'
import { Award, ShieldCheck, Star } from 'lucide-react'
import LogoLoop from '../../shared/components/LogoLoop'

const awards = [
  { id: 1, title: "Top Global Legal Leader", issuer: "Legal/IP Gorilla", description: "Awarded for exceptional leadership in international law and protection." },
  { id: 2, title: "GC Powerlist India", issuer: "Legal 500, UK", description: "Recognized among the most influential and innovative legal counsel in India." },
  { id: 3, title: "Legal Counsel of the Year", issuer: "National Bar Association", description: "Honored for outstanding contribution to the legal profession." },
  { id: 4, title: "Excellence in Debt Recovery", issuer: "Banking Legal Forum", description: "Recognized for maintaining high ethical standards in resolution." }
];

const googleReviews = [
  { id: 1, text: "Advocate Satish and the team handled our corporate compliance seamlessly. Their deep understanding of the law and proactive approach saved us immense time. Truly a 5-star experience.", author: "Prakash V.", role: "Corporate Client" },
  { id: 2, text: "Exceptional service! They guided me through a highly complex property dispute with professionalism and sharp legal acumen. I felt confident every step of the way.", author: "Meera Krishnan", role: "Private Client" },
  { id: 3, text: "Highly recommended for their transparency and dedication. The way they strategize and execute is commendable. One of the best law firms.", author: "Rajan S.", role: "Business Owner" },
  { id: 4, text: "The team helped me stop constant recovery calls. Very professional and supportive throughout the process. I am incredibly grateful.", author: "Rohit S.", role: "Individual" },
];

const AwardCard = ({ award }) => (
  <div className="w-[85vw] sm:w-[350px] lg:w-[400px] flex flex-col p-6 lg:p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] group hover:border-[#00b33c]/50 transition-colors duration-500 rounded-none">
    <div className="flex items-center gap-3 mb-6">
      <Award size={20} className="text-[#00b33c]" strokeWidth={1.5} />
      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">{award.issuer}</span>
    </div>
    <h4 className="font-serif text-xl text-gray-900 dark:text-white mb-4 transition-colors">"{award.title}"</h4>
    <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed transition-colors">{award.description}</p>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="w-[85vw] sm:w-[350px] lg:w-[400px] flex flex-col p-6 lg:p-8 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] group hover:bg-white dark:hover:bg-[#0a0a0a] transition-colors duration-500 rounded-none h-full">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-[1px] font-bold text-sm tracking-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
        <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest ml-2 font-normal">Review</span>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} fill="#FBBC05" color="#FBBC05" />
        ))}
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-300 text-base font-light leading-[1.6] mb-8 flex-grow transition-colors italic">"{review.text}"</p>
    
    <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
      <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white flex items-center justify-center font-bold font-serif rounded-full transition-colors">
        {review.author.charAt(0)}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors">{review.author}</span>
        <div className="flex items-center text-[10px] text-[#00b33c] tracking-wider uppercase font-bold mt-1">
          <ShieldCheck size={10} className="mr-1" />
          Verified {review.role}
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {
  const awardLogos = awards.map(award => ({ node: <AwardCard award={award} />, title: award.title }));
  const reviewLogos = googleReviews.map(review => ({ node: <ReviewCard review={review} />, title: review.author }));

  return (
    <section id="reviews" className="relative w-full min-h-[100dvh] h-auto flex flex-col justify-center py-16 lg:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col relative h-full">
        
        {/* Awards Marquee Section */}
        <div className="w-full flex flex-col mb-16 lg:mb-24">
          <div className="px-4 lg:px-12 mb-8">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
              Awards & Recognition
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif leading-[1.1] text-gray-900 dark:text-white tracking-tight transition-colors">
              Excellence in Legal Practice.
            </h2>
          </div>
          <div className="w-full flex items-center relative min-h-[240px] py-4">
            <LogoLoop logos={awardLogos} speed={30} direction="left" gap={24} hoverSpeed={0} fadeOut />
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="w-full flex flex-col">
          <div className="px-4 lg:px-12 mb-8 flex w-full justify-end">
            <div className="text-left lg:text-right">
              <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-4 transition-colors">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif leading-[1.1] text-gray-900 dark:text-white tracking-tight transition-colors">
                Client Perspectives.
              </h2>
            </div>
          </div>
          <div className="w-full flex items-center relative min-h-[340px] py-4">
            <LogoLoop logos={reviewLogos} speed={35} direction="right" gap={24} hoverSpeed={0} fadeOut />
          </div>
        </div>

      </div>
    </section>
  )
}