import type { Metadata } from "next";

export const SITE_URL = "https://www.techyverve.in";
export const SITE_NAME = "TechyVerve";

/**
 * Date the site content was last meaningfully changed. Used for sitemap <lastmod>, so bump it when
 * you edit page content (a lastmod that changes on every build teaches Google to ignore it).
 */
export const CONTENT_UPDATED = "2026-11-03";

/**
 * Public profiles that belong to the company (LinkedIn page, GitHub org, Clutch / GoodFirms
 * listing, Google Business Profile URL ...). They are emitted as `sameAs` in the Organization
 * schema, which helps search engines and AI assistants tie the brand to one entity.
 * Add real URLs here; leave empty rather than guessing.
 */
export const SOCIAL_PROFILES: string[] = [];

interface PageMetaInput {
  /** Page title WITHOUT the brand suffix — the root layout template appends " | TechyVerve". */
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL and og:url. */
  path: string;
  /** Optional shorter text for social cards. */
  socialDescription?: string;
}

/**
 * Builds the metadata for an inner page.
 *
 * Why this exists: in Next.js a page-level `openGraph` / `twitter` object REPLACES the parent's
 * rather than merging with it, so inner pages that set their own `openGraph` silently lost
 * og:image and inherited the homepage's twitter:title. Going through one helper keeps every page
 * complete and consistent.
 */
export function pageMetadata({ title, description, path, socialDescription }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;
  const socialText = socialDescription ?? description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: socialTitle,
      description: socialText,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TechyVerve — Software Development Company in Pune" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialText,
      images: ["/twitter-image"],
    },
  };
}

/**
 * Shortens text for a meta description without cutting mid-word: keeps whole sentences while they
 * fit, otherwise cuts at the last space and adds an ellipsis.
 */
export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sentences = clean.split(/(?<=[.!?])\s+/);
  let out = "";
  for (const s of sentences) {
    const next = out ? `${out} ${s}` : s;
    if (next.length > max) break;
    out = next;
  }
  // keep whole sentences only when that still gives a useful length; otherwise cut on a word boundary
  if (out.length >= 110) return out;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\-–—]+$/, "")}…`;
}
