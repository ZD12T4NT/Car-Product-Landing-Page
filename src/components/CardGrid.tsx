'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  BarChart3,
  Bot,
  Globe,
  BugOff,
} from 'lucide-react';

const cardData = [
  {
    icon: (
      <Cpu
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'AI Processing',
    description: 'Leverage ultra-fast parallel AI computation for dynamic, real-time tasks.',
  },
  {
    icon: (
      <ShieldCheck
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'Secure Cloud',
    description: 'AI-driven security across your cloud stack with predictive threat detection.',
  },
  {
    icon: (
      <BarChart3
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'Live Insights',
    description: 'Stream big data into live dashboards with near-zero latency.',
  },
  {
    icon: (
      <Bot
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'Autonomous Ops',
    description: 'Deploy intelligent systems that act, adapt, and evolve without manual input.',
  },
  {
    icon: (
      <Globe
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'Web Endpoints',
    description: 'Deploy intelligent systems that act, adapt, and evolve without manual input.',
  },
  {
    icon: (
      <BugOff
        size={40}
        className="text-[var(--primary)] border border-[var(--primary)] rounded-full p-2"
      />
    ),
    title: 'Built-In Debugging',
    description: 'Deploy intelligent systems that act, adapt, and evolve without manual input.',
  },
];

export default function CardGrid() {
  return (
    <section className="w-full py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex flex-wrap -mx-4">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // stagger the animation based on index
                type: 'spring',
                stiffness: 80,
              }}
              viewport={{ once: true }}
            >
              <div className="border border-emerald-950 bg-gradient-to-tr from-[#0A0A0A] via-[#0A0A0A] to-emerald-900 backdrop-blur-sm transition duration-300 ease-in-out rounded-2xl p-6 h-full flex flex-col shadow-lg hover:shadow-[0_0_20px_#7EEE64]/40">
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-white text-base md:text-xl font-normal mb-2 tracking-wide">
                  {card.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
