import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechyVerve — Software Development Company in Pune",
    short_name: "TechyVerve",
    description: "Web, mobile, ERP and cloud software built in Kharadi, Pune.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15171e",
    icons: [{ src: "/logo.png", sizes: "any", type: "image/png" }],
  };
}
