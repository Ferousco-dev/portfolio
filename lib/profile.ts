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
  role: "Mobile & web developer",
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
  classbook: "https://github.com/Ferousco-dev/classbook-releases/releases",
};

export const stats = [
  { value: "1,818", label: "commits since December" },
  { value: "100+", label: "repositories" },
  { value: "1", label: "app on the Play Store" },
];

export const milestones = [
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
