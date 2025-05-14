'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/aiTextureBG.jpg',
    features: [
      'Predictive analytics in real-time',
      'Seamless data integration',
      'Automated anomaly detection',
    ],
    title: 'AI-Powered Insights',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero quos eius praesentium nostrum officia dicta sunt itaque debitis optio!'
  },
  {
    image: '/aiMotherboard.jpg',
    features: [
      'Intelligent threat prevention',
      '24/7 AI-driven monitoring',
      'Context-aware decision systems',
    ],
    title: 'Autonomous Security Systems',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero quos eius praesentium nostrum officia dicta sunt itaque debitis optio!'
  },
];

export default function SlideFadeFeature() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % slides.length);
  const handlePrev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="max-w-7xl mx-auto w-full lg:h-[100vh] flex flex-col bg-[#0A0A0A] text-white px-6 lg:px-0">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative h-96 md:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 pl-0 lg:pl-10 lg:p-10 gap-6">
          <ul className="space-y-4">
          {slides[index].features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 ">
              {/* Icon */}
              <ArrowRight className="text-[#7EEE64] mt-1 shrink-0" />

              {/* Text Block */}
              <div className="flex flex-col text-gray-300">
                <span className="text-2xl md:text-3xl font-medium">{feature}</span>
                <p className="text-sm opacity-70">{slides[index].desc}</p>
              </div>
            </li>
          ))}
        </ul>

        </div>
      </div>

      {/* Bottom Section: Title + Arrows */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl text-white/60">{slides[index].title}</h3>
          <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowLeft className="text-[var(--primary)] group-hover:text-black transition" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowRight className="text-[var(--primary)] group-hover:text-black transition" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
