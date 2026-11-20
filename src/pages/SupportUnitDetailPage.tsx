import { useParams } from 'react-router-dom';
import {
  User,
  Phone,
  AlertTriangle,
  ExternalLink,
  Mail,
  Check,
  Award,
  GraduationCap,
  Lightbulb,
  HeartPulse,
  Users,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { NotFoundPage } from './NotFoundPage';

interface SupportUnitDetailPageProps {
  lang: Language;
}

export function SupportUnitDetailPage({ lang }: SupportUnitDetailPageProps) {
  const { unit } = useParams<{ unit: string }>();
  const units = SITE_CONTENT.campusLife.items.slice(0, 9);
  const currentUnit = units.find((u) => u.slug === unit);

  if (!currentUnit) {
    return <NotFoundPage lang={lang} />;
  }

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Support Units', kn: 'ಎಲ್ಲಾ ಬೆಂಬಲ ಘಟಕಗಳು' }, href: '/student-support' },
    ...units.map((u) => ({
      label: u.title,
      href: `/student-support/${u.slug}`,
    })),
  ];

  const isPlacement = currentUnit.slug === 'campus-placement';
  const isScholarships = currentUnit.slug === 'scholarships-and-endowments';
  const isYrc = currentUnit.slug === 'youth-red-cross';
  const isIic = currentUnit.slug === 'iic';

  const { placementExtras, yrcExtras, iicExtras, scholarshipsAndMedals } = SITE_CONTENT.campusLife;

  return (
    <>
      <SeoHead
        title={`${currentUnit.title[lang]} — ${SITE_CONTENT.campusLife.pageTitle[lang]}`}
        description={currentUnit.about[lang]}
      />
      <InnerPageLayout
        lang={lang}
        title={currentUnit.title}
        subtitle={currentUnit.description}
        breadcrumbs={[
          { label: SITE_CONTENT.campusLife.pageTitle, href: '/student-support' },
          { label: currentUnit.title },
        ]}
        subMenu={subMenu}
      >
        {/* About + Coordinator + Contact */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6"
        >
          <div>
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
              {lang === 'en' ? 'About' : 'ಪರಿಚಯ'}
            </h2>
            <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
              {currentUnit.about[lang]}
            </p>
          </div>

          {currentUnit.coordinatorNotice && (
            <div
              role="note"
              className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              <span>{currentUnit.coordinatorNotice}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#EFE7DA] dark:border-[#2C2225]">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
              <User className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="text-xs text-[#6B6063] dark:text-[#B4A9A3]">
                  {lang === 'en' ? 'Coordinator / Officer' : 'ಸಂಯೋಜಕರು'}
                </div>
                <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA] mt-0.5">
                  {currentUnit.coordinator}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
              <Phone className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="min-w-0">
                <div className="text-xs text-[#6B6063] dark:text-[#B4A9A3]">
                  {lang === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}
                </div>
                <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA] mt-0.5 break-all">
                  {currentUnit.contact}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Placement Real Data (Objectives, 2024-25 PDF, Committee — zero fake student samples) */}
        {isPlacement && (
          <>
            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-5"
            >
              <div
                role="note"
                className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
              >
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                <span>{placementExtras.notice[lang]}</span>
              </div>

              <div>
                <a
                  href={placementExtras.placementPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] font-semibold text-sm transition-colors tap-press"
                >
                  <span>{placementExtras.placementPdfLabel[lang]}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225]">
                <h2 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
                  {lang === 'en' ? 'Placement Cell Objectives' : 'ಉದ್ಯೋಗ ಕೋಶದ ಉದ್ದೇಶಗಳು'}
                </h2>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#4A4144] dark:text-[#CFC6C0]">
                  {placementExtras.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] mt-1 shrink-0" aria-hidden="true" />
                      <span>{obj[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'Placement Committee (12 Members)' : 'ಉದ್ಯೋಗ ಕೋಶ ಸಮಿತಿ (12 ಸದಸ್ಯರು)'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {placementExtras.committee.map((member, idx) => (
                  <article
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] space-y-1"
                  >
                    <h3 className="font-semibold text-sm sm:text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#5A4F53] dark:text-[#BDB2AC]">
                      {member.department}
                    </p>
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
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Scholarships & 5 Endowed Gold Medals */}
        {isScholarships && (
          <>
            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'Endowed Gold Medals (5)' : 'ದತ್ತಿ ಚಿನ್ನದ ಪದಕಗಳು (5)'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarshipsAndMedals.goldMedals.map((medal) => (
                  <article
                    key={medal.id}
                    className="p-5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#E6D7B3] dark:border-[#4A3B22]"
                  >
                    <h3 className="font-serif-display font-bold text-base sm:text-lg text-[#7A1F2B] dark:text-[#E5C16C] mb-1.5">
                      {medal.name}
                    </h3>
                    <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                      {medal.criteria[lang]}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'Scholarships Available (10 Schemes)' : 'ಲಭ್ಯವಿರುವ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆಗಳು (10)'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarshipsAndMedals.scholarships.map((sch, i) => (
                  <article
                    key={sch.id}
                    className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                  >
                    <div className="text-xs font-mono font-semibold text-[#7A1F2B] dark:text-[#E5C16C] mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-[#1F1B1D] dark:text-[#F5EFEA] mb-1">
                      {sch.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4F53] dark:text-[#BDB2AC] leading-relaxed">
                      {sch.detail[lang]}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Youth Red Cross Units & Executive Committee */}
        {isYrc && (
          <section
            data-animate="fade-up"
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {yrcExtras.units.map((u, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#7A1F2B] dark:bg-[#240B10] text-white"
                >
                  <div className="text-xs font-semibold text-[#E7C675]">
                    {u.label[lang]}
                  </div>
                  <div className="font-serif-display font-bold text-2xl mt-1">
                    {u.count}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartPulse className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'YRC Executive Committee' : 'YRC ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {yrcExtras.committee.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                  >
                    <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {member.name}
                    </div>
                    <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-0.5">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* IIC Vision, Mission & Team */}
        {isIic && (
          <section
            data-animate="fade-up"
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
                <h2 className="font-serif-display font-bold text-lg text-[#7A1F2B] dark:text-[#E5C16C] mb-2">
                  {lang === 'en' ? 'IIC Vision' : 'IIC ದೃಷ್ಟಿ'}
                </h2>
                <p className="text-sm sm:text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {iicExtras.vision[lang]}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]">
                <h2 className="font-serif-display font-bold text-lg text-[#7A1F2B] dark:text-[#E5C16C] mb-2">
                  {lang === 'en' ? 'IIC Mission' : 'IIC ಧ್ಯೇಯ'}
                </h2>
                <p className="text-sm sm:text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {iicExtras.mission[lang]}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'IIC Council Members (10 Members)' : 'IIC ಮಂಡಳಿ ಸದಸ್ಯರು'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {iicExtras.team.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                  >
                    <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {member.name}
                    </div>
                    <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-0.5">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Activities */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-4">
            {lang === 'en' ? 'Key Activities' : 'ಪ್ರಮುಖ ಚಟುವಟಿಕೆಗಳು'}
          </h2>
          <ul className="space-y-2.5 text-base text-[#4A4144] dark:text-[#CFC6C0]">
            {currentUnit.activities[lang].map((act, i) => (
              <li key={i}>• {act}</li>
            ))}
          </ul>
        </section>

        {/* Photo Gallery */}
        <section data-animate="fade-up" className="space-y-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'Photo Gallery' : 'ಛಾಯಾಚಿತ್ರಗಳು'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentUnit.gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427]"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${currentUnit.title[lang]} photo ${i + 1}`}
                  fallbackTitle={currentUnit.title[lang]}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
}
