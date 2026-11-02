import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Industries from "@/components/home/Industries";
import { services } from "@/lib/services";
import Team, { founders } from "@/components/home/Team";
import BuildCta from "@/components/home/BuildCta";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { OPENING_HOURS, SITE_URL, SOCIAL_PROFILES, STREET_ADDRESS } from "@/lib/site";

// Title, description and social tags come from the root layout; the homepage only adds its canonical.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://www.techyverve.in/#organization",
    name: "TechyVerve",
    alternateName: "Techyverve Software Studio",
    founder: founders.map((f) => ({ "@type": "Person", name: f.name, jobTitle: `Co-founder, ${f.focus}` })),
    priceRange: "₹₹",
    geo: { "@type": "GeoCoordinates", latitude: 18.5515, longitude: 73.9348 },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: `https://www.techyverve.in/services/${s.slug}` },
      })),
    },
    url: "https://www.techyverve.in",
    logo: "https://www.techyverve.in/logo.png",
    image: "https://www.techyverve.in/logo.png",
    description:
      "Software development company in Kharadi, Pune building web apps, mobile apps, ERP software, database systems, and AWS cloud architecture.",
    address: {
      "@type": "PostalAddress",
      // Kharadi is a neighbourhood of Pune; the locality field should be the city
      ...(STREET_ADDRESS ? { streetAddress: STREET_ADDRESS } : {}),
      addressLocality: "Pune",
      postalCode: "411014",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: "hr@techyverve.in",
    telephone: ["+91-72761-56939", "+91-91460-53881"],
    areaServed: [{ "@type": "City", name: "Pune" }, { "@type": "Country", name: "India" }],
    // Only emitted once filled in lib/site.ts (empty values add nothing)
    ...(OPENING_HOURS.length > 0
      ? {
          openingHoursSpecification: OPENING_HOURS.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-72761-56939",
        contactType: "sales",
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-91460-53881",
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "TechyVerve",
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
      />
      <Navbar current="home" />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Industries />
      <Process />
      <Team />
      <BuildCta />
      <FAQ />
      <Contact />
      <Footer variant="full" />
    </>
  );
}
