import { useEffect, DependencyList } from 'react';
import { gsap } from '../lib/animations';

export function useGsap(
  effect: (ctx: gsap.Context) => void | (() => void),
  deps: DependencyList = []
) {
  useEffect(() => {
    let customCleanup: void | (() => void);
    const ctx = gsap.context((self) => {
      customCleanup = effect(self);
    });

    return () => {
      if (typeof customCleanup === 'function') {
        customCleanup();
      }
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
