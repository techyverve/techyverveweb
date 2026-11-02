# Keyword clusters — techyverve.in

**Source:** the keyword lists already in `lib/services.ts`, `lib/projects.ts` and the old layout metadata
(≈ 75 keywords after de-duplication), plus clearly-related gaps marked **NEW**.
**Not included:** search volume, difficulty and CPC. None of that was available when this was written, and
guessing numbers would be worse than leaving them out. Validate the priorities below in Google Search Console
(Performance → Queries) and Google Keyword Planner before commissioning content.

Priority = fit with what TechyVerve actually sells × how directly the page can already answer the query.
"Exists" means a page is already live; "NEW" means a page or article still has to be written.

---

## 1. Core — "software company in Pune"
**Intent:** commercial · **Target:** homepage `/` (exists) · **Priority:** 1

| Keyword | Role |
|---|---|
| software development company Pune | Primary |
| custom software development India | Secondary |
| IT company Kharadi Pune | Secondary (local) |
| software company Kharadi | Supporting — NEW |
| software development company in Pune for startups | Supporting — NEW |

## 2. Web development
**Intent:** commercial · **Target:** `/services/web-development` (exists) · **Priority:** 2

| Keyword | Role |
|---|---|
| web development company Pune | Primary |
| website development Kharadi | Secondary (local) |
| Next.js development India | Secondary |
| custom web application development | Supporting |
| SaaS development company India | Supporting — NEW |

## 3. Mobile apps
**Intent:** commercial · **Target:** `/services/mobile-app-development` (exists) · **Priority:** 2

| Keyword | Role |
|---|---|
| mobile app development Pune | Primary |
| Android app development company | Secondary |
| iOS app development Pune | Secondary |
| React Native developers India | Supporting |

## 4. ERP, billing and payroll software
The strongest cluster: the case studies are real products, not claims. Split it so each query has one page.

### 4a. Custom ERP — `/services/erp-billing-software` (exists) · Priority 1
| Keyword | Role |
|---|---|
| ERP software development India | Primary |
| custom ERP software Pune | Secondary — NEW |
| billing software development Pune | Secondary |
| custom ERP vs Tally | Supporting — NEW, see brief #2 |

### 4b. Restaurant billing / POS — `/projects/hotel-billing` (exists) + article · Priority 1
| Keyword | Role |
|---|---|
| restaurant billing software | Primary |
| hotel billing app India | Secondary |
| restaurant POS | Secondary |
| table order management | Supporting |
| custom POS software | Supporting |
| KOT software for restaurants | Supporting — NEW, see brief #1 |

### 4c. Payroll and HR — `/projects/payroll` (exists) + article · Priority 1
| Keyword | Role |
|---|---|
| payroll software India | Primary |
| HR payroll SaaS | Secondary |
| QR attendance system | Secondary |
| payslip generator PF ESI | Supporting |
| payroll software development | Supporting |
| PF ESI TDS payroll compliance checklist | Supporting — NEW, see brief #4 |

### 4d. GST billing — `/services/erp-billing-software` · Priority 2
| Keyword | Role |
|---|---|
| GST billing software | Primary |
| GST invoice software for small business | Supporting — NEW |

## 5. Vertical long-tail (each already has a case study)
**Intent:** commercial / navigational · **Priority:** 3 — low volume, high relevance, little competition.

| Cluster | Page | Keywords |
|---|---|---|
| Earthmovers | `/projects/earthmovers-billing` | earthmovers billing software · JCB billing software · vehicle expense tracking · contractor billing app |
| Pigmy / credit societies | `/projects/pigmy-pro` | pigmy collection app · daily deposit collection app · credit society mobile app · bank agent app |
| Expense splitting | `/projects/hisaab` | expense splitting app · split bills with friends · group expense tracker India · hisaab app |

## 6. Backend, cloud, database
**Intent:** commercial · **Priority:** 3 — competitive and generic; win on the Pune/India modifiers.

| Page | Primary | Supporting |
|---|---|---|
| `/services/backend-api-development` | backend development company India | Node.js development Pune · API development services · Supabase developers |
| `/services/cloud-aws-architecture` | AWS cloud architecture services | DevOps services Pune · cloud migration India · AWS consultant Pune |
| `/services/database-design` | database design services | PostgreSQL consultant India · MongoDB development · database optimisation |

## 7. Design, hiring, consulting
**Intent:** commercial · **Priority:** 3

| Page | Primary | Supporting |
|---|---|---|
| `/services/ui-ux-design` | UI UX design company Pune | app design services India · design system development · Figma designers Pune |
| `/services/dedicated-development-team` | hire developers Pune | dedicated development team India · staff augmentation Pune · hire React developers |
| `/services/it-consulting` | IT consulting Pune | software consulting services India · tech stack audit · software architecture review |

## 8. Cost and comparison (informational → commercial) — all NEW
These are what buyers search *before* they search for an agency, and nothing on the site answers them yet.
**Priority:** 2

| Keyword | Content | Brief |
|---|---|---|
| software development cost India · how much does custom software cost | Guide | #3 |
| website development cost Pune | Guide (or a section of #3) | #3 |
| mobile app development cost India | Guide (or a section of #3) | #3 |
| custom ERP vs Tally · build vs buy billing software | Comparison | #2 |

## 9. Careers — `/career` (exists)
**Intent:** navigational / transactional · **Priority:** 3

| Keyword | Role |
|---|---|
| software developer jobs Kharadi Pune | Primary |
| React developer jobs Pune | Secondary |
| Node.js developer jobs Pune | Secondary |
| React Native developer jobs Pune | Secondary |

---

## Priority ranking

| # | Cluster | Content | Primary keyword | Status |
|---|---|---|---|---|
| 1 | Core | Homepage | software development company Pune | Optimised (title/description rewritten) |
| 2 | ERP / billing (4a) | Service page | ERP software development India | Optimised; add comparison article |
| 3 | Restaurant POS (4b) | Case study + article | restaurant billing software | Brief #1 |
| 4 | Payroll (4c) | Case study + article | payroll software India | Brief #4 |
| 5 | Cost guides (8) | Guide | software development cost India | Brief #3 |
| 6 | Custom vs Tally (8) | Comparison | custom ERP vs Tally | Brief #2 |
| 7 | Web (2) | Service page | web development company Pune | Optimised |
| 8 | Mobile (3) | Service page | mobile app development Pune | Optimised |
| 9 | Vertical long-tail (5) | Case studies | JCB billing software | Optimised |
| 10 | Backend / cloud / database / design / hiring / consulting | Service pages | — | Optimised; FAQs expanded |

**Cannibalisation check:** the service and case-study pages already map one primary keyword to one URL.
The only overlap is cluster 4 (ERP service page vs. the hotel-billing and payroll case studies). Keep the service
page on the generic "ERP / billing software" terms and let the case studies own the vertical terms.
