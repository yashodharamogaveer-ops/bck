import { useState, useEffect, useRef, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { gsap } from '../lib/animations';
import { Language, SITE_CONTENT } from '../data/content';

interface EnquiryFormProps {
  lang: Language;
  preselectedCourse?: string;
  stickySubmitOnMobile?: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  message?: string;
}

export function EnquiryForm({
  lang,
  preselectedCourse = '',
  stickySubmitOnMobile = false,
}: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(preselectedCourse);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const checkIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
      setSubmitted(false);
    }
  }, [preselectedCourse]);

  useEffect(() => {
    if (!submitted || !checkIconRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    gsap.fromTo(
      checkIconRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.7)', clearProps: 'transform' }
    );
  }, [submitted]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name =
        lang === 'en'
          ? 'Please enter your full name (at least 2 characters).'
          : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      nextErrors.phone =
        lang === 'en'
          ? 'Please enter a valid 10-digit phone number.'
          : 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10 ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      nextErrors.email =
        lang === 'en'
          ? 'Please enter a valid email address.'
          : 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.';
    }
    if (!course) {
      nextErrors.course =
        lang === 'en'
          ? 'Please select a degree program.'
          : 'ದಯವಿಟ್ಟು ಪದವಿ ಕೋರ್ಸ್ ಆಯ್ಕೆಮಾಡಿ.';
    }
    if (message.trim().length < 5) {
      nextErrors.message =
        lang === 'en'
          ? 'Please enter a brief enquiry message.'
          : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಬರೆಯಿರಿ.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setCourse('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="py-8 px-4 text-center flex flex-col items-center justify-center"
      >
        <div
          ref={checkIconRef}
          className="w-16 h-16 rounded-full bg-emerald-700/12 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4"
        >
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="font-serif-display font-bold text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
          {SITE_CONTENT.admissions.form.successTitle[lang]}
        </h3>
        <p className="text-sm sm:text-base text-[#4A4144] dark:text-[#CFC6C0] max-w-md mb-6 leading-relaxed">
          {SITE_CONTENT.admissions.form.successBody[lang]}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:hover:bg-[#D8B25D] dark:text-[#1A1315] text-sm font-semibold tap-press cursor-pointer"
        >
          {SITE_CONTENT.admissions.form.submitAnother[lang]}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5"
          >
            {SITE_CONTENT.admissions.form.nameLabel[lang]}
          </label>
          <input
            id="enquiry-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder={SITE_CONTENT.admissions.form.namePlaceholder[lang]}
            aria-invalid={!!errors.name}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white dark:bg-[#181214] border border-[#DDD3C4] dark:border-[#3A2E32] text-base text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#8C8084] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B]"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-700 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5"
          >
            {SITE_CONTENT.admissions.form.phoneLabel[lang]}
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder={SITE_CONTENT.admissions.form.phonePlaceholder[lang]}
            aria-invalid={!!errors.phone}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white dark:bg-[#181214] border border-[#DDD3C4] dark:border-[#3A2E32] text-base text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#8C8084] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B]"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-700 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5"
          >
            {SITE_CONTENT.admissions.form.emailLabel[lang]}
          </label>
          <input
            id="enquiry-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder={SITE_CONTENT.admissions.form.emailPlaceholder[lang]}
            aria-invalid={!!errors.email}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white dark:bg-[#181214] border border-[#DDD3C4] dark:border-[#3A2E32] text-base text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#8C8084] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B]"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-700 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiry-course"
            className="block text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5"
          >
            {SITE_CONTENT.admissions.form.courseLabel[lang]}
          </label>
          <select
            id="enquiry-course"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              if (errors.course) setErrors({ ...errors, course: undefined });
            }}
            aria-invalid={!!errors.course}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white dark:bg-[#181214] border border-[#DDD3C4] dark:border-[#3A2E32] text-base text-[#1F1B1D] dark:text-[#F5EFEA] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B]"
          >
            <option value="">{SITE_CONTENT.admissions.form.courseDefault[lang]}</option>
            {SITE_CONTENT.programs.items.map((p) => (
              <option key={p.id} value={p.code}>
                {p.title[lang]}
              </option>
            ))}
          </select>
          {errors.course && (
            <p className="mt-1.5 text-xs text-red-700 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.course}</span>
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5"
        >
          {SITE_CONTENT.admissions.form.messageLabel[lang]}
        </label>
        <textarea
          id="enquiry-message"
          rows={3}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder={SITE_CONTENT.admissions.form.messagePlaceholder[lang]}
          aria-invalid={!!errors.message}
          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#181214] border border-[#DDD3C4] dark:border-[#3A2E32] text-base text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#8C8084] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B] dark:focus:ring-[#C9A24B] resize-y"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-700 dark:text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div
        className={
          stickySubmitOnMobile
            ? 'sticky bottom-0 pt-2 pb-1 bg-[#FAF7F2] dark:bg-[#1C1618] sm:static sm:bg-transparent'
            : ''
        }
      >
        <button
          type="submit"
          className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:hover:bg-[#D8B25D] dark:text-[#1A1315] font-semibold text-sm sm:text-base tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F2B]"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          <span>{SITE_CONTENT.admissions.form.submitLabel[lang]}</span>
        </button>
      </div>
    </form>
  );
}
