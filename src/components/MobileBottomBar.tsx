import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, GraduationCap, FileQuestion, ArrowUp } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';
import { EnquiryForm } from './EnquiryForm';

const BottomSheet = lazy(() => import('./BottomSheet'));

interface MobileBottomBarProps {
  lang: Language;
  hideBar: boolean;
}

export function MobileBottomBar({ lang, hideBar }: MobileBottomBarProps) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button (appears after 600px scroll) */}
      {showBackToTop && !hideBar && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={lang === 'en' ? 'Back to top' : 'ಮೇಲಕ್ಕೆ ಹೋಗಿ'}
          className="fixed bottom-20 md:bottom-6 right-4 z-30 min-w-[44px] min-h-[44px] rounded-full bg-[#7A1F2B] hover:bg-[#641823] text-white border border-[#C9A24B] shadow-lg flex items-center justify-center tap-press cursor-pointer no-print focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </button>
      )}

      {/* Sticky Bottom Action Bar (Mobile Only, hidden when menu is open) */}
      {!hideBar && (
        <nav
          aria-label={lang === 'en' ? 'Quick mobile actions' : 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು'}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 dark:bg-[#181214]/95 backdrop-blur-md border-t border-[#E6DDD0] dark:border-[#2E2427] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)] no-print"
        >
          <div className="grid grid-cols-4 gap-1 px-2 py-1.5">
            <a
              href="tel:+918254230369"
              className="min-h-[44px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[#1F1B1D] dark:text-[#F5EFEA] active:bg-[#EFE8DC] dark:active:bg-[#261D20] tap-press"
            >
              <Phone className="w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <span className="text-[11px] font-medium">{lang === 'en' ? 'Call' : 'ಕರೆ'}</span>
            </a>

            <a
              href="https://wa.me/918254230369"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[#1F1B1D] dark:text-[#F5EFEA] active:bg-[#EFE8DC] dark:active:bg-[#261D20] tap-press"
            >
              <MessageCircle className="w-4.5 h-4.5 text-[#1B7A43] dark:text-emerald-400" aria-hidden="true" />
              <span className="text-[11px] font-medium">WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="min-h-[44px] rounded-xl bg-[#C9A24B] text-[#1A1315] flex flex-col items-center justify-center gap-0.5 font-semibold tap-press"
            >
              <GraduationCap className="w-4.5 h-4.5" aria-hidden="true" />
              <span className="text-[11px]">{SITE_CONTENT.header.applyNow[lang]}</span>
            </Link>

            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="min-h-[44px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[#1F1B1D] dark:text-[#F5EFEA] active:bg-[#EFE8DC] dark:active:bg-[#261D20] tap-press cursor-pointer"
            >
              <FileQuestion className="w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
              <span className="text-[11px] font-medium">{lang === 'en' ? 'Enquire' : 'ವಿಚಾರಣೆ'}</span>
            </button>
          </div>
        </nav>
      )}

      {/* Lazy-Loaded Enquiry Bottom Sheet */}
      {enquiryOpen && (
        <Suspense fallback={null}>
          <BottomSheet
            isOpen={enquiryOpen}
            onClose={() => setEnquiryOpen(false)}
            title={SITE_CONTENT.admissions.heading[lang]}
          >
            <EnquiryForm lang={lang} stickySubmitOnMobile />
          </BottomSheet>
        </Suspense>
      )}
    </>
  );
}
