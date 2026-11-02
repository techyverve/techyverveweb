# SEO notes

| File | What it is |
|---|---|
| `keyword-clusters.md` | Keywords grouped by topic and mapped to a page, with priority |
| `content-briefs.md` | Four article briefs for pages the site doesn't have yet |
| `ai-visibility-plan.md` | How AI assistants find the site, what's done, what's off-site, and a prompt-tracking table |

## Where SEO lives in the code

| Thing | File |
|---|---|
| Site URL, `CONTENT_UPDATED` date, social profile URLs, shared page-metadata helper | `lib/site.ts` |
| Service titles, meta descriptions, FAQs | `lib/services.ts` (`metaTitle` ≤ 47 chars, `metaDescription` 140–155 chars) |
| Project meta descriptions | `lib/projects.ts` (optional `metaDescription`) |
| `sitemap.xml`, `robots.txt`, `llms.txt` | `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts` |
| Host redirect (apex → www) and security headers | `next.config.ts` |

## Rules to keep it healthy

1. **Build page metadata with `pageMetadata()`** from `lib/site.ts`. In Next.js a page's own `openGraph` / `twitter` object *replaces* the parent's, which is how inner pages used to lose their share image.
2. **Never slice descriptions** (`text.slice(0, 160)` cuts mid-word). Write them, or use `metaDescription()`.
3. **Titles ≤ 60 characters including " | TechyVerve"**, descriptions 140–155.
4. **Bump `CONTENT_UPDATED`** in `lib/site.ts` when page content changes (it feeds sitemap `lastmod`).
5. **Fill `SOCIAL_PROFILES`** in `lib/site.ts` with real company profile URLs only.
6. **New service or project?** Add it to `lib/services.ts` / `lib/projects.ts`; the pages, sitemap, footer links and `llms.txt` pick it up automatically.

## Localisation (Hindi / Marathi): not done, on purpose

Nothing was machine-translated. Translating a B2B software site into Hindi or Marathi means a second set of
pages that must be written and reviewed by a fluent person, and for "software company Pune" queries most buyers
search in English. If you decide to do it, the safe approach is:

- subdirectories `/hi/` and/or `/mr/`, each page a human-reviewed translation (not auto-translated);
- localised keyword research first (people don't search a literal translation of the English keyword);
- `hreflang` pairs on every page: `en-IN`, `hi-IN` / `mr-IN` and an `x-default` pointing at the English page;
- `<html lang>` set per language.

Groundwork already in place: `<html lang="en-IN">` and `og:locale = en_IN`.
