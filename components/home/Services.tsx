import Link from "next/link";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import { services } from "@/lib/services";

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
            <Reveal key={svc.slug} delay={(i % 3) * 80} className={`svc-card spot ${svc.size}`}>
              <div className="svc-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={svc.icon} />
                </svg>
              </div>
              <span className="svc-tag">{svc.tag}</span>
              <h3>
                <Link href={`/services/${svc.slug}`} className="card-link">
                  {svc.title}
                </Link>
              </h3>
              <p>{svc.body}</p>
              <ul className="svc-points">
                {svc.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <span className="svc-more" aria-hidden="true">
                Learn more →
              </span>
            </Reveal>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
