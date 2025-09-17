'use client';

import { Paperclip } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Immersive Audio for the Next Gen',
    image: '/speakerBlogImage.jpeg',
  },
  {
    title: 'Engineering Minimal Interfaces',
    image: '/speakerBlogImageTwo.jpeg',
  },
  {
    title: 'Why Hardware Design Needs Emotion',
    image: '/speakerBlogImageThree.jpeg',
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-black relative z-10">
      <div className=" sm:py-32 px-6 md:px-12 lg:px-20 py-16 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 gap-6"
        >
            <div className="flex text-center items-center gap-2 text-[#d4d414] font-semibold uppercase tracking-wide text-sm md:text-base ">
            <span className="w-6 h-[3px] bg-[#d4d414]" />
            Insights
          </div>
            <h2 className="text-3xl lg:text-5xl font-normal text-white mt-2">Our Latest Blog Posts</h2>
        
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative w-full h-80 overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <h3 className="z-10 absolute bottom-2 left-2 text-2xl lg:text-3xl font-normal text-white my-5">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
