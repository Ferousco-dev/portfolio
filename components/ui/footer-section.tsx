"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { profile } from "@/lib/profile";
import Mascot from "@/components/mascot";

type IconProps = { className?: string };

function BrandIcon({ className, path }: IconProps & { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={path} />
    </svg>
  );
}

const GithubIcon = (props: IconProps) => (
  <BrandIcon
    {...props}
    path="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
  />
);

const LinkedinIcon = (props: IconProps) => (
  <BrandIcon
    {...props}
    path="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
  />
);

const XIcon = (props: IconProps) => (
  <BrandIcon
    {...props}
    path="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"
  />
);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const footerLinks: { label: string; links: FooterLink[] }[] = [
  {
    label: "Navigate",
    links: [
      { title: "About", href: "#about" },
      { title: "Stack", href: "#stack" },
      { title: "Work", href: "#work" },
      { title: "Milestones", href: "#milestones" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Shipped",
    links: [
      { title: "AppMD", href: profile.site },
      { title: "ClassBook", href: profile.classbook },
      { title: "Vendly", href: "https://vendly-web.vercel.app/" },
      { title: "Oriente", href: "https://oriente-black.vercel.app" },
      { title: "Resume", href: profile.resume },
    ],
  },
  {
    label: "Elsewhere",
    links: [
      { title: "GitHub", href: profile.github, icon: GithubIcon },
      { title: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
      { title: "X", href: profile.x, icon: XIcon },
      { title: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-rule px-6 pb-12 pt-20 lg:px-12 xl:px-16">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <Mascot
        pose="peek"

        className="absolute -top-[38px] right-[8%] w-16 text-ink-faint lg:right-[12%]"
      />

      <div className="mx-auto grid w-full max-w-[1500px] gap-14 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-24">
        <AnimatedContainer className="space-y-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-lg leading-none text-paper">
            F<span className="text-accent">.</span>
          </span>
          <p className="max-w-[34ch] text-[15px] leading-7 text-ink-muted">
            I make buttons that actually work. Flutter, Next.js, React. Founder
            of Ferousco, building{" "}
            <a href={profile.site} target="_blank" rel="noopener noreferrer" className="text-ink">
              appmd.dev
            </a>
            .
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 xl:gap-x-20">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
              <h3 className="text-[12px] uppercase tracking-[0.14em] text-ink-faint">
                {section.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-2 text-[15px] text-ink-muted transition-colors hover:text-ink motion-reduce:transition-none"
                    >
                      {link.icon && (
                        <link.icon className="size-4 text-ink-faint transition-colors group-hover:text-accent motion-reduce:transition-none" />
                      )}
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
        <p className="text-[13px] text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built in Next.js, on a
          ruled page.
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-[13px] text-ink-muted transition-colors hover:text-ink motion-reduce:transition-none"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          >
            ↑
          </span>
          Back to top
        </a>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
