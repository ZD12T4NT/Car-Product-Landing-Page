'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

type SplitTextAndImageProps = {
  imageSrc: string;
  imageAlt?: string;
  pretitleIcon?: React.ReactNode;
  pretitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  reverse?: boolean;
};

export default function SplitTextAndImage({
  imageSrc,
  imageAlt = 'Image',
  pretitleIcon: PretitleIcon,
  pretitle,
  title,
  description,
  buttonText,
  buttonHref,
  reverse = false,
}: SplitTextAndImageProps) {
  return (
    <section className="md:min-h-screen pt-20 md:pt-16 pb-10 flex items-center relative bg-white">
      <div
        className={`relative max-w-7xl mx-auto px-6 flex flex-col ${
          reverse ? 'md:flex-row' : 'md:flex-row-reverse'
        } md:gap-16 items-center justify-between w-full h-full`}
      >
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
              src={imageSrc}
              alt={imageAlt}
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
          <motion.h2 className="text-sm uppercase text-black mb-2 tracking-widest flex items-center">
            {PretitleIcon && <span className="mr-2">{PretitleIcon}</span>}
            {pretitle}
          </motion.h2>

          <motion.h1 className="text-3xl md:text-4xl font-normal mb-4 text-black">
            {title}
          </motion.h1>

          <motion.p className="text-lg text-black">{description}</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-8"
          >
            <Button text={buttonText} variant="primary" href={buttonHref} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
