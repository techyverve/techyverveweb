import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

// Generated at build time from the same data that drives the pages, so it can never go stale.
export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary of the site for AI assistants and answer engines
 * (ChatGPT, Claude, Perplexity, Gemini ...). Format: https://llmstxt.org
 */
export function GET() {
  const lines = [
    "# TechyVerve",
    "",
    "> TechyVerve is an engineering-led software development company in Kharadi, Pune, India. It designs and builds web applications, mobile apps (React Native), ERP, billing, payroll and POS software, backend APIs, AWS cloud infrastructure and databases for businesses across India.",
    "",
    "Key facts: based in Kharadi, Pune, Maharashtra; senior engineers on every project; fixed-scope and fixed-price options for well-defined work; sprint-based delivery with a staging environment; clients own the source code and infrastructure; maintenance available after launch. Contact: hr@techyverve.in, +91 72761 56939, +91 91460 53881.",
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.body}`),
    "",
    "## Case studies",
    "",
    ...projects.map((p) => `- [${p.name}](${SITE_URL}/projects/${p.slug}): ${p.category}. ${p.tagline}`),
    "",
    "## Company",
    "",
    `- [Homepage](${SITE_URL}/): overview, process, founders and FAQ`,
    `- [All services](${SITE_URL}/services): the full list of services`,
    `- [All projects](${SITE_URL}/projects): products TechyVerve has shipped`,
    `- [Careers](${SITE_URL}/career): open developer roles in Kharadi, Pune`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
