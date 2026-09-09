import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact-form" className="section-alt viewport-section">
      <div className="wrap">
        <Reveal className="section-head" style={{ margin: "0 auto 40px", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            GET IN TOUCH
          </div>
          <h2>Let&apos;s build something</h2>
          <p>Tell us what you&apos;re working on and we&apos;ll get back to you within a day.</p>
          <div className="contact-direct">
            <a href="mailto:hr@techyverve.in">hr@techyverve.in</a>
            <a href="tel:+917276156939">+91 72761 56939</a>
            <a href="tel:+919146053881">+91 91460 53881</a>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
