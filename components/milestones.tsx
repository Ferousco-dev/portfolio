import Section from "./section";
import { SparkDoodle } from "./doodles";
import { milestones } from "@/lib/profile";

export default function Milestones() {
  return (
    <Section id="milestones" label="Milestones" title="Receipts.">
      <ol className="space-y-0">
        {milestones.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-x-8 gap-y-2 border-b border-rule py-6 first:pt-0 sm:grid-cols-[7rem_minmax(0,1fr)]"
          >
            <div className="flex items-baseline gap-2">
              {i === 0 && (
                <SparkDoodle className="size-4 shrink-0 translate-y-0.5 text-accent" />
              )}
              <span className="font-hand text-xl leading-none text-accent">
                {item.year}
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-display text-xl leading-snug text-ink">
                  {item.title}
                </h3>
                <span className="text-[12px] uppercase tracking-[0.12em] text-ink-faint">
                  {item.kind}
                </span>
              </div>
              <p className="mt-2 max-w-[58ch] text-[15px] leading-7 text-ink-muted text-pretty">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
