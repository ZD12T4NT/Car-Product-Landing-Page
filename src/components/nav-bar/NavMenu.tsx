"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BurgerToggle from "./BurgerToggle";
import Button from "../Button";


const NavMenu = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const menuLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <>
      {/* Top Nav */}
      <div
        className={`px-6 fixed top-0 z-50 w-full transform transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${lastScrollY > 50 ? "backdrop-blur-2xl shadow-md bg-white" : "bg-transparent"}`}
      >

        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center ">
          {/* Logo */}
          <Link href="/">
          <Image
              src="/sonicLogo.svg"
              width={56}
              height={56}
              alt="Sonic Logo"
              className="transition-transform hover:scale-105"
            />
          </Link>

        <ul className="hidden md:flex space-x-6 text-sm font-bold tracking-wider uppercase">
          {menuLinks.map((link) => (
            <li key={link.href}>
            <Link
              href={link.href}
              className="group relative inline-block text-black/70 transition-colors duration-200"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black/70 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2" />
              <span className="absolute bottom-0 right-1/2 w-0 h-[2px] bg-black/70 transition-all duration-300 group-hover:w-full group-hover:translate-x-1/2" />
              {link.name}
            </Link>
            </li>
          ))}
        </ul>



        {/* Log In Buttons */}
        <ul className="hidden md:flex space-x-6  tracking-wider uppercase">
            <li>
           <Button text="Buy now" variant="secondary" href="/platform" />
            </li>
        </ul>

          {/* Mobile Menu Icon */}
          <BurgerToggle isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
      </div>

     {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 backdrop-blur-lg bg-black/70"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile nav drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full z-40 p-6 text-white  backdrop-blur-2xl"
            >
              <ul className="mt-24 space-y-6 font-light ">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group relative block py-2 transition duration-300"
                    >
                      <span className="text-3xl relative z-10 text-white group-hover:text-[var(--primary)] transition-colors">
                        {link.name}
                      </span>

                      {/* Animated bottom border */}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

             
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;
