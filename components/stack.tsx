import Section from "./section";
import { UnderlineDoodle } from "./doodles";
import TechLoop from "./tech-loop";

const groups = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { label: "Mobile", items: ["Flutter", "Dart"], note: "actively learning" },
  { label: "Backend", items: ["PHP", "Node.js", "Express", "Python"], note: "enough to be useful" },
  { label: "Database", items: ["MySQL", "Supabase", "Firebase", "Appwrite"], note: "MySQL strongest" },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Cloudinary", "ImageKit"],
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
              {group.label === "Frontend" && (
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
