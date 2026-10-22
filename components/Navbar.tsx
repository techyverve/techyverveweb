"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

interface NavbarProps {
  /** Which page this navbar is rendered on, so the right link can be highlighted */
  current?: "home" | "career" | "projects";
}

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/#team", label: "Team" },
  { href: "/career", label: "Career", key: "career" },
];

export default function Navbar({ current }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`${scrolled ? "scrolled" : ""}${open ? " open" : ""}`} aria-label="Main">
      <div className="nav-inner">
        <Link href="/" aria-label="TechyVerve home" className="nav-logo" onClick={() => setOpen(false)}>
          <Logo height={36} withWordmark />
        </Link>

        <div className="nav-links" id="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.key && current === l.key ? "current" : undefined}
              aria-current={l.key && current === l.key ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact-form" className="btn nav-cta-mobile" onClick={() => setOpen(false)}>
            Contact us
          </Link>
        </div>

        <Link href="/#contact-form" className="btn btn-sm nav-cta">
          Contact us
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
