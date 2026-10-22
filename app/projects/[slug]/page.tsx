import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getProject, projects, themeVars } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — ${project.category}`;
  return {
    title,
    description: `${project.tagline} ${project.summary}`.slice(0, 160),
    keywords: project.keywords,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${title} | TechyVerve`,
      description: project.tagline,
      url: `https://www.techyverve.in/projects/${project.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: project.platform,
      description: project.summary,
      creator: { "@type": "Organization", name: "TechyVerve", url: "https://www.techyverve.in" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.techyverve.in/" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.techyverve.in/projects" },
        { "@type": "ListItem", position: 3, name: project.name, item: `https://www.techyverve.in/projects/${project.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar current="projects" />
      <main className="pt" style={themeVars(project.theme)}>
        <header className="pt-hero">
          <span className="pt-orb pt-orb-1" aria-hidden="true"></span>
          <span className="pt-orb pt-orb-2" aria-hidden="true"></span>
          <span className="pt-orb pt-orb-3" aria-hidden="true"></span>
          <div className="wrap">
            <nav className="crumbs hero-in" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/projects">Projects</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.name}</span>
            </nav>
            <span className="pt-chip hero-in" style={{ animationDelay: "80ms" }}>
              {project.category} · {project.platform}
            </span>
            <h1 className="hero-in" style={{ animationDelay: "160ms" }}>{project.name}</h1>
            <p className="pt-tagline hero-in" style={{ animationDelay: "240ms" }}>{project.tagline}</p>
            <p className="pt-summary hero-in" style={{ animationDelay: "320ms" }}>{project.summary}</p>
            <div className="hero-cta hero-in" style={{ animationDelay: "400ms" }}>
              <Link href="/#contact-form" className="pt-btn">Build something like this</Link>
              <Link href="/projects" className="pt-btn pt-btn-ghost">All projects</Link>
            </div>
          </div>
        </header>

        <section className="pt-section">
          <div className="wrap">
            <div className="pt-stats">
              {project.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 70} className={`pt-stat tone-${i % 3}`}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-section">
          <div className="wrap">
            <Reveal>
              <h2 className="pt-h2">Key features</h2>
            </Reveal>
            <div className="pt-features">
              {project.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 80} className={`pt-feature tone-${i % 3}`}>
                  <span className="pt-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-section">
          <div className="wrap">
            <Reveal className="pt-stack">
              <h2 className="pt-h2">Built with</h2>
              <div className="pt-tags">
                {project.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pt-section pt-last">
          <div className="wrap">
            <Reveal>
              <Link href={`/projects/${next.slug}`} className="pt-next">
                <span>Next project</span>
                <b>{next.name} →</b>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer variant="simple" />
    </>
  );
}
