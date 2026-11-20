import { useSearchParams } from 'react-router-dom';
import { MapPin, ExternalLink } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';
import { AdmissionsSection } from '../components/AdmissionsSection';

interface ContactPageProps {
  lang: Language;
}

export function ContactPage({ lang }: ContactPageProps) {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';

  const subMenu: SubMenuItem[] = [
    { label: { en: 'Contact & Admissions Form', kn: 'ಸಂಪರ್ಕ ಮತ್ತು ಅರ್ಜಿ' }, href: '/contact' },
    { label: { en: 'Academic Programs', kn: 'ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು' }, href: '/programs' },
    { label: { en: 'Departments', kn: 'ವಿಭಾಗಗಳು' }, href: '/departments' },
    { label: { en: 'Administration', kn: 'ಆಡಳಿತ ಮಂಡಳಿ' }, href: '/administration' },
  ];

  return (
    <>
      <SeoHead
        title={SITE_CONTENT.contactPage.pageTitle[lang]}
        description="Contact Bhandarkars' Arts and Science College, Kundapura — Phone 08254-230469, Mobile +91 8254230369, principal@basck.in, admissions enquiry form, and department directory."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.contactPage.pageTitle}
        subtitle={SITE_CONTENT.contactPage.subtitle}
        breadcrumbs={[{ label: SITE_CONTENT.contactPage.pageTitle }]}
        subMenu={subMenu}
      >
        {/* Admissions & Contact Form + Official Contact Details */}
        <div className="rounded-2xl overflow-hidden border border-[#EAE1D4] dark:border-[#2E2427]">
          <AdmissionsSection lang={lang} preselectedCourse={preselectedCourse} />
        </div>

        {/* Embedded Google Map Placeholder */}
        <section
          data-animate="fade-up"
          className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                {SITE_CONTENT.footer.mapPlaceholderTitle[lang]}
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Bhandarkars+Arts+and+Science+College+Kundapura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
            >
              <span>{SITE_CONTENT.footer.mapDirections[lang]}</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#F3ECE0] to-[#E8DFD1] dark:from-[#261D20] dark:to-[#1B1416] border border-[#DDD3C4] dark:border-[#34292C] p-8 sm:p-12 text-center">
            <MapPin className="w-8 h-8 text-[#7A1F2B] dark:text-[#C9A24B] mx-auto mb-3" aria-hidden="true" />
            <p className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA]">
              {SITE_CONTENT.contact.institution}
            </p>
            <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC] mt-1">
              {SITE_CONTENT.admissions.contactCard.address[lang]}
            </p>
            <p className="text-xs font-mono text-[#7A1F2B] dark:text-[#E5C16C] mt-2">
              13.6215° N, 74.6915° E · [Embedded Google Map Placeholder]
            </p>
          </div>
        </section>

        {/* Department-wise Contact Directory: Stacked Cards on Mobile + Table on Desktop */}
        <section data-animate="fade-up" className="space-y-4">
          <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
            {SITE_CONTENT.contactPage.deptTableTitle[lang]}
          </h2>

          {/* Mobile Stacked Cards */}
          <div className="md:hidden space-y-3">
            {SITE_CONTENT.contactPage.deptContacts.map((row, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-[#1C1618] rounded-2xl p-4 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-1.5"
              >
                <h3 className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {row.dept[lang]}
                </h3>
                <p className="text-sm text-[#4A4144] dark:text-[#CFC6C0]">
                  <span className="font-medium text-[#7A1F2B] dark:text-[#C9A24B]">
                    {lang === 'en' ? 'Coordinator: ' : 'ಮುಖ್ಯಸ್ಥರು: '}
                  </span>
                  {row.head}
                </p>
                <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC] tabular-nums">
                  {row.contact}
                </p>
              </article>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto bg-white dark:bg-[#1C1618] rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#EAE1D4] dark:border-[#2E2427] bg-[#FAF7F2] dark:bg-[#221A1D] text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                  <th className="py-3.5 px-5">{lang === 'en' ? 'Department / Office' : 'ವಿಭಾಗ / ಕಚೇರಿ'}</th>
                  <th className="py-3.5 px-5">{lang === 'en' ? 'Head / Coordinator' : 'ಮುಖ್ಯಸ್ಥರು'}</th>
                  <th className="py-3.5 px-5">{lang === 'en' ? 'Phone / Email' : 'ದೂರವಾಣಿ / ಇಮೇಲ್'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE7DA] dark:divide-[#2C2225]">
                {SITE_CONTENT.contactPage.deptContacts.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 px-5 font-medium text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {row.dept[lang]}
                    </td>
                    <td className="py-3.5 px-5 text-[#4A4144] dark:text-[#CFC6C0]">
                      {row.head}
                    </td>
                    <td className="py-3.5 px-5 text-[#5A4F53] dark:text-[#BDB2AC] tabular-nums">
                      {row.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </InnerPageLayout>
    </>
  );
}
