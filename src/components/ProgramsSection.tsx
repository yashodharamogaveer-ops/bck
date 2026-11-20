import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Laptop,
  Briefcase,
  ArrowRight,
  Layers,
  ChevronDown,
  Check,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface ProgramsSectionProps {
  lang: Language;
}

const iconMap = {
  Calculator,
  FlaskConical,
  BookOpen,
  Laptop,
  Briefcase,
};

export function ProgramsSection({ lang }: ProgramsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredPrograms =
    activeFilter === 'all'
      ? SITE_CONTENT.programs.items
      : SITE_CONTENT.programs.items.filter((p) => p.category === activeFilter);

  return (
    <section
      id="programs"
      data-animate="fade-up"
      className="py-14 sm:py-24 bg-white dark:bg-[#191315] border-y border-[#E8DFD1] dark:border-[#2C2225]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
              {SITE_CONTENT.programs.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
              {SITE_CONTENT.programs.heading[lang]}
            </h2>
            <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC] max-w-2xl">
              {SITE_CONTENT.programs.subtitle[lang]}
            </p>
          </div>

          <Link
            to="/departments"
            className="self-start lg:self-auto min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#7A1F2B] dark:border-[#C9A24B] text-[#7A1F2B] dark:text-[#C9A24B] hover:bg-[#7A1F2B] hover:text-white dark:hover:bg-[#C9A24B] dark:hover:text-[#1A1315] font-semibold text-sm tap-press whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
          >
            <Layers className="w-4 h-4" aria-hidden="true" />
            <span>{SITE_CONTENT.programs.viewAllDepartments[lang]}</span>
          </Link>
        </div>

        {/* Filter Tabs (Horizontally scrollable on narrow phones) */}
        <div
          role="tablist"
          aria-label="Filter degree programs"
          className="flex items-center gap-2 mb-8 sm:mb-10 p-1.5 bg-[#FAF7F2] dark:bg-[#231B1E] rounded-2xl border border-[#EAE1D4] dark:border-[#32272B] overflow-x-auto no-scrollbar max-w-full"
        >
          {SITE_CONTENT.programs.filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B] ${
                  isActive
                    ? 'bg-[#7A1F2B] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] shadow-sm'
                    : 'text-[#4A4144] dark:text-[#CFC6C0]'
                }`}
              >
                {filter.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Program Cards Grid */}
        <div
          data-animate-cards
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPrograms.map((program) => {
            const Icon = iconMap[program.iconName];
            const isExpanded = expandedId === program.id;

            return (
              <article
                key={program.id}
                data-animate-card
                className="bg-[#FAF7F2] dark:bg-[#221A1D] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#32272B] shadow-sm card-interactive flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DC] dark:bg-[#2A2023]">
                  <ImageWithFallback
                    src={program.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={program.title[lang]}
                    fallbackTitle={program.code}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                      </div>
                      <span className="font-serif-display font-bold text-lg text-[#7A1F2B] dark:text-[#C9A24B]">
                        {program.code}
                      </span>
                    </div>

                    {/* Tap-to-expand summary button */}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedId(isExpanded ? null : program.id)}
                      className="min-h-[44px] px-3 rounded-xl text-xs font-medium text-[#5A4F53] dark:text-[#BDB2AC] hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] inline-flex items-center gap-1 tap-press cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Quick view' : 'ಸಂಕ್ಷಿಪ್ತ'}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                    {program.title[lang]}
                  </h3>

                  <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-4 flex-1">
                    {program.shortDesc[lang]}
                  </p>

                  {/* In-place expanded summary on tap */}
                  {isExpanded && (
                    <div className="mb-4 p-3.5 rounded-xl bg-white dark:bg-[#191315] border border-[#E6DDD0] dark:border-[#32272B] space-y-2">
                      <p className="text-xs text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                        {program.overview[lang]}
                      </p>
                      <ul className="space-y-1">
                        {program.highlights[lang].map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#3A3033] dark:text-[#DFD7D1]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#E6DDD0] dark:border-[#32272B] flex items-center justify-between gap-2">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline tap-press focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded"
                    >
                      <span>{SITE_CONTENT.programs.learnMore[lang]}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>

                    <Link
                      to={`/contact?course=${encodeURIComponent(program.code)}`}
                      className="min-h-[44px] px-4 rounded-xl bg-[#C9A24B] text-[#1A1315] font-semibold text-xs inline-flex items-center justify-center tap-press"
                    >
                      {SITE_CONTENT.header.applyNow[lang]}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
