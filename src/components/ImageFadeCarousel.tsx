"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/aiPyramid.jpg",
    title: "Neural Networks in Action",
  },
  {
    image: "/greenWavesTech.jpg",
    title: "Streaming Real-Time Intelligence",
  },
  {
    image: "/aiThreeDComputer.jpg",
    title: "Compute at the Edge",
  },
];


export default function ImageFadeCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-screen relative overflow-hidden max-w-7xl mx-auto px-6 lg:px-0">
      {/* Animated Image */}
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
            alt={slides[current].title}
            fill
            className="object-cover object-center rounded-lg"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay UI */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md text-white">
      <h3 className="text-xl font-light tracking-tight text-white/60">
      {slides[current].title}
      </h3>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowLeft className="text-[var(--primary)] group-hover:text-black transition" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-[var(--primary)] rounded-full transition hover:bg-[var(--primary)] group"
          >
            <ArrowRight className="text-[var(--primary)] group-hover:text-black transition" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
