
import Hero from '../components/Hero';
import SplitSection from '@/components/SplitTextSection';
import ImageFadeCarousel from '@/components/ImageFadeCarousel';
import AiSplitSection from '@/components/AISplitTextSection';
import CardGrid from '@/components/CardGrid';
import Accordion from '@/components/Accordion';
import SplitTextAndImage from '@/components/SplitTextAndImage';
import TextOverlaySection from '@/components/TextOverlaySection';
import StickyImage from '@/components/StickyImage';

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

      <SplitTextAndImage />

      <SplitTextAndImage />

      <SplitSection />

      <ImageFadeCarousel />

      <AiSplitSection />

      <CardGrid />

      <Accordion items={accordionItems} />
    
    </main>
  );
}
