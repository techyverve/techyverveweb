export interface Role {
  title: string;
  stackTag: string;
  location: string;
  /**
   * Plain-text job description used in the JobPosting structured data. Google Jobs wants a unique,
   * detailed description per role, so each role has its own instead of one shared sentence.
   */
  summary: string;
  /** What the person will do day to day; rendered as an HTML list in the JobPosting description. */
  responsibilities: string[];
}

export const roles: Role[] = [
  {
    title: "Frontend developer",
    stackTag: "react.ts",
    location: "Kharadi, Pune",
    summary:
      "Build the web interfaces for TechyVerve's client products — dashboards, billing and payroll screens and marketing sites — in React and TypeScript.",
    responsibilities: [
      "Build responsive, accessible interfaces in React and TypeScript",
      "Turn UI/UX designs and prototypes into production components",
      "Connect screens to REST APIs and keep client-side state predictable",
      "Keep pages fast: image handling, bundle size and Core Web Vitals",
      "Ship features end to end with the backend engineers and designers on the team",
    ],
  },
  {
    title: "Backend engineer",
    stackTag: "node.api",
    location: "Kharadi, Pune",
    summary:
      "Design and build the APIs and data layer behind TechyVerve's ERP, billing and payroll products using Node.js and SQL/NoSQL databases.",
    responsibilities: [
      "Design and build secure REST APIs in Node.js",
      "Model data and write migrations for PostgreSQL or MongoDB",
      "Implement authentication, roles and permissions",
      "Deploy and monitor services on cloud infrastructure such as AWS",
      "Review code and write tests for the services you own",
    ],
  },
  {
    title: "Mobile developer",
    stackTag: "react-native",
    location: "Remote friendly",
    summary:
      "Build Android and iOS apps for TechyVerve's clients from a single React Native codebase, from first screen to Play Store and App Store release.",
    responsibilities: [
      "Build cross-platform Android and iOS apps in React Native",
      "Integrate apps with backend APIs, including offline-friendly flows",
      "Handle device features such as camera, notifications and storage",
      "Prepare builds and publish to the Play Store and App Store",
      "Work with designers and backend engineers to ship in short cycles",
    ],
  },
];
