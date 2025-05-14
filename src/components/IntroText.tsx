'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type IntroTextProps = {
  pretitle?: string;
  title: React.ReactNode;
  paragraph?: string;
  button?: string;
  className?: string;
};

const IntroText: React.FC<IntroTextProps> = ({
  pretitle,
  title,
  paragraph,
  button,
  className,
}) => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative z-10 flex items-center justify-center px-6">
        <div className="max-w-7xl text-center flex flex-col items-center">
          
          {/* Pretitle */}
          {pretitle && (
            <motion.span
              className="tracking-widest text-[var(--primary)] text-sm mb-2 px-6 py-3 border border-[var(--primary)] rounded-full bg-black/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {pretitle}
            </motion.span>
          )}

          {/* Main Heading */}
          <motion.h1
            className={`text-4xl lg:text-7xl font-normal text-white mb-4 leading-tight ${className || ''}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>

          {/* Paragraph */}
          {paragraph && (
            <motion.p
              className="text-lg text-white max-w-xl mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          )}

          {/* CTA Button */}
          {button && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/"
                className="inline-flex bg-transparent border border-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition justify-center align-middle mx-auto"
              >
                {button}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroText;
