import { Printer, Scale } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { DocumentList } from '../components/DocumentList';

interface RtiPageProps {
  lang: Language;
}

export function RtiPage({ lang }: RtiPageProps) {
  const subMenu: SubMenuItem[] = SITE_CONTENT.naac.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.rti.pageTitle[lang]}
        description="RTI Act statutory disclosures, Public Information Officer details, and downloadable documents for Bhandarkars' College."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.rti.pageTitle}
        subtitle={SITE_CONTENT.rti.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.rti.pageTitle }]}
        subMenu={subMenu}
      >
        <section className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm print-container">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {lang === 'en' ? 'Designated RTI Officers' : 'ನಿಯೋಜಿತ RTI ಅಧಿಕಾರಿಗಳು'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#DDD3C4] dark:border-[#34292C] bg-[#FAF7F2] dark:bg-[#221A1D] text-xs font-semibold cursor-pointer no-print"
            >
              <Printer className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <span>{lang === 'en' ? 'Print' : 'ಮುದ್ರಿಸಿ'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_CONTENT.rti.officers.map((off, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
              >
                <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                  {off.role[lang]}
                </div>
                <div className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA] mt-1">
                  {off.name}
                </div>
                <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-1">
                  {off.contact}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'Proactive Disclosures (PDF)' : 'RTI ದಾಖಲೆಗಳು (PDF)'}
          </h2>
          <DocumentList documents={[...SITE_CONTENT.rti.documents]} lang={lang} />
        </section>
      </InnerPageLayout>
    </>
  );
}
