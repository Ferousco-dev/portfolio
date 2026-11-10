import Section from "./section";
import { UnderlineDoodle } from "./doodles";
import TechLoop from "./tech-loop";

const groups = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Riverpod", "Kotlin", "Jetpack Compose", "Swift", "Google Maps", "NFC", "BLE"],
    note: "my main thing",
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT auth", "Paystack", "Payaza", "Go", "Python"],
  },
  {
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Room"],
  },
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PWA"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Android Studio", "Xcode", "Vercel", "Cloudinary"],
  },
];

export default function Stack() {
  return (
    <Section id="stack" label="Stack" title="What I actually reach for.">
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.label} className="sm:grid sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
            <div className="relative">
              <h3 className="inline-block font-display text-lg leading-8 text-ink">
                {group.label}
              </h3>
              {group.label === "Mobile" && (
                <UnderlineDoodle className="mt-0.5 block h-2 w-24 text-accent/60" />
              )}
              {group.note && (
                <p className="font-hand text-lg leading-tight text-accent/80">
                  {group.note}
                </p>
              )}
            </div>

            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 sm:mt-0">
              {group.items.map((item) => (
                <li key={item} className="text-lg leading-8 text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-y border-rule py-6">
        <TechLoop />
      </div>
    </Section>
  );
}
