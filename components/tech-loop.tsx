"use client";

import {
  SiFlutter,
  SiDart,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiAppwrite,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import LogoLoop from "./ui/logo-loop";

const logos = [
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiDart />, title: "Dart", href: "https://dart.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiAppwrite />, title: "Appwrite", href: "https://appwrite.io" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://netlify.com" },
];

export default function TechLoop() {
  return (
    <div className="relative py-2 text-ink-faint">
      <LogoLoop
        logos={logos}
        speed={38}
        direction="left"
        logoHeight={26}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="var(--paper)"
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}
