import { Printer, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { DocumentList } from '../components/DocumentList';
import { Accordion, AccordionEntry } from '../components/Accordion';

interface NaacPageProps {
  lang: Language;
}

export function NaacPage({ lang }: NaacPageProps) {
  const subMenu: SubMenuItem[] = SITE_CONTENT.naac.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  const criteriaItems: AccordionEntry[] = SITE_CONTENT.naac.criteria.map((criterion) => ({
    id: criterion.id,
    prefix: criterion.number,
    title: criterion.title[lang],
    content: <DocumentList documents={[...criterion.docs]} lang={lang} />,
  }));

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.naac.pageTitle[lang]}
        description="IQAC, IIQA, NAAC Criteria 1–7, SSR Cycle-IV PDF, and AQAR documents for Bhandarkars' Arts and Science College, Kundapura."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.naac.pageTitle}
        subtitle={SITE_CONTENT.naac.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.naac.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Print Button & IQAC Overview */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm print-container"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B] mb-1">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>IQAC · Internal Quality Assurance Cell</span>
              </div>
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {lang === 'en'
                  ? 'Internal Quality Assurance Cell (IQAC)'
                  : 'ಆಂತರಿಕ ಗುಣಮಟ್ಟ ಭರವಸೆ ಕೋಶ (IQAC)'}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="self-start inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl border border-[#DDD3C4] dark:border-[#34292C] bg-[#FAF7F2] dark:bg-[#221A1D] hover:border-[#7A1F2B] text-xs font-semibold text-[#1F1B1D] dark:text-[#F5EFEA] tap-press cursor-pointer no-print"
            >
              <Printer className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <span>{lang === 'en' ? 'Print Document Index' : 'ಮುದ್ರಿಸಿ'}</span>
            </button>
          </div>

          <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-5">
            {SITE_CONTENT.naac.iqacOverview.summary[lang]}
          </p>

          <div className="flex flex-wrap gap-6 pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225] text-xs sm:text-sm">
            <div>
              <span className="text-[#6B6063] dark:text-[#B4A9A3]">IQAC Coordinator: </span>
              <strong className="text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.naac.iqacOverview.coordinator}
              </strong>
            </div>
            <div>
              <span className="text-[#6B6063] dark:text-[#B4A9A3]">Status & History: </span>
              <strong className="text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.naac.iqacOverview.established}
              </strong>
            </div>
          </div>

          {/* 2023-24 IQAC Members */}
          <div className="mt-6 pt-5 border-t border-[#EFE7DA] dark:border-[#2C2225]">
            <h3 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
              {lang === 'en' ? 'IQAC Composition (2023–24)' : 'IQAC ಸಮಿತಿ ಸದಸ್ಯರು (2023–24)'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SITE_CONTENT.naac.iqacOverview.members.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                >
                  <div className="font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA]">
                    {m.name}
                  </div>
                  <div className="text-xs text-[#5A4F53] dark:text-[#BDB2AC] mt-0.5">
                    {m.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IIQA & SSR Cycle-IV */}
        <section id="ssr" data-animate="fade-up" className="space-y-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'IIQA & SSR Cycle-IV' : 'IIQA ಮತ್ತು SSR ಸೈಕಲ್-IV'}
          </h2>
          <DocumentList documents={[...SITE_CONTENT.naac.iiqaAndSsr]} lang={lang} />
        </section>

        {/* IQAC Web Links */}
        <section data-animate="fade-up" className="space-y-4 no-print">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'IQAC Web Links' : 'IQAC ವೆಬ್ ಕೊಂಡಿಗಳು'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SITE_CONTENT.naac.webLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between min-h-[48px] p-4 rounded-xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] transition-colors tap-press"
              >
                <span>{link.label[lang]}</span>
                <ExternalLink className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* NAAC Criteria 1–7 Accordion */}
        <section id="criteria" data-animate="fade-up" className="space-y-4 print-container">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'NAAC Criteria 1–7 Documentation' : 'NAAC ಮಾನದಂಡಗಳು 1–7'}
          </h2>
          <Accordion items={criteriaItems} defaultOpenId="c1" />
        </section>

        {/* AQAR Documents List */}
        <section data-animate="fade-up" className="space-y-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {lang === 'en' ? 'AQAR Documents' : 'AQAR ವಾರ್ಷಿಕ ವರದಿಗಳು'}
          </h2>
          <DocumentList documents={[...SITE_CONTENT.naac.aqarDocuments]} lang={lang} />
        </section>
      </InnerPageLayout>
    </>
  );
}
