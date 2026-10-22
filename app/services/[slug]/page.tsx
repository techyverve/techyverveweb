import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { getService, services } from "@/lib/services";
import { getProject } from "@/lib/projects";

const SITE = "https://www.techyverve.in";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.seoTitle,
    description: svc.intro.slice(0, 158),
    keywords: svc.keywords,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: `${svc.seoTitle} | TechyVerve`,
      description: svc.body,
      url: `${SITE}/services/${svc.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const related = svc.projects.map(getProject).filter((p) => p !== undefined);
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 4);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: svc.title,
      serviceType: svc.title,
      description: svc.intro,
      url: `${SITE}/services/${svc.slug}`,
      areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "Country", name: "India" }],
      provider: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: svc.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/#services` },
        { "@type": "ListItem", position: 3, name: svc.title, item: `${SITE}/services/${svc.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <header className="hero hero-simple">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <nav className="crumbs crumbs-site hero-in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{svc.title}</span>
          </nav>
          <div className="eyebrow hero-in" style={{ animationDelay: "80ms" }}>
            {svc.tag.toUpperCase()}
          </div>
          <h1 className="hero-in" style={{ animationDelay: "140ms" }}>
            {svc.seoTitle}
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "220ms" }}>
            {svc.intro}
          </p>
          <div className="hero-cta hero-in" style={{ animationDelay: "300ms" }}>
            <Link href="/#contact-form" className="btn btn-solid">
              Get a free quote
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <h2>What we deliver</h2>
          </Reveal>
          <div className="deliver-grid">
            {svc.deliverables.map((d, i) => (
              <Reveal key={d} className="deliver-item" delay={(i % 3) * 70}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-alt">
          <div className="wrap">
            <Reveal className="section-head">
              <div className="eyebrow">CASE STUDIES</div>
              <h2>Built by us</h2>
            </Reveal>
            <div className="proj-grid">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2>Questions about {svc.title.toLowerCase()}</h2>
          </Reveal>
          <div className="faq-list">
            {svc.faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <Reveal className="other-services">
            <h3>Other services</h3>
            <div className="stack-badges">
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className="tech-badge">
                  {o.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer variant="full" />
    </>
  );
}
