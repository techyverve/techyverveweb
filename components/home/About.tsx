import Reveal from "@/components/Reveal";

const highlights = [
  "Senior engineers on every project, no junior hand-offs",
  "Fixed-scope and fixed-price options for well-defined work",
  "Direct access to your developers, not just an account manager",
  "You own the source code and infrastructure, always",
  "Maintenance and support available after launch",
];

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
];

export default function About() {
  return (
    <section id="about" className="section-alt viewport-section">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">ABOUT TECHYVERVE</div>
            <h2 style={{ fontSize: 30, marginBottom: 18 }}>
              An engineering-led software partner, not a freelancer roster
            </h2>
            <p>
              TechyVerve is a software development company based in Kharadi, Pune. We design and
              build web applications, mobile apps, backend systems, and cloud infrastructure for
              businesses that need software they can depend on, not a prototype that breaks under
              real usage.
            </p>
            <p>
              Every engagement runs on a fixed, sprint-based process: discovery, planning, build,
              and launch, with a staging environment you can check at every stage. No black-box
              handoffs, no disappearing after the invoice is paid.
            </p>
          </Reveal>

          <Reveal className="highlight-card">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              WHY TEAMS CHOOSE TECHYVERVE
            </div>
            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="stack-strip">
          <span className="stack-strip-label">OUR STACK</span>
          <div className="stack-badges">
            {stack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
