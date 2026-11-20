import { useState } from 'react';
import { Play, Radio, ExternalLink } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface MediaSectionProps {
  lang: Language;
}

function ClickToPlayYouTube({
  videoId,
  title,
  subtitle,
}: {
  videoId: string;
  title: string;
  subtitle: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1C1618] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex flex-col h-full">
      <div className="relative aspect-video bg-[#1E1417]">
        {isLoaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            aria-label={`Play video: ${title}`}
            className="group relative w-full h-full block text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
          >
            <ImageWithFallback
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fallbackTitle={title}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="w-16 h-16 rounded-full bg-[#7A1F2B] group-hover:bg-[#932635] text-white border-2 border-[#C9A24B] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-200">
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </span>
            </div>
          </button>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA]">
          {title}
        </h3>
        <p className="text-xs text-[#6B6063] dark:text-[#B4A9A3] mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function MediaSection({ lang }: MediaSectionProps) {
  return (
    <section
      id="media"
      className="py-16 sm:py-24 bg-[#FAF7F2] dark:bg-[#141012]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate="fade-up" className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
            {SITE_CONTENT.media.eyebrow[lang]}
          </p>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
            {SITE_CONTENT.media.heading[lang]}
          </h2>
          <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC]">
            {SITE_CONTENT.media.subtitle[lang]}
          </p>
        </div>

        <div
          data-animate-cards
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {/* 2 Click-to-Play YouTube Videos */}
          {SITE_CONTENT.media.videos.map((video) => (
            <div key={video.id} data-animate-card className="card-interactive">
              <ClickToPlayYouTube
                videoId={video.id}
                title={video.title[lang]}
                subtitle={video.subtitle[lang]}
              />
            </div>
          ))}

          {/* Radio Kundapura 89.6 FM Card */}
          <article
            data-animate-card
            className="card-interactive bg-gradient-to-br from-[#7A1F2B] to-[#52121B] dark:from-[#2C1016] dark:to-[#1B0A0E] text-white rounded-2xl p-7 border border-[#963240]/40 dark:border-[#C9A24B]/25 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C9A24B] text-[#1A1315] flex items-center justify-center">
                  <Radio className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="font-mono text-lg font-bold text-[#E7C675] tabular-nums">
                  {SITE_CONTENT.media.radio.frequency}
                </span>
              </div>

              <h3 className="font-serif-display font-bold text-2xl text-white mb-2">
                {SITE_CONTENT.media.radio.name[lang]}
              </h3>
              <p className="text-xs font-medium text-[#E7C675] mb-3">
                {SITE_CONTENT.media.radio.tagline[lang]}
              </p>
              <p className="text-base text-white/85 leading-relaxed">
                {SITE_CONTENT.media.radio.description[lang]}
              </p>
            </div>

            <div className="mt-7 pt-4 border-t border-white/15">
              <a
                href="https://www.basck.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#E7C675] hover:text-white transition-colors"
              >
                <span>{SITE_CONTENT.media.radio.cta[lang]}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
