import Reveal from "@/components/Reveal";

const team = [
  {
    initial: "R",
    bg: "var(--amber-bg)",
    color: "var(--amber)",
    name: "Rutik",
    tag: "founder.lead",
    body: "Leads architecture and client delivery, keeping every build on scope and on schedule.",
  },
  {
    initial: "A",
    bg: "var(--teal-bg)",
    color: "var(--teal)",
    name: "Sourabh",
    tag: "frontend.dev",
    body: "Builds the interfaces, from first component to the pixel-level details that make a product feel finished.",
  },
  {
    initial: "S",
    bg: "var(--amber-bg)",
    color: "var(--amber)",
    name: "Shree",
    tag: "backend.dev",
    body: "Owns APIs, infrastructure, and everything that has to keep working after launch day.",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-alt viewport-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">THE PEOPLE BEHIND IT</div>
          <h2>Meet our team</h2>
          <p>
            Three people, one repo. Small enough to move fast, senior enough to trust with the
            whole build.
          </p>
        </Reveal>
        <div className="team-grid">
          {team.map((member) => (
            <Reveal key={member.name} className="team-card">
              <div
                className="team-avatar"
                style={{ background: member.bg, color: member.color }}
              >
                {member.initial}
              </div>
              <h3>{member.name}</h3>
              <span className="svc-tag">{member.tag}</span>
              <p>{member.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
