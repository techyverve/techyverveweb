import type { Metadata } from "next";
import type { Viewport } from "next";
import { DM_Sans, Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

// Inter and Plus Jakarta Sans are used by the project case-study themes
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

// JetBrains Mono is a variable font: omitting `weight` loads one file covering all weights,
// which also avoids the Turbopack "next/font/google queries have exactly one entry" build error.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techyverve.in"),
  title: {
    // ≤ 60 chars so it is not truncated in results; inner pages use the template below
    default: "Software Development Company in Pune | TechyVerve",
    template: "%s | TechyVerve",
  },
  // 140–155 chars. (Google ignores <meta name="keywords">, so none is emitted.)
  description:
    "Software development company in Kharadi, Pune. We build web and mobile apps, ERP and billing software and AWS cloud systems in India. Get a free quote.",
  applicationName: "TechyVerve",
  category: "technology",
  formatDetection: { telephone: true, email: true },
  authors: [{ name: "TechyVerve" }],
  // No site-wide canonical here: every page sets its own (a canonical of "/" inherited by a page
  // that forgot to set one would tell Google that page is a duplicate of the homepage).
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.techyverve.in",
    siteName: "TechyVerve",
    title: "TechyVerve — Software Development Company in Pune",
    description:
      "Web, mobile, backend, ERP, and cloud architecture, built by a software studio based in Kharadi, Pune.",
      },
  twitter: {
    card: "summary_large_image",
    title: "TechyVerve — Software Development Company in Pune",
    description:
      "Web, mobile, backend, ERP, and cloud architecture, built by a software studio based in Kharadi, Pune.",
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

export const viewport: Viewport = {
  themeColor: [
    { color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${dmSans.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="grid-bg" aria-hidden="true"></div>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
