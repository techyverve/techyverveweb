import Link from "next/link";
import Logo from "@/components/Logo";

interface NavbarProps {
  /** Which page this navbar is rendered on, so the right link can be highlighted */
  current?: "home" | "career";
}

export default function Navbar({ current }: NavbarProps) {
  return (
    <nav>
      <div className="nav-inner">
        <Link
          href="/"
          aria-label="TechyVerve home"
          className="nav-logo"
        >
          <Logo height={42} />
        </Link>

        <div className="nav-links">
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>

          {current !== "career" && (
            <Link href="/#build">Components</Link>
          )}

          <Link href="/#team">Team</Link>

          <Link
            href="/career"
            className={current === "career" ? "current" : undefined}
          >
            Career
          </Link>
        </div>

        <Link href="/#contact-form" className="nav-cta">
          Contact us
        </Link>
      </div>
    </nav>
  );
}