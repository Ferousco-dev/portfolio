import { profile, siteUrl } from "@/lib/profile";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Mobile & web developer",
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Obafemi Awolowo University",
    },
    worksFor: { "@type": "Organization", name: profile.brand },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Frontend development",
      "Mobile app development",
    ],
    sameAs: [profile.github, profile.x, profile.linkedin, profile.site],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
