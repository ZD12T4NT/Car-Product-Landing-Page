"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { id: 1, name: "Alice", role: "CEO", text: "This service is amazing. It changed my business completely." },
  { id: 2, name: "Bob", role: "Designer", text: "The design quality is top notch. Highly recommended!" },
  { id: 3, name: "Charlie", role: "Developer", text: "Fast, reliable, and elegant. Everything I need in one place." },
  { id: 4, name: "Dana", role: "Manager", text: "Our team efficiency skyrocketed thanks to this tool." },
  { id: 5, name: "Eli", role: "Freelancer", text: "I love how smooth and intuitive it feels." },
  { id: 6, name: "Fiona", role: "Marketer", text: "The growth we’ve seen has been incredible since switching." },
];

export default function TestimonialParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms: each column moves at a different rate
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="relative w-full bg-black py-32 overflow-hidden">
                {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center gap-6 max-w-md mx-auto pb-20"
        >
            <div className=" flex text-center items-center gap-2 text-[#d4d414] font-semibold uppercase tracking-wide text-sm md:text-base ">
            <span className="w-6 h-[3px] bg-[#d4d414]" />
            Testimonials
          </div>
            <h2 className="text-3xl lg:text-5xl font-normal text-white mt-2">Heartfelt Reviews By Rydex Drivers</h2>
        
        </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="space-y-8">
          {testimonials.slice(0, 2).map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full md:h-[300px]"
            >
              <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
              <div className="text-sm text-[#D4D414]">{t.name} — {t.role}</div>
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="space-y-8">
          {testimonials.slice(2, 4).map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full md:h-[300px]"
            >
              <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
              <div className="text-sm text-[#D4D414]">{t.name} — {t.role}</div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="space-y-8">
          {testimonials.slice(4, 6).map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg w-full md:h-[300px]"
            >
              <p className="text-lg text-white/80 mb-4">“{t.text}”</p>
              <div className="text-sm text-[#D4D414]">{t.name} — {t.role}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
