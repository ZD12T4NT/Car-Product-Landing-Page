'use client';

import { motion } from 'framer-motion';

export default function AiSplitSection() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 py-16 bg-[#0A0A0A] text-white flex flex-col md:flex-row items-end justify-between gap-10 lg:px-0">
      {/* Left Content */}
      <motion.div
        className="md:w-[75%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Pretitle */}
        <motion.span
          className="text-sm tracking-widest text-[var(--primary)] uppercase mb-2 inline-block border border-[var(--primary)] px-6 py-3 rounded-full bg-black/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          AI Powered Precision
        </motion.span>

        <h2 className="text-4xl lg:text-7xl font-normal leading-tight text-white">
          <span className="font-light text-[var(--primary)] italic">Batch Processing</span> Optimised for High-Volume Workloads
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Leverage edge computing, large language models, and continuous learning to fuel the next generation of automation, security, and insight.
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full md:w-[25%] flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <button className="inline-flex bg-transparent border border-[var(--primary)]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition w-full justify-center align-middle mx-auto">
          Explore the Platform
        </button>
      </motion.div>
    </section>
  );
}
