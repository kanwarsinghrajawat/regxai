"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useInViewOnce } from "./hooks/useInViewOnce";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

type EasingFn = (t: number) => number;

const easeOutCubic: EasingFn = (t) => 1 - Math.pow(1 - t, 3);

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function formatNumber(value: number, decimals: number) {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export type AnimatedNumberProps = {
  value: number;
  /** Defaults to 0 */
  start?: number;
  /** Defaults to 1200 */
  durationMs?: number;
  /** Defaults to 0 */
  decimals?: number;
  /** Optional prefix like "€" */
  prefix?: string;
  /** Optional suffix like "%", "+", "×", "M" */
  suffix?: string;
  /** Delay before starting once in view (ms). Defaults to 0 */
  delayMs?: number;
  /** Intersection threshold. Defaults to 0.25 */
  threshold?: number;
  /** Easing function override */
  easing?: EasingFn;
  className?: string;
  /** If true, will re-run when leaving/entering view (not recommended). Default: false */
  continuous?: boolean;
};

export function AnimatedNumber({
  value,
  start = 0,
  durationMs = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  delayMs = 0,
  threshold = 0.25,
  easing = easeOutCubic,
  className,
  continuous = false,
}: AnimatedNumberProps) {
  const reducedMotion = usePrefersReducedMotion();
  const inViewOptions = useMemo(
    () => ({ threshold, continuous }),
    [threshold, continuous],
  );
  const { ref, inView } = useInViewOnce<HTMLSpanElement>(inViewOptions);

  const [current, setCurrent] = useState(start);

  const finalValue = useMemo(() => value, [value]);

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion || durationMs <= 0) {
      setCurrent(finalValue);
      return;
    }

    let raf = 0;
    let timeout: number | undefined;
    const startTs = performance.now();

    const run = () => {
      const now = performance.now();
      const elapsed = now - startTs;
      const t = clamp01(elapsed / durationMs);
      const eased = easing(t);
      const next = start + (finalValue - start) * eased;
      setCurrent(next);

      if (t < 1) raf = requestAnimationFrame(run);
    };

    if (delayMs > 0) {
      timeout = window.setTimeout(() => {
        raf = requestAnimationFrame(run);
      }, delayMs);
    } else {
      raf = requestAnimationFrame(run);
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [inView, reducedMotion, durationMs, easing, start, finalValue, delayMs]);

  const display = formatNumber(current, decimals);

  return (
    <span
      ref={ref}
      className={className ? `${className} tabular-nums` : "tabular-nums"}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

