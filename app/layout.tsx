import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Grain from "@/components/grain";
import Splash from "@/components/splash";
import { Footer } from "@/components/ui/footer-section";

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
  metadataBase: new URL("https://feranmi.dev"),
  title: {
    default: "Feranmi Oresajo — Mobile & web developer",
    template: "%s — Feranmi Oresajo",
  },
  description:
    "I make buttons that actually work. Flutter, Next.js and React developer from Lagos, Nigeria. Building AppMD, shipped ClassBook to the Play Store, won the 2026 hackathon at Redeemer's University with TapPay.",
  applicationName: "Feranmi Oresajo",
  authors: [{ name: "Oluwaferanmi Oresajo", url: "https://github.com/Ferousco-dev" }],
  creator: "Oluwaferanmi Oresajo",
  keywords: [
    "Feranmi Oresajo",
    "Flutter developer",
    "Next.js developer",
    "React developer",
    "frontend developer Nigeria",
    "mobile developer Lagos",
    "AppMD",
    "Ferousco",
  ],
  openGraph: {
    type: "profile",
    siteName: "Feranmi Oresajo",
    title: "Feranmi Oresajo — Mobile & web developer",
    description:
      "Flutter, Next.js and React. Building AppMD, shipped ClassBook to the Play Store, 2026 hackathon winner. Lagos, Nigeria.",
    url: "/",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feranmi Oresajo — Mobile & web developer",
    description:
      "Flutter, Next.js and React. Building AppMD, shipped ClassBook to the Play Store, 2026 hackathon winner.",
    creator: "@fer_nmi",
  },
  robots: { index: true, follow: true },
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
        <Splash />
        <Grain />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
