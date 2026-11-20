import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { Language } from '../data/content';
import { SeoHead } from '../components/SeoHead';

interface NotFoundPageProps {
  lang: Language;
}

export function NotFoundPage({ lang }: NotFoundPageProps) {
  return (
    <>
      <SeoHead
        title={lang === 'en' ? 'Page Not Found (404)' : 'ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ (404)'}
        description="The page you requested could not be found on Bhandarkars' Arts and Science College, Kundapura."
      />
      <section className="py-24 sm:py-32 px-4 text-center bg-[#FAF7F2] dark:bg-[#141012]">
        <div className="max-w-lg mx-auto bg-white dark:bg-[#1C1618] rounded-2xl p-8 sm:p-10 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm">
          <div className="font-mono text-sm font-bold text-[#7A1F2B] dark:text-[#C9A24B] mb-2">
            404
          </div>
          <h1 className="font-serif-display font-bold text-3xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-3">
            {lang === 'en' ? 'Page Not Found' : 'ಕ್ಷಮಿಸಿ, ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ'}
          </h1>
          <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC] leading-relaxed mb-7">
            {lang === 'en'
              ? 'The link you followed may be outdated or moved. Return to our homepage or browse academic programs.'
              : 'ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:text-[#1A1315] text-sm font-semibold"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>{lang === 'en' ? 'Back to Home' : 'ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ'}</span>
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#DDD3C4] dark:border-[#34292C] text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA] hover:border-[#7A1F2B]"
            >
              <span>{lang === 'en' ? 'Explore Programs' : 'ಕೋರ್ಸ್‌ಗಳು'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
