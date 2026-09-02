import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techyverve.in"),
  title: {
    default: "TechyVerve — Software Development Company in Pune | Web, Mobile & ERP",
    template: "%s | TechyVerve",
  },
  description:
    "TechyVerve is a software development company in Kharadi, Pune building web apps, mobile apps, ERP software, AWS cloud architecture, and database systems for businesses across India.",
  keywords: [
    "software development company Pune",
    "web development company Kharadi",
    "mobile app development Pune",
    "ERP software development India",
    "AWS cloud architecture services",
    "IT company Kharadi Pune",
    "custom software development India",
  ],
  authors: [{ name: "TechyVerve" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techyverve.in",
    siteName: "TechyVerve",
    title: "TechyVerve — Software Development Company in Pune",
    description:
      "Web, mobile, backend, ERP, and cloud architecture, built by a software studio based in Kharadi, Pune.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "TechyVerve" }],
  },
  twitter: {
    card: "summary",
    title: "TechyVerve — Software Development Company in Pune",
    description:
      "Web, mobile, backend, ERP, and cloud architecture, built by a software studio based in Kharadi, Pune.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="grid-bg" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
