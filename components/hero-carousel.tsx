'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  
  {
    id: 1,
     title: 'Complete Electrical',
    highlight: 'Infrastructure',
    subtitle: 'Premium Components for Every Installation',
    description: 'Cable trays, lugs, conduits, circuit breakers, earthing systems, busbars, lightning arrestors, wiring devices, and inspection chambers',
    image: '/images/receptions.png',
    cta: 'View Protection Gear',
    href: '/products/circuit-breakers',
  },
  {
    id: 2,
    title: 'Cable Management',
    highlight: 'Excellence',
    subtitle: 'Complete Cable Tray, Ladder & Conduit Systems',
    description: 'Pre-galvanized and HDG cable trays, ladders, rigid and flexible conduits for organized cable routing and protection',
    image: '/images/villicable.png',
    cta: 'View Cable Solutions',
    href: '/products/cable-trays',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Changed to 4 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    // Restart autoplay after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
  <div className="w-full h-[90vh] min-h-[600px] max-h-[800px] flex">

  {/* LEFT SIDE (TEXT AREA) */}
  <div className="w-full lg:w-1/2 bg-red-700 text-white flex items-center">
    <div className="px-8 sm:px-12 lg:px-16 max-w-xl">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
        {slides[current].title}
        <br />
        <span className="text-white/90">
          {slides[current].highlight}
        </span>
      </h1>

      <p className="text-lg text-white/90 mb-6 leading-relaxed">
        {slides[current].description}
      </p>

      <Link
        href={slides[current].href}
        className="inline-flex items-center gap-2 border border-white px-6 py-3 font-bold hover:bg-white hover:text-red-700 transition"
      >
        {slides[current].cta}
        <ArrowRight size={18} />
      </Link>

    </div>
  </div>

  {/* RIGHT SIDE (IMAGE ONLY) */}
  <div className="hidden lg:block lg:w-1/2 relative">
    <Image
      src={slides[current].image}
      alt={slides[current].title}
      fill
      className="object-cover"
      priority
    />
  </div>
</div>
  );
}