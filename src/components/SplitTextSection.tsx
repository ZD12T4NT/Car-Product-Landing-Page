"use client";

import { motion } from "framer-motion";

export default function SplitSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[60vh] py-16 gap-8 items-center justify-between max-w-7xl mx-auto px-6 lg:px-0">
      {/* Left Side */}
      <motion.div
        className="w-full lg:w-3/5 text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="text-sm tracking-widest text-[var(--primary)] uppercase mb-2 inline-block border border-[var(--primary)] px-6 py-3 rounded-full bg-black/30"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powering high-performance
        </motion.span>

        <h2 className="text-4xl lg:text-7xl font-normal text-white">
          Scale To{" "}
          <span className="font-light text-[var(--primary)] italic">
            Hundreds of GPUs
          </span>{" "}
          In Seconds
        </h2>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-2/5 text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-6 text-lg leading-relaxed">
          Your next project deserves more than just a template. Combine style,
          speed, and clarity in a single click — all powered by a neon-charged
          design system built for creators.
        </p>

        <motion.a
          href="#book"
          className="inline-flex bg-transparent border border-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition w-full justify-center"
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
