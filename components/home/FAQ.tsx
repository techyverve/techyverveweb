import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website usually ships in 2–4 weeks. A full web or mobile application with a backend typically runs 6–12 weeks, depending on scope. We'll give you a sprint-by-sprint estimate before any work starts.",
  },
  {
    q: "Do you sign NDAs before starting a project?",
    a: "Yes. We're happy to sign an NDA before discussing project details, and standard confidentiality terms are included in every contract.",
  },
  {
    q: "What industries do you work with?",
    a: "We build for retail, logistics, healthcare-adjacent tools, internal business operations, and general SaaS products. If it needs custom software, database design, or cloud infrastructure, we can likely help.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing maintenance and DevOps retainers after launch, so bugs get fixed and small features keep shipping without you needing an in-house team.",
  },
  {
    q: "Can your team work alongside our existing developers?",
    a: "Yes, that's our team-as-a-service offering. We can embed one engineer or a full squad into your existing workflow and tools, on a monthly basis.",
  },
  {
    q: "Where is TechyVerve based?",
    a: "We're based in Kharadi, Pune, India, and work with clients across India as well as fully remote, internationally.",
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2>Common questions</h2>
          <p>Didn&apos;t find what you&apos;re looking for? Reach out and ask us directly.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQPage structured data — eligible for FAQ rich results in Google search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
