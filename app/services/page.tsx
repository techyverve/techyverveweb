import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import { services } from "@/lib/services";
import { SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Software Development Services in Pune",
  description:
    "Web, mobile, ERP and billing, backend, AWS cloud, database, UI/UX, dedicated teams and consulting from a software studio in Kharadi, Pune.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Software development services in Pune",
      url: `${SITE_URL}/services`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: `${SITE_URL}/services/${s.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar current="services" />
      <header className="hero hero-simple">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner">
          <nav className="crumbs crumbs-site hero-in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <div className="eyebrow hero-in" style={{ animationDelay: "80ms" }}>
            SERVICES — KHARADI, PUNE
          </div>
          <h1 className="hero-in" style={{ animationDelay: "140ms" }}>
            Software development services in Pune
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "220ms" }}>
            Web and mobile apps, ERP and billing software, backend and cloud, database design, UI/UX,
            dedicated developers and consulting — one engineering-led team from first wireframe to
            production.
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
      <Services />
      <Process />
      <Footer variant="full" />
    </>
  );
}
