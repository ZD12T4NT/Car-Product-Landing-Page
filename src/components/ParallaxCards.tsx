"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  { id: 1, title: "Rapt Horizon", description: "Velox", image: "/mustangOne.webp" },
  { id: 2, title: "Velocit Crest", description: "Aurion", image: "/mustangTwo.webp" },
  { id: 3, title: "Xplorer Glide", description: "Velox", image: "/mercedesOne.webp" },
  { id: 4, title: "Glide Vortex", description: "Aurion", image: "/dodgeViper.webp" },
];

const stats = [
  { id: 1, name: "Daily Rental", value: "$130" },
  { id: 2, name: "Mileage", value: "2,100 KM" },
  { id: 3, name: "Horsepower", value: "990 HP" },
  { id: 4, name: "Engine", value: "6.5 L" },
];

export default function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] w-full bg-black px-6 md:px-12 lg:px-20"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => {
          let y, opacity, scale;

          if (index === 0) {
            // First card always visible
            y = "0%";
            opacity = 1;
            scale = 1;
          } else {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
            opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
          }

          return (
            <motion.div
              key={card.id}
              style={{ y, opacity, scale, zIndex: index }}
              className="absolute h-[70vh] flex items-center justify-center rounded-3xl shadow-2xl w-full "
            >
              <div
                className="relative w-full h-full rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col items-start text-white p-10 justify-between overflow-hidden"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                <p className="text-lg drop-shadow-lg relative z-10">
                  {card.description}
                </p>

                <h2 className="text-4xl font-bold mb-4 drop-shadow-lg relative z-10">
                  {card.title}
                </h2>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 relative z-10">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-start">
                      <dd className="text-4xl md:text-2xl font-semibold text-white">
                        {stat.value}
                      </dd>
                      <dt className="text-base text-white/50">{stat.name}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
