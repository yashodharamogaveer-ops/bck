import { useState, lazy, Suspense } from 'react';
import { Maximize2 } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';
import { Carousel } from './Carousel';

const GalleryLightbox = lazy(() => import('./GalleryLightbox'));

interface GallerySectionProps {
  lang: Language;
}

export function GallerySection({ lang }: GallerySectionProps) {
  const items = SITE_CONTENT.gallery.items;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-white dark:bg-[#191315] border-y border-[#E8DFD1] dark:border-[#2C2225]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate="fade-up" className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
            {SITE_CONTENT.gallery.eyebrow[lang]}
          </p>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
            {SITE_CONTENT.gallery.heading[lang]}
          </h2>
          <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC]">
            {SITE_CONTENT.gallery.subtitle[lang]}
          </p>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="sm:hidden">
          <Carousel itemCount={items.length} label={SITE_CONTENT.gallery.heading[lang]}>
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open image: ${item.caption[lang]}`}
                className="w-full shrink-0 snap-center relative rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#32272B] bg-[#EFE8DC] dark:bg-[#231B1E] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt[lang]}
                    fallbackTitle={item.caption[lang]}
                    sizes="92vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 flex items-end justify-between gap-2">
                  <span className="text-sm font-medium text-white">
                    {item.caption[lang]}
                  </span>
                  <span className="min-w-[44px] min-h-[44px] rounded-full bg-black/50 text-white flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </Carousel>
        </div>

        {/* Tablet & Desktop Masonry Grid */}
        <div
          data-animate-cards
          className="hidden sm:block columns-2 lg:columns-4 gap-4 space-y-4"
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              data-animate-card
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Open image: ${item.caption[lang]}`}
              className="card-interactive group relative w-full break-inside-avoid rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#32272B] bg-[#EFE8DC] dark:bg-[#231B1E] block cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              <div className={`w-full ${item.aspectClass} overflow-hidden`}>
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt[lang]}
                  fallbackTitle={item.caption[lang]}
                  sizes="(max-width: 1024px) 48vw, 24vw"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-left"
                aria-hidden="true"
              >
                <div className="self-end p-2 rounded-full bg-black/45 text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-white">
                  {item.caption[lang]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lazy-Loaded Lightbox with Touch Swipe, Pinch & Double-Tap Zoom */}
      {lightboxIndex !== null && (
        <Suspense fallback={null}>
          <GalleryLightbox
            items={items}
            activeIndex={lightboxIndex}
            lang={lang}
            onClose={() => setLightboxIndex(null)}
            onChangeIndex={setLightboxIndex}
          />
        </Suspense>
      )}
    </section>
  );
}
