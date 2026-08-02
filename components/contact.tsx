import Section from "./section";
import Reveal from "./reveal";
import Mascot from "./mascot";
import { ArrowDoodle } from "./doodles";
import { profile } from "@/lib/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "X", value: `@${profile.xHandle}`, href: profile.x },
  { label: "LinkedIn", value: profile.fullName, href: profile.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Got something worth building?">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
        <div>
          <Reveal>
            <p className="reveal-up max-w-[24ch] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] tracking-[-0.02em] text-ink">
              Open to frontend work, Flutter builds, and things slightly beyond
              what I have done before.
            </p>
          </Reveal>

          <p className="mt-6 max-w-[52ch] text-lg leading-8 text-ink-muted">
            That last kind is usually the most interesting. Still no backends.
          </p>

          <Reveal delay={100}>
            <a
              href={`mailto:${profile.email}`}
              className="reveal-up group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[15px] leading-none text-paper transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Send me an email
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
          </Reveal>

          <dl className="mt-14 max-w-[34rem] space-y-0">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-baseline gap-6 border-b border-rule py-3.5 first:border-t"
              >
                <dt className="w-20 shrink-0 text-[12px] uppercase tracking-[0.12em] text-ink-faint">
                  {channel.label}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={channel.href}
                    {...(channel.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group relative break-words text-[17px] text-ink"
                  >
                    {channel.value}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="lg:pt-6" delay={80}>
          <div className="reveal-up">
            <div className="flex items-end gap-4">
              <Mascot className="w-24 shrink-0 text-ink" />
              <div className="pb-4">
                <p className="max-w-[15ch] font-hand text-2xl leading-snug text-accent">
                  I reply faster than my commit messages suggest
                </p>
              </div>
            </div>

            <div className="mt-8 border-l border-accent/30 pl-6">
              <p className="text-[15px] leading-7 text-ink-muted">
                Based in{" "}
                <span className="text-ink">{profile.location}</span>. Working
                across West African and European hours.
              </p>
              <ArrowDoodle className="mt-4 w-20 rotate-[186deg] text-accent/60" />
              <p className="mt-1 font-hand text-xl leading-snug text-accent">
                or as GitHub puts it, 404: location not found
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
