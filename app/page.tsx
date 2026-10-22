import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import BuildCta from "@/components/home/BuildCta";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechyVerve",
    url: "https://techyverve.in",
    logo: "https://techyverve.in/logo.png",
    image: "https://techyverve.in/logo.png",
    description:
      "Software development company in Kharadi, Pune building web apps, mobile apps, ERP software, database systems, and AWS cloud architecture.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kharadi, Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: "hr@techyverve.in",
    telephone: ["+91-72761-56939", "+91-91460-53881"],
    areaServed: "IN",
    sameAs: [],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar current="home" />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Team />
      <BuildCta />
      <FAQ />
      <Contact />
      <Footer variant="full" />
    </>
  );
}
