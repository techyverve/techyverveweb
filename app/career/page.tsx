import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { roles } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open software developer roles at TechyVerve, a software studio in Kharadi, Pune. Frontend, backend, and mobile positions, on-site and remote.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at TechyVerve",
    description:
      "Open software developer roles at TechyVerve, a software studio in Kharadi, Pune.",
    url: "https://techyverve.in/career",
  },
};

const perks = [
  {
    title: "Small team, real ownership",
    body: "You'll ship features end to end, not one slice of a much larger pipeline.",
  },
  {
    title: "Modern stack",
    body: "React, Node, and cloud infrastructure, kept current instead of patched forever.",
  },
  {
    title: "Agile by default",
    body: "Short cycles, clear priorities, and fewer meetings than you're used to.",
  },
];

export default function CareerPage() {
  return (
    <>
      <Navbar current="career" />

      <header className="hero hero-simple">
        <div className="hero-inner reveal in">
          <div className="eyebrow">JOIN THE TEAM</div>
          <h1>
            Build software with <span className="hl">us</span>, not just for a client.
          </h1>
          <p className="lede">
            We&apos;re a small studio in Kharadi, Pune, hiring people who&apos;d rather ship
            something real than sit in another planning meeting.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="role-list">
            {roles.map((role) => (
              <Reveal key={role.title} className="role">
                <div className="role-left">
                  <h3>{role.title}</h3>
                  <div className="role-meta">
                    <span className="role-tag">{role.stackTag}</span>
                    <span className="role-tag loc">{role.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:hr@techyverve.in?subject=Application: ${role.title}`}
                  className="btn"
                >
                  Apply
                </a>
              </Reveal>
            ))}
          </div>

          <div className="perks">
            {perks.map((perk) => (
              <Reveal key={perk.title} as="div" className="perk">
                <h4>{perk.title}</h4>
                <p>{perk.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
