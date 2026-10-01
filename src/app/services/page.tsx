import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Services | Residential Construction & Remodeling in Wappingers Falls, NY",
  description:
    "Residential construction, home remodeling and renovation from a family-owned Wappingers Falls contractor with over 30 years of experience.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 md:pt-32">
        <p className="eyebrow text-brown">Services</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">Built around your home.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">
          Ben Wilson Construction specializes in residential construction and remodeling. For over 30 years we&rsquo;ve worked with homeowners in Wappingers Falls and across the Hudson Valley.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ol>
              {site.services.map((s, i) => (
                <Reveal key={s.title}>
                  <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-charcoal/25 py-10 last:border-b">
                    <span className="font-serif text-2xl text-taupe">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h2 className="text-3xl sm:text-4xl">{s.title}</h2>
                      <p className="mt-4 max-w-xl text-lg text-ink/80">{s.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <p className="mt-8 max-w-xl text-ink/80">
              Have a specific project in mind? Tell us about it. We&rsquo;ll talk through what you&rsquo;re planning and whether we&rsquo;re the right fit.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5]">
              <Photo folder="projects" name="project-02" alt="Completed residential work by Ben Wilson Construction" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
