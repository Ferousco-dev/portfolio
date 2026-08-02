"use client";

import { useEffect, useState } from "react";

const SAFETY_MS = 2200;

export default function Splash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setGone(true), SAFETY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="splash"
      onAnimationEnd={(e) => {
        if (e.animationName.startsWith("splash-lift")) setGone(true);
      }}
    >
      <div className="splash-inner">
        <span className="splash-mark">
          F<span className="splash-dot">.</span>
        </span>

        <svg viewBox="0 0 180 12" preserveAspectRatio="none" className="splash-rule">
          <path
            d="M3 8c26-4 58-6 90-5 30 1 60 3 84 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>
      </div>
    </div>
  );
}
