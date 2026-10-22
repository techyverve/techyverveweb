import Link from "next/link";
import Reveal from "@/components/Reveal";

const stack = [
  "React", "Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Supabase",
  "MongoDB", "AWS", "Docker", "Tailwind", "Expo", "Cloudflare", "Vercel",
];

const industries = [
  { emoji: "🍽️", title: "Restaurants & hotels", body: "Table billing, KOT, POS and GST invoices.", href: "/projects/hotel-billing" },
  { emoji: "👥", title: "HR & payroll", body: "Attendance, payslips, PF, ESI and TDS.", href: "/projects/payroll" },
  { emoji: "🚜", title: "Construction & fleets", body: "Per-vehicle billing, fuel and profit.", href: "/projects/earthmovers-billing" },
  { emoji: "🏦", title: "Banks & credit societies", body: "Field collection apps with SMS receipts.", href: "/projects/pigmy-pro" },
  { emoji: "🛍️", title: "Retail & distribution", body: "Inventory, billing and order management.", href: "/services/erp-billing-software" },
  { emoji: "🚀", title: "Startups & SaaS", body: "MVPs to multi-tenant platforms.", href: "/services/web-development" },
];

export default function Industries() {
  return (
    <>
      <div className="marquee" aria-label="Technologies we use">
        <div className="marquee-track">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} aria-hidden={i >= stack.length}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <section id="industries">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">INDUSTRIES WE SERVE</div>
            <h2>Software for how Indian businesses actually work</h2>
            <p>We&apos;ve shipped products across these industries — and the patterns carry over to yours.</p>
          </Reveal>
          <div className="ind-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} className="ind-card" delay={(i % 3) * 80}>
                <span className="ind-emoji" aria-hidden="true">
                  {ind.emoji}
                </span>
                <h3>
                  <Link href={ind.href} className="card-link">
                    {ind.title}
                  </Link>
                </h3>
                <p>{ind.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
