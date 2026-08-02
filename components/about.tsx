import Section from "./section";
import Reveal from "./reveal";
import {
  ArrowDoodle,
  CaretDoodle,
  LaptopDoodle,
  StrikeDoodle,
} from "./doodles";

const card = [
  { k: "Age", v: "18" },
  { k: "Based", v: "Lagos, Nigeria" },
  { k: "Studying", v: "Software Engineering, OAU" },
  { k: "Building", v: "AppMD" },
  { k: "Shipped", v: "ClassBook, Play Store" },
  { k: "Won", v: "2026 hackathon, with TapPay" },
  { k: "Backend", v: "no, thank you" },
];

export default function About() {
  return (
    <Section id="about" label="About" title="Eighteen, Nigerian, and allergic to backends.">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
        <div>
          <Reveal className="max-w-[24ch]">
            <p className="text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.25] tracking-[-0.02em] text-ink">
              I am a{" "}
              <span className="relative inline-block whitespace-nowrap pt-9">
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 font-hand text-[0.62em] leading-none text-accent">
                  frontend
                </span>
                <CaretDoodle className="absolute left-1/2 top-[1.9em] w-4 -translate-x-1/2 text-accent" />
                <span className="relative text-ink-faint">
                  full-stack
                  <StrikeDoodle className="absolute inset-x-0 top-[0.52em] h-3 w-full text-accent" />
                </span>
              </span>{" "}
              developer.
            </p>
          </Reveal>

          <div className="mt-12 max-w-[58ch] space-y-6 text-lg leading-8 text-ink-muted text-pretty">
            <p>
              I build for web and mobile, and I care an unreasonable amount
              about how things feel to use.{" "}
              <span className="text-ink">
                If a button is one pixel off, it haunts me.
              </span>
            </p>
            <p>
              I have shipped campus food ordering, a communication app for
              children with autism, a job and pay tool for informal workers, and
              a platform that pulls Android apps apart with AI. Same energy every
              time: make it clean, make it fast, make it human.
            </p>
            <p>
              I know enough backend to be dangerous. PHP with MySQL is where I
              am most comfortable and SQL is genuinely one of my stronger
              skills. But I would rather be honest about where I am than
              pretend, and Flutter is what I am pushing hardest on right now.
            </p>
            <p>
              I run <span className="text-ink">Ferousco</span>. Most of what I
              know came from building real things and breaking them, not from
              watching tutorials.
            </p>
          </div>

          <Reveal className="mt-14 hidden items-start gap-6 sm:flex" delay={120}>
            <LaptopDoodle className="w-28 shrink-0 text-ink-faint" />
            <div className="pt-4">
              <ArrowDoodle className="w-24 rotate-180 text-accent/70" />
              <p className="mt-1 max-w-[22ch] font-hand text-xl leading-snug text-accent">
                three tabs of docs, one that is definitely not docs
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:pt-4" delay={80}>
          <div
            style={{ rotate: "0.8deg" }}
            className="reveal-up relative rounded-sm border border-rule bg-paper-raised p-7 shadow-lift"
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 rounded-[2px] bg-accent/12 ring-1 ring-inset ring-accent/15"
            />

            <p className="font-hand text-2xl leading-none text-accent">
              the short version
            </p>

            <dl className="mt-6 space-y-0">
              {card.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-3 last:border-0"
                >
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-faint">
                    {row.k}
                  </dt>
                  <dd className="text-[15px] leading-6 text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
