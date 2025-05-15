'use client';

import { Paperclip } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Immersive Audio for the Next Gen',
    date: 'May 10, 2025',
    image: '/speakerBlogImage.jpeg',
  },
  {
    title: 'Engineering Minimal Interfaces',
    date: 'May 5, 2025',
    image: '/speakerBlogImageTwo.jpeg',
  },
  {
    title: 'Why Hardware Design Needs Emotion',
    date: 'April 29, 2025',
    image: '/speakerBlogImageThree.jpeg',
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white relative z-10">
      <div className="px-6 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <p className="align-middle flex text-sm tracking-widest text-black uppercase mb-2 border border-black/30 px-6 py-3 rounded-full w-fit">
              <Paperclip className="mr-3" />Insights
            </p>
            <h2 className="text-3xl lg:text-5xl font-normal text-black mt-7">Our Latest Blog Posts</h2>
          </div>
          <p className="text-lg leading-relaxed text-black">
            Stay updated on design breakthroughs, hardware philosophies, and product releases that shape the future of sound and simplicity.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
              <div className="relative w-full h-64 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-normal text-black my-5">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
