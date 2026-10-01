import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/projects", "/about", "/contact"];
  return paths.map((p) => ({
    url: `${site.siteUrl}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/contact" ? 0.9 : 0.7,
  }));
}
