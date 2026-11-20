import { Eye, Target, ShieldCheck, Milestone } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AboutPageProps {
  lang: Language;
}

export function AboutPage({ lang }: AboutPageProps) {
  const subMenu: SubMenuItem[] = [
    { label: { en: 'Our Story', kn: 'ನಮ್ಮ ಇತಿಹಾಸ' }, href: '/about' },
    { label: { en: 'Administration', kn: 'ಆಡಳಿತ ಮಂಡಳಿ' }, href: '/administration' },
    { label: { en: 'NAAC / IQAC', kn: 'NAAC / IQAC' }, href: '/naac' },
    { label: { en: 'Departments', kn: 'ವಿಭಾಗಗಳು' }, href: '/departments' },
  ];

  const pillarIcons = {
    vision: Eye,
    mission: Target,
    quality: ShieldCheck,
  };

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.about.pageTitle[lang]}
        description="Learn about the founding heritage of Bhandarkars' Arts and Science College, Kundapura since June 1963, Vision, Mission, Quality Policy, and institutional milestones."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.about.pageTitle}
        subtitle={SITE_CONTENT.about.heading}
        breadcrumbs={[{ label: SITE_CONTENT.about.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Story Card */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-7 space-y-4 text-[#4A4144] dark:text-[#CFC6C0] text-base leading-relaxed">
              <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B]">
                {SITE_CONTENT.about.eyebrow[lang]}
              </p>
              <h2 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.about.heading[lang]}
              </h2>
              {SITE_CONTENT.about.storyParagraphs[lang].map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="md:col-span-5 flex flex-col">
              <div className="flex-1 min-h-[220px] aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden border border-[#E6DDD0] dark:border-[#32272B]">
                <ImageWithFallback
                  src={SITE_CONTENT.about.image}
                  alt="Bhandarkars' Arts and Science College Kundapura campus"
                  fallbackTitle="Bhandarkars' College · Est. 1963"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs text-[#6B6063] dark:text-[#A99E98]">
                {SITE_CONTENT.about.imageCaption[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* Founders & Patrons */}
        <section
          data-animate="fade-up"
          className="space-y-4"
        >
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {SITE_CONTENT.about.foundersTitle[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONTENT.about.founders.map((founder) => (
              <article
                key={founder.id}
                className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-24 h-28 rounded-2xl overflow-hidden border border-[#E6DDD0] dark:border-[#32272B] bg-[#EFE8DC] dark:bg-[#261D20] shrink-0">
                  <ImageWithFallback
                    src={founder.photo}
                    alt={founder.name}
                    fallbackTitle={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B] mb-1">
                    {founder.role[lang]}
                  </div>
                  <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                    {founder.bio[lang]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Vertical Timeline */}
        <section
          id="timeline"
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Milestone className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {SITE_CONTENT.about.timelineTitle[lang]}
            </h2>
          </div>

          <ol className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-[#E2D8C8] dark:before:bg-[#32272B]">
            {SITE_CONTENT.about.timeline.map((item, idx) => (
              <li key={idx} className="relative pl-11">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#FAF7F2] dark:bg-[#241B1E] border-2 border-[#7A1F2B] dark:border-[#C9A24B] flex items-center justify-center text-[10px] font-bold text-[#7A1F2B] dark:text-[#C9A24B]"
                >
                  {idx + 1}
                </span>
                <div className="text-xs font-mono font-semibold text-[#7A1F2B] dark:text-[#E5C16C] tabular-nums mb-1">
                  {item.year}
                </div>
                <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-1">
                  {item.title[lang]}
                </h3>
                <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {item.detail[lang]}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Vision, Mission, Quality Policy */}
        <section
          id="vision"
          data-animate-cards
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SITE_CONTENT.about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
            return (
              <article
                key={pillar.id}
                data-animate-card
                className="card-interactive bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2.5">
                  {pillar.title[lang]}
                </h3>
                <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {pillar.body[lang]}
                </p>
              </article>
            );
          })}
        </section>
      </InnerPageLayout>
    </>
  );
}
