'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 pt-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        
        {/* Left Column */}
        <div className="md:col-span-2">
           {/* Logo */}
           <Link href="/">
            <Image
                src="/neonLogoTransparent.png"
                width={100}
                height={100}
                alt="Barber Logo"
                className="transition-transform hover:shadow-none hover:text-white hover:border-white scale-105 mb-4"
                />
          </Link>
          <p className="text-lg max-w-sm text-gray-400 mb-6">
            Building powerful web experiences with precision, creativity, and performance in mind.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:shadow-none hover:text-white hover:border-white text-[var(--primary)] transition border border-[var(--primary)] p-2 rounded-full shadow-[inset_0_0_5px_#7eee64]">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:shadow-none hover:text-white hover:border-white text-[var(--primary)] transition border border-[var(--primary)] p-2 rounded-full shadow-[inset_0_0_5px_#7eee64]">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:shadow-none hover:text-white hover:border-white text-[var(--primary)] transition border border-[var(--primary)] p-2 rounded-full shadow-[inset_0_0_5px_#7eee64]">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:shadow-none hover:text-white hover:border-white text-[var(--primary)] transition border border-[var(--primary)] p-2 rounded-full shadow-[inset_0_0_5px_#7eee64]">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Link Column 1 */}
        <div>
          <h4 className=" mb-4 text-white/50">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Link Column 2 */}
        <div>
          <h4 className=" mb-4 text-white/50">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">API</Link></li>
          </ul>
        </div>

        {/* Link Column 3 */}
        <div>
          <h4 className=" mb-4 text-white/50">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Status</Link></li>
          </ul>
        </div>

         {/* Link Column 4 */}
         <div>
          <h4 className=" mb-4 text-white/50">Jobs</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Status</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
