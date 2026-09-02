import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BuildCta() {
  return (
    <section id="build" className="viewport-section">
      <div className="wrap">
        <Reveal className="build-inner">
          <div className="badge-pill i1">
            <span>Not just websites</span>
            <a href="#services">
              See how{" "}
              <svg
                className="arrow-icon"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <h2 className="build-title i2">
            We build components,
            <br />
            not just websites
          </h2>
          <p className="build-lede i3">
            Every project leaves behind a reusable library, buttons, cards, forms, layouts, so the
            next feature ships in days, not weeks.
          </p>
          <div className="hero-cta i4" style={{ justifyContent: "center" }}>
            <a href="#contact" className="btn">
              Start a project
            </a>
            <Link href="/career" className="btn btn-glow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.69-1.28-1.69-1.05-.7.08-.69.08-.69 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
              See open roles
            </Link>
          </div>

          <div className="mockup-wrap i5">
            <div className="glow" aria-hidden="true"></div>
            <div className="mockup-frame">
              <div className="mockup">
                <div className="mockup-screen">
                  <div className="mockup-side">
                    <div className="mockup-side-logo">&lt;/&gt; ui-kit</div>
                    <div className="mockup-side-item active">Buttons</div>
                    <div className="mockup-side-item">Badges</div>
                    <div className="mockup-side-item">Cards</div>
                    <div className="mockup-side-item">Forms</div>
                  </div>
                  <div className="mockup-main">
                    <div>
                      <div className="mockup-label">BUTTONS</div>
                      <div className="mockup-row" style={{ marginTop: 10 }}>
                        <span className="mock-btn mock-btn-solid">Primary</span>
                        <span className="mock-btn mock-btn-outline">Secondary</span>
                        <span className="mock-btn mock-btn-ghost">Ghost</span>
                      </div>
                    </div>
                    <div>
                      <div className="mockup-label">BADGES</div>
                      <div className="mockup-row" style={{ marginTop: 10 }}>
                        <span className="mock-badge mock-badge-teal">In progress</span>
                        <span className="mock-badge mock-badge-amber">New</span>
                        <span className="mock-badge mock-badge-gray">Draft</span>
                      </div>
                    </div>
                    <div className="mockup-card">
                      <div className="mockup-avatar">R</div>
                      <div>
                        <div className="mockup-card-title">rutik merged build.ts</div>
                        <div className="mockup-card-sub">2 min ago · frontend.dev</div>
                      </div>
                      <div className="mockup-toggle">
                        <span></span>
                      </div>
                    </div>
                    <div className="mockup-input">
                      <label>PROJECT NAME</label>
                      <div className="mockup-input-box">techyverve-dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
