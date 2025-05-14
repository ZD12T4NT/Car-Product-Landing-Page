// components/TextOverlaySection.tsx
'use client';

import Image from 'next/image';

export default function TextOverlaySection() {
  return (
    <section className="relative z-10 text-center px-4 pt-0 md:pt-12 py-24 bg-white">
      <div className="max-w-4xl mx-auto leading-relaxed">
        <p className='text-black text-lg md:text-[34px]'>
           Our latest innovation
          <Image
            src="/speakerImageText.png"
            alt="icon"
            width={44}
            height={24}
            className="inline mx-2 rounded-3xl object-cover"
          />
          in portable speakers
          combines superior sound quality
          <Image
            src="/speakerImageTextTwo.png"
            alt="icon"
            width={44}
            height={24}
            className="inline mx-2 object-cover rounded-3xl"
          />
          with unmatched durability
          that sync seamlessly across devices.
        </p>
      </div>
    </section>
  );
}
