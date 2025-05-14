
import SplitSection from '@/components/SplitTextSection';
import Hero from '../components/Hero';
import ImageFadeCarousel from '@/components/ImageFadeCarousel';
import AiSplitSection from '@/components/AISplitTextSection';
import SlideFadeFeature from '@/components/SlideFadeFeature';
import MarqueeSlider from '@/components/MarqueeSlider';
import IntroText from '@/components/IntroText';
import CardGrid from '@/components/CardGrid';
import PricingTriangle from '@/components/PricingTriangle';
import Accordion from '@/components/Accordion';
import InteractiveGrid from '@/components/InteractiveGrid';
import TabComponent from '@/components/TabComponent';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import CallToAction from '@/components/CallToAction';

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


export default function AILandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SplitSection />
      <ImageFadeCarousel />
      <AiSplitSection />
      <SlideFadeFeature />
      <MarqueeSlider />
      <IntroText
        pretitle="Next-Level Intelligence"
        title={
          <>
            Powerful <span className="italic text-[var(--primary)] font-light">Features</span> For Seamless Performance
          </>
        }
        paragraph="From infrastructure to inference, we give teams the tools to build, scale, and optimize AI-first systems across any industry."
      />

      <CardGrid />

      <IntroText
        className='md:max-w-xl '
        title={
          <>
            For <span className="italic text-[var(--primary)] font-light">Teams</span> Of All Scales
          </>
        }
      />
      <PricingTriangle />
      <IntroText
        pretitle="Secure Compliance"
        title={
          <>
            <span className="italic text-[var(--primary)] font-light">Security</span> And Governance
          </>
        }
        paragraph="From infrastructure to inference, we give teams the tools to build, scale, and optimize AI-first systems across any industry."

        button="Learn More"
      />
      <Accordion items={accordionItems} />
      <InteractiveGrid />
      <TabComponent />
      <IntroText 
        className='md:max-w-7xl mx-auto'
        pretitle="Join Modal&apos;s"
        title={
          <>
          
            <span className="italic text-[var(--primary)] font-light">Join</span> Modal&apos;s Developer Community
          </>
        }
        paragraph="From infrastructure to inference, we give teams the tools to build, scale, and optimize AI-first systems across any industry."

        button="Modal Community"
        />

        <TestimonialMarquee />
        <CallToAction
            pretitle="Get Started"
            heading={
              <>
              Unlock Your Team’s <span className="italic text-[var(--primary)] font-light">Potential</span>
              </>
            }
            paragraph="Streamline operations, accelerate delivery, and empower every department with AI-driven solutions built to scale."
            buttonText="Try it Free"
            buttonHref="/signup"
            imageSrc="/aiTextureBG.jpg"
          />

    </main>
  );
}
