'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const boxes = [
  {
    id: 0,
    title: 'Neural Networks',
    img: '/aiAbstract.jpg',
    description:
      'Neural networks are the foundation of deep learning, enabling machines to recognize patterns and make decisions with minimal human intervention.',
  },
  {
    id: 1,
    title: 'AI Ethics',
    img: '/aiBG.jpg',
    description:
      'As AI evolves, ethical concerns arise around data privacy, bias, and accountability. Responsible AI ensures these systems serve humanity fairly.',
  },
  {
    id: 2,
    title: 'Generative Models',
    img: '/aiFace.jpg',
    description:
      'Generative AI models like GANs and diffusion networks can create stunning visuals, deepfake videos, and synthetic voices — pushing the boundary of creativity.',
  },
  {
    id: 3,
    title: 'AI & Society',
    img: '/aiPyramid.jpg',
    description:
      'AI is reshaping industries, from healthcare to finance. Understanding its societal impact is key to building a more inclusive, intelligent future.',
  },
];

const InteractiveGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full lg:px-0 px-6 py-12 relative bg-black text-white max-w-7xl mx-auto">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl lg:text-7xl text-white font-normal">
          <span className="italic font-light text-[var(--primary)]">Built</span> With Modal
        </h2>
        <Link
          href="/"
          className="inline-flex bg-transparent border border-[var(--primary)]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition  justify-center align-middle "
        >
          View All
        </Link>
      </div>

      {/* MOBILE Slider View */}
      <div className="block md:hidden">
        <motion.div
          key={boxes[activeIndex].id}
          className="w-full aspect-square rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-xl cursor-pointer relative"
          onClick={() => {}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${boxes[activeIndex].img})`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 z-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:w-full before:h-full before:content-[''] before:top-0 before:left-0 before:z-10 p-4 flex flex-col justify-end">
            <h3 className="text-2xl mb-3 text-white font-normal z-10">
              {boxes[activeIndex].title}
            </h3>
            <p className="text-sm text-white/60 z-10">{boxes[activeIndex].description}</p>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP Grid View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {boxes.map((box, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={box.id}
              className={`aspect-square rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-xl cursor-pointer relative transition-transform duration-300 ${
                isActive ? 'scale-105 border-[1px] border-[var(--primary)]' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {/* Only render image if active */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${box.img})`,
                  }}
                />
              )}

              {/* Only show overlay when active */}
              {isActive && (
                <div className="absolute inset-0 z-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:w-full before:h-full before:content-[''] before:top-0 before:left-0 p-4 flex flex-col justify-end">
                  <h3 className="text-2xl mb-3 text-white font-normal z-10">{box.title}</h3>
                  <p className="text-sm text-white/60 z-10">{box.description}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="flex justify-between mt-6">
        <motion.div
          className="text-xl font-light tracking-tight text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {boxes[activeIndex].title}
        </motion.div>
        <div className="buttons gap-4 flex">
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev === 0 ? boxes.length - 1 : prev - 1))
            }
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowLeft
              size={24}
              className="text-[var(--primary)] group-hover:text-black transition"
            />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev === boxes.length - 1 ? 0 : prev + 1))
            }
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowRight
              size={24}
              className="text-[var(--primary)] group-hover:text-black transition"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGrid;
