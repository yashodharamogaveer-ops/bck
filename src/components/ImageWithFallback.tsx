import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  lazy?: boolean;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  lazy = true,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  srcSet,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DC] via-[#E6DDD0] to-[#DDD2C2] dark:from-[#251D20] dark:via-[#1E1719] dark:to-[#181214] text-[#7A1F2B] dark:text-[#C9A24B] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 flex items-center justify-center mb-3">
          <GraduationCap className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-medium tracking-wide text-[#5A4F53] dark:text-[#C5BBB6] max-w-[22ch]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
