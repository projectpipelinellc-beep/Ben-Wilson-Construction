import Link from "next/link";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Ben Wilson Construction | Remodeling & Residential Construction in Wappingers Falls, NY",
  description:
    "Family-owned residential construction and remodeling in Wappingers Falls, NY. Over 30 years of hands-on experience for homeowners in Dutchess County and the Hudson Valley.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="on-dark relative isolate flex min-h-[calc(100svh-72px)] items-end overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0 -z-10">
          <Photo folder="hero" name="hero" priority sizes="100vw" alt="A completed residential remodeling project by Ben Wilson Construction" className="!bg-charcoal" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" aria-hidden="true" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pb-20">
          <p className="eyebrow text-ivory/75">Wappingers Falls, NY &middot; Hudson Valley</p>
          <h1 className="mt-5 max-w-4xl text-[2.9rem] leading-[0.98] sm:text-7xl md:text-[5.5rem]">
            Built with care.<br />Made to last.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
            Residential construction and remodeling in the Hudson Valley, backed by more than 30 years of hands-on experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="light">Request an Estimate</ButtonLink>
            <ButtonLink href="/projects" variant="outline-light">View Our Work</ButtonLink>
          </div>
          <p className="mt-10 border-t border-ivory/25 pt-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/75 sm:text-xs">
            Family owned &bull; Over 30 years of experience &bull; Wappingers Falls, NY
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36" aria-labelledby="intro-heading">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-brown">Ben Wilson Construction</p>
            <h2 id="intro-heading" className="mt-5 text-4xl leading-[1.06] sm:text-5xl md:text-6xl">
              Three decades of building homes people love living in.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:pt-14">
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                Ben Wilson Construction is a family-owned residential construction and remodeling company, working with homeowners from our location in Wappingers Falls.
              </p>
              <p>
                Your home deserves work that&rsquo;s done right. That means clear communication, close attention to the details, and a finished result you&rsquo;re glad to come home to.
              </p>
              <Link href="/about" className="inline-block border-b border-brown pb-0.5 text-sm font-medium uppercase tracking-[0.14em] text-brown hover:text-brown-deep">
                About the company
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 id="services-heading" className="text-4xl leading-[1.06] sm:text-5xl">Built around your home.</h2>
              <p className="mt-6 max-w-sm text-lg text-ink/80">
                Residential construction and remodeling for homeowners in Wappingers Falls and the surrounding Hudson Valley.
              </p>
              <Link href="/services" className="mt-8 inline-block border-b border-brown pb-0.5 text-sm font-medium uppercase tracking-[0.14em] text-brown hover:text-brown-deep">
                Our services
              </Link>
            </Reveal>
            <ol className="md:col-span-7">
              {site.services.map((s, i) => (
                <Reveal key={s.title}>
                  <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-charcoal/25 py-8 last:border-b">
                    <span className="font-serif text-2xl text-taupe">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-3xl">{s.title}</h3>
                      <p className="mt-3 max-w-lg text-ink/80">{s.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32" aria-labelledby="work-heading">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <h2 id="work-heading" className="max-w-2xl text-4xl leading-[1.06] sm:text-5xl md:text-6xl">The work speaks for itself.</h2>
          <ButtonLink href="/projects" variant="outline" className="self-start">View Our Work</ButtonLink>
        </Reveal>
        <ProjectGallery limit={3} />
      </section>

      {/* 30+ YEARS */}
      <section className="on-dark bg-charcoal text-ivory" aria-labelledby="years-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="font-serif text-[9rem] leading-[0.8] sm:text-[13rem]" aria-hidden="true">30+</p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.4em] text-stone">Years</p>
          </Reveal>
          <Reveal className="md:col-span-7">
            <h2 id="years-heading" className="text-4xl leading-[1.06] sm:text-5xl">Experience you can see in the details.</h2>
            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-ivory/80">
              <p>
                <span className="sr-only">Over 30 years. </span>
                For over thirty years, Ben Wilson Construction has served homeowners in the Wappingers Falls area.
              </p>
              <p>
                Remodeling someone&rsquo;s home takes experience, clear communication and careful execution. After three decades, that&rsquo;s how we work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32" aria-labelledby="why-heading">
        <Reveal><h2 id="why-heading" className="max-w-3xl text-4xl leading-[1.06] sm:text-5xl md:text-6xl">The difference is in the details.</h2></Reveal>
        <dl className="mt-14 grid gap-x-12 md:grid-cols-2">
          {[
            ["Family owned", "A family-owned company, so the people behind the work care how it turns out."],
            ["Over 30 years of experience", "Three decades of residential construction and remodeling in the same community."],
            ["Local to Wappingers Falls", "Based at 1522 NY-376. If you live nearby, we're your neighbors."],
            ["Craftsmanship and customer experience", "Homeowners tell us they're happy with the result, and with the people who built it."],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="border-t border-charcoal/25 py-8">
                <dt className="font-serif text-2xl sm:text-3xl">{t}</dt>
                <dd className="mt-3 max-w-md text-ink/80">{d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* REVIEWS */}
      <section className="bg-paper" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-brown">In their words</p>
            <h2 id="reviews-heading" className="mt-4 text-4xl sm:text-5xl">What homeowners say.</h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-x-10">
            <Reveal className="md:col-span-7">
              <blockquote>
                <p className="font-serif text-3xl leading-tight sm:text-5xl">&ldquo;{site.reviews[0].quote}&rdquo;</p>
                <footer className="mt-5 text-sm text-taupe">Google review</footer>
              </blockquote>
            </Reveal>
            <div className="space-y-10 md:col-span-5 md:border-l md:border-charcoal/20 md:pl-10">
              {site.reviews.slice(1).map((r) => (
                <Reveal key={r.quote}>
                  <blockquote>
                    <p className="font-serif text-2xl leading-snug">&ldquo;{r.quote}&rdquo;</p>
                    <footer className="mt-3 text-sm text-taupe">Google review</footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="mt-14 text-sm text-taupe">
            Excerpts from Google reviews. Ben Wilson Construction&rsquo;s Google business listing shows {site.googleReviewCount} reviews at the time of writing.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
