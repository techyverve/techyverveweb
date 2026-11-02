import Link from "next/link";
import Logo from "@/components/Logo";
import { services } from "@/lib/services";

interface FooterProps {
  variant?: "full" | "simple";
}

export default function Footer({ variant = "full" }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer>
        <div className="foot-bottom foot-bottom-simple">
          <span>© {new Date().getFullYear()} TechyVerve · Kharadi, Pune</span>
          {/* Project and career pages used to end in a footer with no site links at all */}
          <div className="foot-contact-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/career">Careers</Link>
          </div>
          <div className="foot-contact-links">
            <a href="mailto:hr@techyverve.in">hr@techyverve.in</a>
            <a href="tel:+917276156939">+91 72761 56939</a>
            <a href="tel:+919146053881">+91 91460 53881</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="footer">
      <div className="foot-grid">
        <div>
          <div className="logo" style={{ marginBottom: 14 }}>
            <Logo height={34} withWordmark />
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 280 }}>
            Software solutions and websites built for businesses that need to move fast without
            breaking things.
          </p>
        </div>
        <div className="foot-col">
          <h3>SERVICES</h3>
          <Link href="/services">All services</Link>
          {/* every service, so each one is reachable from every full-footer page */}
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div className="foot-col">
          <h3>COMPANY</h3>
          <Link href="/#about">About us</Link>
          <Link href="/#team">Founders</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/career">Careers</Link>
          <a href="mailto:hr@techyverve.in">Contact</a>
          <a href="tel:+917276156939">+91 72761 56939</a>
          <a href="tel:+919146053881">+91 91460 53881</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} TechyVerve · Kharadi, Pune</span>
        <span>hr@techyverve.in</span>
      </div>
    </footer>
  );
}
