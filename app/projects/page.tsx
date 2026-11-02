import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Projects — Billing, Payroll, POS & Mobile Apps",
  description:
    "Case studies from TechyVerve, Pune: restaurant POS, multi-tenant payroll SaaS, earthmover billing, a pigmy collection app and the Hisaab expense splitter.",
  path: "/projects",
  socialDescription: "Billing, payroll, POS and mobile apps built by TechyVerve in Pune.",
});

export default function ProjectsPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.techyverve.in/projects/${p.slug}`,
        name: p.name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.techyverve.in/" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.techyverve.in/projects" },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar current="projects" />
      <header className="hero hero-simple">
        <div className="hero-inner">
          <nav className="crumbs crumbs-site hero-in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Projects</span>
          </nav>
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
          <h2 className="sr-only">Case studies</h2>
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
