import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // No includeSubDomains/preload on purpose: other subdomains may not be HTTPS-only.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in an X-Powered-By header
  poweredByHeader: false,

  images: {
    // Smaller files for the case-study screenshots; browsers without AVIF get WebP
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    return [
      // One canonical host: techyverve.in → www.techyverve.in with a permanent (308) redirect,
      // so link equity from both spellings lands on the www URLs used in canonicals and the sitemap.
      {
        source: "/:path*",
        has: [{ type: "host", value: "techyverve.in" }],
        destination: "https://www.techyverve.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
