import { Link } from 'react-router-dom';
import { MapPin, ExternalLink, Facebook, Youtube } from 'lucide-react';
import { Language, SITE_CONTENT } from '../data/content';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#1A1214] dark:bg-[#0D090A] text-[#E6DDD6] pt-14 pb-24 md:pb-8 border-t border-[#2E2225] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: About */}
          <div>
            <h3 className="font-serif-display font-bold text-lg text-white mb-4">
              {SITE_CONTENT.footer.aboutColumnTitle[lang]}
            </h3>
            <p className="text-sm text-[#BFB5AE] leading-relaxed mb-5">
              {SITE_CONTENT.footer.aboutSummary[lang]}
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={SITE_CONTENT.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl bg-white/8 hover:bg-[#C9A24B] hover:text-[#1A1315] flex items-center justify-center transition-colors tap-press focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
              >
                <Facebook className="w-4.5 h-4.5" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONTENT.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-xl bg-white/8 hover:bg-[#C9A24B] hover:text-[#1A1315] flex items-center justify-center transition-colors tap-press focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
              >
                <Youtube className="w-4.5 h-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif-display font-bold text-lg text-white mb-3">
              {SITE_CONTENT.footer.quickLinksTitle[lang]}
            </h3>
            <ul className="space-y-1 text-sm">
              {SITE_CONTENT.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center min-h-[44px] text-[#BFB5AE] hover:text-[#E7C675] transition-colors"
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="font-serif-display font-bold text-lg text-white mb-3">
              {SITE_CONTENT.footer.usefulLinksTitle[lang]}
            </h3>
            <ul className="space-y-1 text-sm">
              {SITE_CONTENT.footer.usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-[#BFB5AE] hover:text-[#E7C675] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Map Placeholder */}
          <div>
            <h3 className="font-serif-display font-bold text-lg text-white mb-4">
              {SITE_CONTENT.footer.contactTitle[lang]}
            </h3>
            <div className="text-sm text-[#BFB5AE] space-y-1.5 tabular-nums mb-5">
              <p className="font-medium text-white">
                {SITE_CONTENT.contact.institution}
              </p>
              <p>
                Mobile:{' '}
                <a
                  href="tel:+918254230369"
                  className="inline-flex items-center min-h-[44px] hover:text-[#E7C675]"
                >
                  {SITE_CONTENT.contact.mobile}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:08254230469"
                  className="inline-flex items-center min-h-[44px] hover:text-[#E7C675]"
                >
                  {SITE_CONTENT.contact.phone}
                </a>
              </p>
              <p>PUC Office: {SITE_CONTENT.contact.pucOffice}</p>
              <p>Fax: {SITE_CONTENT.contact.fax}</p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${SITE_CONTENT.contact.email}`}
                  className="inline-flex items-center min-h-[44px] text-[#E7C675] hover:underline"
                >
                  {SITE_CONTENT.contact.email}
                </a>
              </p>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="rounded-xl bg-[#261B1E] border border-white/10 p-4">
              <div className="flex items-start gap-2.5 mb-2">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-xs font-semibold text-white">
                    {SITE_CONTENT.footer.mapPlaceholderTitle[lang]}
                  </div>
                  <div className="text-[11px] text-[#BFB5AE] mt-0.5">
                    13.6215° N, 74.6915° E · Udupi District, Karnataka
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Bhandarkars+Arts+and+Science+College+Kundapura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-medium text-[#E7C675] hover:underline"
              >
                <span>{SITE_CONTENT.footer.mapDirections[lang]}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9E938D]">
          <p>{SITE_CONTENT.footer.copyright}</p>
          <p className="tabular-nums">Est. 1963 · Kundapura</p>
        </div>
      </div>
    </footer>
  );
}
