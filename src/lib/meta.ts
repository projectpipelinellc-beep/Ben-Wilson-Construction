import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMeta(opts: { title: string; description: string; path: string }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary", title: opts.title, description: opts.description },
  };
}
