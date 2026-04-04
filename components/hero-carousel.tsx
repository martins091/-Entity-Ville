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
    image: '/images/villibg.png',
    cta: 'Explore All Products',
    href: '/products',
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
  {
    id: 3,
    title: 'Power Distribution',
    highlight: '& Protection',
    subtitle: 'Circuit Breakers, Busbars & Earthing Systems',
    description: 'ABB, Schneider, Siemens breakers, tinned copper busbars, and complete earthing solutions for electrical safety',
    image: '/images/receptions.png',
    cta: 'View Protection Gear',
    href: '/products/circuit-breakers',
  },
  {
    id: 4,
    title: 'Safety &',
    highlight: 'Surge Protection',
    subtitle: 'Lightning Arrestors & Wiring Devices',
    description: 'Indelec lightning arrestors, premium switches, sockets, and LED lighting for complete electrical installations',
    image: '/images/villibg.png',
    cta: 'View Safety Products',
    href: '/products/lightning-arrestors',
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
    <div
      className="relative w-full h-[90vh] min-h-[600px] max-h-[800px] bg-gradient-to-r from-blue-50 to-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides with Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Loading placeholder */}
          {!imagesLoaded[index] && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white animate-pulse" />
          )}
          
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={`object-cover transition-opacity duration-500 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            sizes="100vw"
            quality={80}
            onLoad={() => handleImageLoad(index)}
          />
          {/* Gradient Overlay - Left to Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        </div>
      ))}

      {/* Content - Left Aligned */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-2xl px-8 sm:px-12 lg:px-16">
          {/* Main Headline */}
          <div className="mb-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-foreground">
              {slides[current].title}
              <br />
              <span className="text-accent">{slides[current].highlight}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl font-bold text-foreground mb-3 animate-fade-in animation-delay-100">
            {slides[current].subtitle}
          </p>

          {/* Description */}
          <p className="text-base text-muted-foreground mb-6 max-w-lg leading-relaxed animate-fade-in animation-delay-200">
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in animation-delay-300">
            <Link href={slides[current].href} className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition font-bold text-base flex items-center gap-2 shadow-lg hover:shadow-xl w-fit">
              {slides[current].cta}
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="px-6 py-3 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-white transition font-bold text-base">
              Request Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8 animate-fade-in animation-delay-400">
            <div>
              <p className="text-3xl font-black text-primary">15+</p>
              <p className="text-sm text-muted-foreground font-semibold">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">500+</p>
              <p className="text-sm text-muted-foreground font-semibold">Projects Supplied</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">50+</p>
              <p className="text-sm text-muted-foreground font-semibold">Trusted Partners</p>
            </div>
          </div>

          {/* Trusted Brands Tag */}
          {/* <div className="mt-6 pt-4 border-t border-gray-200 animate-fade-in animation-delay-500">
            <p className="text-xs text-muted-foreground mb-2 font-semibold">Trusted Brands</p>
            <div className="flex gap-4 items-center">
              <span className="text-foreground font-bold text-sm">ABB</span>
              <span className="text-foreground font-bold text-sm">Schneider</span>
              <span className="text-foreground font-bold text-sm">Siemens</span>
              <span className="text-foreground font-bold text-sm">Chint</span>
              <span className="text-foreground font-bold text-sm">Indelec</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-8 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 10000);
            }}
            className={`transition-all ${
              index === current 
                ? 'bg-primary w-8 h-2 rounded-full' 
                : 'bg-foreground/30 w-2 h-2 rounded-full hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}