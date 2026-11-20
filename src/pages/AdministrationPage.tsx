import { useParams } from 'react-router-dom';
import { User, Building, Users, FileText, Landmark, ShieldCheck, AlertTriangle } from 'lucide-react';
import { GovernanceMember, Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { DocumentList } from '../components/DocumentList';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AdministrationPageProps {
  lang: Language;
}

export function AdministrationPage({ lang }: AdministrationPageProps) {
  const { subpage } = useParams<{ subpage?: string }>();
  const activeTab = subpage || 'overview';

  const subMenu: SubMenuItem[] = SITE_CONTENT.administration.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  const currentTabMeta =
    SITE_CONTENT.administration.tabs.find((t) => t.id === activeTab) ||
    SITE_CONTENT.administration.tabs[0];

  const renderPersonCards = (members: readonly GovernanceMember[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {members.map((person) => (
        <article
          key={person.id}
          className={`rounded-2xl p-4 sm:p-5 border shadow-sm flex items-center gap-4 ${
            person.isPlaceholder
              ? 'bg-amber-50/70 dark:bg-amber-950/20 border-dashed border-amber-300 dark:border-amber-700/60'
              : 'bg-white dark:bg-[#1C1618] border-[#EAE1D4] dark:border-[#2E2427]'
          }`}
        >
          {person.photo ? (
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E2D8C8] dark:border-[#34292C] bg-[#EFE8DC] dark:bg-[#261D20] shrink-0">
              <ImageWithFallback
                src={person.photo}
                alt={person.name}
                fallbackTitle={person.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ) : (
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${
                person.isPlaceholder
                  ? 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
                  : 'bg-[#EFE8DC] dark:bg-[#261D20] border-[#E2D8C8] dark:border-[#34292C] text-[#7A1F2B] dark:text-[#C9A24B]'
              }`}
            >
              {person.isPlaceholder ? (
                <AlertTriangle className="w-6 h-6" aria-hidden="true" />
              ) : (
                <User className="w-6 h-6" aria-hidden="true" />
              )}
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-serif-display font-bold text-base sm:text-lg text-[#1F1B1D] dark:text-[#F5EFEA] leading-snug">
              {person.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F53] dark:text-[#BDB2AC] mt-0.5 leading-snug">
              {person.designation}
            </p>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <>
      <SeoHead
        title={`${currentTabMeta.label[lang]} — ${SITE_CONTENT.administration.pageTitle[lang]}`}
        description="Institutional administration, Principal Dr. Shubhakarachary, AGE Manipal, BASC Trust, Vocational Courses Trust, Governing Council, Staff Council, Organogram, and Perspective Plan 2022–2027."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.administration.pageTitle}
        subtitle={SITE_CONTENT.administration.subtitle}
        breadcrumbs={[
          { label: SITE_CONTENT.administration.pageTitle, href: '/administration' },
          ...(subpage ? [{ label: currentTabMeta.label }] : []),
        ]}
        subMenu={subMenu}
      >
        {/* Principal Profile Card */}
        {(activeTab === 'overview' || activeTab === 'staff-council') && (
          <section className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-28 h-32 rounded-2xl overflow-hidden border border-[#E6DDD0] dark:border-[#32272B] bg-[#EFE8DC] dark:bg-[#261D20] shrink-0">
                <ImageWithFallback
                  src={SITE_CONTENT.principal.photo}
                  alt={SITE_CONTENT.principal.name}
                  fallbackTitle={SITE_CONTENT.principal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-1">
                  {SITE_CONTENT.principal.role[lang]}
                </div>
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {SITE_CONTENT.principal.name}{' '}
                  <span className="font-body text-sm font-medium text-[#7A1F2B] dark:text-[#C9A24B]">
                    · {SITE_CONTENT.principal.credentials}
                  </span>
                </h2>
                <p className="mt-2.5 text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {SITE_CONTENT.principal.quote[lang]}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Trusts & Councils */}
        {(activeTab === 'overview' || activeTab === 'management') && (
          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Landmark className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en'
                    ? 'Academy of General Education (AGE), Manipal'
                    : 'ಅಕಾಡೆಮಿ ಆಫ್ ಜನರಲ್ ಎಜುಕೇಶನ್ (AGE), ಮಣಿಪಾಲ'}
                </h2>
              </div>
              {renderPersonCards(SITE_CONTENT.administration.ageCommittee)}
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en'
                    ? "Bhandarkars' College Trust (Regd.), Kundapura"
                    : 'ಭಂಡಾರ್ಕರ್ಸ್ ಕಾಲೇಜು ಟ್ರಸ್ಟ್ (ರಿ.), ಕುಂದಾಪುರ'}
                </h2>
              </div>
              {renderPersonCards(SITE_CONTENT.administration.bascTrust)}
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en'
                    ? "Bhandarkars' Vocational Courses Trust"
                    : 'ಭಂಡಾರ್ಕರ್ಸ್ ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳ ಟ್ರಸ್ಟ್'}
                </h2>
              </div>
              {renderPersonCards(SITE_CONTENT.administration.vocationalTrust)}
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {lang === 'en' ? 'Governing Council' : 'ಕಾಲೇಜು ಆಡಳಿತ ಮಂಡಳಿ (Governing Council)'}
                </h2>
              </div>
              {renderPersonCards(SITE_CONTENT.administration.governingCouncil)}
            </section>
          </div>
        )}

        {/* Staff Council */}
        {(activeTab === 'overview' || activeTab === 'staff-council') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.administration.tabs[2].label[lang]}
              </h2>
            </div>
            <div
              role="note"
              className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
              <span>{SITE_CONTENT.administration.staffCouncilNotice[lang]}</span>
            </div>
            {renderPersonCards(SITE_CONTENT.administration.staffCouncilMembers)}
          </section>
        )}

        {/* Organogram PDF */}
        {(activeTab === 'overview' || activeTab === 'organogram') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.administration.tabs[3].label[lang]}
              </h2>
            </div>
            <DocumentList
              documents={SITE_CONTENT.administration.documents.organogram}
              lang={lang}
            />
          </section>
        )}

        {/* Perspective Plan 2022-2027 PDF */}
        {(activeTab === 'overview' || activeTab === 'perspective-plan') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.administration.tabs[4].label[lang]}
              </h2>
            </div>
            <DocumentList
              documents={SITE_CONTENT.administration.documents.perspectivePlan}
              lang={lang}
            />
          </section>
        )}
      </InnerPageLayout>
    </>
  );
}
