'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StickyImage() {
  const ref = useRef(null);

  // Monitor scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // when image enters and leaves viewport
  });

  // Transform scale from 1 to 1.1 as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="sticky translate-y-[10%] top-0 h-[50vh] md:min-h-screen w-full z-0 overflow-hidden">
      <motion.div
        style={{ scale }}
        className="w-full md:h-full"
      >
        <Image
          src="/speakerOne.png"
          alt="Centered Image"
          fill
          className="object-contain object-center"
          priority
        />
      </motion.div>
    </div>
  );
}
