'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Neural Networks',
      content:
        'Neural networks are the foundation of deep learning, enabling machines to recognize patterns and make decisions with minimal human intervention. This technology has evolved significantly over the years and continues to expand its applications.',
    },
    {
      title: 'AI Ethics',
      content:
        'As AI evolves, ethical concerns arise around data privacy, bias, and accountability. Responsible AI ensures these systems serve humanity fairly, taking into account fairness, transparency, and accountability in their design and implementation.',
    },
    {
      title: 'Generative Models',
      content:
        'Generative AI models like GANs and diffusion networks can create stunning visuals, deepfake videos, and synthetic voices. This technology is pushing the boundary of creativity and redefining artistic expression in the digital era.',
    },
    {
      title: 'AI & Society',
      content:
        'AI is reshaping industries, from healthcare to finance. Understanding its societal impact is key to building a more inclusive, intelligent future, where AI can help solve global challenges and improve lives.',
    },
  ];

  return (
    <section className="w-full px-6 py-12 relative bg-black text-white max-w-7xl mx-auto">
      {/* Tabs (scrollable on small screens) */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 min-w-max mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-sm sm:text-base font-medium whitespace-nowrap transition-all px-5 py-2 rounded-full ${
                activeTab === index
                  ? 'bg-[var(--primary)] text-black'
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl lg:text-5xl leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              {tabs[activeTab].content.substring(
                0,
                tabs[activeTab].content.indexOf('This') !== -1
                  ? tabs[activeTab].content.indexOf('This')
                  : tabs[activeTab].content.length
              )}
            </span>
            {tabs[activeTab].content.substring(
              tabs[activeTab].content.indexOf('This') !== -1
                ? tabs[activeTab].content.indexOf('This')
                : 0
            )}
          </p>

          <div className="text-lg font-medium text-white/50">
            {tabs[activeTab].title}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TabComponent;
