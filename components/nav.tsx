"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "/resume.pdf", label: "Resume" },
];

const CASE = "flex h-14 items-center rounded-full bg-ink p-2";
const RING = "rounded-full border border-paper/30";
const BRIDGE = "h-3.5 w-5 -mx-1 shrink-0 bg-ink";
const ITEM = "flex h-10 items-center px-4 text-[14px] leading-none";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [active] = useState<number | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const current = hovered ?? active;

  const measure = useCallback((index: number | null) => {
    const el = itemsRef.current[index ?? 0];
    const list = listRef.current;
    if (!el || !list) return;
    const item = el.getBoundingClientRect();
    const box = list.getBoundingClientRect();
    setPill({ left: item.left - box.left - list.clientLeft, width: item.width });
  }, []);

  useLayoutEffect(() => {
    measure(current);
  }, [current, measure]);

  useEffect(() => {
    const onResize = () => measure(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current, measure]);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <filter id="goo" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -14"
            />
          </filter>
        </defs>
      </svg>

      <nav aria-label="Main" data-open={open} className="relative">
        <div
          aria-hidden="true"
          className="flex items-center"
          style={{ filter: "url(#goo)" }}
        >
          <div className={`${CASE} nav-pop h-14 w-14`} />
          <div className={`${BRIDGE} nav-extend d1`} />

          <div className={`${CASE} nav-extend d2 hidden sm:flex`}>
            <div className="flex h-10 items-center border border-transparent">
              {links.map((link) => (
                <span key={link.href} className={`${ITEM} text-transparent`}>
                  {link.label}
                </span>
              ))}
            </div>
          </div>
          <div className={`${BRIDGE} nav-extend d3 hidden sm:block`} />

          <div className={`${CASE} nav-extend d4 hidden sm:flex`}>
            <div className="flex h-10 items-center border border-transparent">
              <span className={`${ITEM} text-transparent`}>Contact</span>
            </div>
          </div>

          <div className={`${CASE} nav-extend d2 h-14 w-14 sm:hidden`} />
        </div>

        <div className="absolute inset-0 flex items-center">
          <a
            href="#top"
            aria-label="Home"
            className="flex h-14 w-14 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="nav-fade d1 flex h-10 w-10 items-center justify-center rounded-full bg-paper font-display text-lg leading-none text-ink">
              F<span className="text-accent">.</span>
            </span>
          </a>
          <div className="w-5 -mx-1" />

          <div className="hidden h-14 items-center p-2 sm:flex">
            <ul
              ref={listRef}
              onMouseLeave={() => setHovered(null)}
              className={`${RING} nav-fade d5 relative flex h-10 items-center overflow-hidden`}
            >
              <li
                aria-hidden="true"
                className="absolute left-0 top-0 h-full rounded-full bg-paper transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none"
                style={{
                  transform: `translateX(${pill.left}px)`,
                  width: pill.width,
                  opacity: current === null ? 0 : 1,
                }}
              />
              {links.map((link, i) => (
                <li key={link.href} className="relative z-10">
                  <a
                    ref={(el) => {
                      itemsRef.current[i] = el;
                    }}
                    href={link.href}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`${ITEM} transition-colors duration-200 motion-reduce:transition-none ${
                      current === i ? "text-ink" : "text-paper/70"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden w-5 -mx-1 sm:block" />

          <div className="hidden h-14 items-center p-2 sm:flex">
            <div className={`${RING} nav-fade d6 flex h-10 items-center`}>
              <a
                href="#contact"
                className={`${ITEM} text-paper transition-opacity hover:opacity-75 motion-reduce:transition-none`}
              >
                Contact
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-14 w-14 items-center justify-center rounded-full sm:hidden"
          >
            <span className="nav-fade d5 relative block h-3 w-[18px]">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 grid overflow-hidden rounded-3xl bg-ink transition-[grid-template-rows] duration-300 ease-out sm:hidden motion-reduce:transition-none"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="min-h-0">
            <ul className="flex flex-col gap-4 px-6 py-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="text-sm text-paper/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="text-sm text-paper"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
