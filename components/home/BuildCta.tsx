import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BuildCta() {
  return (
    <section id="build">
      <div className="wrap">
        <Reveal className="cta-card">
          <div className="cta-glow" aria-hidden="true"></div>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            NOT JUST WEBSITES
          </div>
          <h2>
            We build components,
            <br />
            not just websites
          </h2>
          <p>
            Every project leaves behind a reusable library — buttons, cards, forms, layouts — so the
            next feature ships in days, not weeks.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <a href="#contact-form" className="btn btn-invert">
              Start a project
            </a>
            <Link href="/career" className="btn btn-ghost-invert">
              See open roles
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
