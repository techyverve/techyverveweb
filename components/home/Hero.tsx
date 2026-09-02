import Typewriter from "@/components/Typewriter";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">SOFTWARE STUDIO — KHARADI, PUNE</div>
          <h1>
            We turn <span className="hl">under-built</span> ideas
            <br />
            into shipped software.
          </h1>
          <p className="lede">
            TechyVerve designs and builds web, mobile, and backend systems for teams who need
            something working, not just something wireframed.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn">
              View our work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact us
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>Web · Mobile · Backend</b>
              <span>Full delivery, one team</span>
            </div>
            <div className="hero-stat">
              <b>Agile</b>
              <span>Sprint-based delivery</span>
            </div>
            <div className="hero-stat">
              <b>DevOps</b>
              <span>Built-in, not bolted on</span>
            </div>
          </div>
        </div>

        <Reveal className="editor">
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
