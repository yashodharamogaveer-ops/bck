import { Link } from 'react-router-dom';
import {
  BriefcaseBusiness,
  Lightbulb,
  Shield,
  HeartHandshake,
  Compass,
  HeartPulse,
  Award,
  Palette,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';

interface StudentSupportPageProps {
  lang: Language;
}

const iconMap = {
  BriefcaseBusiness,
  Lightbulb,
  Shield,
  HeartHandshake,
  Compass,
  HeartPulse,
  Award,
  Palette,
  Trophy,
};

export function StudentSupportPage({ lang }: StudentSupportPageProps) {
  const units = SITE_CONTENT.campusLife.items.slice(0, 9);

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Support Units', kn: 'ಎಲ್ಲಾ ಬೆಂಬಲ ಘಟಕಗಳು' }, href: '/student-support' },
    ...units.map((u) => ({
      label: u.title,
      href: `/student-support/${u.slug}`,
    })),
  ];

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.campusLife.pageTitle[lang]}
        description="Explore Campus Placement, IIC, NCC, NSS, Rovers & Rangers, Youth Red Cross, Scholarships & Endowments, Fine Arts, and Sports."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.campusLife.pageTitle}
        subtitle={SITE_CONTENT.campusLife.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.campusLife.pageTitle }]}
        subMenu={subMenu}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((unit) => {
            const Icon = iconMap[unit.iconName as keyof typeof iconMap] || Award;
            return (
              <Link
                key={unit.id}
                to={`/student-support/${unit.slug}`}
                className="group bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2 group-hover:text-[#7A1F2B] dark:group-hover:text-[#E5C16C]">
                    {unit.title[lang]}
                  </h2>
                  <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                    {unit.description[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225] inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C]">
                  <span>{lang === 'en' ? 'Open Unit Page' : 'ಘಟಕದ ಪುಟ ನೋಡಿ'}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </InnerPageLayout>
    </>
  );
}
