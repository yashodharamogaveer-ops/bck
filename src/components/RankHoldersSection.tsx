import { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { Carousel } from './Carousel';

interface RankHoldersSectionProps {
  lang: Language;
}

export function RankHoldersSection({ lang }: RankHoldersSectionProps) {
  const items = SITE_CONTENT.rankHolders.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  return (
    <section
      id="rank-holders"
      className="py-16 sm:py-24 bg-[#7A1F2B] dark:bg-[#240B10] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="fade-up"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#E7C675] mb-2">
              {SITE_CONTENT.rankHolders.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-white mb-2 text-balance">
              {SITE_CONTENT.rankHolders.heading[lang]}
            </h2>
            <p className="text-base text-white/80 max-w-2xl">
              {SITE_CONTENT.rankHolders.subtitle[lang]}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
              }
              aria-label="Previous rank holder"
              className="min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
              aria-label="Next rank holder"
              className="min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile CSS Scroll-Snap Carousel */}
        <div className="md:hidden">
          <Carousel
            itemCount={items.length}
            label={SITE_CONTENT.rankHolders.heading[lang]}
            darkSurface
            onIndexChange={setActiveIndex}
          >
            {items.map((holder) => (
              <article
                key={holder.id}
                className="w-full shrink-0 snap-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C9A24B] text-[#1A1315] font-serif-display font-bold text-xl flex items-center justify-center shrink-0">
                    {holder.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#E7C675]">
                      {holder.rank[lang]} · {holder.program}
                    </div>
                    <h3 className="font-serif-display font-bold text-xl text-white">
                      {holder.name}
                    </h3>
                  </div>
                </div>
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C9A24B] shrink-0" aria-hidden="true" />
                  <span>
                    {holder.university[lang]} · {holder.year}
                  </span>
                </div>
              </article>
            ))}
          </Carousel>
        </div>

        {/* Tablet & Desktop Grid synchronized with Active Highlight */}
        <div
          data-animate-cards
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {items.map((holder, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={holder.id}
                type="button"
                data-animate-card
                onClick={() => setActiveIndex(idx)}
                className={`text-left rounded-2xl p-7 border transition-all duration-200 tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] ${
                  isSelected
                    ? 'bg-white text-[#1F1B1D] border-[#C9A24B] shadow-xl -translate-y-1'
                    : 'bg-white/8 text-white border-white/15 hover:bg-white/14'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl font-serif-display font-bold text-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#7A1F2B] text-[#E7C675]'
                        : 'bg-[#C9A24B] text-[#1A1315]'
                    }`}
                  >
                    {holder.initials}
                  </div>
                  <Award
                    className={`w-6 h-6 ${
                      isSelected ? 'text-[#7A1F2B]' : 'text-[#E7C675]'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={`text-xs font-semibold tracking-wide mb-1 ${
                    isSelected ? 'text-[#7A1F2B]' : 'text-[#E7C675]'
                  }`}
                >
                  {holder.rank[lang]} · {holder.program}
                </div>

                <h3 className="font-serif-display font-bold text-2xl mb-2">
                  {holder.name}
                </h3>

                <p
                  className={`text-sm ${
                    isSelected ? 'text-[#5A4F53]' : 'text-white/75'
                  }`}
                >
                  {holder.university[lang]} · {holder.year}
                </p>
              </button>
            );
          })}
        </div>

        {/* Desktop Dots */}
        <div className="hidden md:flex mt-6 items-center justify-center gap-2">
          {items.map((holder, idx) => (
            <button
              key={holder.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Select ${holder.name}`}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              <span
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? 'w-7 bg-[#C9A24B]' : 'w-2 bg-white/35 hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
