import NavMenu from '@/components/nav-bar/NavMenu'
import './globals.css'
import { Sora, Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ScrollBlur from '@/components/ScrollBlur'


const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['100', '400', '700'] })

export const metadata = {
  title: "Immersive Sound | Simplified",
  description:
    "Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden ${sora.className} ${inter.className}`}
      >
        <NavMenu />
        {children}
        <Footer />
        <ScrollBlur />
      </body>
    </html>
  )
}
