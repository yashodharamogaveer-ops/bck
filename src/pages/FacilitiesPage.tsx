import {
  Clock,
  BookOpen,
  Globe,
  ShieldAlert,
  User,
  Mail,
  AlertTriangle,
  Sparkles,
  ExternalLink,
  Check,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface FacilitiesPageProps {
  lang: Language;
  subpage?: 'overview' | 'library' | 'campus';
}

export function FacilitiesPage({ lang, subpage = 'overview' }: FacilitiesPageProps) {
  const subMenu: SubMenuItem[] = SITE_CONTENT.facilities.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  const currentTab =
    SITE_CONTENT.facilities.tabs.find((t) => t.id === subpage) ||
    SITE_CONTENT.facilities.tabs[0];

  const { librarian } = SITE_CONTENT.facilities.library;

  return (
    <>
      <SeoHead
        title={`${currentTab.label[lang]} — ${SITE_CONTENT.facilities.pageTitle[lang]}`}
        description="Explore the Central Library, Prabhakar Tholar Indoor Games Complex, Ladies Hostel, Auditoria, Canteen, Free Mid-Day Meal Scheme, and Infrastructure."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.facilities.pageTitle}
        subtitle={SITE_CONTENT.facilities.subtitle}
        breadcrumbs={[
          { label: SITE_CONTENT.facilities.pageTitle, href: '/facilities' },
          ...(subpage !== 'overview' ? [{ label: currentTab.label }] : []),
        ]}
        subMenu={subMenu}
      >
        {/* Opening Hours Card */}
        <section className="bg-[#7A1F2B] dark:bg-[#240B10] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <Clock className="w-6 h-6 text-[#E7C675] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-serif-display font-bold text-xl text-white">
                {SITE_CONTENT.facilities.hoursCard.title[lang]}
              </h2>
              <p className="text-sm text-white/90 mt-1 leading-relaxed">
                {SITE_CONTENT.facilities.hoursCard.campusHours[lang]}
              </p>
              <p className="text-sm text-[#E7C675] mt-1 leading-relaxed">
                {SITE_CONTENT.facilities.hoursCard.libraryHours[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* Central Library Content */}
        {(subpage === 'overview' || subpage === 'library') && (
          <section className="space-y-6">
            <div className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>{lang === 'en' ? 'Knowledge Resource Centre' : 'ಜ್ಞಾನ ಸಂಪನ್ಮೂಲ ಕೇಂದ್ರ'}</span>
                  </div>
                  <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {SITE_CONTENT.facilities.library.heading[lang]}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                    {SITE_CONTENT.facilities.library.intro[lang]}
                  </p>
                </div>
                <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6DDD0] dark:border-[#32272B]">
                  <ImageWithFallback
                    src="https://www.basck.in/images/gallery/6.JPG"
                    alt="Central Library at Bhandarkars' College"
                    fallbackTitle="Central Library"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Librarian & GKV Fest Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#EFE7DA] dark:border-[#2C2225]">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
                  <div className="w-11 h-11 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                      {lang === 'en' ? 'Librarian' : 'ಗ್ರಂಥಪಾಲಕರು'}
                    </div>
                    <div className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {librarian.name}{' '}
                      <span className="font-body text-xs font-normal text-[#5A4F53] dark:text-[#BDB2AC]">
                        ({librarian.qualification})
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                      {librarian.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="inline-flex items-center gap-1 text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
                        >
                          <Mail className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{email}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
                  <div className="w-11 h-11 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                      {lang === 'en' ? 'Annual Library Fest' : 'ವಾರ್ಷಿಕ ಗ್ರಂಥಾಲಯ ಉತ್ಸವ'}
                    </div>
                    <div className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {librarian.fest}
                    </div>
                    <p className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-1">
                      {lang === 'en'
                        ? 'Annual celebration of reading, book exhibitions, and academic culture.'
                        : 'ಪುಸ್ತಕ ಪ್ರದರ್ಶನ ಮತ್ತು ವಾಚನಾಭಿರುಚಿ ಉತ್ತೇಜಿಸುವ ವಾರ್ಷಿಕ ಉತ್ಸವ.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Discrepancy Notice */}
              <div
                role="note"
                className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
              >
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                <span>{SITE_CONTENT.facilities.library.discrepancyNote[lang]}</span>
              </div>

              {/* Collection Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SITE_CONTENT.facilities.library.collectionStats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                  >
                    <div className="font-mono font-semibold text-base text-[#7A1F2B] dark:text-[#E5C16C] tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-1">
                      {stat.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Physical Facilities + E-Resources + Rules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                  <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {lang === 'en' ? 'Reading & Physical Infrastructure' : 'ಭೌತಿಕ ಸೌಲಭ್ಯಗಳು'}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#4A4144] dark:text-[#CFC6C0]">
                  {SITE_CONTENT.facilities.library.physicalFacilities[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <Check className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                  <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {lang === 'en' ? 'Services & E-Resources' : 'ಸೇವೆಗಳು ಮತ್ತು ಇ-ಸಂಪನ್ಮೂಲಗಳು'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {SITE_CONTENT.facilities.library.eResources.map((res, i) => (
                    <li
                      key={i}
                      className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                    >
                      <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA]">
                        {res.name}
                      </div>
                      <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-0.5">
                        {res.desc[lang]}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                  <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {lang === 'en' ? 'Timings & Guidelines' : 'ಸಮಯ ಮತ್ತು ನಿಯಮಗಳು'}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#4A4144] dark:text-[#CFC6C0]">
                  {SITE_CONTENT.facilities.library.rules[lang].map((rule, i) => (
                    <li key={i} className="leading-relaxed">
                      • {rule}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        )}

        {/* Campus Facilities Gallery & Infrastructure Archive Links */}
        {(subpage === 'overview' || subpage === 'campus') && (
          <section className="space-y-6">
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {SITE_CONTENT.facilities.tabs[2].label[lang]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SITE_CONTENT.facilities.campusItems.map((item, idx) => (
                <article
                  key={idx}
                  className="bg-white dark:bg-[#1C1618] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
                >
                  <div className="aspect-[16/10] bg-[#EFE8DC] dark:bg-[#261D20]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title[lang]}
                      fallbackTitle={item.title[lang]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                      {item.title[lang]}
                    </h3>
                    <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                      {item.desc[lang]}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* 14 Infrastructure Photo PDF Links */}
            <div className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
              <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                {lang === 'en'
                  ? 'IQAC Infrastructure Photo Archives (/IQAC/Infra/)'
                  : 'IQAC ಮೂಲಸೌಕರ್ಯ ಛಾಯಾಚಿತ್ರ ದಾಖಲೆಗಳು (/IQAC/Infra/)'}
              </h3>
              <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC] mb-4">
                {lang === 'en'
                  ? 'Browse campus block and facility photo records hosted in the institutional IQAC archive.'
                  : 'ಕಾಲೇಜು ಕಟ್ಟಡಗಳು ಮತ್ತು ಸೌಲಭ್ಯಗಳ ಅಧಿಕೃತ IQAC ದಾಖಲೆಗಳನ್ನು ನೋಡಿ.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SITE_CONTENT.facilities.infraPdfs.map((pdf) => (
                  <a
                    key={pdf.label}
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] transition-colors"
                  >
                    <span>{pdf.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </InnerPageLayout>
    </>
  );
}
