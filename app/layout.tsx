import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Grain from "@/components/grain";
import Splash from "@/components/splash";
import { Footer } from "@/components/ui/footer-section";
import { siteUrl } from "@/lib/profile";
import PersonSchema from "@/components/person-schema";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Feranmi Oresajo — Mobile software engineer",
    template: "%s — Feranmi Oresajo",
  },
  description:
    "Mobile software engineer in Lagos, Nigeria. Swift, Kotlin and Flutter. Engineer at TestFlow (5,000+ users), ClassBook on the Play Store, 2026 hackathon winner with TapPay.",
  applicationName: "Feranmi Oresajo",
  authors: [{ name: "Oluwaferanmi Oresajo", url: "https://github.com/Ferousco-dev" }],
  creator: "Oluwaferanmi Oresajo",
  keywords: [
    "Feranmi Oresajo",
    "mobile app developer",
    "Flutter developer",
    "Kotlin developer",
    "Swift developer",
    "mobile developer Nigeria",
    "mobile developer Lagos",
    "TestFlow",
    "ClassBook",
    "Ferousco",
  ],
  openGraph: {
    type: "profile",
    siteName: "Feranmi Oresajo",
    title: "Feranmi Oresajo — Mobile software engineer",
    description:
      "Swift, Kotlin and Flutter. Engineer at TestFlow (5,000+ users), ClassBook on the Play Store, 2026 hackathon winner. Lagos, Nigeria.",
    url: "/",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feranmi Oresajo — Mobile software engineer",
    description:
      "Swift, Kotlin and Flutter. Engineer at TestFlow (5,000+ users), ClassBook on the Play Store, 2026 hackathon winner.",
    creator: "@fer_nmi",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ee" },
    { media: "(prefers-color-scheme: dark)", color: "#181611" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PersonSchema />
        <Splash />
        <Grain />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
