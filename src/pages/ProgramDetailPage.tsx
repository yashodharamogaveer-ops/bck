import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  GraduationCap,
  Briefcase,
  User,
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Accordion, AccordionEntry } from '../components/Accordion';
import { NotFoundPage } from './NotFoundPage';

interface ProgramDetailPageProps {
  lang: Language;
}

export function ProgramDetailPage({ lang }: ProgramDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const program = SITE_CONTENT.programs.items.find((p) => p.slug === slug);

  if (!program) {
    return <NotFoundPage lang={lang} />;
  }

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Degree Programs', kn: 'ಎಲ್ಲಾ ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' }, href: '/programs' },
    ...SITE_CONTENT.programs.items.map((p) => ({
      label: { en: `${p.code} · ${p.title.en}`, kn: p.title.kn },
      href: `/programs/${p.slug}`,
    })),
  ];

  const syllabusItems: AccordionEntry[] = program.syllabus.map((row, idx) => ({
    id: `sem-${idx}`,
    title: row.semester[lang],
    content: (
      <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
        {row.subjects[lang]}
      </p>
    ),
  }));

  return (
    <>
      <SeoHead
        title={program.title[lang]}
        description={program.overview[lang]}
      />
      <InnerPageLayout
        lang={lang}
        title={program.title}
        subtitle={program.shortDesc}
        breadcrumbs={[
          { label: SITE_CONTENT.programs.pageTitle, href: '/programs' },
          { label: { en: program.code, kn: program.code } },
        ]}
        subMenu={subMenu}
      >
        {/* Overview & Image */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 min-h-[220px] aspect-[4/3] md:aspect-auto bg-[#EFE8DC] dark:bg-[#261D20]">
              <ImageWithFallback
                src={program.image}
                alt={program.title[lang]}
                fallbackTitle={program.code}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
                  {lang === 'en' ? 'Program Overview' : 'ಕೋರ್ಸ್ ಪರಿಚಯ'}
                </h2>
                <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-5">
                  {program.overview[lang]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225]">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-semibold text-[#6B6063] dark:text-[#B4A9A3]">
                        {lang === 'en' ? 'Duration' : 'ಅವಧಿ'}
                      </div>
                      <div className="text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA]">
                        {program.duration[lang]}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-semibold text-[#6B6063] dark:text-[#B4A9A3]">
                        {lang === 'en' ? 'Eligibility' : 'ಅರ್ಹತೆ'}
                      </div>
                      <div className="text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA]">
                        {program.eligibility[lang]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                <span>{program.feesNote[lang]}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`/contact?course=${encodeURIComponent(program.code)}`}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-[#C9A24B] hover:bg-[#D8B25D] text-[#1A1315] font-semibold text-sm transition-colors tap-press"
                >
                  <span>{SITE_CONTENT.header.applyNow[lang]}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={program.syllabusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl border border-[#7A1F2B] dark:border-[#C9A24B] text-[#7A1F2B] dark:text-[#E5C16C] hover:bg-[#7A1F2B] hover:text-white dark:hover:bg-[#C9A24B] dark:hover:text-[#1A1315] font-semibold text-sm transition-colors tap-press"
                >
                  <span>{lang === 'en' ? 'Official Syllabus (IQACLink5)' : 'ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ'}</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CBCS & NEP Subject Combinations (for B.Sc and B.A.) */}
        {program.combinations && program.combinations.length > 0 && (
          <section
            data-animate="fade-up"
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h3 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {lang === 'en' ? 'Subject Combinations (CBCS & NEP)' : 'ವಿಷಯ ಸಂಯೋಜನೆಗಳು (CBCS ಮತ್ತು NEP)'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.combinations.map((group) => (
                <div
                  key={group.framework}
                  className="p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                >
                  <h4 className="font-serif-display font-bold text-lg text-[#7A1F2B] dark:text-[#E5C16C] mb-3">
                    {group.framework}
                  </h4>
                  <ul className="space-y-2 text-sm text-[#3A3033] dark:text-[#E0D7D1]">
                    {group.items.map((combo, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{combo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Highlights & Career Paths */}
        <div
          data-animate-cards
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <section
            data-animate-card
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
          >
            <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-4">
              {lang === 'en' ? 'Program Highlights' : 'ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳು'}
            </h3>
            <ul className="space-y-2.5">
              {program.highlights[lang].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-base text-[#4A4144] dark:text-[#CFC6C0]"
                >
                  <Check className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] mt-1 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            data-animate-card
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {lang === 'en' ? 'Career Paths' : 'ವೃತ್ತಿ ಅವಕಾಶಗಳು'}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {program.careerPaths[lang].map((path, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-base text-[#4A4144] dark:text-[#CFC6C0]"
                >
                  <ArrowRight className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] mt-1 shrink-0" aria-hidden="true" />
                  <span>{path}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Subjects / Syllabus Accordion */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <h3 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-4">
            {lang === 'en' ? 'Subjects & Syllabus Structure' : 'ವಿಷಯಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ'}
          </h3>
          <Accordion items={syllabusItems} defaultOpenId="sem-0" />
        </section>

        {/* Faculty List */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <h3 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {lang === 'en' ? 'Key Faculty & Heads' : 'ಪ್ರಮುಖ ಬೋಧಕ ವರ್ಗ'}
            </h3>
            <Link
              to="/departments"
              className="text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline inline-flex items-center gap-1"
            >
              <span>{SITE_CONTENT.programs.viewAllDepartments[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.faculty.map((member, idx) => (
              <article
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="font-semibold text-sm sm:text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {member.name}
                  </div>
                  <div className="text-xs font-medium text-[#7A1F2B] dark:text-[#E5C16C]">
                    {member.designation}
                  </div>
                  <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC]">
                    {member.qualification} · {member.experience}
                  </div>
                  {member.email && (
                    <div className="flex items-center gap-1.5 text-xs pt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#7A1F2B] dark:text-[#E5C16C] hover:underline break-all"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
}
