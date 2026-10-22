import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { roles } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Careers — Software Developer Jobs in Kharadi, Pune",
  description:
    "Open software developer jobs at TechyVerve, Kharadi, Pune: frontend (React), backend (Node.js) and mobile (React Native) roles plus internships. Apply online in two minutes.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at TechyVerve, Pune",
    description: "Frontend, backend and mobile developer jobs at a software studio in Kharadi, Pune.",
    url: "https://www.techyverve.in/career",
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
  // JobPosting structured data makes roles eligible for Google Jobs listings
  const jobSchema = roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `<p>${role.title} at TechyVerve, a software studio in Kharadi, Pune. Work on web, mobile and ERP products for real businesses.</p>`,
    datePosted: "2026-10-01",
    validThrough: "2027-03-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "TechyVerve",
      sameAs: "https://www.techyverve.in",
      logo: "https://www.techyverve.in/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kharadi, Pune",
        addressRegion: "Maharashtra",
        postalCode: "411014",
        addressCountry: "IN",
      },
    },
    ...(role.location.toLowerCase().includes("remote")
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } }
      : {}),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
      <Navbar current="career" />

      <header className="hero hero-simple">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="eyebrow hero-in">JOIN THE TEAM</div>
          <h1 className="hero-in" style={{ animationDelay: "100ms" }}>
            Build software with <span className="hl">us</span>, not just for a client.
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "200ms" }}>
            We&apos;re a studio in Kharadi, Pune, hiring people who&apos;d rather ship something
            real than sit in another planning meeting.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="role-list">
            {roles.map((role, i) => (
              <Reveal key={role.title} className="role" delay={i * 80}>
                <div className="role-left">
                  <h3>{role.title}</h3>
                  <div className="role-meta">
                    <span className="role-tag">{role.stackTag}</span>
                    <span className="role-tag loc">{role.location}</span>
                  </div>
                </div>
                <a href="#apply" className="btn">
                  Apply
                </a>
              </Reveal>
            ))}
          </div>

          <div className="perks">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} className="perk" delay={i * 80}>
                <h4>{perk.title}</h4>
                <p>{perk.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <Reveal className="section-head" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              APPLY
            </div>
            <h2>Send us your application</h2>
            <p>
              Takes two minutes. Share a resume or portfolio link and we&apos;ll reply within a few
              days. Prefer email? Write to <a href="mailto:hr@techyverve.in">hr@techyverve.in</a>.
            </p>
          </Reveal>
          <Reveal>
            <ContactForm type="application" roles={roles.map((r) => r.title)} />
          </Reveal>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
