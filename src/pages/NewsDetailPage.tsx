import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { NotFoundPage } from './NotFoundPage';

interface NewsDetailPageProps {
  lang: Language;
}

export function NewsDetailPage({ lang }: NewsDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const item = SITE_CONTENT.news.items.find((n) => n.slug === slug);

  if (!item) {
    return <NotFoundPage lang={lang} />;
  }

  const subMenu: SubMenuItem[] = [
    { label: { en: 'All News & Events', kn: 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳು' }, href: '/news' },
    ...SITE_CONTENT.news.items.map((n) => ({
      label: n.title,
      href: `/news/${n.slug}`,
    })),
  ];

  return (
    <>
      <SeoHead
        title={item.title[lang]}
        description={item.summary[lang]}
      />
      <InnerPageLayout
        lang={lang}
        title={item.title}
        subtitle={item.summary}
        breadcrumbs={[
          { label: SITE_CONTENT.news.pageTitle, href: '/news' },
          { label: item.title },
        ]}
        subMenu={subMenu}
      >
        <article className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5A4F53] dark:text-[#BDB2AC] pb-4 border-b border-[#EFE7DA] dark:border-[#2C2225]">
            <span className="inline-flex items-center gap-1.5 font-mono text-[#7A1F2B] dark:text-[#E5C16C]">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{item.dateLabel[lang]}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{item.status[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{item.category[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <span>{item.venue[lang]}</span>
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#3A3033] dark:text-[#DFD7D1] leading-relaxed">
            {item.fullBody[lang]}
          </p>

          <div className="pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225] flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{lang === 'en' ? 'Back to News & Events' : 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳಿಗೆ ಹಿಂತಿರುಗಿ'}</span>
            </Link>

            <a
              href={SITE_CONTENT.news.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C]"
            >
              <span>{SITE_CONTENT.news.visitBlog[lang]}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      </InnerPageLayout>
    </>
  );
}
