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
          <h4>SERVICES</h4>
          {services.slice(0, 7).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div className="foot-col">
          <h4>COMPANY</h4>
          <Link href="/#about">About us</Link>
          <Link href="/#team">Our team</Link>
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
