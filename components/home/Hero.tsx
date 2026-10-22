import Typewriter from "@/components/Typewriter";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const words = ["We", "turn", "under-built", "ideas", "into", "shipped", "software."];

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-grid">
        <div>
          <div className="eyebrow hero-in" style={{ animationDelay: "0ms" }}>
            <span className="pulse-dot" aria-hidden="true"></span>
            SOFTWARE STUDIO — KHARADI, PUNE
          </div>
          <h1 aria-label="We turn under-built ideas into shipped software.">
            {words.map((w, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`word${w === "under-built" ? " hl" : ""}`}
                style={{ animationDelay: `${120 + i * 70}ms` }}
              >
                {w}{" "}
              </span>
            ))}
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "650ms" }}>
            TechyVerve designs and builds web, mobile, and backend systems for teams who need
            something working, not just something wireframed.
          </p>
          <div className="hero-cta hero-in" style={{ animationDelay: "780ms" }}>
            <a href="#projects" className="btn">
              View our work
            </a>
            <a href="#contact-form" className="btn btn-ghost">
              Contact us
            </a>
          </div>
          <div className="hero-stats hero-in" style={{ animationDelay: "900ms" }}>
            <div className="hero-stat">
              <b>{projects.length}+ products</b>
              <span>Shipped & in use</span>
            </div>
            <div className="hero-stat">
              <b>Web · Mobile</b>
              <span>Full delivery, one team</span>
            </div>
            <div className="hero-stat">
              <b>Agile</b>
              <span>Sprint-based delivery</span>
            </div>
          </div>
        </div>

        <Reveal className="editor float">
          <div className="editor-bar">
            <div className="dot" style={{ background: "#FF5F57" }}></div>
            <div className="dot" style={{ background: "#FEBC2E" }}></div>
            <div className="dot" style={{ background: "#28C840" }}></div>
            <div className="editor-tabs">
              <div className="tab active">build.ts</div>
              <div className="tab">ship.sh</div>
            </div>
          </div>
          <Typewriter />
        </Reveal>
      </div>
    </header>
  );
}
