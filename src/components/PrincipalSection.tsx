import { Quote } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface PrincipalSectionProps {
  lang: Language;
}

export function PrincipalSection({ lang }: PrincipalSectionProps) {
  return (
    <section
      id="principal"
      data-animate="fade-up"
      className="py-14 sm:py-24 bg-[#FAF7F2] dark:bg-[#141012]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] max-w-xs mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[#E6DDD0] dark:border-[#32272B] bg-[#EFE8DC] dark:bg-[#261D20]">
                <ImageWithFallback
                  src={SITE_CONTENT.principal.photo}
                  sizes="(max-width: 1024px) 320px, 33vw"
                  alt={`${SITE_CONTENT.principal.name}, ${SITE_CONTENT.principal.role[lang]}`}
                  fallbackTitle={SITE_CONTENT.principal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-4">
                {SITE_CONTENT.principal.eyebrow[lang]}
              </p>

              <Quote
                className="w-8 h-8 sm:w-9 sm:h-9 text-[#C9A24B] mb-4 opacity-85"
                aria-hidden="true"
              />

              <blockquote className="font-serif-display text-xl sm:text-2xl lg:text-[26px] text-[#1F1B1D] dark:text-[#F5EFEA] leading-relaxed mb-5">
                “{SITE_CONTENT.principal.quote[lang]}”
              </blockquote>

              <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC] leading-relaxed mb-7">
                {SITE_CONTENT.principal.subParagraph[lang]}
              </p>

              <div className="pt-5 border-t border-[#EAE1D4] dark:border-[#2E2427]">
                <div className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {SITE_CONTENT.principal.name}{' '}
                  <span className="font-body text-sm font-medium text-[#7A1F2B] dark:text-[#C9A24B]">
                    · {SITE_CONTENT.principal.credentials}
                  </span>
                </div>
                <div className="text-sm text-[#6B6063] dark:text-[#B4A9A3] mt-0.5">
                  {SITE_CONTENT.principal.role[lang]}, {SITE_CONTENT.collegeName[lang]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
