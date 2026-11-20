import { ReactNode, useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  itemCount: number;
  label: string;
  children: ReactNode;
  darkSurface?: boolean;
  onIndexChange?: (index: number) => void;
}

export function Carousel({
  itemCount,
  label,
  children,
  darkSurface = false,
  onIndexChange,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = ((idx % itemCount) + itemCount) % itemCount;
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({
        left: child.offsetLeft - track.offsetLeft,
        behavior: 'smooth',
      });
    }
    setActiveIndex(clamped);
    onIndexChange?.(clamped);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeout: number;
    const onScroll = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const childrenArr = Array.from(track.children) as HTMLElement[];
        let closestIdx = 0;
        let minDist = Infinity;
        childrenArr.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = i;
          }
        });
        setActiveIndex(closestIdx);
        onIndexChange?.(closestIdx);
      }, 60);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(timeout);
      track.removeEventListener('scroll', onScroll);
    };
  }, [onIndexChange]);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2"
      >
        {children}
      </div>

      {/* Controls + Pagination Dots */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: itemCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex}
              className="min-w-[28px] min-h-[28px] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] rounded-full"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'w-6 bg-[#C9A24B]'
                    : darkSurface
                    ? 'w-2 bg-white/35'
                    : 'w-2 bg-[#7A1F2B]/30 dark:bg-white/30'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Previous slide"
            className={`min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center border tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] ${
              darkSurface
                ? 'bg-white/10 border-white/15 text-white'
                : 'bg-white dark:bg-[#1C1618] border-[#E5DCCF] dark:border-[#34292C] text-[#1F1B1D] dark:text-[#F5EFEA]'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Next slide"
            className={`min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center border tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] ${
              darkSurface
                ? 'bg-white/10 border-white/15 text-white'
                : 'bg-white dark:bg-[#1C1618] border-[#E5DCCF] dark:border-[#34292C] text-[#1F1B1D] dark:text-[#F5EFEA]'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
