import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Ben Wilson Construction | Remodeling & Residential Construction in Wappingers Falls, NY",
    template: "%s | Ben Wilson Construction",
  },
  description:
    "Family-owned residential construction and remodeling in Wappingers Falls, NY. Over 30 years of hands-on experience serving Dutchess County and the Hudson Valley.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6f1e9", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-14 lg:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-3 focus:text-ivory">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
