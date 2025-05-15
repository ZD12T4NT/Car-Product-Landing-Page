'use client';

import { useEffect, useState } from 'react';

export default function ScrollBlur() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 w-full h-20 backdrop-blur-sm transition-opacity duration-300 z-50 ${atBottom ? 'opacity-0' : 'opacity-100'
        }`}
    />
  );
}
