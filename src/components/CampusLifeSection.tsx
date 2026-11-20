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
  Library,
  Building2,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface CampusLifeSectionProps {
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
  Library,
  Building2,
};

export function CampusLifeSection({ lang }: CampusLifeSectionProps) {
  return (
    <section
      id="campus-life"
      data-animate="fade-up"
      className="py-14 sm:py-24 bg-white dark:bg-[#191315] border-y border-[#E8DFD1] dark:border-[#2C2225]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
              {SITE_CONTENT.campusLife.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
              {SITE_CONTENT.campusLife.heading[lang]}
            </h2>
            <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC]">
              {SITE_CONTENT.campusLife.subtitle[lang]}
            </p>
          </div>
          <Link
            to="/student-support"
            className="self-start sm:self-auto min-h-[44px] inline-flex items-center text-sm font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline whitespace-nowrap"
          >
            {lang === 'en' ? 'Explore all support units →' : 'ಎಲ್ಲಾ ಘಟಕಗಳನ್ನು ನೋಡಿ →'}
          </Link>
        </div>

        <div
          data-animate-cards
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {SITE_CONTENT.campusLife.items.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div key={item.id} data-animate-card>
                <Link
                  to={item.href}
                  className="block h-full text-left p-5 rounded-2xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] card-interactive group focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC] line-clamp-2 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
