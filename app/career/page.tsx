import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { roles } from "@/lib/roles";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers — Developer Jobs in Kharadi, Pune",
  description:
    "Software developer jobs at TechyVerve, Kharadi, Pune: React frontend, Node.js backend and React Native mobile roles. Apply online in two minutes.",
  path: "/career",
  socialDescription: "Frontend, backend and mobile developer jobs at a software studio in Kharadi, Pune.",
});

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
    description:
      `<p>${role.summary}</p>` +
      `<p>TechyVerve is a software studio in Kharadi, Pune. We are a small team where you ship features end to end.</p>` +
      `<p><strong>What you will do</strong></p><ul>${role.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
    datePosted: "2026-10-01",
    validThrough: "2027-03-31",
    employmentType: "FULL_TIME",
    // the application form is on this page, so candidates apply directly
    directApply: true,
    url: "https://www.techyverve.in/career",
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
        addressLocality: "Pune",
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
          <h2 className="sr-only">Open roles</h2>
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

          <h2 className="sr-only">Why work at TechyVerve</h2>
          <div className="perks">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} className="perk" delay={i * 80}>
                <h3>{perk.title}</h3>
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
