"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

const GRID = 32;

/**
 * The page background is a 32px ruled grid. This wrapper nudges its own top
 * edge down (padding, never transforms) so its first line of text lands on a
 * rule, whatever sits above it. Children must use a 32px line height and
 * vertical gaps in multiples of 32px to stay aligned.
 */
export default function GridSnap({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const snap = () => {
      el.style.paddingTop = "0px";
      let top = 0;
      let node: HTMLElement | null = el;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      el.style.paddingTop = `${(GRID - (top % GRID)) % GRID}px`;
    };

    snap();
    const observer = new ResizeObserver(snap);
    observer.observe(document.body);
    document.fonts?.ready.then(snap).catch(() => {});
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
