"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useInViewOnce } from "./hooks/useInViewOnce";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

export type AnimatedProgressBarProps = {
  /** Target percent (0-100). */
  value: number;
  /** Delay before animating once in view (ms). Defaults to 0 */
  delayMs?: number;
  /** Intersection threshold. Defaults to 0.25 */
  threshold?: number;
  /** Defaults to 900 */
  durationMs?: number;
  /** Track className (background) */
  trackClassName?: string;
  /** Fill className (foreground) */
  fillClassName?: string;
  /** Height className (e.g. "h-2") */
  heightClassName?: string;
  /** Rounded className (e.g. "rounded-full") */
  roundedClassName?: string;
  /** If true, show a marker dot that moves with the fill. */
  showMarker?: boolean;
  /** Optional className override for the marker dot. */
  markerClassName?: string;
  /** If true, will re-run when leaving/entering view. Default: false */
  continuous?: boolean;
  className?: string;
};

export function AnimatedProgressBar({
  value,
  delayMs = 0,
  threshold = 0.25,
  durationMs = 900,
  trackClassName,
  fillClassName,
  heightClassName = "h-2",
  roundedClassName = "rounded-full",
  showMarker = false,
  markerClassName,
  continuous = false,
  className,
}: AnimatedProgressBarProps) {
  const reducedMotion = usePrefersReducedMotion();
  const inViewOptions = useMemo(
    () => ({ threshold, continuous }),
    [threshold, continuous],
  );
  const { ref, inView } = useInViewOnce<HTMLDivElement>(inViewOptions);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const next = Math.max(0, Math.min(100, value));

    if (reducedMotion || durationMs <= 0) {
      setPct(next);
      return;
    }

    // Force a visible 0 -> target transition even
    // when the element mounts already in-view.
    setPct(0);
    let raf = 0;
    const t = window.setTimeout(() => {
      raf = requestAnimationFrame(() => setPct(next));
    }, delayMs);
    return () => {
      window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [inView, value, reducedMotion, delayMs, durationMs]);

  const track = trackClassName ?? "bg-gray-200";
  const fill = fillClassName ?? "bg-emerald-600";

  return (
    <div
      ref={ref}
      className={[
        "relative overflow-hidden",
        heightClassName,
        roundedClassName,
        track,
        className ?? "",
      ].join(" ")}
    >
      <div
        className={[
          "h-full",
          roundedClassName,
          fill,
          "transition-[width] ease-out will-change-[width]",
        ].join(" ")}
        style={{ width: `${pct}%`, transitionDuration: `${durationMs}ms` }}
      />
      {showMarker && (
        <div
          className={
            markerClassName ??
            "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow ring-4 ring-black/5"
          }
          style={{ left: `${pct}%`, transition: `left ${durationMs}ms ease-out` }}
        />
      )}
    </div>
  );
}

