'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type CallToActionProps = {
  pretitle?: string;
  heading: React.ReactNode;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt?: string;
};

const CallToAction: React.FC<CallToActionProps> = ({
  pretitle,
  heading,
  paragraph,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt = 'CTA Image',
}) => {
  return (
    <section className="w-full">
      <motion.div 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.1, duration: 0.5 }}
       className="max-w-7xl shadow-[inset_0_0_40px_#7eee64] lg:shadow-[inset_0_0_60px_#7eee64] rounded-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12 lg:p-20 ">
        
        {/* Text Content */}
        <div>
          {pretitle && (
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm tracking-widest text-[var(--primary)] uppercase mb-2 inline-block border border-[var(--primary)] px-4 py-2 rounded-full bg-black/30">
              {pretitle}
            </motion.span>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl lg:text-7xl  font-normal mb-4 text-white">
            {heading}
          </motion.h2>

          <div className="mt-2">
          <p className="text-lg text-white/80 mb-6">{paragraph}</p>

          <Link
            href={buttonHref}
            className="inline-flex bg-transparent border border-[var(--primary)]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-black transition  justify-center align-middle "
          >
            {buttonText}
          </Link>
      </div>
        </div>

        {/* Image */}
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2, duration: 0.5 }}
         className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
