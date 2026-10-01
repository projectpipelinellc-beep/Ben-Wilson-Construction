import { site, addressLine, mapQuery } from "@/content/site";
import { EstimateForm } from "@/components/EstimateForm";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Request an Estimate | Contact Ben Wilson Construction, Wappingers Falls, NY",
  description:
    "Request a remodeling or construction estimate from Ben Wilson Construction in Wappingers Falls, NY, or call (845) 797-1264.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 md:pt-28">
        <p className="eyebrow text-brown">Contact</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">Tell us about your project.</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/85">
          Send a few details and we&rsquo;ll get back to you. Prefer to talk? Call <a className="font-medium text-brown underline underline-offset-4" href={site.phoneHref}>{site.phone}</a>.
        </p>

        <div className="mt-14 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7"><EstimateForm /></div>
          <aside className="md:col-span-5 md:border-l md:border-charcoal/20 md:pl-10" aria-label="Contact information">
            <h2 className="text-3xl">Ben Wilson Construction</h2>
            <address className="mt-5 text-lg not-italic leading-relaxed">
              {site.address.street}<br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
            <p className="mt-4"><a href={site.phoneHref} className="text-2xl text-brown hover:text-brown-deep">{site.phone}</a></p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-brown pb-0.5 text-sm font-medium uppercase tracking-[0.14em] text-brown"
            >
              Get directions
            </a>
            <div className="mt-8 aspect-[4/3] overflow-hidden border border-charcoal/15 bg-paper">
              <iframe
                title={`Map showing Ben Wilson Construction at ${addressLine}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[35%]"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
