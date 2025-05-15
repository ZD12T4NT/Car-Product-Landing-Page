'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

type FooterProps = {
  footerText: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: { href: string; icon: JSX.Element }[];
  imageSrc: string;
};


const Footer = ({ footerText, linkGroups, socialLinks, imageSrc }: FooterProps) => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Column */}
        <div className="flex gap-6 align-middle flex-row h-min overflow-hidden p-0 relative">
          <div>
            <Image src="/sonicLogoWhite.svg" alt="Logo" width={120} height={40} />
          </div>
          <div className="line bg-white/40 w-[1px] relative overflow-hidden h-auto self-stretch flex-[0, 0, auto]"></div>
          <p className="text-white text-[16px]">{footerText}</p>
        </div>

        {/* Dynamic Link Groups */}
        <div className="grid grid-cols-2 gap-10">
          {linkGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="mb-4 text-white/90 font-medium">{group.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="mt-20 relative w-full aspect-[4/1]">
        <Image
          src={imageSrc}
          alt="Decorative Footer"
          fill
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-md text-white/70 relative z-10">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map((social, idx) => (
            <Link key={idx} href={social.href} className="hover:text-white text-[var(--primary)] transition">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
