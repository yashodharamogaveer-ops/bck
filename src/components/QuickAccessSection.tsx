import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  BarChart3,
  Scale,
  BookMarked,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Map,
  ArrowUpRight,
  LayoutGrid,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

const BottomSheet = lazy(() => import('./BottomSheet'));

interface QuickAccessSectionProps {
  lang: Language;
}

const iconMap = {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  BarChart3,
  Scale,
  BookMarked,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Map,
};

export function QuickAccessSection({ lang }: QuickAccessSectionProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <section
      id="quick-access"
      className="py-16 sm:py-24 bg-[#FAF7F2] dark:bg-[#141012]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="fade-up"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
              {SITE_CONTENT.quickAccess.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
              {SITE_CONTENT.quickAccess.heading[lang]}
            </h2>
            <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC]">
              {SITE_CONTENT.quickAccess.subtitle[lang]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="md:hidden self-start inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-white dark:bg-[#1C1618] border border-[#DDD3C4] dark:border-[#34292C] text-sm font-semibold text-[#7A1F2B] dark:text-[#C9A24B] tap-press cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            <span>{lang === 'en' ? 'See all (10)' : 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ (10)'}</span>
          </button>
        </div>

        {/* Mobile Horizontal Scrollable Chip Row */}
        <div className="md:hidden -mx-4 px-4 flex gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {SITE_CONTENT.quickAccess.items.map((item) => {
            const Icon = iconMap[item.iconName];
            const chipClasses =
              'shrink-0 inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] text-sm font-semibold text-[#1F1B1D] dark:text-[#F5EFEA] whitespace-nowrap tap-press shadow-sm';

            return item.external ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={chipClasses}
              >
                <Icon className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <span>{item.title[lang]}</span>
              </a>
            ) : (
              <Link key={item.id} to={item.href} className={chipClasses}>
                <Icon className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <span>{item.title[lang]}</span>
              </Link>
            );
          })}
        </div>

        {/* Tablet & Desktop Grid */}
        <div
          data-animate-cards
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {SITE_CONTENT.quickAccess.items.map((item) => {
            const Icon = iconMap[item.iconName];
            const cardClasses =
              'card-interactive group h-full bg-white dark:bg-[#1C1618] rounded-2xl p-5 border border-[#EAE1D4] dark:border-[#2E2427] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] shadow-sm flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#7A1F2B]';

            const inner = (
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#8E8185] group-hover:text-[#7A1F2B] dark:group-hover:text-[#C9A24B] transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA] mb-1">
                  {item.title[lang]}
                </h3>
                <p className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] leading-relaxed">
                  {item.subtitle[lang]}
                </p>
              </div>
            );

            return (
              <div key={item.id} data-animate-card>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link to={item.href} className={cardClasses}>
                    {inner}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile "See all" Bottom Sheet */}
      {sheetOpen && (
        <Suspense fallback={null}>
          <BottomSheet
            isOpen={sheetOpen}
            onClose={() => setSheetOpen(false)}
            title={SITE_CONTENT.quickAccess.heading[lang]}
          >
            <div className="grid grid-cols-1 gap-2.5">
              {SITE_CONTENT.quickAccess.items.map((item) => {
                const Icon = iconMap[item.iconName];
                const rowClasses =
                  'flex items-center justify-between gap-3 min-h-[48px] p-3.5 rounded-xl bg-white dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] tap-press';
                const rowInner = (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA]">
                          {item.title[lang]}
                        </div>
                        <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC]">
                          {item.subtitle[lang]}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0" aria-hidden="true" />
                  </>
                );

                return item.external ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSheetOpen(false)}
                    className={rowClasses}
                  >
                    {rowInner}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={() => setSheetOpen(false)}
                    className={rowClasses}
                  >
                    {rowInner}
                  </Link>
                );
              })}
            </div>
          </BottomSheet>
        </Suspense>
      )}
    </section>
  );
}
