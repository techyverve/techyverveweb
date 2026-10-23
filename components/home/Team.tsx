import Reveal from "@/components/Reveal";

export const founders = [
  {
    name: "Rutik Shingote",
    initials: "RS",
    focus: "Architecture & delivery",
    body: "Leads architecture and client delivery, keeping every build on scope and on schedule.",
    skills: ["System design", "Client delivery", "ERP"],
  },
  {
    name: "Abhi Shinde",
    initials: "AS",
    focus: "Frontend & mobile",
    body: "Builds the interfaces, from first component to the pixel-level details that make a product feel finished.",
    skills: ["React", "React Native", "UI/UX"],
  },
  {
    name: "Shree Shingote",
    initials: "SS",
    focus: "Backend & cloud",
    body: "Owns APIs, infrastructure, and everything that has to keep working after launch day.",
    skills: ["Node.js", "Databases", "AWS"],
  },
];

export default function Team() {
  return (
    <section id="team" className="section-alt">
      <div className="wrap">
        <Reveal className="section-head" style={{ margin: "0 auto 56px", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            THE FOUNDERS
          </div>
          <h2>Meet the founders</h2>
          <p>
            The three people behind every TechyVerve product, from the first call to launch day and
            beyond.
          </p>
        </Reveal>
        <div className="founder-grid">
          {founders.map((f, i) => (
            <Reveal key={f.name} className="founder-card" delay={i * 120}>
              <div className="founder-avatar" aria-hidden="true">
                <span>{f.initials}</span>
              </div>
              <span className="founder-role">Co-founder</span>
              <h3>{f.name}</h3>
              <p className="founder-focus">{f.focus}</p>
              <p className="founder-body">{f.body}</p>
              <ul className="founder-skills">
                {f.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
