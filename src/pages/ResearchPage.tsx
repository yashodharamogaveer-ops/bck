import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Microscope, BookOpen, User } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';

interface ResearchPageProps {
  lang: Language;
}

export function ResearchPage({ lang }: ResearchPageProps) {
  const { section } = useParams<{ section?: string }>();
  const activeTab = section || 'committee';

  const [yearFilter, setYearFilter] = useState<string>('all');
  const [pubSearch, setPubSearch] = useState<string>('');

  const subMenu: SubMenuItem[] = SITE_CONTENT.research.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  const currentTab =
    SITE_CONTENT.research.tabs.find((t) => t.id === activeTab) ||
    SITE_CONTENT.research.tabs[0];

  const years = ['all', '2025', '2024', '2023'];

  const filteredPublications = useMemo(() => {
    const q = pubSearch.trim().toLowerCase();
    return SITE_CONTENT.research.publications.filter((p) => {
      const matchesYear = yearFilter === 'all' || p.year === yearFilter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q);
      return matchesYear && matchesQuery;
    });
  }, [yearFilter, pubSearch]);

  return (
    <>
      <SeoHead
        title={`${currentTab.label[lang]} — ${SITE_CONTENT.research.pageTitle[lang]}`}
        description="Research Committee, faculty publications table, and Minor Research Projects at Bhandarkars' Arts and Science College, Kundapura."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.research.pageTitle}
        subtitle={SITE_CONTENT.research.subtitle}
        breadcrumbs={[
          { label: SITE_CONTENT.research.pageTitle, href: '/research' },
          ...(section ? [{ label: currentTab.label }] : []),
        ]}
        subMenu={subMenu}
      >
        {/* Research Committee */}
        {activeTab === 'committee' && (
          <section data-animate="fade-up" className="space-y-5">
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {SITE_CONTENT.research.tabs[0].label[lang]}
            </h2>
            <div data-animate-cards className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITE_CONTENT.research.committee.map((m, idx) => (
                <article
                  key={idx}
                  data-animate-card
                  className="bg-white dark:bg-[#1C1618] rounded-2xl p-5 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {m.name}
                    </div>
                    <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC]">
                      {m.role[lang]}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Filterable Publications: Stacked Cards on Mobile + Table on Tablet/Desktop */}
        {(activeTab === 'committee' || activeTab === 'publications') && (
          <section data-animate="fade-up" className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {SITE_CONTENT.research.tabs[1].label[lang]}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <input
                  type="search"
                  value={pubSearch}
                  onChange={(e) => setPubSearch(e.target.value)}
                  placeholder={lang === 'en' ? 'Filter by author or journal...' : 'ಲೇಖಕ ಅಥವಾ ಜರ್ನಲ್ ಹುಡುಕಿ...'}
                  className="w-full sm:w-56 min-h-[44px] px-3.5 py-2 rounded-xl bg-white dark:bg-[#1C1618] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                />
                <select
                  aria-label="Filter publications by year"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full sm:w-auto min-h-[44px] px-3.5 py-2 rounded-xl bg-white dark:bg-[#1C1618] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === 'all' ? (lang === 'en' ? 'All Years' : 'ಎಲ್ಲಾ ವರ್ಷಗಳು') : y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="md:hidden space-y-3">
              {filteredPublications.map((pub) => (
                <article
                  key={pub.id}
                  className="bg-white dark:bg-[#1C1618] rounded-2xl p-4 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#7A1F2B] dark:text-[#E5C16C]">
                    <span>{pub.year}</span>
                    <span className="font-sans text-[#6B6063] dark:text-[#B4A9A3] truncate">
                      {pub.journal}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0]">
                    {pub.author}
                  </p>
                </article>
              ))}
            </div>

            {/* Tablet & Desktop Table */}
            <div className="hidden md:block overflow-x-auto bg-white dark:bg-[#1C1618] rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#EAE1D4] dark:border-[#2E2427] bg-[#FAF7F2] dark:bg-[#221A1D] text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                    <th className="py-3.5 px-5">{lang === 'en' ? 'Title' : 'ಶೀರ್ಷಿಕೆ'}</th>
                    <th className="py-3.5 px-5">{lang === 'en' ? 'Author' : 'ಲೇಖಕರು'}</th>
                    <th className="py-3.5 px-5">{lang === 'en' ? 'Year' : 'ವರ್ಷ'}</th>
                    <th className="py-3.5 px-5">{lang === 'en' ? 'Journal' : 'ಜರ್ನಲ್'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DA] dark:divide-[#2C2225]">
                  {filteredPublications.map((pub) => (
                    <tr key={pub.id}>
                      <td className="py-3.5 px-5 font-medium text-[#1F1B1D] dark:text-[#F5EFEA]">
                        {pub.title}
                      </td>
                      <td className="py-3.5 px-5 text-[#4A4144] dark:text-[#CFC6C0]">
                        {pub.author}
                      </td>
                      <td className="py-3.5 px-5 tabular-nums text-[#7A1F2B] dark:text-[#E5C16C] font-mono text-xs">
                        {pub.year}
                      </td>
                      <td className="py-3.5 px-5 text-[#5A4F53] dark:text-[#BDB2AC]">
                        {pub.journal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Minor Research Projects */}
        {(activeTab === 'committee' || activeTab === 'projects') && (
          <section data-animate="fade-up" className="space-y-4">
            <div className="flex items-center gap-2">
              <Microscope className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.research.tabs[2].label[lang]}
              </h2>
            </div>
            <div data-animate-cards className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SITE_CONTENT.research.projects.map((proj) => (
                <article
                  key={proj.id}
                  data-animate-card
                  className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
                >
                  <div className="text-xs font-mono text-[#7A1F2B] dark:text-[#E5C16C] mb-2 tabular-nums">
                    {proj.year} · {proj.status[lang]}
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] mb-1">
                    <strong>PI:</strong> {proj.investigator}
                  </p>
                  <p className="text-xs text-[#6B6063] dark:text-[#B4A9A3]">
                    <strong>Agency:</strong> {proj.agency}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </InnerPageLayout>
    </>
  );
}
