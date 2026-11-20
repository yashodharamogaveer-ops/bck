import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface NewsSectionProps {
  lang: Language;
}

export function NewsSection({ lang }: NewsSectionProps) {
  return (
    <section
      id="news"
      className="py-16 sm:py-24 bg-[#FAF7F2] dark:bg-[#141012]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="fade-up"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
              {SITE_CONTENT.news.eyebrow[lang]}
            </p>
            <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] text-balance">
              {SITE_CONTENT.news.heading[lang]}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#7A1F2B] dark:border-[#C9A24B] text-[#7A1F2B] dark:text-[#C9A24B] hover:bg-[#7A1F2B] hover:text-white dark:hover:bg-[#C9A24B] dark:hover:text-[#1A1315] font-semibold text-sm transition-colors whitespace-nowrap tap-press"
            >
              <span>{lang === 'en' ? 'All News & Events' : 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳು'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE_CONTENT.news.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:hover:bg-[#D8B25D] dark:text-[#1A1315] font-semibold text-sm transition-colors whitespace-nowrap shrink-0 tap-press focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              <span>{SITE_CONTENT.news.visitBlog[lang]}</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          data-animate-cards
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SITE_CONTENT.news.items.slice(0, 3).map((item) => (
            <article
              key={item.id}
              data-animate-card
              className="card-interactive bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B6063] dark:text-[#B4A9A3] mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                  <span className="font-mono text-[#7A1F2B] dark:text-[#E5C16C]">
                    {item.dateLabel[lang]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.status[lang]}</span>
                </div>

                <h3 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2.5">
                  <Link
                    to={`/news/${item.slug}`}
                    className="hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors"
                  >
                    {item.title[lang]}
                  </Link>
                </h3>

                <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                  {item.summary[lang]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EFE7DA] dark:border-[#2C2225] flex items-center justify-between text-xs font-medium text-[#6B6063] dark:text-[#A99E98]">
                <span>{item.category[lang]}</span>
                <Link
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center min-h-[44px] px-2 text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
                >
                  {lang === 'en' ? 'Read details →' : 'ವಿವರ ಓದಿ →'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
