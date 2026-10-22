import Link from "next/link";
import Image from "next/image";
import { screens, themeVars, type Project } from "@/lib/projects";

/** A card painted in the project's own colours, linking to its themed case-study page. */
export default function ProjectCard({ project }: { project: Project }) {
  const [s1, s2] = project.stats;
  const shot = screens[project.slug]?.find((s) => !s.mobile);
  return (
    <Link href={`/projects/${project.slug}`} className="proj-card" style={themeVars(project.theme)}>
      <div className="proj-banner" aria-hidden="true">
        <span className="pb-orb pb-orb-1"></span>
        <span className="pb-orb pb-orb-2"></span>
        <div className="proj-preview">
          <div className="pp-bar">
            <i></i><i></i><i></i>
            <span className="pp-title">{project.name}</span>
          </div>
          {shot ? (
            <Image className="pp-shot" src={shot.src} alt="" width={shot.width} height={shot.height} sizes="(max-width: 640px) 90vw, 380px" />
          ) : (
          <div className="pp-body">
            <div className="pp-side">
              <span className="on"></span>
              <span></span>
              <span></span>
            </div>
            <div className="pp-main">
              <div className="pp-kpis">
                <div className="pp-kpi">
                  <b>{s1.value}</b>
                  <small>{s1.label}</small>
                </div>
                <div className="pp-kpi">
                  <b className="c2">{s2.value}</b>
                  <small>{s2.label}</small>
                </div>
              </div>
              <div className="pp-chips">
                <span className="chip-a">{project.features[0].title}</span>
                <span className="chip-b">{project.features[1].title}</span>
              </div>
              <div className="pp-bars">
                <span style={{ height: "45%" }}></span>
                <span className="c2" style={{ height: "70%" }}></span>
                <span style={{ height: "55%" }}></span>
                <span className="c3" style={{ height: "90%" }}></span>
                <span style={{ height: "65%" }}></span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      <div className="proj-content">
        <div className="proj-card-top">
          <span className="proj-chip">{project.category}</span>
          <span className="proj-platform">{project.platform}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>
        <div className="proj-stack">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="proj-link">
          View case study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
