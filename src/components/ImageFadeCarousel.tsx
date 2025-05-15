'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    image: '/speakerCarouselImage.png',
    thumb: '/speakerCarouselImage.png',
  },
  {
    image: '/speakerCarouselImageTwo.png',
    thumb: '/speakerCarouselImageTwo.png',
  },
  {
    image: '/speakerCarouselImageThree.png',
    thumb: '/speakerCarouselImageThree.png',
  },
];

export default function ImageFadeCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full relative h-[50vh] lg:h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-white "/>
      <div className="relative h-full  mx-6 px-6 overflow-hidden ">
        
        {/* Image Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={slides[current].image}
              alt={`Slide ${current}`}
              fill
              className="object-cover object-center rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail selector */}
        <div className="absolute top-[35%] left-6 md:left-8 flex flex-col gap-4 z-10">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative w-20 h-12 overflow-hidden rounded-full border transition-all duration-300 ${
                current === index
                  ? 'border-white scale-105'
                  : 'border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={slide.thumb}
                alt={`Thumb ${index}`}
                fill
                className="object-cover object-center p-1"
              />
            </button>
          ))}
        </div>
      </div>
    </div>

  );
}
