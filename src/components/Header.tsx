import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Radio,
  Youtube,
  BookOpen,
  Users,
  ExternalLink,
  ArrowRight,
  Languages,
} from 'lucide-react';
import { animateDrawerLinks } from '../lib/animations';
import { Language, SITE_CONTENT } from '../data/content';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}

export function Header({
  lang,
  onToggleLang,
  isDark,
  onToggleDark,
  mobileOpen,
  onMobileOpenChange,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileHeaderHidden, setMobileHeaderHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMenu, setActiveMenu] = useState<'programs' | 'explore' | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>('programs');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoError, setLogoError] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    onMobileOpenChange(false);
    setSearchOpen(false);
  }, [location.pathname, location.hash, onMobileOpenChange]);

  // Scroll behavior: shrink after 40px, hide-on-down / show-on-up on mobile only, gold scroll progress
  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 40);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0);

      const isMobile = window.innerWidth < 1024;
      if (isMobile && !mobileOpen) {
        if (y > 90 && y - lastScrollY.current > 8) {
          setMobileHeaderHidden(true);
        } else if (lastScrollY.current - y > 6 || y < 50) {
          setMobileHeaderHidden(false);
        }
      } else {
        setMobileHeaderHidden(false);
      }
      lastScrollY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen]);

  // Outside click & keyboard shortcuts (Ctrl+K, Esc)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setActiveMenu(null);
        if (mobileOpen) {
          onMobileOpenChange(false);
          hamburgerRef.current?.focus();
        }
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [mobileOpen, onMobileOpenChange]);

  // Mobile drawer: lock body scroll, stagger links, trap focus, return focus on close
  useEffect(() => {
    if (!mobileOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const cleanupAnim = animateDrawerLinks(drawerRef.current);

    const timer = setTimeout(() => {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
        'button, [href]'
      );
      firstFocusable?.focus();
    }, 40);

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const focusables = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'));

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => {
      clearTimeout(timer);
      cleanupAnim();
      document.removeEventListener('keydown', trapFocus);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 60);
    } else {
      setSearchQuery('');
    }
  }, [searchOpen]);

  const searchableItems = useMemo(() => {
    const pages = [
      { id: 'page-home', title: lang === 'en' ? 'Home' : 'ಮುಖಪುಟ', category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/' },
      { id: 'page-about', title: SITE_CONTENT.about.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/about' },
      { id: 'page-admin', title: SITE_CONTENT.administration.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/administration' },
      { id: 'page-admin-mgmt', title: SITE_CONTENT.administration.tabs[1].label[lang], category: SITE_CONTENT.administration.pageTitle[lang], href: '/administration/management' },
      { id: 'page-admin-sc', title: SITE_CONTENT.administration.tabs[2].label[lang], category: SITE_CONTENT.administration.pageTitle[lang], href: '/administration/staff-council' },
      { id: 'page-admin-org', title: SITE_CONTENT.administration.tabs[3].label[lang], category: SITE_CONTENT.administration.pageTitle[lang], href: '/administration/organogram' },
      { id: 'page-admin-pp', title: SITE_CONTENT.administration.tabs[4].label[lang], category: SITE_CONTENT.administration.pageTitle[lang], href: '/administration/perspective-plan' },
      { id: 'page-programs', title: SITE_CONTENT.programs.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/programs' },
      { id: 'page-departments', title: SITE_CONTENT.departments.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/departments' },
      { id: 'page-facilities', title: SITE_CONTENT.facilities.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/facilities' },
      { id: 'page-library', title: SITE_CONTENT.facilities.tabs[1].label[lang], category: SITE_CONTENT.facilities.pageTitle[lang], href: '/facilities/library' },
      { id: 'page-support', title: SITE_CONTENT.campusLife.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/student-support' },
      { id: 'page-assoc', title: SITE_CONTENT.associations.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/associations' },
      { id: 'page-alumni', title: SITE_CONTENT.associations.tabs[1].label[lang], category: SITE_CONTENT.associations.pageTitle[lang], href: '/associations/alumni' },
      { id: 'page-research', title: SITE_CONTENT.research.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/research' },
      { id: 'page-naac', title: SITE_CONTENT.naac.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/naac' },
      { id: 'page-nirf', title: SITE_CONTENT.nirf.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/nirf' },
      { id: 'page-rti', title: SITE_CONTENT.rti.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/rti' },
      { id: 'page-news', title: SITE_CONTENT.news.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/news' },
      { id: 'page-contact', title: SITE_CONTENT.contactPage.pageTitle[lang], category: lang === 'en' ? 'Page' : 'ಪುಟ', href: '/contact' },
    ];
    const programs = SITE_CONTENT.programs.items.map((p) => ({
      id: `prog-${p.id}`,
      title: `${p.code} — ${p.title[lang]}`,
      category: SITE_CONTENT.header.programsLabel[lang],
      href: `/programs/${p.slug}`,
    }));
    const departments = SITE_CONTENT.departments.items.map((d) => ({
      id: `dept-${d.id}`,
      title: d.name[lang],
      category: SITE_CONTENT.departments.pageTitle[lang],
      href: `/departments/${d.slug}`,
    }));
    const support = SITE_CONTENT.campusLife.items.slice(0, 9).map((c) => ({
      id: `sup-${c.id}`,
      title: c.title[lang],
      category: SITE_CONTENT.campusLife.pageTitle[lang],
      href: c.href,
    }));
    return [...programs, ...pages, ...support, ...departments];
  }, [lang]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return searchableItems.slice(0, 10);
    return searchableItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 14);
  }, [searchQuery, searchableItems]);

  return (
    <>
      {/* Slim Top Bar (hidden on narrow mobile to keep mobile header compact 56px) */}
      <div className="hidden lg:block bg-[#5E1620] dark:bg-[#1B1114] text-[#FAF7F2]/90 text-xs border-b border-white/10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {SITE_CONTENT.topBar.links.map((link) => {
              const IconComponent =
                link.id === 'radio'
                  ? Radio
                  : link.id === 'youtube'
                  ? Youtube
                  : link.id === 'blog'
                  ? BookOpen
                  : link.id === 'alumni'
                  ? Users
                  : ExternalLink;

              if (link.external) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:text-[#E5C16C] transition-colors py-0.5 focus-visible:outline-2 focus-visible:outline-[#C9A24B] rounded"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#C9A24B]" aria-hidden="true" />
                    <span>{link.label[lang]}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:text-[#E5C16C] transition-colors py-0.5 focus-visible:outline-2 focus-visible:outline-[#C9A24B] rounded"
                >
                  <IconComponent className="w-3.5 h-3.5 text-[#C9A24B]" aria-hidden="true" />
                  <span>{link.label[lang]}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={lang === 'en' ? 'Switch language to Kannada' : 'Switch language to English'}
              className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 text-[#FAF7F2] hover:text-[#E5C16C] transition-colors font-medium cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] rounded px-1.5 py-0.5 tap-press"
            >
              <Languages className="w-3.5 h-3.5 text-[#C9A24B]" aria-hidden="true" />
              <span>{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
            <span className="text-white/25" aria-hidden="true">|</span>
            <button
              type="button"
              onClick={onToggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-1 whitespace-nowrap shrink-0 text-[#FAF7F2] hover:text-[#E5C16C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B] rounded px-1.5 py-0.5 tap-press"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-[#C9A24B]" aria-hidden="true" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-[#C9A24B]" aria-hidden="true" />
              )}
              <span>{isDark ? (lang === 'en' ? 'Light' : 'ಬೆಳಕು') : (lang === 'en' ? 'Dark' : 'ಕತ್ತಲೆ')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Main Header (56px mobile, hides on scroll down / shows on scroll up on mobile) */}
      <header
        ref={navRef}
        className={`sticky top-0 z-40 transition-all duration-200 border-b no-print ${
          mobileHeaderHidden ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 dark:bg-[#141012]/95 backdrop-blur-md shadow-md border-[#E6DDD0] dark:border-[#2C2225]'
            : 'bg-[#FAF7F2] dark:bg-[#141012] border-[#ECE4D8] dark:border-[#261D20]'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-8 transition-[height] duration-200 ${
            isScrolled ? 'h-14 lg:h-14' : 'h-14 lg:h-16'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 min-w-0 shrink-0 focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded-lg py-1"
          >
            {!logoError ? (
              <img
                src={SITE_CONTENT.logoUrl}
                alt="Bhandarkars' Arts and Science College Crest"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg object-cover border border-[#D8CEC0] dark:border-[#34292C] bg-white shrink-0"
              />
            ) : (
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-[#7A1F2B] text-[#C9A24B] flex items-center justify-center font-serif-display font-bold text-base shrink-0">
                B
              </div>
            )}
            <span className="font-serif-display font-semibold text-sm sm:text-base lg:text-lg text-[#7A1F2B] dark:text-[#F5EFEA] whitespace-nowrap tracking-tight truncate max-w-[165px] sm:max-w-none">
              {SITE_CONTENT.shortName[lang]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2F282A] dark:text-[#E5DDD7]"
            aria-label="Main navigation"
          >
            <div className="relative">
              <button
                type="button"
                aria-expanded={activeMenu === 'programs'}
                onClick={() => setActiveMenu(activeMenu === 'programs' ? null : 'programs')}
                className={`inline-flex items-center gap-1 py-2 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded ${
                  activeMenu === 'programs' ? 'text-[#7A1F2B] dark:text-[#E5C16C]' : ''
                }`}
              >
                <span>{SITE_CONTENT.header.programsLabel[lang]}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === 'programs' ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <Link
              to="/about"
              className="py-2 whitespace-nowrap shrink-0 hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded"
            >
              {SITE_CONTENT.header.aboutLink[lang]}
            </Link>

            <Link
              to="/student-support"
              className="py-2 whitespace-nowrap shrink-0 hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded"
            >
              {SITE_CONTENT.header.campusLifeLink[lang]}
            </Link>

            <Link
              to="/news"
              className="py-2 whitespace-nowrap shrink-0 hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded"
            >
              {SITE_CONTENT.header.newsLink[lang]}
            </Link>

            <div className="relative">
              <button
                type="button"
                aria-expanded={activeMenu === 'explore'}
                onClick={() => setActiveMenu(activeMenu === 'explore' ? null : 'explore')}
                className={`inline-flex items-center gap-1 py-2 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] focus-visible:outline-2 focus-visible:outline-[#7A1F2B] rounded ${
                  activeMenu === 'explore' ? 'text-[#7A1F2B] dark:text-[#E5C16C]' : ''
                }`}
              >
                <span>{SITE_CONTENT.header.exploreLabel[lang]}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    activeMenu === 'explore' ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>

          {/* Right Actions: Mobile = Language Toggle + Hamburger (>=44x44px tap targets); Desktop = Search + Apply Now */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile compact language toggle */}
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={lang === 'en' ? 'Switch language to Kannada' : 'Switch language to English'}
              className="lg:hidden min-w-[44px] min-h-[44px] px-2.5 rounded-xl bg-white dark:bg-[#231B1E] border border-[#E5DCCF] dark:border-[#34292C] text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C] inline-flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
            </button>

            {/* Desktop Search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Global Search (Ctrl+K)"
              title="Search (Ctrl+K)"
              className="hidden lg:inline-flex items-center gap-2 min-h-[44px] px-3 rounded-xl text-[#3A3033] dark:text-[#E5DDD7] hover:bg-[#EFE8DC] dark:hover:bg-[#241C1F] tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              <Search className="w-4.5 h-4.5" aria-hidden="true" />
              <kbd className="hidden xl:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-[#241C1F] border border-[#DDD3C4] dark:border-[#382C30] text-[#6B6063] dark:text-[#B4A9A3]">
                Ctrl+K
              </kbd>
            </button>

            {/* Desktop Apply Now */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-xl bg-[#C9A24B] hover:bg-[#B89038] text-[#1A1315] font-semibold text-sm whitespace-nowrap shrink-0 shadow-sm tap-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F2B]"
            >
              {SITE_CONTENT.header.applyNow[lang]}
            </Link>

            {/* Mobile Hamburger Button (>=44x44px) */}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => onMobileOpenChange(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden min-w-[44px] min-h-[44px] rounded-xl text-[#1F1B1D] dark:text-[#F5EFEA] hover:bg-[#EFE8DC] dark:hover:bg-[#241C1F] flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Thin Gold Scroll-Progress Bar under the header */}
        <div
          aria-hidden="true"
          className="h-[2.5px] w-full bg-[#E8DFD1]/60 dark:bg-[#2C2225]/70 overflow-hidden"
        >
          <div
            className="h-full bg-[#C9A24B] origin-left will-change-transform"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>

        {/* Desktop Mega-Menu: Programs */}
        {activeMenu === 'programs' && (
          <div className="hidden lg:block absolute left-0 right-0 bg-[#FAF7F2] dark:bg-[#1A1416] border-b border-[#E6DDD0] dark:border-[#2E2427] shadow-lg">
            <div className="max-w-7xl mx-auto px-8 py-7">
              <div className="grid grid-cols-5 gap-4 mb-5">
                {SITE_CONTENT.programs.items.map((prog) => (
                  <Link
                    key={prog.id}
                    to={`/programs/${prog.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="text-left p-4 rounded-2xl bg-white dark:bg-[#221A1D] border border-[#EAE1D4] dark:border-[#32272B] hover:border-[#7A1F2B] dark:hover:border-[#C9A24B] transition-colors group focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
                  >
                    <div className="text-xs font-semibold tracking-wide text-[#7A1F2B] dark:text-[#C9A24B] mb-1">
                      {prog.code}
                    </div>
                    <div className="font-serif-display font-semibold text-sm text-[#1F1B1D] dark:text-[#F5EFEA] mb-1.5 group-hover:text-[#7A1F2B] dark:group-hover:text-[#E5C16C]">
                      {prog.title[lang]}
                    </div>
                    <p className="text-xs text-[#5E5457] dark:text-[#BDB2AC] line-clamp-2 leading-relaxed">
                      {prog.shortDesc[lang]}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-[#E8DFD1] dark:border-[#2E2427] flex items-center justify-between text-xs font-semibold">
                <Link
                  to="/programs"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1.5 text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
                >
                  <span>{lang === 'en' ? 'View All Degree Programs' : 'ಎಲ್ಲಾ ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ'}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/departments"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1.5 text-[#7A1F2B] dark:text-[#E5C16C] hover:underline"
                >
                  <span>{SITE_CONTENT.programs.viewAllDepartments[lang]}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Grouped Dropdown: Explore */}
        {activeMenu === 'explore' && (
          <div className="hidden lg:block absolute left-0 right-0 bg-[#FAF7F2] dark:bg-[#1A1416] border-b border-[#E6DDD0] dark:border-[#2E2427] shadow-lg">
            <div className="max-w-7xl mx-auto px-8 py-7">
              <div className="grid grid-cols-3 gap-8">
                {SITE_CONTENT.header.groupedMenu.map((group) => (
                  <div key={group.heading.en}>
                    <h3 className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] mb-3 pb-2 border-b border-[#E8DFD1] dark:border-[#302529]">
                      {group.heading[lang]}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-center justify-between py-1.5 text-sm text-[#2F282A] dark:text-[#E5DDD7] hover:text-[#7A1F2B] dark:hover:text-[#E5C16C] transition-colors group"
                          >
                            <span>{item.label[lang]}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full-Screen Slide-In Mobile Menu */}
      {mobileOpen && (
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-0 z-50 bg-[#FAF7F2] dark:bg-[#141012] flex flex-col overflow-hidden"
        >
          {/* Drawer Header */}
          <div className="h-14 px-4 flex items-center justify-between border-b border-[#E6DDD0] dark:border-[#2C2225] shrink-0">
            <span className="font-serif-display font-bold text-base text-[#7A1F2B] dark:text-[#F5EFEA]">
              {SITE_CONTENT.shortName[lang]}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onMobileOpenChange(false);
                  setSearchOpen(true);
                }}
                aria-label="Search site"
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#3A3033] dark:text-[#E5DDD7] hover:bg-[#EFE8DC] dark:hover:bg-[#241C1F] tap-press cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={onToggleDark}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#3A3033] dark:text-[#E5DDD7] hover:bg-[#EFE8DC] dark:hover:bg-[#241C1F] tap-press cursor-pointer"
              >
                {isDark ? <Sun className="w-5 h-5 text-[#C9A24B]" /> : <Moon className="w-5 h-5 text-[#7A1F2B]" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onMobileOpenChange(false);
                  hamburgerRef.current?.focus();
                }}
                aria-label="Close navigation menu"
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#1F1B1D] dark:text-[#F5EFEA] hover:bg-[#EFE8DC] dark:hover:bg-[#241C1F] tap-press cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Large Links + Accordions */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3">
            {/* Programs Accordion */}
            <div
              data-menu-item
              className="rounded-2xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] overflow-hidden"
            >
              <button
                type="button"
                aria-expanded={mobileAccordion === 'programs'}
                onClick={() =>
                  setMobileAccordion(mobileAccordion === 'programs' ? null : 'programs')
                }
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] cursor-pointer"
              >
                <span>{SITE_CONTENT.header.programsLabel[lang]}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] transition-transform ${
                    mobileAccordion === 'programs' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileAccordion === 'programs' && (
                <div className="px-4 pb-3 space-y-1 border-t border-[#EFE7DA] dark:border-[#2C2225] pt-2">
                  {SITE_CONTENT.programs.items.map((p) => (
                    <Link
                      key={p.id}
                      to={`/programs/${p.slug}`}
                      onClick={() => onMobileOpenChange(false)}
                      className="min-h-[44px] px-3 py-2 rounded-xl flex items-center justify-between text-base font-medium text-[#2F282A] dark:text-[#E5DDD7] active:bg-[#EFE8DC] dark:active:bg-[#261D20]"
                    >
                      <span>{p.title[lang]}</span>
                      <span className="text-xs font-bold text-[#7A1F2B] dark:text-[#C9A24B]">
                        {p.code}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/departments"
                    onClick={() => onMobileOpenChange(false)}
                    className="min-h-[44px] px-3 py-2 rounded-xl flex items-center justify-between text-base font-semibold text-[#7A1F2B] dark:text-[#E5C16C]"
                  >
                    <span>{SITE_CONTENT.programs.viewAllDepartments[lang]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Grouped Accordions */}
            {SITE_CONTENT.header.groupedMenu.map((group) => {
              const isOpen = mobileAccordion === group.heading.en;
              return (
                <div
                  key={group.heading.en}
                  data-menu-item
                  className="rounded-2xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setMobileAccordion(isOpen ? null : group.heading.en)
                    }
                    className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left font-serif-display font-bold text-lg text-[#1F1B1D] dark:text-[#F5EFEA] cursor-pointer"
                  >
                    <span>{group.heading[lang]}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3 space-y-1 border-t border-[#EFE7DA] dark:border-[#2C2225] pt-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => onMobileOpenChange(false)}
                          className="min-h-[44px] px-3 py-2 rounded-xl flex items-center justify-between text-base text-[#2F282A] dark:text-[#E5DDD7] active:bg-[#EFE8DC] dark:active:bg-[#261D20]"
                        >
                          <span>{item.label[lang]}</span>
                          <ArrowRight className="w-4 h-4 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Top bar quick portals inside mobile drawer */}
            <div data-menu-item className="pt-2">
              <div className="text-xs font-semibold text-[#6B6063] dark:text-[#B4A9A3] px-1 mb-2">
                {lang === 'en' ? 'Quick Portals' : 'ತ್ವರಿತ ಪೋರ್ಟಲ್‌ಗಳು'}
              </div>
              <div className="flex flex-wrap gap-2">
                {SITE_CONTENT.topBar.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] text-xs font-medium inline-flex items-center gap-1.5"
                    >
                      <span>{link.label[lang]}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C9A24B]" />
                    </a>
                  ) : (
                    <Link
                      key={link.id}
                      to={link.href}
                      onClick={() => onMobileOpenChange(false)}
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white dark:bg-[#1C1618] border border-[#EAE1D4] dark:border-[#2E2427] text-xs font-medium inline-flex items-center"
                    >
                      {link.label[lang]}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Big Apply Now Button at Drawer Bottom */}
          <div className="p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-[#E6DDD0] dark:border-[#2C2225] bg-[#FAF7F2] dark:bg-[#141012] shrink-0">
            <Link
              to="/contact"
              onClick={() => onMobileOpenChange(false)}
              className="w-full min-h-[50px] rounded-2xl bg-[#C9A24B] hover:bg-[#B89038] text-[#1A1315] font-bold text-base flex items-center justify-center gap-2 shadow-md tap-press"
            >
              <span>{SITE_CONTENT.header.applyNow[lang]}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}

      {/* Global Search Overlay Modal (Ctrl+K) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            ref={searchDialogRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={SITE_CONTENT.header.searchTitle[lang]}
            className="w-full max-w-xl bg-[#FAF7F2] dark:bg-[#1C1618] rounded-2xl shadow-2xl border border-[#E6DDD0] dark:border-[#34292C] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#E6DDD0] dark:border-[#34292C]">
              <Search className="w-5 h-5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={SITE_CONTENT.header.searchPlaceholder[lang]}
                className="w-full min-h-[44px] bg-transparent text-base text-[#1F1B1D] dark:text-[#F5EFEA] placeholder:text-[#7D7175] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center hover:bg-[#EFE8DC] dark:hover:bg-[#2A2023] text-[#5E5457] dark:text-[#BDB2AC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-3 space-y-1">
              {searchResults.length === 0 ? (
                <p className="text-sm text-[#6B6063] dark:text-[#B4A9A3] text-center py-8 px-4">
                  {SITE_CONTENT.header.noSearchResults[lang]}
                </p>
              ) : (
                searchResults.map((res) => (
                  <button
                    key={res.id}
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      navigate(res.href);
                    }}
                    className="w-full min-h-[44px] text-left px-3.5 py-2.5 rounded-xl hover:bg-white dark:hover:bg-[#261D20] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-medium text-[#1F1B1D] dark:text-[#F5EFEA]">
                      {res.title}
                    </span>
                    <span className="text-xs text-[#7A1F2B] dark:text-[#C9A24B] shrink-0">
                      {res.category}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
