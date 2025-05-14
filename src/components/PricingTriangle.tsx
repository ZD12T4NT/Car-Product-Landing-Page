'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tiers = [
  {
    title: 'Enterprise',
    description: 'Custom solutions for large-scale businesses needing advanced control and performance.',
  },
  {
    title: 'Team',
    description: 'All features your team needs to build, test, and deploy faster together.',
  },
  {
    title: 'Starter',
    description: 'Get started quickly with core features, ideal for individuals and small projects.',
  },
];

const PricingTriangle = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-5 md:pt-10 py-24  text-white">
      {/* Top Row: Enterprise, Button, Team */}
      <div className="flex flex-col gap-5 md:gap-16 lg:flex-row items-center justify-center w-full max-w-7xl md:mb-20">
        <motion.div
          className="lg:w-64 p-6 rounded-xl text-center shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className="text-2xl text-white mb-2">Enterprise</h3>
          <p className="text-md text-gray-400">{tiers[0].description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex bg-transparent border border-[var(--primary)]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition w-full justify-center align-middle mx-auto"
          >
            View Pricing
          </Link>
        </motion.div>

        <motion.div
          className="lg:w-64 p-6 rounded-xl text-center shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl text-white mb-2">Team</h3>
          <p className="text-md text-gray-400">{tiers[1].description}</p>
        </motion.div>
      </div>

      {/* Bottom: Starter */}
      <motion.div
        className="lg:w-64 p-6 rounded-xl text-center shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="text-2xl text-white mb-2">Starter</h3>
        <p className="text-md text-gray-400">{tiers[2].description}</p>
      </motion.div>
    </section>
  );
};

export default PricingTriangle;
