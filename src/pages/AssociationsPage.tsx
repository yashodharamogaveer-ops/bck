import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Users, CheckCircle2, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { InnerPageLayout, SubMenuItem } from '../components/InnerPageLayout';

interface AssociationsPageProps {
  lang: Language;
}

export function AssociationsPage({ lang }: AssociationsPageProps) {
  const { type } = useParams<{ type?: string }>();
  const activeTab = type || 'staff';

  const [alumniForm, setAlumniForm] = useState({
    name: '',
    batch: '',
    course: '',
    currentJob: '',
    email: '',
    phone: '',
  });
  const [alumniErrors, setAlumniErrors] = useState<Record<string, string>>({});
  const [alumniSuccess, setAlumniSuccess] = useState(false);

  const subMenu: SubMenuItem[] = SITE_CONTENT.associations.tabs.map((t) => ({
    label: t.label,
    href: t.slug,
  }));

  const currentTabMeta =
    SITE_CONTENT.associations.tabs.find((t) => t.id === activeTab) ||
    SITE_CONTENT.associations.tabs[0];

  const handleAlumniSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (alumniForm.name.trim().length < 2) errs.name = lang === 'en' ? 'Required' : 'ಅಗತ್ಯವಿದೆ';
    if (alumniForm.batch.trim().length < 4) errs.batch = lang === 'en' ? 'Enter batch year' : 'ವರ್ಷ ನಮೂದಿಸಿ';
    if (!alumniForm.course) errs.course = lang === 'en' ? 'Select course' : 'ಕೋರ್ಸ್ ಆಯ್ಕೆಮಾಡಿ';
    if (alumniForm.currentJob.trim().length < 2) errs.currentJob = lang === 'en' ? 'Required' : 'ಅಗತ್ಯವಿದೆ';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alumniForm.email)) errs.email = lang === 'en' ? 'Valid email required' : 'ಮಾನ್ಯ ಇಮೇಲ್ ನಮೂದಿಸಿ';
    if (alumniForm.phone.replace(/\D/g, '').length < 10) errs.phone = lang === 'en' ? 'Valid phone required' : 'ಮಾನ್ಯ ಫೋನ್ ನಮೂದಿಸಿ';

    setAlumniErrors(errs);
    if (Object.keys(errs).length === 0) {
      setAlumniSuccess(true);
    }
  };

  return (
    <>
      <SeoHead
        title={`${currentTabMeta.label[lang]} — ${SITE_CONTENT.associations.pageTitle[lang]}`}
        description="Staff Association, Alumni Association registration, Parent-Teacher Association (PTA), and statutory campus committees."
      />
      <InnerPageLayout
        lang={lang}
        title={SITE_CONTENT.associations.pageTitle}
        subtitle={SITE_CONTENT.associations.subtitle}
        breadcrumbs={[
          { label: SITE_CONTENT.associations.pageTitle, href: '/associations' },
          ...(type ? [{ label: currentTabMeta.label }] : []),
        ]}
        subMenu={subMenu}
      >
        {/* Staff Association */}
        {activeTab === 'staff' && (
          <section
            data-animate="fade-up"
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-6"
          >
            <div>
              <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
                {SITE_CONTENT.associations.staffAssociation.title[lang]}
              </h2>
              <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
                {SITE_CONTENT.associations.staffAssociation.desc[lang]}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225]">
              {SITE_CONTENT.associations.staffAssociation.officeBearers.map((ob, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                >
                  <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                    {ob.role[lang]}
                  </div>
                  <div className="font-medium text-sm text-[#1F1B1D] dark:text-[#F5EFEA] mt-1">
                    {ob.name}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Alumni Association + Working Registration Form */}
        {activeTab === 'alumni' && (
          <div className="space-y-8">
            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Users className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
                  {SITE_CONTENT.associations.alumni.title[lang]}
                </h2>
              </div>
              <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed mb-5">
                {SITE_CONTENT.associations.alumni.desc[lang]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EFE7DA] dark:border-[#2C2225]">
                {SITE_CONTENT.associations.alumni.officeBearers.map((ob, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B]"
                  >
                    <div className="text-xs font-semibold text-[#7A1F2B] dark:text-[#C9A24B]">
                      {ob.role[lang]}
                    </div>
                    <div className="font-serif-display font-bold text-base text-[#1F1B1D] dark:text-[#F5EFEA] mt-1">
                      {ob.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              data-animate="fade-up"
              className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
            >
              <h3 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-5">
                {SITE_CONTENT.associations.alumni.formTitle[lang]}
              </h3>

              {alumniSuccess ? (
                <div role="status" className="py-8 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-700/12 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h4 className="font-serif-display font-bold text-xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                    {SITE_CONTENT.associations.alumni.fields.successTitle[lang]}
                  </h4>
                  <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] max-w-md mx-auto mb-5">
                    {SITE_CONTENT.associations.alumni.fields.successBody[lang]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setAlumniSuccess(false);
                      setAlumniForm({ name: '', batch: '', course: '', currentJob: '', email: '', phone: '' });
                    }}
                    className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#7A1F2B] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] text-sm font-semibold tap-press cursor-pointer"
                  >
                    {lang === 'en' ? 'Register Another Alumnus' : 'ಮತ್ತೊಬ್ಬರನ್ನು ನೋಂದಾಯಿಸಿ'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAlumniSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="al-name" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.name[lang]}
                      </label>
                      <input
                        id="al-name"
                        type="text"
                        autoComplete="name"
                        value={alumniForm.name}
                        onChange={(e) => setAlumniForm({ ...alumniForm, name: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      />
                      {alumniErrors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="al-batch" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.batch[lang]}
                      </label>
                      <input
                        id="al-batch"
                        type="text"
                        inputMode="numeric"
                        placeholder="e.g., 2018"
                        value={alumniForm.batch}
                        onChange={(e) => setAlumniForm({ ...alumniForm, batch: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      />
                      {alumniErrors.batch && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.batch}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="al-course" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.course[lang]}
                      </label>
                      <select
                        id="al-course"
                        value={alumniForm.course}
                        onChange={(e) => setAlumniForm({ ...alumniForm, course: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      >
                        <option value="">{SITE_CONTENT.admissions.form.courseDefault[lang]}</option>
                        {SITE_CONTENT.programs.items.map((p) => (
                          <option key={p.id} value={p.code}>{p.code} — {p.title[lang]}</option>
                        ))}
                      </select>
                      {alumniErrors.course && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.course}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="al-job" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.currentJob[lang]}
                      </label>
                      <input
                        id="al-job"
                        type="text"
                        autoComplete="organization-title"
                        value={alumniForm.currentJob}
                        onChange={(e) => setAlumniForm({ ...alumniForm, currentJob: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      />
                      {alumniErrors.currentJob && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.currentJob}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="al-email" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.email[lang]}
                      </label>
                      <input
                        id="al-email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={alumniForm.email}
                        onChange={(e) => setAlumniForm({ ...alumniForm, email: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      />
                      {alumniErrors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="al-phone" className="block text-sm font-medium mb-1.5">
                        {SITE_CONTENT.associations.alumni.fields.phone[lang]}
                      </label>
                      <input
                        id="al-phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={alumniForm.phone}
                        onChange={(e) => setAlumniForm({ ...alumniForm, phone: e.target.value })}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#141012] border border-[#DDD3C4] dark:border-[#34292C] text-base sm:text-sm"
                      />
                      {alumniErrors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {alumniErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="sticky bottom-20 md:static z-10 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] text-sm font-semibold shadow-md md:shadow-none tap-press cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{SITE_CONTENT.associations.alumni.fields.submit[lang]}</span>
                    </button>
                  </div>
                </form>
              )}
            </section>
          </div>
        )}

        {/* PTA */}
        {activeTab === 'pta' && (
          <section
            data-animate="fade-up"
            className="bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm space-y-5"
          >
            <h2 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {SITE_CONTENT.associations.pta.title[lang]}
            </h2>
            <p className="text-base text-[#4A4144] dark:text-[#CFC6C0] leading-relaxed">
              {SITE_CONTENT.associations.pta.desc[lang]}
            </p>
            <ul className="space-y-2 text-base text-[#4A4144] dark:text-[#CFC6C0] pt-3 border-t border-[#EFE7DA] dark:border-[#2C2225]">
              {SITE_CONTENT.associations.pta.highlights[lang].map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Statutory Committees */}
        {activeTab === 'committees' && (
          <section
            data-animate-cards
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {SITE_CONTENT.associations.committees.map((c, idx) => (
              <article
                key={idx}
                data-animate-card
                className="card-interactive bg-white dark:bg-[#1C1618] rounded-2xl p-6 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] mb-1">
                  {c.name[lang]}
                </h2>
                <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC]">
                  {lang === 'en' ? 'Convener:' : 'ಸಂಚಾಲಕರು:'} {c.convener}
                </p>
              </article>
            ))}
          </section>
        )}
      </InnerPageLayout>
    </>
  );
}
