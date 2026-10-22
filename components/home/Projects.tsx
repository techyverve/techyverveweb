import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className="wrap">
        <Reveal className="section-head section-head-row">
          <div>
            <div className="eyebrow">OUR WORK</div>
            <h2>Products we&apos;ve shipped</h2>
            <p>Real software running real businesses — restaurants, payroll teams, fleets, banks and friends.</p>
          </div>
          <Link href="/projects" className="btn btn-ghost">
            All projects
          </Link>
        </Reveal>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
