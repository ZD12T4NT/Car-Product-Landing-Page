'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import IntroText from './IntroText';

const marqueeItems = [
  { text: 'AI-Powered Automation' },
  { text: 'Real-time Analytics' },
  { text: 'Predictive Insights' },
  { text: 'Secure Cloud Systems' },
  { text: 'Autonomous Operations' },
  { text: 'Scalable Infrastructure' },
];

// Helper component to avoid duplication
const MarqueeTrack = ({
  direction = 'left',
}: {
  direction?: 'left' | 'right';
}) => {
  const baseX = direction === 'left' ? '100%' : '-100%';
  const toX = direction === 'left' ? '-100%' : '100%';

  return (
    <motion.div
      className="flex gap-12 whitespace-nowrap justify-center absolute w-full"
      initial={{ x: baseX }}
      animate={{ x: toX }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      }}
    >
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <div
          key={`${item.text}-${i}`}
          className="flex items-center gap-2 text-white text-lg px-4 py-3 font-normal border border-[var(--primary)] rounded-full"
        >
          {item.text}
          <ArrowRight
            size={30}
            className="text-black -rotate-45 bg-[var(--primary)] rounded-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

const MarqueeSlider = () => {
  return (
    <div className="w-full overflow-hidden relative py-12 bg-black">
      
      <IntroText
        pretitle="Flexible"
        title={
          <>
            Build <span className="italic text-[var(--primary)] font-light">Anything</span> With Modal
          </>
        }
      />

      {/* Top Marquee */}
      <div className="relative mt-6 h-[60px] overflow-hidden">
        <MarqueeTrack direction="left" />
      </div>

      {/* Bottom Marquee (Reverse) */}
      <div className="relative h-[60px] mt-8 overflow-hidden">
        <MarqueeTrack direction="right" />
      </div>
    </div>
  );
};

export default MarqueeSlider;
