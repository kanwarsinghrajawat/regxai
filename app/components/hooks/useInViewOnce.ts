"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type UseInViewOnceOptions = IntersectionObserverInit & {
  /**
   * If true, will keep toggling based on visibility.
   * Default: false (once).
   */
  continuous?: boolean;
};

export function useInViewOnce<T extends Element>(options?: UseInViewOnceOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const optionsMemo = useMemo(() => options, [options]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { continuous, ...observerOptions } = optionsMemo ?? {};
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (!continuous) observer.disconnect();
      } else if (continuous) {
        setInView(false);
      }
    }, observerOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, [optionsMemo]);

  return { ref, inView } as const;
}

