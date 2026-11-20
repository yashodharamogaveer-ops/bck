import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
}

export function SeoHead({ title, description }: SeoHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes("Bhandarkars'")
      ? title
      : `${title} | Bhandarkars' Arts and Science College, Kundapura`;
    document.title = fullTitle;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description]);

  return null;
}
