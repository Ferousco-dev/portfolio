import Image from "next/image";
import Section from "./section";
import { profile } from "@/lib/profile";
import { ArrowDoodle } from "./doodles";

type Project = {
  name: string;
  blurb: string;
  tech: string[];
  /** Omit for private codebases: the card renders a label instead of a link. */
  href?: string;
  hrefLabel?: string;
  note?: string;
  logo?: string;
  /** Headline numbers shown on the card, e.g. users. */
  metrics?: string[];
  tilt: string;
};

const projects: Project[] = [
  {
    name: "TestFlow",
    blurb:
      "A computer-based testing platform for university students, and the product I engineer day to day. Timed exams, auto-saved answers, instant results, review and analytics, with an admin side for questions, subjects and results. Flutter app and PWA on a Node and MongoDB API.",
    tech: ["Flutter", "Riverpod", "React", "Node.js", "MongoDB", "JWT"],
    logo: "/logos/testflow.png",
    metrics: ["5,000+ users", "1,500+ active"],
    note: "my day job",
    hrefLabel: "Private codebase",
    tilt: "-0.5deg",
  },
  {
    name: "MyDrop",
    blurb:
      "Move files between a Mac and an Android phone over Wi-Fi. Speaks Quick Share, adds a Finder Share entry, clipboard sync, notification mirroring and your phone's files in Finder. A native Swift app on one side, Kotlin and Compose on the other.",
    tech: ["Swift", "Kotlin", "Jetpack Compose", "Quick Share"],
    logo: "/logos/mydrop.png",
    href: "https://github.com/Ferousco-dev/mydrop",
    hrefLabel: "Source and downloads",
    note: "Mac and Android",
    tilt: "0.5deg",
  },
  {
    name: "ClassBook",
    blurb:
      "Course reps and classmates share PDFs and materials in one place. Your course PDFs become an organised, searchable study library you can read, highlight and keep in sync with your class.",
    tech: ["Flutter", "Dart"],
    href: profile.classbook,
    hrefLabel: "Get the app",
    note: "on Play Store",
    tilt: "-0.4deg",
  },
  {
    name: "Hydro",
    blurb:
      "Weather apps say 34°C. Hydro says whether to leave now or at 5 pm. An Android companion that turns weather data into evidence-backed decisions about heat, sun, air quality and hydration. Published formulas compute every number; AI only explains them.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Gemini", "Google Maps"],
    logo: "/logos/hydro.png",
    href: "https://github.com/Ferousco-dev/hydro",
    hrefLabel: "GitHub",
    note: "built for Nigeria",
    tilt: "0.6deg",
  },
  {
    name: "TapPay",
    blurb:
      "A multimodal payment network: NFC tap, QR and identity-based transfers, so it adapts to whatever the environment allows. Payaza integration for real transactions and a record of every one.",
    tech: ["Flutter", "Dart", "NFC", "Payaza"],
    href: "https://github.com/Ferousco-dev/TapPay-policy",
    hrefLabel: "About TapPay",
    note: "hackathon winner",
    tilt: "-0.6deg",
  },
  {
    name: "fhare",
    blurb:
      "Turns an Android phone into a real second display for a Mac over Wi-Fi, with touch and typing. Not screen mirroring: macOS registers a genuine virtual display, captured on the GPU, hardware-encoded, and decoded on the phone.",
    tech: ["Swift", "Flutter", "ScreenCaptureKit", "VideoToolbox", "MediaCodec"],
    logo: "/logos/fhare.png",
    href: "https://github.com/Ferousco-dev/fhare",
    hrefLabel: "GitHub",
    tilt: "0.4deg",
  },
  {
    name: "AnonPro",
    blurb:
      "An anonymous social platform: posts, private chat, stories, media uploads. The one that taught me auth, realtime, storage, and how to structure an app that keeps growing.",
    tech: ["Flutter", "Dart", "Supabase"],
    href: "https://github.com/Ferousco-dev/ANONPRO",
    hrefLabel: "GitHub",
    tilt: "-0.5deg",
  },
  {
    name: "Forge",
    blurb:
      "For Nigeria's blue-collar gig workers. Nearby jobs, GPS clock-in, instant pay on clock-out, and a portable credit record that unlocks loans. Built with dignity in mind.",
    tech: ["Flutter", "Dart", "GPS"],
    href: "https://github.com/hackathon-by-hgs/Forge",
    hrefLabel: "GitHub",
    tilt: "0.5deg",
  },
  {
    name: "SpectraSense",
    blurb:
      "Identifies nearby smart glasses and wearable AI devices using Bluetooth Low Energy scanning and device fingerprinting, with confidence-based detection from advertisement data and service UUIDs.",
    tech: ["Flutter", "Dart", "BLE"],
    logo: "/logos/spectrasense.png",
    href: "https://github.com/Ferousco-dev/SpectraSense",
    hrefLabel: "GitHub",
    tilt: "-0.4deg",
  },
  {
    name: "AppMD",
    blurb:
      "Upload an Android APK, get back AI-generated documentation: architecture, navigation flow, design analysis, security insights, framework detection, assets.",
    tech: ["Next.js", "TypeScript", "AI"],
    href: profile.site,
    hrefLabel: "appmd.dev",
    note: "live",
    tilt: "0.6deg",
  },
  {
    name: "Vendly",
    blurb:
      "AI social commerce. Turns chat conversations into real, trackable sales, because that is how a lot of business here actually happens.",
    tech: ["TypeScript", "AI"],
    href: "https://vendly-web.vercel.app/",
    hrefLabel: "Live demo",
    tilt: "-0.5deg",
  },
];

function Mark({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt=""
        width={44}
        height={44}
        className="size-11 shrink-0 rounded-[10px] border border-rule bg-paper object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-rule bg-paper font-display text-xl text-accent"
    >
      {project.name.charAt(0)}
    </span>
  );
}

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

            <div className="flex items-center gap-3">
              <Mark project={project} />
              <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl leading-tight text-ink">
                  {project.name}
                </h3>
                {project.note && (
                  <span className="shrink-0 font-hand text-lg leading-none text-accent/80">
                    {project.note}
                  </span>
                )}
              </div>
            </div>

            {project.metrics && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <li
                    key={metric}
                    className="rounded-full bg-accent/10 px-3 py-1 text-[12px] font-medium text-accent"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            )}

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

            {project.href ? (
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
            ) : (
              <span className="mt-auto pt-5 text-[13px] text-ink-faint">
                {project.hrefLabel}
              </span>
            )}
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
            A gallery optimiser, a Claude design skill, Go backends and plenty
            still embarrassing.
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
