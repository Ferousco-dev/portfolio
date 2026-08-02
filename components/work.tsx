import Section from "./section";
import { profile } from "@/lib/profile";
import { ArrowDoodle } from "./doodles";

type Project = {
  name: string;
  blurb: string;
  tech: string[];
  href: string;
  hrefLabel: string;
  note?: string;
  tilt: string;
};

const projects: Project[] = [
  {
    name: "TapPay",
    blurb:
      "A multimodal payment network: NFC tap, QR, and identity-based transfers, so it adapts to whatever the environment allows. Payaza integration for real transactions and a record of every one.",
    tech: ["Flutter", "Dart", "NFC", "Payaza"],
    href: "https://github.com/Ferousco-dev/TapPay-policy",
    hrefLabel: "About TapPay",
    note: "hackathon winner",
    tilt: "-0.6deg",
  },
  {
    name: "ClassBook",
    blurb:
      "Turns your course PDFs into one organised, searchable study library. Read, highlight, and stay in sync with your class.",
    tech: ["Flutter", "Dart"],
    href: profile.classbook,
    hrefLabel: "Downloads",
    note: "on Play Store",
    tilt: "0.5deg",
  },
  {
    name: "AppMD",
    blurb:
      "Upload an Android APK, get back AI-generated documentation: architecture, navigation flow, design analysis, security insights, framework detection, assets.",
    tech: ["Next.js", "TypeScript", "AI"],
    href: profile.site,
    hrefLabel: "appmd.dev",
    note: "live",
    tilt: "-0.7deg",
  },
  {
    name: "Vendly",
    blurb:
      "AI social commerce. Turns chat conversations into real, trackable sales, because that is how a lot of business here actually happens.",
    tech: ["TypeScript", "AI"],
    href: "https://vendly-web.vercel.app/",
    hrefLabel: "Live demo",
    tilt: "0.5deg",
  },
  {
    name: "sentinel-aerial",
    blurb:
      "Turns a closed WiFi FPV toy drone into an autonomous aerial sensor. Video ingest, image enhancement, on-device YOLO detection, event logging, live dashboard, zone-breach alerting.",
    tech: ["Python", "FastAPI", "OpenCV", "YOLOv8"],
    href: "https://github.com/Ferousco-dev/sentinel-aerial",
    hrefLabel: "GitHub",
    note: "9 stars",
    tilt: "-0.4deg",
  },
  {
    name: "AnonPro",
    blurb:
      "An anonymous social platform: posts, private chat, stories, media uploads. This is the one that taught me auth, realtime, storage, and how to structure a frontend that keeps growing.",
    tech: ["Flutter", "Dart", "Supabase"],
    href: "https://github.com/Ferousco-dev/ANONPRO",
    hrefLabel: "GitHub",
    tilt: "0.6deg",
  },
  {
    name: "Forge",
    blurb:
      "For Nigeria's blue-collar gig workers. Nearby jobs, GPS clock-in, instant pay on clock-out, and a portable credit record that unlocks loans. Built with dignity in mind.",
    tech: ["Flutter", "Dart", "GPS"],
    href: "https://github.com/Ferousco-dev/Forge",
    hrefLabel: "GitHub",
    tilt: "-0.5deg",
  },
  {
    name: "Oriente",
    blurb:
      "Campus food ordering where the motion carries the experience. Mostly an exercise in making GSAP timing feel deliberate instead of decorative.",
    tech: ["Next.js", "React 19", "GSAP"],
    href: "https://oriente-black.vercel.app",
    hrefLabel: "Live demo",
    tilt: "0.4deg",
  },
];

export default function Work() {
  return (
    <Section id="work" label="Work" title="Things I have actually shipped.">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            style={{ rotate: project.tilt }}
            className="group relative flex flex-col rounded-sm border border-rule bg-paper-raised p-6 shadow-lift transition-[rotate,translate] duration-300 ease-out hover:rotate-0 hover:-translate-y-1 motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-[2px] bg-accent/12 ring-1 ring-inset ring-accent/15"
            />

            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl leading-tight text-ink">
                {project.name}
              </h3>
              {project.note && (
                <span className="shrink-0 font-hand text-lg leading-none text-accent/80">
                  {project.note}
                </span>
              )}
            </div>

            <p className="mt-3 text-[15px] leading-7 text-ink-muted text-pretty">
              {project.blurb}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              {project.tech.map((tech) => (
                <li key={tech} className="text-[13px] text-ink-faint">
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[13px] text-accent after:absolute after:inset-0 after:content-['']"
            >
              {project.hrefLabel}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
          </article>
        ))}

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ rotate: "-0.3deg" }}
          className="group relative flex flex-col items-start justify-center gap-3 rounded-sm border border-dashed border-accent/40 p-6 transition-[rotate,translate,background-color] duration-300 ease-out hover:rotate-0 hover:-translate-y-1 hover:bg-accent/5 motion-reduce:transition-none"
        >
          <ArrowDoodle className="w-20 text-accent/60" />
          <span className="font-display text-2xl leading-tight text-ink">
            100+ more
          </span>
          <span className="max-w-[24ch] text-[15px] leading-7 text-ink-muted">
            An NFC wallet, a BLE scanner for smart glasses, a gallery
            optimiser, a Claude design skill, and plenty still embarrassing.
          </span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-accent">
            All of it on GitHub
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        </a>
      </div>
    </Section>
  );
}
