"use client";

import { motion } from "framer-motion";
import { Search, Car, Mail } from "lucide-react";
import Button from "./Button";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Browse Our Elite Fleet",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum.",
    icon: <Search className="w-6 h-6 text-[#d4d414]" />,
  },
  {
    id: 2,
    title: "Pick Your Ideal Vehicle",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum.",
    icon: <Car className="w-6 h-6 text-[#d4d414]" />,
  },
  {
    id: 3,
    title: "Submit Your Enquiry",
    description:
      "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum.",
    icon: <Mail className="w-6 h-6 text-[#d4d414]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Left side (fixed content) */}
        <div className="md:sticky md:top-32 self-start">
          <h3 className="flex items-center text-sm font-semibold text-[#d4d414] uppercase mb-4">
            <span className="w-6 h-[2px] bg-[#d4d414] mr-2" />
            How It Works
          </h3>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Follow these simple steps to choose your ideal vehicle and drive
            away effortlessly.
          </h2>
          <Button text="Book Now" variant="tertiary" href="/" />
        </div>

        {/* Right side (steps with timeline) */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[#d4d414]" />

          <div className="space-y-12 ml-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-black border-2 border-[#d4d414] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#d4d414]" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-[#111] border border-white/10 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    {step.icon}
                    <h4 className="text-xl font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
