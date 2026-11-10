import Section from "./section";
import Reveal from "./reveal";
import GridSnap from "./grid-snap";
import {
  ArrowDoodle,
  CaretDoodle,
  LaptopDoodle,
  StrikeDoodle,
} from "./doodles";

const card = [
  { k: "Based", v: "Lagos, Nigeria" },
  { k: "Day job", v: "Software engineer, TestFlow" },
  { k: "Scale", v: "5,000+ users, 1,500+ active" },
  { k: "Languages", v: "Swift, Kotlin, Dart (Flutter)" },
  { k: "Shipped", v: "ClassBook, Play Store" },
  { k: "Won", v: "2026 hackathon, with TapPay" },
  { k: "Studying", v: "Software Engineering, OAU" },
];

export default function About() {
  return (
    <Section id="about" label="About" title="Mobile engineer. Nigerian. Ships to real users.">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
        <div>
          <Reveal className="max-w-[24ch]">
            <p className="text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.25] tracking-[-0.02em] text-ink">
              I am a{" "}
              <span className="relative inline-block whitespace-nowrap pt-9">
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 font-hand text-[0.62em] leading-none text-accent">
                  mobile
                </span>
                <CaretDoodle className="absolute left-1/2 top-[1.9em] w-4 -translate-x-1/2 text-accent" />
                <span className="relative text-ink-faint">
                  web
                  <StrikeDoodle className="absolute inset-x-0 top-[0.52em] h-3 w-full text-accent" />
                </span>
              </span>{" "}
              developer.
            </p>
          </Reveal>

          <GridSnap className="mt-12 max-w-[58ch] space-y-8 text-lg leading-8 text-ink-muted text-pretty">
            <p>
              I build mobile apps in Swift, Kotlin and Flutter, and I care an
              unreasonable amount about how things feel to use.{" "}
              <span className="text-ink">
                If a button is one pixel off, it haunts me.
              </span>
            </p>
            <p>
              At TestFlow I am a software engineer on a computer-based testing
              platform with 5,000+ students and 1,500+ active users. That means
              exams that must not lose an answer, auth that has to hold, and a
              Node API behind the app that stays up when everyone logs in at
              once.
            </p>
            <p>
              Outside work I ship my own: ClassBook on the Play Store, Hydro in
              Kotlin and Compose, MyDrop and fhare across Mac and Android, and
              TapPay, an NFC payment wallet that won the 2026 hackathon at
              Redeemer&apos;s University. Same energy every time: make it clean,
              make it fast, make it human.
            </p>
            <p>
              I run <span className="text-ink">Ferousco</span>. Most of what I
              know came from building real things and breaking them, not from
              watching tutorials.
            </p>
          </GridSnap>

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
