import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';
import { animateHeroIntro } from '../lib/animations';
import { Language, SITE_CONTENT } from '../data/content';

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const slides = SITE_CONTENT.hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const heroRef = useRef<HTMLElement>(null);

  useGsap(() => animateHeroIntro(heroRef.current), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[calc(100svh-3.5rem)] lg:min-h-[calc(100svh-6rem)] flex items-center overflow-hidden bg-[#240B10]"
    >
      {/* Background Campus Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          const isFailed = failedSlides[idx];
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {!isFailed ? (
                <img
                  src={slide.src}
                  sizes="100vw"
                  alt={slide.alt[lang]}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding={idx === 0 ? 'sync' : 'async'}
                  fetchPriority={idx === 0 ? 'high' : 'low'}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedSlides((prev) => ({ ...prev, [idx]: true }))
                  }
                  data-hero-zoom={idx === 0 ? true : undefined}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#5A141E] via-[#3A0E15] to-[#1A080C]" />
              )}
            </div>
          );
        })}
        {/* Contrast Scrim Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pb-24 sm:pb-28">
        <div className="max-w-3xl">
          <p
            data-hero-line
            className="text-xs sm:text-sm font-medium tracking-wide text-[#E7C675] mb-3 sm:mb-4"
          >
            {SITE_CONTENT.hero.kicker[lang]}
          </p>

          <h1
            data-hero-line
            className="font-serif-display font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5 text-balance"
            style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
          >
            {SITE_CONTENT.hero.headline[lang]}
          </h1>

          <p
            data-hero-line
            className="text-base sm:text-lg text-[#FAF7F2]/90 max-w-2xl leading-relaxed mb-8"
          >
            {SITE_CONTENT.hero.subtext[lang]}
          </p>

          <div data-hero-actions className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#admissions');
              }}
              className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C9A24B] hover:bg-[#D8B25D] text-[#1A1315] font-semibold text-sm sm:text-base shadow-lg tap-press whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>{SITE_CONTENT.hero.primaryCta[lang]}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#programs');
              }}
              className="min-h-[48px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/12 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium text-sm sm:text-base tap-press whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>{SITE_CONTENT.hero.secondaryCta[lang]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls (>=44px tap targets) */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Campus slides">
          {slides.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`View campus slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className="min-w-[28px] min-h-[36px] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-white rounded"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-7 bg-[#C9A24B]' : 'w-2 bg-white/45'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            aria-label="Previous campus photo"
            className="min-w-[44px] min-h-[44px] rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/20 flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Next campus photo"
            className="min-w-[44px] min-h-[44px] rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/20 flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
