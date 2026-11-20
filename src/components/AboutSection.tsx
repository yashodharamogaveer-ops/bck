import { Eye, Target, ShieldCheck } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const pillarIcons = {
    vision: Eye,
    mission: Target,
    quality: ShieldCheck,
  };

  return (
    <section
      id="about"
      data-animate="fade-up"
      className="py-14 sm:py-24 bg-[#FAF7F2] dark:bg-[#141012]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
              {SITE_CONTENT.about.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] leading-tight mb-5 text-balance">
              {SITE_CONTENT.about.heading[lang]}
            </h2>
            <div className="space-y-4 text-[#4A4144] dark:text-[#CFC6C0] text-base leading-relaxed">
              {SITE_CONTENT.about.storyParagraphs[lang].map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[360px] rounded-2xl overflow-hidden shadow-md border border-[#E6DDD0] dark:border-[#2C2225]">
              <ImageWithFallback
                src={SITE_CONTENT.about.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Bhandarkars' Arts and Science College Kundapura campus architecture"
                fallbackTitle="Bhandarkars' College Campus · Est. 1963"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B6063] dark:text-[#A99E98]">
              {SITE_CONTENT.about.imageCaption[lang]}
            </p>
          </div>
        </div>

        {/* Vision, Mission, Quality Policy Cards */}
        <div
          id="about-pillars"
          data-animate-cards
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SITE_CONTENT.about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
            return (
              <article
                key={pillar.id}
                data-animate-card
                className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-7 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm card-interactive"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
                  {pillar.title[lang]}
                </h3>
                <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {pillar.body[lang]}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
