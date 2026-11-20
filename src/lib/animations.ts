import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export function animateHeroIntro(container: HTMLElement | null) {
  if (!container) return () => {};

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const lines = container.querySelectorAll('[data-hero-line]');
    const actions = container.querySelector('[data-hero-actions]');
    const bg = container.querySelector('[data-hero-zoom]');

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (lines.length > 0) {
      tl.fromTo(
        lines,
        { y: 24, opacity: 0, willChange: 'transform, opacity' },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          clearProps: 'willChange,transform',
        }
      );
    }

    if (actions) {
      tl.fromTo(
        actions,
        { y: 14, opacity: 0, willChange: 'transform, opacity' },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          clearProps: 'willChange,transform',
        },
        '-=0.2'
      );
    }

    if (bg) {
      gsap.fromTo(
        bg,
        { scale: 1 },
        {
          scale: 1.06,
          duration: 7,
          ease: 'power1.out',
        }
      );
    }
  });

  return () => mm.revert();
}

export function initScrollAnimations(scope: HTMLElement | null) {
  if (!scope) return () => {};

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // 1. Fade-up sections triggered once at "top 85%"
    const fadeUps = scope.querySelectorAll<HTMLElement>('[data-animate="fade-up"]');
    fadeUps.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0, willChange: 'transform, opacity' },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'willChange,transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    // 2. Staggered card grids (0.08s stagger)
    const cardGroups = scope.querySelectorAll<HTMLElement>('[data-animate-cards]');
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll<HTMLElement>('[data-animate-card]');
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { y: 20, opacity: 0, willChange: 'transform, opacity' },
        {
          y: 0,
          opacity: 1,
          duration: 0.48,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'willChange,transform',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    // 3. Animated stat counters once when scrolled into view
    const counters = scope.querySelectorAll<HTMLElement>('[data-count-to]');
    counters.forEach((el) => {
      const target = Number(el.dataset.countTo || '0');
      const suffix = el.dataset.countSuffix || '';
      const useComma = el.dataset.countComma === 'true';
      const startVal = target > 1000 ? Math.floor(target * 0.85) : 0;
      const counterObj = { val: startVal };

      gsap.to(counterObj, {
        val: target,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
        onUpdate: () => {
          const rounded = Math.round(counterObj.val);
          const formatted = useComma ? rounded.toLocaleString('en-US') : String(rounded);
          el.textContent = `${formatted}${suffix}`;
        },
      });
    });
  });

  // Reduced motion fallback: ensure counters show final number immediately
  mm.add('(prefers-reduced-motion: reduce)', () => {
    const counters = scope.querySelectorAll<HTMLElement>('[data-count-to]');
    counters.forEach((el) => {
      const targetNum = Number(el.dataset.countTo || '0');
      const suffix = el.dataset.countSuffix || '';
      const useComma = el.dataset.countComma === 'true';
      const formatted = useComma ? targetNum.toLocaleString('en-US') : String(targetNum);
      el.textContent = `${formatted}${suffix}`;
    });
  });

  return () => mm.revert();
}

export function animatePageFade(el: HTMLElement | null) {
  if (!el) return () => {};

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo(
      el,
      { opacity: 0, willChange: 'opacity' },
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
        clearProps: 'willChange',
      }
    );
  });
  return () => mm.revert();
}

export function animateDrawerLinks(container: HTMLElement | null) {
  if (!container) return () => {};

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const items = container.querySelectorAll('[data-menu-item]');
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { x: 16, opacity: 0, willChange: 'transform, opacity' },
      {
        x: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power2.out',
        clearProps: 'willChange,transform',
      }
    );
  });

  return () => mm.revert();
}

export function animateAccordionPanel(panel: HTMLElement | null, isOpen: boolean) {
  if (!panel) return;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    panel.style.height = isOpen ? 'auto' : '0px';
    panel.style.opacity = isOpen ? '1' : '0';
    return;
  }

  if (isOpen) {
    gsap.fromTo(
      panel,
      { height: 0, opacity: 0 },
      {
        height: 'auto',
        opacity: 1,
        duration: 0.32,
        ease: 'power2.out',
        clearProps: 'height',
      }
    );
  } else {
    gsap.to(panel, {
      height: 0,
      opacity: 0,
      duration: 0.24,
      ease: 'power2.out',
    });
  }
}
