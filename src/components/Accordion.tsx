'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative z-10 grid lg:grid-cols-2 gap-10 bg-transparent text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-black">Welcome to Beyond FAQ!</p>
            <h2 className="text-3xl lg:text-5xl font-normal text-black mt-7">
              Everything You Need to Know About Our Speakers
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-black">
              Explore the common questions users have about our platform. We’re here to simplify the complex with clear and concise answers.
            </p>
          </div>

          {/* Accordion */}
          <div>
            {items.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className="border-b border-black/10 py-4"
                >
                  <button
                    className="flex items-center justify-between w-full text-left text-lg font-medium focus:outline-none"
                    onClick={() => toggle(index)}
                  >
                    <span className="text-2xl lg:text-3xl font-normal text-black mt-7">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <Minus className="w-8 h-8 text-black transition-all duration-300" />
                      ) : (
                        <Plus className="w-8 h-8 text-black transition-all duration-300" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: 'auto', opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 text-base text-gray-700">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;
