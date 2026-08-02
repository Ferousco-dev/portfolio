import { profile, stats } from "@/lib/profile";
import SplitText from "./split-text";
import RotatingWord from "./rotating-word";
import { ArrowDoodle, PhoneDoodle, SparkDoodle } from "./doodles";

const socials = [
  { href: profile.github, label: "GitHub" },
  { href: profile.x, label: "X" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 lg:px-12 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-[1500px] gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,1fr)_17rem] xl:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="border-l border-accent/30 pl-8 sm:pl-12">
          <p className="rise d5 text-[13px] uppercase tracking-[0.16em] text-ink-faint">
            {profile.role}
          </p>

          <h1 className="mt-6 text-[clamp(3.25rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.035em] text-ink">
            <SplitText text="Feranmi" delay={420} className="block" />
            <span className="block">
              <SplitText text="Oresajo" delay={700} />
              <span
                aria-hidden="true"
                className="char inline-block text-accent"
                style={{ animationDelay: "940ms" }}
              >
                .
              </span>
            </span>
          </h1>

          <p className="rise d8 mt-10 text-[clamp(1.125rem,2.2vw,1.75rem)] leading-[1.5] text-ink-muted">
            I build <RotatingWord />
            <span className="block">
              and{" "}
              <span className="highlight text-ink">
                I do not write your backend.
              </span>
            </span>
          </p>

          <div className="rise d9 mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-7 py-3.5 text-sm leading-none text-paper transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              See the work
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rule px-7 py-3.5 text-sm leading-none text-ink transition-colors hover:bg-rule/40 motion-reduce:transition-none"
            >
              Resume
            </a>
          </div>

          <ul className="rise d9 mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative text-[13px] text-ink-faint transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {social.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rise d9 hidden self-center border-l border-rule pl-8 lg:block">
          <p className="flex items-center gap-2 font-hand text-2xl leading-none text-accent">
            <SparkDoodle className="size-4 shrink-0" />
            currently
          </p>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={profile.site}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="block text-[15px] text-ink">AppMD</span>
                <span className="block text-[13px] leading-6 text-ink-faint">
                  APK in, documentation out
                </span>
              </a>
            </li>
            <li>
              <a href={profile.classbook} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="block text-[15px] text-ink">ClassBook</span>
                <span className="block text-[13px] leading-6 text-ink-faint">
                  live on the Play Store
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-10 border-t border-rule pt-6">
            <dl className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <dt className="font-display text-2xl leading-none text-ink">
                    {stat.value}
                  </dt>
                  <dd className="text-[13px] leading-snug text-ink-faint">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 flex items-start gap-3">
            <PhoneDoodle className="w-9 shrink-0 text-ink-faint" />
            <div>
              <ArrowDoodle className="w-16 rotate-180 text-accent/70" />
              <p className="mt-1 max-w-[16ch] font-hand text-xl leading-snug text-accent">
                won a hackathon with this one
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
