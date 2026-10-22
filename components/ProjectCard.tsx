import Link from "next/link";
import { themeVars, type Project } from "@/lib/projects";

/** A card painted in the project's own colours, linking to its themed case-study page. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="proj-card" style={themeVars(project.theme)}>
      <div className="proj-card-top">
        <span className="proj-chip">{project.category}</span>
        <span className="proj-platform">{project.platform}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      <div className="proj-preview" aria-hidden="true">
        <div className="pp-bar">
          <i></i><i></i><i></i>
        </div>
        <div className="pp-body">
          <div className="pp-stat">
            <b>{project.stats[0].value}</b>
            <span>{project.stats[0].label}</span>
          </div>
          <div className="pp-lines">
            <span style={{ width: "80%" }}></span>
            <span style={{ width: "55%" }}></span>
            <span className="acc" style={{ width: "35%" }}></span>
          </div>
        </div>
      </div>
      <span className="proj-link">
        View case study
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
