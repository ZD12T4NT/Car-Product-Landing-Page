'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function AiSplitSection() {
  return (
    <section className=" bg-white text-black relative z-10 ">

      <div className="max-w-7xl mx-auto w-full px-6  py-16 flex justify-between flex-col md:flex-row md:gap-10 lg:gap-36 xl:gap-48">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        <h2 className="text-4xl lg:text-6xl font-normal leading-tight text-black relative z-10">
          Get your perfect speaker now!
        </h2>
          <button className="my-6 inline-flex text-white relative z-10 pl-9 pr-5 py-6 rounded-full bg-black hover:text-black hover:bg-white border hover:border-black transition w-fit justify-center align-middle mx-auto">
            Explore the Platform
            <ChevronRight className='ml-6 bg-white text-black border border-white rounded-full text-lg' />
          </button>

         
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl lg:text-5xl font-normal leading-tight text-black relative z-10">
          Bring every room together
        </h2>
        <p className="my-6 text-lg leading-relaxed text-black">
          Leverage edge computing, large language models, and continuous learning to fuel the next generation of automation, security, and insight.
        </p>
      </motion.div>
      </div>
      
    </section>
  );
}
