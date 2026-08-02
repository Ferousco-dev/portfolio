import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 px-6 py-24 sm:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="border-l border-accent/30 pl-8 sm:pl-12">
          <p className="text-[13px] uppercase tracking-[0.16em] text-ink-faint">
            {label}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
