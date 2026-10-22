import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Billing, Payroll, POS & Mobile Apps",
  description:
    "Software built by TechyVerve, Pune: restaurant billing POS, multi-tenant payroll SaaS, earthmovers billing, a pigmy deposit collection app, and the Hisaab expense splitter.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | TechyVerve",
    description: "Billing, payroll, POS and mobile apps built by TechyVerve in Pune.",
    url: "https://www.techyverve.in/projects",
  },
};

export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.techyverve.in/projects/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar current="projects" />
      <header className="hero hero-simple">
        <div className="hero-inner">
          <div className="eyebrow hero-in">OUR WORK</div>
          <h1 className="hero-in" style={{ animationDelay: "100ms" }}>
            Products we&apos;ve <span className="hl">shipped</span>
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "200ms" }}>
            Each case study is shown in the product&apos;s own design language — open one to see it
            as its users do.
          </p>
        </div>
      </header>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="proj-grid">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer variant="full" />
    </>
  );
}
