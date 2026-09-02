import Reveal from "@/components/Reveal";

const services = [
  {
    tag: "web.dev",
    title: "Web development",
    body: "Custom websites and web applications built with modern frameworks, tuned for performance and easy to maintain.",
  },
  {
    tag: "mobile.native",
    title: "Mobile development",
    body: "Native and cross-platform apps for iOS and Android, sharing a single codebase where it makes sense.",
  },
  {
    tag: "backend.api",
    title: "Backend services",
    body: "Scalable server-side systems and APIs, designed to hold up under real traffic, not just demos.",
  },
  {
    tag: "db.design",
    title: "Database design",
    body: "Schema design, indexing, and migrations for SQL and NoSQL databases that stay fast as your data grows.",
  },
  {
    tag: "cloud.aws",
    title: "Cloud & AWS architecture",
    body: "EC2, S3, RDS, Lambda, and VPC setups designed for the traffic you actually have, with room to scale.",
  },
  {
    tag: "team.staffing",
    title: "Team as a service",
    body: "Embed one of our engineers, or a full squad, directly into your existing team on a monthly retainer.",
  },
  {
    tag: "erp.systems",
    title: "ERP software",
    body: "Custom ERP systems for inventory, HR, and operations, built around how your business actually runs.",
  },
  {
    tag: "uiux.design",
    title: "UI/UX design",
    body: "Interfaces designed around real user flows, from wireframes to a shippable, developer-ready design system.",
  },
  {
    tag: "consulting",
    title: "Consulting",
    body: "Architecture reviews, tech stack audits, and roadmap planning for teams deciding what to build next.",
  },
];

export default function Services() {
  return (
    <section id="services" className="viewport-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">WHAT WE BUILD</div>
          <h2>Services, done differently</h2>
          <p>
            From web applications to mobile and backend systems, one team carries the project end
            to end.
          </p>
        </Reveal>
        <div className="svc-grid">
          {services.map((svc) => (
            <Reveal key={svc.tag} className="svc-card">
              <span className="svc-tag">{svc.tag}</span>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
