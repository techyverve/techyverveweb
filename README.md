# TechyVerve — Next.js site

Migrated from the original static `techyverve-white.html` / `career.html` into a
Next.js 16 (App Router) project. Same design, same content, now componentized
with a working contact form.

## Structure

```
app/
  layout.tsx        Root layout — fonts, SEO metadata, background grid
  page.tsx           Homepage (assembles the section components below + Organization schema)
  sitemap.ts         Auto-generated sitemap.xml
  robots.ts          Auto-generated robots.txt
  career/page.tsx     Careers page
  api/contact/route.ts  Contact form email handler
components/
  Navbar.tsx, Footer.tsx, Logo.tsx, Reveal.tsx, Typewriter.tsx, ContactForm.tsx
  home/               Homepage sections (Hero, About, Services, Process, Team,
                       BuildCta, FAQ, Contact)
lib/
  roles.ts            Open roles — edit this array to add/remove job listings
public/
  logo.png            Your logo — see "Adding your logo" below
```

## Adding your logo

Drop a square PNG named exactly `logo.png` into the `public/` folder (replacing
the empty placeholder there). It's picked up automatically by the `<Logo />`
component used in the navbar and footer — no code changes needed. It's also
referenced by the SEO/social preview image in `app/layout.tsx`, so the same
file shows up when the site is shared on social media or in search results.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Full-viewport sections

Every section the navbar links to (`#about`, `#services`, `#team`, `#build`,
`#contact-form`) has a `.viewport-section` class in `globals.css`: it sets
`min-height: 100vh` and `scroll-margin-top`, so clicking a nav link scrolls
that section fully into view below the sticky navbar instead of showing a
partial slice of it. If you add a new section and want the same behavior,
add `className="viewport-section"` to it.

## Contact form → hr@techyverve.in

`app/api/contact/route.ts` sends every submission by email using
[Resend](https://resend.com) (free tier is generous, no SMTP setup needed).
It defaults to `hr@techyverve.in` — the same address used across the footer,
career page apply links, and contact section.

1. Sign up at resend.com and grab an API key.
2. Copy `.env.local.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. `CONTACT_TO_EMAIL` controls where submissions land if you want it to be
   different from `hr@techyverve.in`.
4. For production sending from your own domain, verify it in Resend and
   update `CONTACT_FROM_EMAIL`.

Until `RESEND_API_KEY` is set, submissions are just logged to the server
console (useful for testing the form/UI without an email provider yet).

## Editing content

- **Open roles**: edit `lib/roles.ts`.
- **Homepage copy**: each section is its own file under `components/home/`,
  including the new `Process.tsx` (how-we-work steps) and `FAQ.tsx`.
- **Colors/fonts/spacing**: all design tokens live at the top of
  `app/globals.css` as CSS custom properties (`--amber`, `--teal`, etc).

## SEO

- `app/layout.tsx` sets a title template, meta description, Open Graph/Twitter
  tags, and `robots` directives targeting software-development-in-Pune search
  terms — edit the `keywords`/`description` strings there as your positioning
  changes.
- `app/page.tsx` embeds `ProfessionalService` structured data (name, address,
  phone numbers, email) so Google can show a knowledge-panel-style listing.
- `components/home/FAQ.tsx` embeds `FAQPage` structured data, which makes the
  questions eligible for FAQ rich results in search.
- `app/sitemap.ts` and `app/robots.ts` auto-generate `/sitemap.xml` and
  `/robots.txt` once deployed.
- **Once live**, submit the site in
  [Google Search Console](https://search.google.com/search-console) and
  submit `https://techyverve.in/sitemap.xml` — structured data and meta tags
  help ranking, but indexing still needs to be requested.
- Ranking "on top" for competitive terms also depends on backlinks, reviews,
  and content over time — no on-page change guarantees a #1 spot, but this
  gives Google everything it needs to understand and rank the site correctly.

## Deploying

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`
   environment variables in the Vercel project settings.
4. In Vercel → Settings → Domains, add your existing domain and update your
   DNS records at your registrar as instructed.
5. If your domain isn't `techyverve.in`, update the URL in
   `app/layout.tsx` (`metadataBase`), `app/page.tsx` (schema `url`/`logo`),
   `app/sitemap.ts`, and `app/robots.ts` to match.
