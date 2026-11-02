import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How TechyVerve, a software studio in Kharadi, Pune, collects, uses and protects the details you send through its contact and job application forms.",
  path: "/privacy",
});

const UPDATED = "3 November 2026";

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar current="home" />
      <header className="hero hero-simple">
        <div className="hero-inner">
          <nav className="crumbs crumbs-site hero-in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="hero-in" style={{ animationDelay: "100ms" }}>
            Privacy Policy
          </h1>
          <p className="lede hero-in" style={{ animationDelay: "200ms" }}>
            What we collect through this website, why, and what you can ask us to do with it.
            Last updated {UPDATED}.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap legal">
          <h2>Who we are</h2>
          <p>
            TechyVerve is a software studio based in Kharadi, Pune, Maharashtra, India. This policy
            covers the website at {SITE_URL.replace("https://", "")}. You can reach us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>What we collect</h2>
          <p>We only collect what you type into our forms:</p>
          <ul>
            <li>
              <strong>Contact form:</strong> your name, email address, phone number (optional) and the
              message you write.
            </li>
            <li>
              <strong>Job application form:</strong> your name, email address, phone number
              (optional), the role you are applying for, a resume or portfolio link (optional) and
              your message.
            </li>
          </ul>
          <p>
            Our servers also process standard technical data, such as your IP address and browser
            type, as part of delivering the site and protecting the forms from spam.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and discuss a possible project.</li>
            <li>To review your job application and contact you about it.</li>
            <li>To keep the website secure and prevent abuse.</li>
          </ul>
          <p>We do not sell your information and we do not use it for unrelated marketing.</p>

          <h2>Who handles it</h2>
          <p>
            Form submissions are delivered to our team by email. To send that email we use an
            email delivery provider (Resend, or the FormSubmit relay as a fallback), which processes
            your submission on our behalf. Our website is hosted on Vercel. These providers may
            process data outside India.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiries for as long as needed to respond and to follow up on a project. Job
            applications are kept while a role is open and for a reasonable period afterwards in case
            a suitable role comes up. You can ask us to delete yours at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to tell you what we hold about you, correct it, or delete it. Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the address you used on the
            form and we will respond within a reasonable time. You may also withdraw consent to us
            contacting you whenever you wish.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This website does not set advertising or analytics cookies. If that changes, we will
            update this page.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We will post any changes on this page and update the date at the top.
          </p>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
