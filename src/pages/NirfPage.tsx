import { Printer } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { DocumentList } from '../components/DocumentList';

interface NirfPageProps {
  lang: Language;
}

export function NirfPage({ lang }: NirfPageProps) {
  const subMenu: SubMenuItem[] = SITE_CONTENT.naac.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.nirf.pageTitle[lang]}
        description="NIRF institutional data submissions and downloadable reports for Bhandarkars' Arts and Science College, Kundapura."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.nirf.pageTitle}
        subtitle={SITE_CONTENT.nirf.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.nirf.pageTitle }]}
        subMenu={subMenu}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'NIRF Submissions & Reports' : 'NIRF ವರದಿಗಳು'}
          </h2>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#DDD3C4] dark:border-[#34292C] bg-white dark:bg-[#1C1618] hover:border-[#7A1F2B] text-xs font-semibold text-[#1F1B1D] dark:text-[#F5EFEA] cursor-pointer no-print"
          >
            <Printer className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
            <span>{lang === 'en' ? 'Print Page' : 'ಮುದ್ರಿಸಿ'}</span>
          </button>
        </div>

        <DocumentList documents={[...SITE_CONTENT.nirf.documents]} lang={lang} />
      </InnerPageLayout>
    </>
  );
}
