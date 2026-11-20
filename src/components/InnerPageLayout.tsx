import { ReactNode, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react';
import { Language, LocalizedText, SITE_CONTENT } from '../data/content';

export interface BreadcrumbItem {
  label: LocalizedText;
  href?: string;
}

export interface SubMenuItem {
  label: LocalizedText;
  href: string;
}

interface InnerPageLayoutProps {
  lang: Language;
  title: LocalizedText;
  subtitle?: LocalizedText;
  breadcrumbs: BreadcrumbItem[];
  subMenu: SubMenuItem[];
  children: ReactNode;
}

export function InnerPageLayout({
  lang,
  title,
  subtitle,
  breadcrumbs,
  subMenu,
  children,
}: InnerPageLayoutProps) {
  const location = useLocation();
  const activePillRef = useRef<HTMLAnchorElement>(null);

  const currentPath = location.pathname + location.hash;

  const isItemActive = (href: string) => {
    if (href.includes('#')) {
      return currentPath === href;
    }
    return location.pathname === href;
  };

  // Auto-scroll active pill into view on mobile
  useEffect(() => {
    if (activePillRef.current && window.innerWidth < 1024) {
      activePillRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-[#FAF7F2] dark:bg-[#141012]">
      {/* Slim Page Banner */}
      <div className="bg-gradient-to-r from-[#681823] via-[#7A1F2B] to-[#56121B] dark:from-[#210A0E] dark:via-[#2A0E14] dark:to-[#19080B] text-white border-b border-[#C9A24B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-3 no-print">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/75">
              <li>
                <Link to="/" className="hover:text-[#E7C675] transition-colors py-1">
                  {SITE_CONTENT.sharedLayout.homeLabel[lang]}
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/45" aria-hidden="true" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-[#E7C675] transition-colors py-1">
                      {crumb.label[lang]}
                    </Link>
                  ) : (
                    <span className="text-[#E7C675] font-medium" aria-current="page">
                      {crumb.label[lang]}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1
            className="font-serif-display font-bold text-white leading-tight text-balance"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)' }}
          >
            {title[lang]}
          </h1>
          {subtitle && (
            <p className="mt-2.5 text-sm sm:text-base text-white/85 max-w-3xl leading-relaxed">
              {subtitle[lang]}
            </p>
          )}
        </div>
      </div>

      {/* Main Content + Left Sticky Sub-menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Mobile Horizontal Scrollable Pill Tab Bar + Desktop Sticky Sidebar */}
          {subMenu.length > 0 && (
            <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-20 no-print">
              {/* Mobile Pill Tabs */}
              <nav
                aria-label={SITE_CONTENT.sharedLayout.sectionMenuLabel[lang]}
                className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1"
              >
                {subMenu.map((item) => {
                  const active = isItemActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      ref={active ? activePillRef : undefined}
                      to={item.href}
                      className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 flex items-center border tap-press transition-colors ${
                        active
                          ? 'bg-[#7A1F2B] text-white border-[#7A1F2B] dark:bg-[#C9A24B] dark:text-[#1A1315] dark:border-[#C9A24B]'
                          : 'bg-white dark:bg-[#1C1618] text-[#3A3033] dark:text-[#D8CFC9] border-[#E2D8C8] dark:border-[#32272B]'
                      }`}
                    >
                      {item.label[lang]}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop Sticky Sidebar */}
              <nav
                aria-label={SITE_CONTENT.sharedLayout.sectionMenuLabel[lang]}
                className="hidden lg:block bg-white dark:bg-[#1C1618] rounded-2xl p-4 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm"
              >
                <div className="text-xs font-semibold tracking-wider text-[#7A1F2B] dark:text-[#C9A24B] px-3 pb-2.5 mb-2 border-b border-[#EFE7DA] dark:border-[#2C2225]">
                  {SITE_CONTENT.sharedLayout.sectionMenuLabel[lang]}
                </div>
                <ul className="space-y-1">
                  {subMenu.map((item) => {
                    const active = isItemActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                            active
                              ? 'bg-[#7A1F2B] text-white dark:bg-[#C9A24B] dark:text-[#1A1315]'
                              : 'text-[#3A3033] dark:text-[#D8CFC9] hover:bg-[#FAF7F2] dark:hover:bg-[#251C1F] hover:text-[#7A1F2B] dark:hover:text-[#E5C16C]'
                          }`}
                        >
                          {item.label[lang]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>
          )}

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 w-full space-y-8 sm:space-y-10">
            {children}

            {/* Shared "Need help? Contact admissions" Card */}
            <section
              aria-label={SITE_CONTENT.sharedLayout.needHelpTitle[lang]}
              className="mt-10 bg-white dark:bg-[#1C1618] rounded-2xl p-6 sm:p-8 border border-[#EAE1D4] dark:border-[#2E2427] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 no-print"
            >
              <div className="max-w-xl">
                <h2 className="font-serif-display font-bold text-xl sm:text-2xl text-[#1F1B1D] dark:text-[#F5EFEA] mb-2">
                  {SITE_CONTENT.sharedLayout.needHelpTitle[lang]}
                </h2>
                <p className="text-sm text-[#5A4F53] dark:text-[#BDB2AC] leading-relaxed mb-3">
                  {SITE_CONTENT.sharedLayout.needHelpBody[lang]}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#3A3033] dark:text-[#DFD7D1] tabular-nums">
                  <a
                    href="tel:+918254230369"
                    className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-[#7A1F2B] dark:hover:text-[#E5C16C]"
                  >
                    <Phone className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                    <span>{SITE_CONTENT.contact.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${SITE_CONTENT.contact.email}`}
                    className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-[#7A1F2B] dark:hover:text-[#E5C16C]"
                  >
                    <Mail className="w-4 h-4 text-[#7A1F2B] dark:text-[#C9A24B]" aria-hidden="true" />
                    <span>{SITE_CONTENT.contact.email}</span>
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="self-start md:self-center min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#7A1F2B] hover:bg-[#641823] text-white dark:bg-[#C9A24B] dark:hover:bg-[#D8B25D] dark:text-[#1A1315] font-semibold text-sm tap-press whitespace-nowrap shrink-0"
              >
                <span>{SITE_CONTENT.sharedLayout.needHelpCta[lang]}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
