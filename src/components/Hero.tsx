'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:w-full before:h-full before:content-[''] before:top-0 before:left-0 before:z-10">
        <div className="w-full h-full" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/aiTextureBG.jpg')" }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 max-w-7xl mx-auto">
        <div className="max-w-7xl text-center flex flex-col items-center">
      
          {/* Pretitle */}
          <motion.span
            className="text-sm tracking-widest text-[var(--primary)] uppercase mb-2 inline-block border border-[var(--primary)] px-6 py-3 rounded-full bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Powering AI
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl xl:text-8xl text-white mb-4 leading-tight font-normal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
              High-Performance <span className='italic text-[var(--primary)] font-extralight inline'>AI Infrastructure</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-white max-w-xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
              >
          Scalable&apos; cost-efficient&apos;and full managed serverless cloud for AI&apos; ML&apos; and data applications-optimized for developers&apos; enabling seamless deployment&apos; automation&apos; security&apos; and real-time dataprocessing.
          </motion.p>
          <div className="flex">
            
                {/* Call-to-Action Button */}
                <motion.a
                  href="#book"
                  className="inline-block bg-[var(--primary)]  text-[#010201] px-6 py-3 rounded-full font-semibold hover:bg-transparent border border-[var(--primary)] hover:text-white transition mr-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#book"
                  className="inline-block bg-transparent border border-[var(--primary)]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Book a Demo
                </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
