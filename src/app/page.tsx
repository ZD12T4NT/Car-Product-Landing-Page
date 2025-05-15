
import Hero from '../components/Hero';
import SplitSection from '@/components/SplitTextSection';
import ImageFadeCarousel from '@/components/ImageFadeCarousel';
import AiSplitSection from '@/components/AISplitTextSection';
import CardGrid from '@/components/CardGrid';
import Accordion from '@/components/Accordion';
import SplitTextAndImage from '@/components/SplitTextAndImage';
import TextOverlaySection from '@/components/TextOverlaySection';
import StickyImage from '@/components/StickyImage';
import BlogSection from '@/components/BlogSection';
import { Airplay, AudioLines, Diamond, Paperclip, Speaker } from 'lucide-react';

const accordionItems = [
  {
    title: 'What is AI Optimization?',
    content: 'AI Optimization uses data and models to streamline operations, reduce waste, and improve accuracy.',
  },
  {
    title: 'How secure is the platform?',
    content: 'We use enterprise-grade encryption, automated threat detection, and continuous security audits.',
  },
  {
    title: 'Can I integrate this with my workflow?',
    content: 'Yes. Our API-first approach makes integration with any pipeline straightforward.',
  },
];

<Accordion items={accordionItems} />;


export default function SonicLandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <StickyImage />

      <TextOverlaySection />

      <SplitTextAndImage
      imageSrc="/speakerTwo.jpeg"
      imageAlt="Speaker Image"
      pretitle="The Perfect Sound,"
      pretitleIcon={<AudioLines />}
      title="Experience crystal-clear audio with deep bass and immersive sound."
      description="Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you're at home or on the go."
      buttonText="Buy now"
      buttonHref="/"
      reverse={false}
      />

      <SplitTextAndImage
      imageSrc="/speakerThree.png"
      imageAlt="Speaker Image"
      pretitle="Smart. Sleek. Powerful.,"
      pretitleIcon={<Speaker />}
      title="Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room."
      description="Designed for modern living, this speaker blends premium sound with intuitive controls. ."
      buttonText="Buy now"
      buttonHref="/"
      reverse={true}
      />

      <SplitSection 
        pretitle="Why Us?"
        icon={<Diamond/>}
        title="Trusted by Thousands, Engineered for Excellence"
        description="Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek design, our products are built to impress."/>

      <CardGrid />

      <SplitSection 
        pretitle="In Reality"
        icon={<Airplay/>}
        title="Timeless Elegance"
        description="Our platform delivers the tools you need to ship production-ready software with speed, precision, and style."/>

      <ImageFadeCarousel />

      <Accordion items={accordionItems} />

      <BlogSection />

      <AiSplitSection />

    </main>
  );
}
