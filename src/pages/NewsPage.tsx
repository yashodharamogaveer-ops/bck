import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, MapPin, ArrowRight, Megaphone } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';

interface NewsPageProps {
  lang: Language;
}

export function NewsPage({ lang }: NewsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All News & Events', kn: 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳು' }, href: '/news' },
    { label: { en: 'Rank Holders 2025', kn: 'ರ‍್ಯಾಂಕ್ ವಿಜೇತರು 2025' }, href: '/#rank-holders' },
    { label: { en: 'Student Support', kn: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ' }, href: '/student-support' },
    { label: { en: 'Alumni Association', kn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಸಂಘ' }, href: '/associations/alumni' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? SITE_CONTENT.news.items
      : SITE_CONTENT.news.items.filter((item) => item.categoryKey === activeCategory);

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.news.pageTitle[lang]}
        description="Upcoming campus events, academic notices, cultural showcases, NSS/NCC drives, and College Blog updates from Kundapura."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.news.pageTitle}
        subtitle={{
          en: 'Campus announcements, upcoming events, and direct access to our College Blog.',
          kn: 'ಕ್ಯಾಂಪಸ್ ಪ್ರಕಟಣೆಗಳು, ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾಲೇಜು ಬ್ಲಾಗ್ ಕೊಂಡಿ.',
        }}
        breadcrumbs={[{ label: SITE_CONTENT.news.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Pinned Upcoming Event Banner */}
        <section className="bg-[#7A1F2B] dark:bg-[#240B10] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E7C675] mb-2">
              <Megaphone className="w-4 h-4" aria-hidden="true" />
              <span>{SITE_CONTENT.news.pinnedBanner.badge[lang]}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{SITE_CONTENT.news.pinnedBanner.date[lang]}</span>
            </div>
            <h2 className="font-serif-display font-bold text-2xl text-white">
              {SITE_CONTENT.news.pinnedBanner.title[lang]}
            </h2>
          </div>

          <a
            href={SITE_CONTENT.news.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9A24B] hover:bg-[#D8B25D] text-[#1A1315] font-semibold text-sm whitespace-nowrap shrink-0"
          >
            <span>{SITE_CONTENT.news.visitBlog[lang]}</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </section>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter news and events by category"
          className="flex flex-wrap items-center gap-2 p-1.5 bg-white dark:bg-[#1C1618] rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] w-fit max-w-full"
        >
          {SITE_CONTENT.news.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#7A1F2B] text-white dark:bg-[#C9A24B] dark:text-[#1A1315]'
                    : 'text-[#4A4144] dark:text-[#CFC6C0] hover:text-[#7A1F2B] dark:hover:text-white'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Events Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B6063] dark:text-[#B4A9A3] mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                  <span className="font-mono text-[#7A1F2B] dark:text-[#E5C16C]">
                    {item.dateLabel[lang]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.status[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.category[lang]}</span>
                </div>

                <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                  <Link
                    to={`/news/${item.slug}`}
                    className="hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors"
                  >
                    {item.title[lang]}
                  </Link>
                </h3>

                <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-4">
                  {item.summary[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225] flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[#6B6063] dark:text-[#A99E98]">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{item.venue[lang]}</span>
                </span>
                <Link
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline shrink-0"
                >
                  <span>{lang === 'en' ? 'Details' : 'ವಿವರ'}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </InnerPageLayout>
    </>
  );
}
