import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We start with your goals, users, and constraints, not a template. A short discovery call tells us what actually needs building.",
  },
  {
    n: "02",
    title: "Design & plan",
    body: "Wireframes, architecture, and a sprint plan you can see before a single line of code is written.",
  },
  {
    n: "03",
    title: "Build & test",
    body: "Development in short, visible sprints, with staging environments so you can check progress at every step, not just at the end.",
  },
  {
    n: "04",
    title: "Launch & support",
    body: "We deploy, monitor, and stay on for maintenance, fixes, and the next feature, on a retainer or as-needed.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">HOW WE WORK</div>
          <h2>From idea to production, in four steps</h2>
          <p>
            No black-box handoffs. You see the plan, the build, and the staging environment before
            anything ships.
          </p>
        </Reveal>
        <div className="process-grid">
          {steps.map((step) => (
            <Reveal key={step.n} className="process-step">
              <span className="process-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
