"use client";

import { motion } from "framer-motion";

type SplitSectionProps = {
  pretitle?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
};

export default function SplitSection({
  pretitle = "Why Us?",
  icon,
  title,
  description,
}: SplitSectionProps) {
  return (
    <section className=" py-10 md:py-16 bg-white relative z-10">
      {/* Left Side */}

      <div className="flex justify-center gap-8 items-end lg:justify-between flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 ">
      <motion.div
        className="w-full lg:w-1/2 text-black"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="align-middle flex text-sm tracking-widest text-black uppercase mb-2 border border-black/30 px-6 py-3 rounded-full w-fit"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {pretitle}
        </motion.span>

        <h2 className="text-3xl lg:text-5xl font-normal text-black mt-7">
          {title}
        </h2>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full lg:w-1/2 text-black"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-6 md:mb-0 text-lg leading-relaxed text-black">
          {description}
        </p>
      </motion.div>
      </div>
     
    </section>
  );
}
