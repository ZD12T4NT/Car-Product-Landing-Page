'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
  <div className='m-4 p-4 max-w-7xl mx-auto border relative rounded-2xl border-white/20 px-6 lg:px-0'>
       {/* Background Image */}
       <div className="absolute inset-0 z-0 ">
     <div className="w-full h-full" />
     <div
       className="absolute rounded-2xl inset-0 z-0 bg-cover bg-center "
       style={{ backgroundImage: "url('/aiAbstract.jpg')" }}
     />
   </div>
    <div className="w-full lg:p-16 text-white  relative">
       
      {items.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div
            key={index}
            className={`p-6 mb-2 rounded-md backdrop-blur-lg transition-all duration-300 ${
              isOpen
                ? 'shadow-[inset_0_0_20px_#7eee64]'
                : 'shadow-none'
            }`}
            
          >
            <button
              className="flex items-center justify-between w-full text-left text-lg font-medium focus:outline-none rounded-md"
              onClick={() => toggle(index)}
            >
              <span className="text-3xl">{item.title}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <Plus className={`w-10 h-10 
                ${
                  isOpen 
                  ? 'border border-[var(--primary)] text-[var(--primary)] rounded-full p-2' 
                  : 'border-none p-2'}`}/>
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
                  <div className="pt-3 text-sm text-gray-300 lg:max-w-md">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
        
        
      })}
    </div>
  </div>
  );
};

export default Accordion;
