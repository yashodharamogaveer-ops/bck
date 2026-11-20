import { useState, useEffect, useRef, useCallback } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Language } from './data/content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { useGsap } from './hooks/useGsap';
import {
  gsap,
  ScrollTrigger,
  killAllScrollTriggers,
  initScrollAnimations,
  animatePageFade,
} from './lib/animations';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AdministrationPage } from './pages/AdministrationPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { StudentSupportPage } from './pages/StudentSupportPage';
import { SupportUnitDetailPage } from './pages/SupportUnitDetailPage';
import { AssociationsPage } from './pages/AssociationsPage';
import { ResearchPage } from './pages/ResearchPage';
import { NaacPage } from './pages/NaacPage';
import { NirfPage } from './pages/NirfPage';
import { RtiPage } from './pages/RtiPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function readStoredLang(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const val = window.localStorage.getItem('basck_lang');
    return val === 'kn' ? 'kn' : 'en';
  } catch {
    return 'en';
  }
}

function readStoredDark(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const val = window.localStorage.getItem('basck_theme');
    if (val === 'dark') return true;
    if (val === 'light') return false;
    return false;
  } catch {
    return false;
  }
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const [lang, setLang] = useState<Language>(readStoredLang);
  const [isDark, setIsDark] = useState<boolean>(readStoredDark);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('basck_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';
    try {
      window.localStorage.setItem('basck_lang', lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const triggerQuickCrossFade = useCallback(() => {
    if (!mainRef.current || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(
      mainRef.current,
      { opacity: 0.65 },
      { opacity: 1, duration: 0.25, ease: 'power2.out', clearProps: 'opacity' }
    );
  }, []);

  const handleToggleLang = useCallback(() => {
    triggerQuickCrossFade();
    setLang((prev) => (prev === 'en' ? 'kn' : 'en'));
  }, [triggerQuickCrossFade]);

  const handleToggleDark = useCallback(() => {
    triggerQuickCrossFade();
    setIsDark((prev) => !prev);
  }, [triggerQuickCrossFade]);

  useGsap(() => {
    killAllScrollTriggers();
    const cleanupFade = animatePageFade(mainRef.current);
    const cleanupScroll = initScrollAnimations(mainRef.current);
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => {
      window.clearTimeout(refreshTimer);
      cleanupFade();
      cleanupScroll();
      killAllScrollTriggers();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1B1D] dark:bg-[#141012] dark:text-[#F5EFEA] transition-colors duration-200 overflow-x-clip">
      <ScrollManager />
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        isDark={isDark}
        onToggleDark={handleToggleDark}
        mobileOpen={mobileMenuOpen}
        onMobileOpenChange={setMobileMenuOpen}
      />

      <main ref={mainRef} className="flex-1">
        <Routes location={location}>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />

          <Route path="/administration" element={<AdministrationPage lang={lang} />} />
          <Route path="/administration/:subpage" element={<AdministrationPage lang={lang} />} />

          <Route path="/programs" element={<ProgramsPage lang={lang} />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage lang={lang} />} />

          <Route path="/departments" element={<DepartmentsPage lang={lang} />} />
          <Route path="/departments/:slug" element={<DepartmentDetailPage lang={lang} />} />

          <Route path="/facilities" element={<FacilitiesPage lang={lang} subpage="overview" />} />
          <Route path="/facilities/library" element={<FacilitiesPage lang={lang} subpage="library" />} />
          <Route path="/facilities/campus" element={<FacilitiesPage lang={lang} subpage="campus" />} />

          <Route path="/student-support" element={<StudentSupportPage lang={lang} />} />
          <Route path="/student-support/:unit" element={<SupportUnitDetailPage lang={lang} />} />

          <Route path="/associations" element={<AssociationsPage lang={lang} />} />
          <Route path="/associations/:type" element={<AssociationsPage lang={lang} />} />

          <Route path="/research" element={<ResearchPage lang={lang} />} />
          <Route path="/research/:section" element={<ResearchPage lang={lang} />} />

          <Route path="/naac" element={<NaacPage lang={lang} />} />
          <Route path="/nirf" element={<NirfPage lang={lang} />} />
          <Route path="/rti" element={<RtiPage lang={lang} />} />

          <Route path="/news" element={<NewsPage lang={lang} />} />
          <Route path="/news/:slug" element={<NewsDetailPage lang={lang} />} />

          <Route path="/contact" element={<ContactPage lang={lang} />} />

          <Route path="*" element={<NotFoundPage lang={lang} />} />
        </Routes>
      </main>

      <Footer lang={lang} />
      <MobileBottomBar lang={lang} hideBar={mobileMenuOpen} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
