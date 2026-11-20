import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { EnquiryForm } from './EnquiryForm';

interface AdmissionsSectionProps {
  lang: Language;
  preselectedCourse: string;
}

export function AdmissionsSection({
  lang,
  preselectedCourse,
}: AdmissionsSectionProps) {
  return (
    <section
      id="admissions"
      className="py-16 sm:py-24 bg-white dark:bg-[#191315] border-t border-[#E8DFD1] dark:border-[#2C2225]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate="fade-up" className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
            {SITE_CONTENT.admissions.eyebrow[lang]}
          </p>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3 text-balance">
            {SITE_CONTENT.admissions.heading[lang]}
          </h2>
          <p className="text-base text-[#5A4F53] dark:text-[#BDB2AC]">
            {SITE_CONTENT.admissions.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Enquiry Form */}
          <div
            data-animate="fade-up"
            className="lg:col-span-7 bg-[#FAF7F2] dark:bg-[#221A1D] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#32272B]"
          >
            <EnquiryForm
              lang={lang}
              preselectedCourse={preselectedCourse}
              stickySubmitOnMobile
            />
          </div>

          {/* Contact Details Panel */}
          <aside
            data-animate="fade-up"
            className="lg:col-span-5 bg-[#7A1F2B] dark:bg-[#240B10] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif-display font-bold text-2xl text-white mb-6">
                {SITE_CONTENT.admissions.contactCard.title[lang]}
              </h3>

              <dl className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#E7C675] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#E7C675] font-medium mb-0.5">
                      {lang === 'en' ? 'Campus Address' : 'ಕ್ಯಾಂಪಸ್ ವಿಳಾಸ'}
                    </dt>
                    <dd className="text-white/90 leading-relaxed">
                      {SITE_CONTENT.admissions.contactCard.address[lang]}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#E7C675] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#E7C675] font-medium mb-0.5">
                      {lang === 'en' ? 'Telephone & Mobile' : 'ದೂರವಾಣಿ ಮತ್ತು ಮೊಬೈಲ್'}
                    </dt>
                    <dd className="text-white/90 space-y-1 tabular-nums">
                      <div>
                        Mobile:{' '}
                        <a
                          href="tel:+918254230369"
                          className="inline-flex items-center min-h-[44px] hover:underline"
                        >
                          {SITE_CONTENT.contact.mobile}
                        </a>
                      </div>
                      <div>
                        Phone:{' '}
                        <a
                          href="tel:08254230469"
                          className="inline-flex items-center min-h-[44px] hover:underline"
                        >
                          {SITE_CONTENT.contact.phone}
                        </a>
                      </div>
                      <div>PUC Office: {SITE_CONTENT.contact.pucOffice}</div>
                      <div>Fax: {SITE_CONTENT.contact.fax}</div>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#E7C675] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#E7C675] font-medium mb-0.5">
                      {lang === 'en' ? 'Official Email' : 'ಅಧಿಕೃತ ಇಮೇಲ್'}
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${SITE_CONTENT.contact.email}`}
                        className="inline-flex items-center min-h-[44px] text-white/95 hover:text-[#E7C675] underline underline-offset-4"
                      >
                        {SITE_CONTENT.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#E7C675] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#E7C675] font-medium mb-0.5">
                      {lang === 'en' ? 'Office Hours' : 'ಕಚೇರಿ ಸಮಯ'}
                    </dt>
                    <dd className="text-white/90">
                      {SITE_CONTENT.admissions.contactCard.hours[lang]}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 text-xs text-white/75">
              {SITE_CONTENT.hero.subtext[lang]}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
