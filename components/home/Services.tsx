import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

// Icon paths are 24×24 strokes, Lucide-style
const services = [
  {
    tag: "web.dev",
    title: "Web development",
    body: "Custom websites and web applications on modern frameworks, tuned for Core Web Vitals and easy to maintain.",
    points: ["Next.js & React", "SEO-ready", "Admin panels"],
    icon: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01",
    size: "wide",
  },
  {
    tag: "mobile.native",
    title: "Mobile apps",
    body: "Native-feeling iOS and Android apps from one React Native codebase.",
    points: ["Expo", "Offline-first"],
    icon: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",
    size: "tall",
  },
  {
    tag: "erp.systems",
    title: "ERP & billing software",
    body: "Billing, payroll, inventory and operations software built around how your business actually runs.",
    points: ["GST billing", "Payroll", "Inventory"],
    icon: "M4 4h16v16H4zM4 10h16M10 10v10",
    size: "",
  },
  {
    tag: "backend.api",
    title: "Backend & APIs",
    body: "Scalable server-side systems that hold up under real traffic, not just demos.",
    points: ["Node.js", "REST", "Auth"],
    icon: "M4 6h16M4 12h16M4 18h16M8 6v.01M8 12v.01M8 18v.01",
    size: "",
  },
  {
    tag: "cloud.aws",
    title: "Cloud & AWS",
    body: "EC2, S3, RDS, Lambda and VPC setups sized for the traffic you have, with room to scale.",
    points: ["AWS", "Supabase", "CI/CD"],
    icon: "M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z",
    size: "",
  },
  {
    tag: "db.design",
    title: "Database design",
    body: "Schemas, indexing and migrations for SQL and NoSQL that stay fast as data grows.",
    points: ["PostgreSQL", "MongoDB"],
    icon: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
    size: "",
  },
  {
    tag: "uiux.design",
    title: "UI/UX design",
    body: "Interfaces designed around real user flows, from wireframe to developer-ready design system.",
    points: ["Figma", "Design systems", "HIG"],
    icon: "M12 2a10 10 0 1 0 0 20c1 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a6 6 0 0 0 6-6C22 6 17.5 2 12 2zM7.5 11h.01M10.5 7h.01M15 7.5h.01",
    size: "wide",
  },
  {
    tag: "team.staffing",
    title: "Team as a service",
    body: "Embed one engineer or a full squad into your team on a monthly retainer.",
    points: ["Monthly", "Your tools"],
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
    size: "",
  },
  {
    tag: "consulting",
    title: "Consulting",
    body: "Architecture reviews, stack audits and roadmap planning for teams deciding what to build next.",
    points: ["Audits", "Roadmaps"],
    icon: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
    size: "",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">WHAT WE BUILD</div>
          <h2>Everything your product needs, under one roof</h2>
          <p>
            From the first wireframe to the cloud it runs on, one team carries your project end to
            end.
          </p>
        </Reveal>
        <Spotlight className="bento">
          {services.map((svc, i) => (
            <Reveal key={svc.tag} delay={(i % 3) * 80} className={`svc-card spot ${svc.size}`}>
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={svc.icon} />
                </svg>
              </div>
              <span className="svc-tag">{svc.tag}</span>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
              <ul className="svc-points">
                {svc.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
