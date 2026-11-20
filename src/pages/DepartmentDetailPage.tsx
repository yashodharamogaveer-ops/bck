import { useParams } from 'react-router-dom';
import {
  User,
  FlaskConical,
  Award,
  Calendar,
  GraduationCap,
  Clock,
  Mail,
  AlertTriangle,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { NotFoundPage } from './NotFoundPage';

interface DepartmentDetailPageProps {
  lang: Language;
}

export function DepartmentDetailPage({ lang }: DepartmentDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const dept = SITE_CONTENT.departments.items.find((d) => d.slug === slug);

  if (!dept) {
    return <NotFoundPage lang={lang} />;
  }

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Departments', kn: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' }, href: '/departments' },
    ...SITE_CONTENT.departments.items.map((d) => ({
      label: d.name,
      href: `/departments/${d.slug}`,
    })),
  ];

  const isHodWarning = dept.hod.includes('⚠') || Boolean(dept.hodNotice);

  return (
    <>
      <SeoHead
        title={dept.name[lang]}
        description={`${dept.name[lang]} — Faculty, laboratories, achievements, and events at Bhandarkars' Arts and Science College, Kundapura.`}
      />
      <InnerPageLayout
        lang={lang}
        title={dept.name}
        subtitle={dept.stream}
        breadcrumbs={[
          { label: SITE_CONTENT.departments.pageTitle, href: '/departments' },
          { label: dept.name },
        ]}
        subMenu={subMenu}
      >
        {/* About */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-4"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
            <span>{dept.stream[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className={isHodWarning ? 'text-amber-700 dark:text-amber-300' : ''}>
              HOD: {dept.hod}
            </span>
          </div>

          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'About the Department' : 'ವಿಭಾಗದ ಪರಿಚಯ'}
          </h2>
          <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
            {dept.about[lang]}
          </p>

          {dept.hodNotice && (
            <div
              role="note"
              className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              <span>{dept.hodNotice}</span>
            </div>
          )}
        </section>

        {/* Faculty */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {lang === 'en' ? 'Department Faculty' : 'ಬೋಧಕ ವರ್ಗ'}
            </h2>
            <span className="text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C]">
              {dept.faculty.length}{' '}
              {lang === 'en'
                ? dept.faculty.length === 1
                  ? 'Listing'
                  : 'Faculty Members'
                : 'ಬೋಧಕರು'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dept.faculty.map((member, idx) => (
              <article
                key={idx}
                className={`flex items-start gap-3.5 p-4 rounded-xl border ${
                  member.isPlaceholder
                    ? 'bg-amber-50/70 dark:bg-amber-950/20 border-dashed border-amber-300 dark:border-amber-700/60'
                    : 'bg-[#FAF7F2] dark:bg-[#221A1D] border-[#EAE1D4] dark:border-[#32272B]'
                }`}
              >
                {member.photo ? (
                  <div className="w-14 h-16 rounded-xl overflow-hidden border border-[#E2D8C8] dark:border-[#34292C] bg-[#EFE8DC] dark:bg-[#261D20] shrink-0">
                    <ImageWithFallback
                      src={member.photo}
                      alt={member.name}
                      fallbackTitle={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      member.isPlaceholder
                        ? 'bg-amber-200/60 dark:bg-amber-800/30 text-amber-800 dark:text-amber-300'
                        : 'bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B]'
                    }`}
                  >
                    {member.isPlaceholder ? (
                      <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <User className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>
                )}

                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="font-semibold text-sm sm:text-base text-[#1F1B1D] dark:text-[#F5EFEA] leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#7A1F2B] dark:text-[#E5C16C]">
                    {member.designation}
                  </p>
                  <div className="pt-1 space-y-1 text-xs text-[#5A4F53] dark:text-[#BDB2AC]">
                    <div className="flex items-start gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                      <span>{member.qualification}</span>
                    </div>
                    {member.experience && member.experience !== '—' && (
                      <div className="flex items-start gap-1.5">
                        <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                        <span>
                          {lang === 'en' ? 'Experience:' : 'ಅನುಭವ:'} {member.experience}
                        </span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <Mail className="w-3.5 h-3.5 shrink-0 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-[#7A1F2B] dark:text-[#E5C16C] hover:underline break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Labs, Achievements, Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
            <FlaskConical className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] mb-3" aria-hidden="true" />
            <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
              {lang === 'en' ? 'Labs & Facilities' : 'ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಸೌಲಭ್ಯ'}
            </h3>
            <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
              {dept.labs[lang]}
            </p>
          </article>

          <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
            <Award className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] mb-3" aria-hidden="true" />
            <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
              {lang === 'en' ? 'Achievements' : 'ಸಾಧನೆಗಳು'}
            </h3>
            <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
              {dept.achievements[lang]}
            </p>
          </article>

          <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
            <Calendar className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] mb-3" aria-hidden="true" />
            <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
              {lang === 'en' ? 'Department Events' : 'ವಿಭಾಗದ ಕಾರ್ಯಕ್ರಮಗಳು'}
            </h3>
            <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
              {dept.events[lang]}
            </p>
          </article>
        </div>
      </InnerPageLayout>
    </>
  );
}
