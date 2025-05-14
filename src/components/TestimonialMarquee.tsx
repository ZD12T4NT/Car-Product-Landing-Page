'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';

const testimonials = [
    {
      name: 'Alice',
      text: 'This platform transformed our workflow. We were able to automate 70% of our manual tasks within weeks, freeing up our team to focus on innovation.',
      role: 'CEO',
      image: '/aiAbstract.jpg',
    },
    {
      name: 'Brian',
      text: 'Incredible support and intuitive design. Even our non-technical team members picked it up in no time — and the real-time analytics are a game-changer.',
      role: 'CTO',
      image: '/aiBG.jpg',
    },
    {
      name: 'Carmen',
      text: 'Our team doubled productivity thanks to the seamless integrations and responsive UX. It’s the rare tool that actually delivers more than it promises.',
      role: 'Product Lead',
      image: '/aiFace.jpg',
    },
    {
      name: 'Dan',
      text: 'Reliable and fast — exactly what we needed for scale. We’ve seen zero downtime and the performance has exceeded expectations across all departments.',
      role: 'Engineer',
      image: '/aiPyramid.jpg',
    },
    {
      name: 'Ella',
      text: 'A joy to use. Highly recommend it to any marketing team looking to streamline campaigns and track ROI without drowning in spreadsheets.',
      role: 'Marketing Director',
      image: '/aiAbstract.jpg',
    },
    {
      name: 'Finn',
      text: 'Clean UI and powerful features. Every release brings meaningful updates, and the feedback loop between users and devs is refreshingly tight.',
      role: 'Founder',
      image: '/aiBG.jpg',
    },
    {
      name: 'Grace',
      text: 'This is a game-changer for us. From ideation to launch, it’s helped us cut timelines in half and increase design output without sacrificing quality.',
      role: 'Designer',
      image: '/aiFace.jpg',
    },
  ];
  

const TestimonialItem = ({
    name,
    text,
    role,
    image,
    showBars = false,
  }: {
    name: string;
    text: string;
    role: string;
    image: string;
    showBars?: boolean;
  }) => (
    <div className="relative lg:w-[400px] min-w-[400px] max-w-[400px] h-[250px] bg-gradient-to-tr from-[#0A0A0A] via-[#0A0A0A] to-emerald-900  p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0  
">
  
      {showBars && (
        <>
          <div className="absolute left-0 top-1/2 h-[30px] w-[2px] bg-[var(--primary)] -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 h-[30px] w-[2px] bg-[var(--primary)] -translate-y-1/2" />
        </>
      )}
  
      <p className="mb-4 text-lg">&quot;{text}&quot;</p>
  
      <div className="flex items-center gap-3 mt-4">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border border-white/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-semibold text-sm">— {name}</p>
          <p className="text-xs text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
  
  

const MarqueeRow = ({
    reverse = false,
    children,
  }: {
    reverse?: boolean;
    children: React.ReactNode;
  }) => {
    const controls = useAnimation();
  
    useEffect(() => {
      const animate = async () => {
        while (true) {
          await controls.start({
            x: reverse ? '0%' : '-100%',
            transition: {
              duration: 100,
              ease: 'linear',
            },
          });
          controls.set({ x: '-50%' }); // Reset to center after each loop
        }
      };
      animate();
    }, [controls, reverse]);
  
    return (
      <div className="overflow-hidden w-full">
        <motion.div
          className={clsx('flex w-max', reverse && 'flex-row-reverse')}
          animate={controls}
          initial={{ x: '-50%' }} // Start from center
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  };
  

const TestimonialMarquee = () => {
  return (
    <section className="py-20">

        <MarqueeRow>
        {testimonials.map((t, idx) => (
            <TestimonialItem key={`top-${idx}`} {...t} showBars={idx % 2 === 0} />
        ))}
        </MarqueeRow>

        <div className="my-8" />

        <MarqueeRow reverse>
        {testimonials.map((t, idx) => (
            <TestimonialItem key={`bottom-${idx}`} {...t} showBars={idx % 2 === 0} />
        ))}
        </MarqueeRow>

    </section>
  );
};

export default TestimonialMarquee;
