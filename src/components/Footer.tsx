import Link from "next/link";
import { site, addressLine } from "@/content/site";

export function Footer() {
  return (
    <footer className="on-dark bg-charcoal pb-24 pt-16 text-ivory lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl">Ben Wilson Construction</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
            Family-owned residential construction and remodeling in Wappingers Falls, NY. Over 30 years of experience.
          </p>
        </div>
        <div className="text-sm leading-relaxed text-ivory/80">
          <p className="eyebrow mb-4 text-ivory/50">Visit or call</p>
          <address className="not-italic">
            {site.address.street}<br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </address>
          <a href={site.phoneHref} className="mt-3 inline-block text-base text-ivory hover:underline">{site.phone}</a>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <p className="eyebrow mb-4 text-ivory/50">Explore</p>
          <ul className="space-y-2.5">
            {site.nav.map((i) => (
              <li key={i.href}><Link href={i.href} className="text-ivory/80 hover:text-ivory hover:underline">{i.label}</Link></li>
            ))}
            {site.facebookUrl ? (
              <li><a href={site.facebookUrl} rel="noopener noreferrer" target="_blank" className="text-ivory/80 hover:text-ivory hover:underline">Facebook</a></li>
            ) : null}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-ivory/15 px-5 pt-6 text-xs text-ivory/50 sm:px-8">
        <span className="sr-only">{addressLine}</span>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
