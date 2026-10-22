import type { CSSProperties } from "react";

export interface ProjectTheme {
  /** Page background */
  bg: string;
  /** Card / panel background */
  surface: string;
  line: string;
  text: string;
  muted: string;
  accent: string;
  accentSoft: string;
  onAccent: string;
  /** Font stack the real product uses */
  font: string;
  dark: boolean;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  platform: string;
  tagline: string;
  summary: string;
  stats: { value: string; label: string }[];
  features: { title: string; body: string }[];
  stack: string[];
  keywords: string[];
  theme: ProjectTheme;
}

// Themes are taken from each product's own design tokens (CSS variables / Tailwind config),
// so every project page looks like the app it describes.
export const projects: Project[] = [
  {
    slug: "hotel-billing",
    name: "Hotel Billing",
    category: "Restaurant POS",
    platform: "Web · Android (TWA)",
    tagline: "Table-wise order taking and billing for restaurants.",
    summary:
      "Open a table, tap dishes, print the bill and receive payment in Cash, UPI or Card. Built for busy service hours, with Bluetooth thermal printing and a full audit trail.",
    stats: [
      { value: "3 taps", label: "Order → bill → paid" },
      { value: "44 px", label: "Minimum tap target" },
      { value: "4.5:1", label: "Contrast, light & dark" },
      { value: "Multi", label: "Restaurants per platform" },
    ],
    features: [
      { title: "Table-wise orders", body: "Free, Eating and Bill-printed states at a glance. Split one table into Section A and B, each with its own bill." },
      { title: "Thermal bill printing", body: "Sequential bill numbers (B00001…), reprint on change, and a receipt styled like a real thermal print." },
      { title: "Popular & trending", body: "Starred favourites and 30-day best sellers first. Trending ranks dishes by quantity or sales with ▲/▼ change." },
      { title: "Edit log for owners", body: "Every edit or delete on a paid bill records who, when, the reason and old → new totals." },
      { title: "Optional GST", body: "One switch adds CGST + SGST. Amounts stored in whole paise and rounded to the rupee, so totals are exact." },
      { title: "Multi-tenant & staff", body: "Each owner runs an isolated restaurant with its own menu, tables, settings and staff logins." },
    ],
    stack: ["JavaScript", "Supabase", "Netlify", "PWA", "Android TWA", "Web Bluetooth"],
    keywords: ["restaurant billing software", "hotel billing app India", "restaurant POS", "table order management"],
    theme: {
      bg: "#FAF6F2", surface: "#FFFFFF", line: "#EEE4DB", text: "#1F1611", muted: "#6F635B",
      accent: "#C2410C", accentSoft: "#FFF0E6", onAccent: "#FFFFFF",
      font: "var(--font-jakarta), system-ui, sans-serif", dark: false,
    },
  },
  {
    slug: "payroll",
    name: "Techyverve Payroll",
    category: "HR & Payroll SaaS",
    platform: "Web · Android",
    tagline: "Multi-tenant payroll with QR attendance and one-click payslips.",
    summary:
      "A super admin onboards firms; each firm gets an isolated HR workspace for attendance, deduction rules and monthly payslips — with PF, ESI, PT and TDS handled out of the box.",
    stats: [
      { value: "5", label: "Attendance states" },
      { value: "3", label: "Payslip templates" },
      { value: "Daily", label: "Rotating signed QR" },
      { value: "RLS", label: "Per-firm data isolation" },
    ],
    features: [
      { title: "QR check-in kiosks", body: "Each branch shows a QR that changes daily, signed with HMAC and verified server-side. First scan checks in, second checks out." },
      { title: "Rules engine", body: "Weekly offs, shifts and grace, late marks → half-day, LOP basis, overtime, PF, ESI, PT, TDS and custom components." },
      { title: "Payroll runs", body: "Run, review, recalculate and lock. Print or save PDF payslips, and export a bank-transfer CSV." },
      { title: "Payslip designer", body: "Classic, Modern or Compact templates with brand colour, logo, bank and attendance toggles and a live preview." },
      { title: "HR dashboard", body: "Present / absent / late today, a 14-day trend, department split and upcoming holidays." },
      { title: "Employee self-service", body: "Employees see their own attendance history and finalized payslips from their phone." },
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Supabase", "Edge Functions", "Cloudflare Pages"],
    keywords: ["payroll software India", "HR payroll SaaS", "QR attendance system", "payslip generator PF ESI"],
    theme: {
      bg: "#F6F5F3", surface: "#FFFFFF", line: "#E6E8EF", text: "#081026", muted: "#6B7C99",
      accent: "#7B1E3A", accentSoft: "#FBF3F5", onAccent: "#FFFFFF",
      font: "var(--font-inter), system-ui, sans-serif", dark: false,
    },
  },
  {
    slug: "earthmovers-billing",
    name: "Earthmovers Billing",
    category: "Fleet billing & expenses",
    platform: "Web",
    tagline: "Billing, vehicle expenses and profit tracking for earthmoving contractors.",
    summary:
      "Built for JCB and earthmover businesses: bill customers per job, track fuel and vehicle expenses, follow pending payments and see net profit per vehicle.",
    stats: [
      { value: "Per vehicle", label: "Expense & profit view" },
      { value: "Live", label: "Pending bill tracking" },
      { value: "PDF", label: "Printable invoices" },
      { value: "Roles", label: "Director & staff access" },
    ],
    features: [
      { title: "Customer billing", body: "Create bills per customer and job, with amounts in words and printable invoices." },
      { title: "Vehicle fleet", body: "Add and manage vehicles, and attach every job and expense to the right machine." },
      { title: "Expense tracking", body: "Fuel cost and other expenses logged per vehicle, editable with a clear history." },
      { title: "Net profit", body: "Income minus fuel and expenses gives true profit, per vehicle and overall." },
      { title: "Transaction history", body: "Every customer's full payment and bill history in one view." },
      { title: "Pending payments", body: "See and print outstanding bills so nothing slips through." },
    ],
    stack: ["React", "Redux", "Tailwind", "daisyUI", "Docker"],
    keywords: ["earthmovers billing software", "JCB billing software", "vehicle expense tracking", "contractor billing app"],
    theme: {
      bg: "#F1F5FB", surface: "#FFFFFF", line: "#DCE4F2", text: "#0F1E3D", muted: "#5B6B8C",
      accent: "#1D4ED8", accentSoft: "#E6EEFF", onAccent: "#FFFFFF",
      font: "var(--font-inter), system-ui, sans-serif", dark: false,
    },
  },
  {
    slug: "pigmy-pro",
    name: "Pigmy Pro",
    category: "Banking field app",
    platform: "iOS · Android",
    tagline: "Daily deposit collection app for pigmy agents of banks and credit societies.",
    summary:
      "Agents search an account, collect the daily deposit, confirm with a PIN and the customer gets an SMS receipt — with history, alerts and a help desk in one mobile app.",
    stats: [
      { value: "PIN", label: "Confirmed submissions" },
      { value: "SMS", label: "Instant receipts" },
      { value: "Secure", label: "Encrypted token store" },
      { value: "Native", label: "iOS & Android" },
    ],
    features: [
      { title: "Collection submission", body: "Find the customer, enter the amount and submit. Duplicate submissions are blocked." },
      { title: "PIN confirmation", body: "Every collection is confirmed with the agent's PIN before it is recorded." },
      { title: "SMS receipts", body: "Customers receive a receipt by SMS right after the deposit is collected." },
      { title: "Collection history", body: "Day-wise history of every collection with status — submitted, in progress or cancelled." },
      { title: "Agent profile", body: "Agent, bank and organization details in one place." },
      { title: "Alerts & help desk", body: "In-app alerts and a help desk so agents can get support in the field." },
    ],
    stack: ["React Native", "Expo", "Expo Router", "Reanimated", "Secure Store"],
    keywords: ["pigmy collection app", "daily deposit collection app", "credit society mobile app", "bank agent app"],
    theme: {
      bg: "#F8FAFC", surface: "#FFFFFF", line: "#E5E7EB", text: "#1F2937", muted: "#6B7280",
      accent: "#6739B7", accentSoft: "#F1EBFB", onAccent: "#FFFFFF",
      font: "var(--font-inter), system-ui, sans-serif", dark: false,
    },
  },
  {
    slug: "hisaab",
    name: "Hisaab",
    category: "Expense splitting",
    platform: "Web",
    tagline: "Split expenses with groups. Know who owes what.",
    summary:
      "Create a group for a trip, home or event, add shared expenses, and Hisaab works out balances and the simplest way to settle up.",
    stats: [
      { value: "Groups", label: "Trips, homes, events" },
      { value: "₹", label: "INR-first" },
      { value: "Auto", label: "Balance calculation" },
      { value: "Dark", label: "Native dark UI" },
    ],
    features: [
      { title: "Groups", body: "Create groups with an emoji and description for every trip, flat or event." },
      { title: "Shared expenses", body: "Add who paid and who shared, and every balance updates instantly." },
      { title: "Who owes what", body: "Clear per-person balances so nobody has to do the maths." },
      { title: "Settle up", body: "A simplified settlement list that minimises the number of payments." },
      { title: "Fast & fluid", body: "Lightweight React + Vite app with smooth motion and toasts." },
      { title: "Made for phones", body: "Responsive dark interface that feels at home on mobile." },
    ],
    stack: ["React", "TypeScript", "Vite", "React Router", "Lucide"],
    keywords: ["expense splitting app", "split bills with friends", "group expense tracker India", "hisaab app"],
    theme: {
      bg: "#0D0D0F", surface: "#1C1C20", line: "rgba(255,255,255,0.08)", text: "#F0F0F5", muted: "#8888A0",
      accent: "#7C6AF7", accentSoft: "rgba(124,106,247,0.14)", onAccent: "#FFFFFF",
      font: "var(--font-jakarta), system-ui, sans-serif", dark: true,
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function themeVars(t: ProjectTheme): CSSProperties {
  return {
    "--p-bg": t.bg,
    "--p-surface": t.surface,
    "--p-line": t.line,
    "--p-text": t.text,
    "--p-muted": t.muted,
    "--p-accent": t.accent,
    "--p-accent-soft": t.accentSoft,
    "--p-on-accent": t.onAccent,
    "--p-font": t.font,
    colorScheme: t.dark ? "dark" : "light",
  } as CSSProperties;
}
