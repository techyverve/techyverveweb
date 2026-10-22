import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, Inter_Tight, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// Display face — stands in for Satoshi, which isn't on Google Fonts
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Used by the Hotel Billing and Hisaab case-study themes
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

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
    "billing software development Pune",
    "payroll software India",
    "restaurant POS software",
    "React Native app development",
    "Next.js development company",
  ],
  applicationName: "TechyVerve",
  category: "technology",
  formatDetection: { telephone: true, email: true },
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="grid-bg" aria-hidden="true"></div>
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
