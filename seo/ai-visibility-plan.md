# AI visibility plan — techyverve.in

How ChatGPT, Claude, Gemini, Perplexity and Google's AI answers find and describe TechyVerve.

## Baseline: not measured yet

No AI assistant was queried when this was written, so there is **no visibility score** and nothing below claims one.
Run the prompt list in the last section, record the results in the table, and repeat every quarter. AI answers
change with model updates, so one test is a snapshot, not a trend.

## What the site now provides (done in code)

| Signal | Status |
|---|---|
| Crawlable by AI bots | `robots.txt` allows `*` and only disallows `/api/` — no AI crawler is blocked |
| `/llms.txt` | **New.** Plain-text summary of the company, services and case studies, generated from the same data as the pages (`app/llms.txt/route.ts`) |
| Clear entity data | `ProfessionalService` + `WebSite` schema on the homepage; `Service` + `FAQPage` + `BreadcrumbList` on each service page; `JobPosting` on careers |
| Server-rendered content | All pages are static HTML; the text is readable without JavaScript |
| Factual, quotable answers | 6 homepage FAQs and 3–4 FAQs per service page, each answering one question in 1–2 sentences |
| One address for the brand | Apex redirects to `www` permanently; canonicals and sitemap all use `www` |

## What code cannot fix — the off-site work

AI assistants lean heavily on third-party sources, not just a company's own site. Today the site has **no
`sameAs` links, no review-platform profiles and no external mentions it can point to.** This is the biggest gap.

1. **Google Business Profile** for the Kharadi office (category: Software company). Keep name, address and phone identical to the site.
2. **LinkedIn company page** and a **GitHub organisation** (even if repos are private, the profile is an entity signal).
3. **Clutch and GoodFirms** profiles. Ask two or three real clients for reviews; these platforms are frequent sources for "best software company in <city>" answers.
4. Add every URL above to `SOCIAL_PROFILES` in `lib/site.ts`. They are emitted as `sameAs` in the Organization schema automatically.
5. **Founder profiles.** The three founders are on the homepage with no links. Link each to a LinkedIn profile and add `Person` schema with `sameAs`; named, verifiable experts are a trust signal.
6. **Community answers.** Reddit (r/developersIndia, r/Pune), Quora and Stack Overflow answers by the team, written as genuine help, not advertising. Disclose affiliation.
7. **Publish the four briefs** in `content-briefs.md`. Pages that directly answer "how much does it cost" and "custom ERP vs Tally" are what assistants quote.

## Content habits that help

- Lead each section with the direct answer, then the detail.
- State facts plainly (what you build, where, for whom, how long it takes) instead of marketing adjectives.
- Keep claims consistent everywhere: the 6–12 week timeline, "you own the code", fixed-scope options.
- Put dates on anything that can go stale (compliance rules, pricing).
- Add comparison tables; they are easy for assistants to extract.

## Prompts to track

Test each in ChatGPT, Claude, Gemini and Perplexity (logged out or in a fresh chat). Record: mentioned? position? description accurate? which competitors appear?

| Prompt | Mentioned? | Position | Accurate? | Competitors named |
|---|---|---|---|---|
| Best software development companies in Pune | | | | |
| Software development company in Kharadi, Pune | | | | |
| Who can build custom ERP / billing software in India? | | | | |
| Best restaurant billing software developers in India | | | | |
| Payroll software development company India | | | | |
| React Native app development company in Pune | | | | |
| Hire dedicated React / Node.js developers in Pune | | | | |
| AWS cloud architecture consultants in Pune | | | | |
| What is TechyVerve? | | | | |
| Is TechyVerve a good software company? | | | | |

The last two matter most: they show whether assistants know the brand at all, and whether what they say is true.
Correct inaccuracies at the source (your site, GBP, directory profiles); you cannot edit an assistant directly.

## Honest expectations

Visibility improves over weeks to months and mostly follows third-party mentions. A young studio with few external
references should expect to be absent from "best companies" lists at first; being *accurately described* when asked
by name is the realistic first milestone.
