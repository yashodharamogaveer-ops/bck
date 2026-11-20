import { useState, useEffect, useRef, TouchEvent } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { GalleryItem, Language } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryLightboxProps {
  items: readonly GalleryItem[];
  activeIndex: number | null;
  lang: Language;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  activeIndex,
  lang,
  onClose,
  onChangeIndex,
}: GalleryLightboxProps) {
  const [scale, setScale] = useState(1);
  const [dragY, setDragY] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastTapTime = useRef<number>(0);
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartScale = useRef<number>(1);

  useEffect(() => {
    setScale(1);
    setDragY(0);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    setTimeout(() => closeBtnRef.current?.focus(), 40);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChangeIndex((activeIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onChangeIndex((activeIndex - 1 + items.length) % items.length);
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>('button')
        );
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
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      previousFocusRef.current?.focus();
    };
  }, [activeIndex, items.length, onClose, onChangeIndex]);

  if (activeIndex === null) return null;
  const activeItem = items[activeIndex];
  if (!activeItem) return null;

  const getPinchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      pinchStartDist.current = getPinchDistance(e.touches);
      pinchStartScale.current = scale;
      return;
    }
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapTime.current < 280) {
        // Double-tap zoom toggle
        setScale((prev) => (prev > 1.1 ? 1 : 2));
      }
      lastTapTime.current = now;
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: now,
      };
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2 && pinchStartDist.current) {
      const dist = getPinchDistance(e.touches);
      const nextScale = Math.min(3, Math.max(1, pinchStartScale.current * (dist / pinchStartDist.current)));
      setScale(nextScale);
      return;
    }
    if (e.touches.length === 1 && touchStart.current && scale <= 1.05) {
      const dy = e.touches[0].clientY - touchStart.current.y;
      const dx = e.touches[0].clientX - touchStart.current.x;
      if (dy > 0 && Math.abs(dy) > Math.abs(dx)) {
        setDragY(dy);
      }
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (e.touches.length < 2) {
      pinchStartDist.current = null;
    }
    if (dragY > 95) {
      setDragY(0);
      onClose();
      touchStart.current = null;
      return;
    }
    setDragY(0);

    if (touchStart.current && e.changedTouches.length === 1 && scale <= 1.05) {
      const dx = touchStart.current.x - e.changedTouches[0].clientX;
      const dy = Math.abs(touchStart.current.y - e.changedTouches[0].clientY);
      if (Math.abs(dx) > 45 && dy < 70) {
        if (dx > 0) {
          onChangeIndex((activeIndex + 1) % items.length);
        } else {
          onChangeIndex((activeIndex - 1 + items.length) % items.length);
        }
      }
    }
    touchStart.current = null;
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.caption[lang]}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex flex-col justify-between p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      onClick={onClose}
    >
      {/* Top Toolbar */}
      <div
        className="flex items-center justify-between gap-3 text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-xs text-white/75 tabular-nums">
          {activeIndex + 1} / {items.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setScale((prev) => (prev > 1.1 ? 1 : 2))}
            aria-label={scale > 1.1 ? 'Zoom out' : 'Zoom in'}
            className="min-w-[44px] min-h-[44px] rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            {scale > 1.1 ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="min-w-[44px] min-h-[44px] rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Viewport */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden my-3 touch-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
          opacity: dragY > 0 ? Math.max(0.4, 1 - dragY / 300) : 1,
        }}
      >
        <div
          className="transition-transform duration-150 ease-out max-h-full max-w-full flex items-center justify-center"
          style={{ transform: `scale(${scale})` }}
        >
          <ImageWithFallback
            src={activeItem.src}
            alt={activeItem.alt[lang]}
            fallbackTitle={activeItem.caption[lang]}
            lazy={false}
            className="max-h-[70svh] w-auto max-w-full object-contain rounded-xl select-none"
          />
        </div>

        <button
          type="button"
          onClick={() => onChangeIndex((activeIndex - 1 + items.length) % items.length)}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => onChangeIndex((activeIndex + 1) % items.length)}
          aria-label="Next image"
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white items-center justify-center tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Caption & Touch Hint */}
      <div
        className="text-center text-white/90 text-sm px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-medium">{activeItem.caption[lang]}</p>
        <p className="text-[11px] text-white/55 mt-0.5 sm:hidden">
          {lang === 'en'
            ? 'Swipe left/right · Double-tap or pinch to zoom · Swipe down to close'
            : 'ಎಡ/ಬಲಕ್ಕೆ ಸ್ವೈಪ್ ಮಾಡಿ · ಜೂಮ್ ಮಾಡಲು ಡಬಲ್ ಟ್ಯಾಪ್ ಮಾಡಿ'}
        </p>
      </div>
    </div>
  );
}
