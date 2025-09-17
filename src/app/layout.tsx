import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Sora, Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import CustomCursor from '@/components/Cursor';

const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['100', '400', '700'] })

export const metadata = {
  title: "Immersive Sound | Simplified",
  description:
    "Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.",
};


const footerData = {
  footerText: 'The Perfect Sound, Anywhere',
  imageSrc: '/sonicFooter.svg',
  linkGroups: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Integrations', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'API', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { href: '#', icon: <Facebook size={18} /> },
    { href: '#', icon: <Twitter size={18} /> },
    { href: '#', icon: <Instagram size={18} /> },
    { href: '#', icon: <Linkedin size={18} /> },
  ],
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden m-5 bg-black ${sora.className} ${inter.className}`}
      >
        <NavMenu />
        <CustomCursor />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  )
}
