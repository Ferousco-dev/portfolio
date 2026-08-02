"use client";

import { useEffect, useRef, useState } from "react";

const words = [
  "Flutter apps",
  "Next.js sites",
  "AI tooling",
  "things that ship",
];

const INTERVAL = 2600;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      const el = measureRefs.current[index];
      if (el) setWidth(el.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline">
      <span
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {words.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </span>

      <span
        className="relative inline-block overflow-hidden align-baseline transition-[width] duration-500 ease-out motion-reduce:transition-none"
        style={{ width: width ?? undefined }}
      >
        <span className="sr-only">{words.join(", ")}</span>

        {words.map((word, i) => {
          const isCurrent = i === index;
          const isOutgoing = i === (index - 1 + words.length) % words.length;

          return (
            <span
              key={word}
              aria-hidden="true"
              className="whitespace-nowrap text-ink transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none"
              style={{
                display: isCurrent ? "inline-block" : "block",
                position: isCurrent ? "relative" : "absolute",
                left: 0,
                top: 0,
                opacity: isCurrent ? 1 : 0,
                transform: isCurrent
                  ? "translateY(0)"
                  : isOutgoing
                    ? "translateY(-0.9em)"
                    : "translateY(0.9em)",
              }}
            >
              {word}
            </span>
          );
        })}
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
        className="absolute -bottom-1.5 left-0 h-2 w-full text-accent"
      >
        <path
          key={index}
          d="M2 7c30-4 66-5 100-4 32 1 66 2 96 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          className="draw-line"
        />
      </svg>
    </span>
  );
}
