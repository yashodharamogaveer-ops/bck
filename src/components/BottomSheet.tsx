import { ReactNode, useEffect, useRef, useState, TouchEvent } from 'react';
import { X } from 'lucide-react';
import { gsap } from '../lib/animations';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (sheetRef.current && !prefersReduced) {
      gsap.fromTo(
        sheetRef.current,
        { y: '100%', opacity: 0.8 },
        { y: 0, opacity: 1, duration: 0.32, ease: 'power2.out', clearProps: 'transform' }
      );
    }

    // Focus first focusable element inside sheet
    const timer = setTimeout(() => {
      const focusables = sheetRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusables?.[0]?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && sheetRef.current) {
        const focusables = Array.from(
          sheetRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartY.current === null) return;
    const diff = e.touches[0].clientY - touchStartY.current;
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 90) {
      setDragOffset(0);
      onClose();
    } else {
      setDragOffset(0);
    }
    touchStartY.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={
          dragOffset > 0
            ? { transform: `translateY(${dragOffset}px)`, transition: 'none' }
            : undefined
        }
        className="w-full sm:max-w-lg max-h-[88svh] bg-[#FAF7F2] dark:bg-[#1C1618] rounded-t-3xl sm:rounded-2xl border-t sm:border border-[#E6DDD0] dark:border-[#34292C] shadow-2xl flex flex-col overflow-hidden pb-[env(safe-area-inset-bottom)]"
      >
        {/* Drag Handle + Header */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="px-5 pt-3 pb-3.5 border-b border-[#EAE1D4] dark:border-[#2E2427] shrink-0 touch-none"
        >
          <div className="w-10 h-1.5 rounded-full bg-[#D0C5B6] dark:bg-[#44363A] mx-auto mb-3 sm:hidden" aria-hidden="true" />
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-serif-display font-bold text-lg sm:text-xl text-[#1F1B1D] dark:text-[#F5EFEA]">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={`Close ${title}`}
              className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#4A4144] dark:text-[#CFC6C0] hover:bg-[#EFE8DC] dark:hover:bg-[#2A2023] tap-press cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
