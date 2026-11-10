const PRODUCTION_URL = "https://feranmi.appmd.dev";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "production"
    ? PRODUCTION_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : PRODUCTION_URL);

export const profile = {
  name: "Feranmi Oresajo",
  fullName: "Oluwaferanmi Oresajo",
  role: "Mobile software engineer · Swift, Kotlin, Flutter",
  brand: "Ferousco",
  location: "Lagos, Nigeria",
  email: "feranmioresajo@gmail.com",
  site: "https://appmd.dev",
  github: "https://github.com/Ferousco-dev",
  githubHandle: "Ferousco-dev",
  x: "https://x.com/fer_nmi",
  xHandle: "fer_nmi",
  linkedin: "https://www.linkedin.com/in/oluwaferanmi-oresajo",
  resume: "/resume.pdf",
  classbook: "https://play.google.com/store/apps/details?id=com.orastudy.orastudy",
};

export const stats = [
  { value: "5,000+", label: "users on TestFlow" },
  { value: "1,500+", label: "active users" },
  { value: "3", label: "mobile stacks: Swift, Kotlin, Flutter" },
];

export const milestones = [
  {
    year: "Now",
    title: "Software Engineer, TestFlow",
    detail:
      "Engineering a computer-based testing platform used by 5,000+ students, 1,500+ of them active. Flutter app, PWA and a Node API with auth, timed exams, auto-save and analytics.",
    kind: "Work",
  },
  {
    year: "2026",
    title: "Hackathon winner",
    detail:
      "First place at Redeemer's University, Ede, with TapPay, an NFC payment wallet built in Flutter.",
    kind: "Award",
  },
  {
    year: "2026",
    title: "ClassBook shipped to the Play Store",
    detail:
      "Turns course PDFs into one organised, searchable study library. Read, highlight, stay in sync with your class.",
    kind: "Release",
  },
  {
    year: "In progress",
    title: "B.Sc. Software Engineering",
    detail: "Obafemi Awolowo University, Ile-Ife.",
    kind: "Education",
  },
  {
    year: "2025",
    title: "Flutter & Dart Development Bootcamp",
    detail: "Dr. Angela Yu, Udemy. Plus Jonas Schmedtmann's HTML and CSS course.",
    kind: "Certification",
  },
];
