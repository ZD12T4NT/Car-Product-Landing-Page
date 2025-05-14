'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden ">
  
      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen md:min-h-[60vh] pt-12 md:pt-40 flex items-center justify-center px-6 max-w-7xl mx-auto">
        <div className="max-w-7xl text-center flex flex-col items-center">
      
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl xl:text-8xl text-black mb-4 leading-tight font-normal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
              Immersive Sound, Simplified
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-black max-w-xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
              >
          Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
          </motion.p>
           <Button text="Buy now" variant="primary" href="/platform" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
