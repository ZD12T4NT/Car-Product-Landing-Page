"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BurgerToggle from "./BurgerToggle";
import { ArrowRight } from 'lucide-react';


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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <>
      {/* Top Nav */}
      <div
        className={`px-6 lg:px-0 fixed top-0 z-50 w-full transform transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${lastScrollY > 50 ? "backdrop-blur-2xl shadow-md bg-black/25" : "bg-transparent"}`}
      >

        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center ">
          {/* Logo */}
          <Link href="/">
          <Image
              src="/neonLogoTransparent.png"
              width={56}
              height={56}
              alt="Barber Logo"
              className="transition-transform hover:scale-105"
            />
          </Link>

          <ul className="hidden md:flex space-x-8 text-lg font-normal tracking-wider backdrop-blur-lg border border-[var(--primary)] rounded-full px-7 py-2 h-full">
          {menuLinks.map((link) => (
            <li key={link.href} className="relative overflow-hidden">
              <Link
                href={link.href}
                className="group relative inline-block px-4 py-2 z-10 text-white"
              >
                <span className="relative z-20">{link.name}</span>

                {/* Hover Background */}
                <span
                  className="absolute inset-0 z-0 scale-x-0 origin-bottom bg-[var(--primary)] transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full"
                />
              </Link>
            </li>
          ))}
          </ul>


        {/* Log In Buttons */}
        <ul className="hidden md:flex space-x-6  tracking-wider uppercase">
            <li>
              <Link
                href='/'
                className="flex bg-transparent border border-[var(--primary)]  text-white px-7 py-2 items-center rounded-full hover:bg-[var(--primary)] hover:text-black transition h-full"
                  >
                    Log In
              </Link>
            </li>
            <li>
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 text-black bg-[var(--primary)] border border-[var(--primary)] rounded-full transition-colors duration-200 hover:bg-transparent hover:text-white h-full"
            >
              Sign Up
              <ArrowRight size={30} className="text-black group-hover:text-white group-hover:border-white transition border border-black rounded-full p-1" />
            </Link>
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
              className="fixed top-0 right-0 h-full w-3/4 z-40 p-6 text-white shadow-[0_0_40px_#7dee64] backdrop-blur-2xl"
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
