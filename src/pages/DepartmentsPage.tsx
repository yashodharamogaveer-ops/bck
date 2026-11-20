import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Languages,
  Landmark,
  TrendingUp,
  Scale,
  Users,
  Atom,
  FlaskConical,
  Sigma,
  Leaf,
  Bug,
  BarChart3,
  Laptop,
  Calculator,
  Briefcase,
  Trophy,
  Newspaper,
  Microscope,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';

interface DepartmentsPageProps {
  lang: Language;
}

const deptIconMap = {
  BookOpen,
  Languages,
  Landmark,
  TrendingUp,
  Scale,
  Users,
  Atom,
  FlaskConical,
  Sigma,
  Leaf,
  Bug,
  BarChart3,
  Laptop,
  Calculator,
  Briefcase,
  Trophy,
  Newspaper,
  Microscope,
};

export function DepartmentsPage({ lang }: DepartmentsPageProps) {
  const [query, setQuery] = useState('');

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All Departments', kn: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು' }, href: '/departments' },
    { label: { en: 'Degree Programs', kn: 'ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' }, href: '/programs' },
    { label: { en: 'Research & Development', kn: 'ಸಂಶೋಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ' }, href: '/research' },
    { label: { en: 'Facilities & Library', kn: 'ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಗ್ರಂಥಾಲಯ' }, href: '/facilities' },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SITE_CONTENT.departments.items;
    return SITE_CONTENT.departments.items.filter(
      (d) =>
        d.name[lang].toLowerCase().includes(q) ||
        d.name.en.toLowerCase().includes(q) ||
        d.stream[lang].toLowerCase().includes(q) ||
        d.hod.toLowerCase().includes(q) ||
        d.faculty.some(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.qualification.toLowerCase().includes(q)
        )
    );
  }, [query, lang]);

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.departments.pageTitle[lang]}
        description="Search academic departments across Arts, Sciences, Commerce, Computer Science, Management, and Physical Education at Bhandarkars' College."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.departments.pageTitle}
        subtitle={SITE_CONTENT.departments.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.departments.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search
            className="w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B] absolute left-4 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={SITE_CONTENT.departments.searchPlaceholder[lang]}
            aria-label={SITE_CONTENT.departments.searchPlaceholder[lang]}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#1C1618] border border-[#DDD3C4] dark:border-[#34292C] text-sm text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#8C8084] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B]"
          />
        </div>

        {/* Departments Grid */}
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-[#1C1618] rounded-2xl p-8 border border-[#EAE1D4] dark:border-[#2E2427] text-center text-sm text-[#5A4F53] dark:text-[#BDB2AC]">
            {lang === 'en'
              ? 'No departments match your search.'
              : 'ಯಾವುದೇ ವಿಭಾಗ ಕಂಡುಬಂದಿಲ್ಲ.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((dept) => {
              const Icon = deptIconMap[dept.iconName] || BookOpen;
              const isHodWarning = dept.hod.includes('⚠') || Boolean(dept.hodNotice);
              const verifiedFacultyCount = dept.faculty.filter((f) => !f.isPlaceholder).length;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className="group bg-white dark:bg-[#1C1618] rounded-2xl p-5 border border-[#EAE1D4] dark:border-[#2E2427] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-medium text-[#6B6063] dark:text-[#B4A9A3] block">
                          {dept.stream[lang]}
                        </span>
                        <span className="text-[11px] font-semibold text-[#7A1F2B] dark:text-[#E5C16C]">
                          {verifiedFacultyCount > 0
                            ? lang === 'en'
                              ? `${verifiedFacultyCount} Faculty`
                              : `${verifiedFacultyCount} ಬೋಧಕರು`
                            : lang === 'en'
                            ? 'Confirm Roster'
                            : 'ಮಾಹಿತಿ ಬಾಕಿ'}
                        </span>
                      </div>
                    </div>
                    <h2 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-2 group-hover:text-[#7A1F2B] dark:group-hover:text-[#E5C16C]">
                      {dept.name[lang]}
                    </h2>
                    <p
                      className={`text-xs leading-relaxed ${
                        isHodWarning
                          ? 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg px-2.5 py-1.5'
                          : 'text-[#5A4F53] dark:text-[#BDB2AC]'
                      }`}
                    >
                      {isHodWarning && (
                        <AlertTriangle className="w-3.5 h-3.5 inline mr-1 -mt-0.5 shrink-0" aria-hidden="true" />
                      )}
                      <strong className={isHodWarning ? '' : 'text-[#1F1B1D] dark:text-[#F5EFEA]'}>
                        HOD:
                      </strong>{' '}
                      {dept.hod}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EFE7DA] dark:border-[#2C2225] inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C] min-h-[44px]">
                    <span>{lang === 'en' ? 'View Department' : 'ವಿಭಾಗ ನೋಡಿ'}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </InnerPageLayout>
    </>
  );
}
