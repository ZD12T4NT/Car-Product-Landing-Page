"use client";

import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

export default function SplitSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[60vh] py-16 gap-8 items-center justify-between max-w-7xl mx-auto px-6 lg:px-0 bg-white relative z-10">
      {/* Left Side */}
      <motion.div
        className="w-full lg:w-3/5 text-black"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="align-middle flex text-sm tracking-widest text-[var(--primary)] uppercase mb-2 border border-[var(--primary)] px-6 py-3 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Diamond className="mr-2" />
          Why Us?
        </motion.span>

        <h2 className="text-4xl lg:text-7xl font-normal text-black">
         Trusted by Thousands, Engineered for Excellence
        </h2>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-2/5 text-black"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-6 text-lg leading-relaxed">
          Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek design, our products are built to impress. 
        </p>

        <motion.a
          href="#book"
          className="inline-flex bg-transparent border border-[var(--primary)] text-black px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition w-full justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore Templates
        </motion.a>
      </motion.div>
    </section>
  );
}
