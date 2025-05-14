'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AudioLines } from 'lucide-react';
import Button from './Button';

export default function SplitTextAndImage() {
  return (
    <section className="md:min-h-screen pt-20 md:pt-16 pb-10 flex items-center relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse md:gap-16 items-center justify-between w-full h-full">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="overflow-hidden relative aspect-square">
            <Image
              src="/speakerTwo.jpeg"
              alt="Speaker"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-1/2 mt-10 md:mt-0"
        >
       <motion.h2
        className="text-sm uppercase text-black mb-2 tracking-widest"
       >
        <span className='flex align-middle'><AudioLines className='mr-2' />The Perfect Sound&#44;</span>
        </motion.h2>

        <motion.h1
          className="text-3xl md:text-4xl font-normal mb-4 text-black"
        >
        Experience crystal-clear audio with deep bass and immersive sound. 
        </motion.h1>

        <motion.p className="text-lg text-black">
          Our smart speaker is designed to fill your space with rich&#44; high-fidelity sound—whether you're at home or on the go.
        </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-8"
          >
          <Button text="Buy now" variant="primary" href="/" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
