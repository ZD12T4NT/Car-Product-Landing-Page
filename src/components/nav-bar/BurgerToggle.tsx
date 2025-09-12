"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const BurgerToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine color based on scroll and open state
  const isAtTopAndOpen = isOpen && !scrolling;
  const lineColor = isAtTopAndOpen ? "bg-white" : "bg-black";
  const lineClass = clsx("absolute h-0.5 w-6 transition-all", lineColor);

  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="relative md:hidden w-6 h-4 flex items-center justify-center focus:outline-none"
    >
      {/* Top line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          top: isOpen ? "50%" : "0%",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Middle line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ top: "50%" }}
      />

      {/* Bottom line */}
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          top: isOpen ? "50%" : "100%",
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default BurgerToggle;
