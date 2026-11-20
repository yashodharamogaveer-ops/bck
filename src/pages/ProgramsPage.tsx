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
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ProgramsPageProps {
  lang: Language;
}

const iconMap = {
  Calculator,
  FlaskConical,
  BookOpen,
  Laptop,
  Briefcase,
};

export function ProgramsPage({ lang }: ProgramsPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Degree Programs', kn: 'ಎಲ್ಲಾ ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' }, href: '/programs' },
    ...SITE_CONTENT.programs.items.map((p) => ({
      label: { en: `${p.code} · ${p.title.en}`, kn: p.title.kn },
      href: `/programs/${p.slug}`,
    })),
    { label: { en: 'All Departments', kn: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' }, href: '/departments' },
  ];

  const filteredPrograms =
    activeFilter === 'all'
      ? SITE_CONTENT.programs.items
      : SITE_CONTENT.programs.items.filter((p) => p.category === activeFilter);

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.programs.pageTitle[lang]}
        description="Explore B.Com, B.Sc, B.A., BCA, and BBA undergraduate degree programs at Bhandarkars' Arts and Science College, Kundapura."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.programs.pageTitle}
        subtitle={SITE_CONTENT.programs.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.programs.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Filter Bar + Departments Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter degree programs"
            className="flex flex-wrap items-center gap-2 p-1.5 bg-white dark:bg-[#1C1618] rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] w-fit max-w-full"
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
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#7A1F2B] text-white dark:bg-[#C9A24B] dark:text-[#1A1315]'
                      : 'text-[#4A4144] dark:text-[#CFC6C0] hover:text-[#7A1F2B] dark:hover:text-white'
                  }`}
                >
                  {filter.label[lang]}
                </button>
              );
            })}
          </div>

          <Link
            to="/departments"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#7A1F2B] dark:border-[#C9A24B] text-[#7A1F2B] dark:text-[#C9A24B] hover:bg-[#7A1F2B] hover:text-white dark:hover:bg-[#C9A24B] dark:hover:text-[#1A1315] font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            <Layers className="w-4 h-4" aria-hidden="true" />
            <span>{SITE_CONTENT.programs.viewAllDepartments[lang]}</span>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrograms.map((program) => {
            const Icon = iconMap[program.iconName];
            return (
              <article
                key={program.id}
                className="group bg-white dark:bg-[#1C1618] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm hover:-translate-y-0.5 transition-transform duration-200 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EFE8DC] dark:bg-[#261D20]">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title[lang]}
                    fallbackTitle={program.code}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                      </div>
                      <span className="font-serif-display font-bold text-lg text-[#7A1F2B] dark:text-[#C9A24B]">
                        {program.code}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                    {program.title[lang]}
                  </h2>
                  <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-5 flex-1">
                    {program.shortDesc[lang]}
                  </p>
                  <div className="pt-4 border-t border-[#EFE7DA] dark:border-[#2E2427] flex items-center justify-between">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
                    >
                      <span>{SITE_CONTENT.programs.learnMore[lang]}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to={`/contact?course=${encodeURIComponent(program.code)}`}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#C9A24B] text-[#1A1315] hover:bg-[#D8B25D]"
                    >
                      {SITE_CONTENT.header.applyNow[lang]}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Official Syllabus Portal & M.Com Postgraduate Note */}
        <section className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                {SITE_CONTENT.programs.postgraduateNote[lang]}
              </p>
            </div>
            <a
              href={SITE_CONTENT.programs.syllabusPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] font-semibold text-xs sm:text-sm transition-colors tap-press"
            >
              <span>{SITE_CONTENT.programs.syllabusLinkLabel[lang]}</span>
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
}
