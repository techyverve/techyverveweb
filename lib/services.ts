export interface Service {
  slug: string;
  tag: string;
  title: string;
  /** Search-focused page title */
  seoTitle: string;
  body: string;
  intro: string;
  points: string[];
  deliverables: string[];
  keywords: string[];
  /** Slugs from lib/projects.ts that showcase this service */
  projects: string[];
  faqs: { q: string; a: string }[];
  /** 24×24 stroke path, Lucide-style */
  icon: string;
  size: "" | "wide" | "tall";
}

export const services: Service[] = [
  {
    slug: "web-development",
    tag: "web.dev",
    title: "Web development",
    seoTitle: "Web Development Company in Pune",
    body: "Custom websites and web applications on modern frameworks, tuned for Core Web Vitals and easy to maintain.",
    intro:
      "From marketing websites to full SaaS platforms, we build fast, SEO-ready web applications with Next.js and React — designed to rank, convert and scale without a rewrite.",
    points: ["Next.js & React", "SEO-ready", "Admin panels"],
    deliverables: [
      "Business websites and landing pages",
      "Custom web applications and SaaS platforms",
      "Admin dashboards and internal tools",
      "Progressive web apps that install on phones",
      "Performance, accessibility and Core Web Vitals tuning",
      "Hosting on Vercel, Netlify, Cloudflare or AWS",
    ],
    keywords: ["web development company Pune", "website development Kharadi", "Next.js development India", "custom web application development"],
    projects: ["payroll", "hisaab", "earthmovers-billing"],
    faqs: [
      { q: "How much does a website cost in Pune?", a: "A business website typically starts from a fixed price agreed after a short discovery call; web applications are quoted per sprint. We share a written estimate before any work begins." },
      { q: "Will my website be SEO-friendly?", a: "Yes. Every site ships with server rendering, metadata, structured data, a sitemap and fast load times, which are the technical foundations Google ranks on." },
    ],
    icon: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01",
    size: "wide",
  },
  {
    slug: "mobile-app-development",
    tag: "mobile.native",
    title: "Mobile apps",
    seoTitle: "Mobile App Development Company in Pune — Android & iOS",
    body: "Native-feeling iOS and Android apps from one React Native codebase.",
    intro:
      "We build Android and iOS apps with React Native and Expo — one codebase, native performance, and a release pipeline that gets you onto the Play Store and App Store.",
    points: ["Android & iOS", "Expo", "Offline-first"],
    deliverables: [
      "Android and iOS apps from a single codebase",
      "Field-force and collection apps",
      "Customer-facing apps with payments and notifications",
      "Trusted Web Activity apps for existing web products",
      "Play Store and App Store publishing",
      "Ongoing updates and crash monitoring",
    ],
    keywords: ["mobile app development Pune", "Android app development company", "React Native developers India", "iOS app development Pune"],
    projects: ["pigmy-pro", "hotel-billing", "payroll"],
    faqs: [
      { q: "Do you build for both Android and iOS?", a: "Yes. We use React Native, so one codebase ships to both stores, which roughly halves cost compared with two native apps." },
      { q: "Can you publish the app for us?", a: "Yes. We handle store listings, signing keys and review submissions for Google Play and the App Store." },
    ],
    icon: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",
    size: "tall",
  },
  {
    slug: "erp-billing-software",
    tag: "erp.systems",
    title: "ERP & billing software",
    seoTitle: "Custom ERP, Billing & Payroll Software Development in India",
    body: "Billing, payroll, inventory and operations software built around how your business actually runs.",
    intro:
      "Off-the-shelf ERP forces your team into someone else's process. We build billing, payroll, POS and inventory software that fits how you already work — with GST, PF, ESI and Indian compliance built in.",
    points: ["GST billing", "Payroll", "Inventory"],
    deliverables: [
      "GST billing and invoicing software",
      "Restaurant and retail POS",
      "Payroll with PF, ESI, PT and TDS",
      "Attendance and HR management",
      "Inventory and fleet expense tracking",
      "Multi-branch and multi-tenant setups",
    ],
    keywords: ["ERP software development India", "billing software Pune", "payroll software development", "custom POS software", "GST billing software"],
    projects: ["hotel-billing", "payroll", "earthmovers-billing"],
    faqs: [
      { q: "Is custom ERP better than Tally or off-the-shelf software?", a: "When your workflow is specific — table-wise restaurant billing, per-vehicle profit, QR attendance — custom software removes manual workarounds and you own it outright, with no per-user licence fees." },
      { q: "Can you handle GST and payroll compliance?", a: "Yes. Our billing and payroll products already handle CGST/SGST, PF, ESI, professional tax and TDS." },
    ],
    icon: "M4 4h16v16H4zM4 10h16M10 10v10",
    size: "",
  },
  {
    slug: "backend-api-development",
    tag: "backend.api",
    title: "Backend & APIs",
    seoTitle: "Backend & API Development Services — Node.js, Supabase",
    body: "Scalable server-side systems that hold up under real traffic, not just demos.",
    intro:
      "Secure, well-documented APIs and backend services in Node.js and Supabase, with authentication, role-based access and row-level security from day one.",
    points: ["Node.js", "REST", "Auth"],
    deliverables: [
      "REST APIs and integrations",
      "Authentication, roles and permissions",
      "Payment, SMS and email integrations",
      "Serverless and edge functions",
      "Background jobs and reporting",
      "API documentation and testing",
    ],
    keywords: ["backend development company India", "Node.js development Pune", "API development services", "Supabase developers"],
    projects: ["payroll", "hotel-billing"],
    faqs: [
      { q: "Which backend stack do you use?", a: "Mostly Node.js and TypeScript with PostgreSQL or Supabase, chosen for speed of delivery and a large hiring pool if you later build an in-house team." },
    ],
    icon: "M4 6h16M4 12h16M4 18h16M8 6v.01M8 12v.01M8 18v.01",
    size: "",
  },
  {
    slug: "cloud-aws-architecture",
    tag: "cloud.aws",
    title: "Cloud & AWS",
    seoTitle: "AWS Cloud Architecture & DevOps Services in Pune",
    body: "EC2, S3, RDS, Lambda and VPC setups sized for the traffic you have, with room to scale.",
    intro:
      "We design cloud infrastructure that is secure, monitored and right-sized — so you are not paying for servers you do not need, and not falling over when traffic spikes.",
    points: ["AWS", "Supabase", "CI/CD"],
    deliverables: [
      "AWS architecture: EC2, S3, RDS, Lambda, VPC",
      "CI/CD pipelines and automated deploys",
      "Docker containerisation",
      "Backups, monitoring and alerts",
      "Cost reviews and right-sizing",
      "Migrations from shared hosting",
    ],
    keywords: ["AWS cloud architecture services", "DevOps services Pune", "cloud migration India", "AWS consultant Pune"],
    projects: ["payroll", "earthmovers-billing"],
    faqs: [
      { q: "Can you reduce our cloud bill?", a: "Often, yes. A cost review usually finds over-sized instances, idle resources and missing caching that can be fixed without downtime." },
    ],
    icon: "M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z",
    size: "",
  },
  {
    slug: "database-design",
    tag: "db.design",
    title: "Database design",
    seoTitle: "Database Design & Optimisation — PostgreSQL, MongoDB",
    body: "Schemas, indexing and migrations for SQL and NoSQL that stay fast as data grows.",
    intro:
      "A good schema is the difference between a report that loads instantly and one that times out. We design, migrate and tune PostgreSQL and MongoDB databases for real workloads.",
    points: ["PostgreSQL", "MongoDB"],
    deliverables: [
      "Schema design and data modelling",
      "Indexing and query optimisation",
      "Row-level security and multi-tenancy",
      "Data migrations from Excel or legacy systems",
      "Backups and disaster recovery",
    ],
    keywords: ["database design services", "PostgreSQL consultant India", "MongoDB development", "database optimisation"],
    projects: ["payroll", "hotel-billing"],
    faqs: [
      { q: "Can you move our data out of Excel?", a: "Yes. We regularly migrate spreadsheets and legacy databases into structured PostgreSQL with validation and history." },
    ],
    icon: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
    size: "",
  },
  {
    slug: "ui-ux-design",
    tag: "uiux.design",
    title: "UI/UX design",
    seoTitle: "UI/UX Design Services in Pune — Apps & Web",
    body: "Interfaces designed around real user flows, from wireframe to developer-ready design system.",
    intro:
      "We design interfaces people can use on the first try — following Apple's Human Interface Guidelines and Material principles, with accessible contrast and large tap targets.",
    points: ["Figma", "Design systems", "HIG"],
    deliverables: [
      "User research and flows",
      "Wireframes and interactive prototypes",
      "Visual design and branding",
      "Design systems and component libraries",
      "Accessibility reviews",
    ],
    keywords: ["UI UX design company Pune", "app design services India", "design system development", "Figma designers Pune"],
    projects: ["hotel-billing", "hisaab", "pigmy-pro"],
    faqs: [
      { q: "Do you only design, or also build?", a: "Both. Because the same team designs and builds, designs are realistic to implement and nothing is lost in hand-off." },
    ],
    icon: "M12 2a10 10 0 1 0 0 20c1 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a6 6 0 0 0 6-6C22 6 17.5 2 12 2zM7.5 11h.01M10.5 7h.01M15 7.5h.01",
    size: "wide",
  },
  {
    slug: "dedicated-development-team",
    tag: "team.staffing",
    title: "Team as a service",
    seoTitle: "Hire Dedicated Developers in Pune — Team as a Service",
    body: "Embed one engineer or a full squad into your team on a monthly retainer.",
    intro:
      "Need capacity without a hiring cycle? Our engineers join your stand-ups, use your tools and ship to your repo, on a simple monthly engagement.",
    points: ["Monthly", "Your tools"],
    deliverables: [
      "Dedicated React, Node and React Native developers",
      "Full squads with a tech lead",
      "Flexible monthly engagements",
      "Work in your Git, Jira and Slack",
    ],
    keywords: ["hire developers Pune", "dedicated development team India", "staff augmentation Pune", "hire React developers"],
    projects: [],
    faqs: [
      { q: "How fast can a developer start?", a: "Usually within one to two weeks of agreeing scope." },
    ],
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
    size: "",
  },
  {
    slug: "it-consulting",
    tag: "consulting",
    title: "Consulting",
    seoTitle: "Software & IT Consulting Services in Pune",
    body: "Architecture reviews, stack audits and roadmap planning for teams deciding what to build next.",
    intro:
      "Before you spend on development, get a clear plan. We review architecture, audit code and costs, and turn ideas into a scoped, prioritised roadmap.",
    points: ["Audits", "Roadmaps"],
    deliverables: [
      "Architecture and code reviews",
      "Tech stack selection",
      "Product scoping and estimates",
      "Security and performance audits",
    ],
    keywords: ["IT consulting Pune", "software consulting services India", "tech stack audit", "software architecture review"],
    projects: [],
    faqs: [
      { q: "Can you review code another agency wrote?", a: "Yes. We produce a written report covering risks, quick wins and a plan, whether or not we continue the build." },
    ],
    icon: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
    size: "",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
