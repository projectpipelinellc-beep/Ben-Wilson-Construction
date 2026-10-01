import { site } from "@/content/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "About | Family-Owned Contractor in Wappingers Falls, NY",
  description:
    "Ben Wilson Construction is a family-owned residential construction and remodeling company in Wappingers Falls, NY, with over 30 years of experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 md:pt-32">
        <p className="eyebrow text-brown">About</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
          Family owned.<br />Built on experience.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="aspect-[4/5]">
              <Photo folder="about" name="about" alt="Ben Wilson Construction" sizes="(min-width: 768px) 48vw, 100vw" />
            </div>
          </div>
          <Reveal className="md:col-span-6 md:pt-10">
            <div className="space-y-6 text-lg leading-relaxed text-ink/85">
              <p className="font-serif text-3xl leading-snug text-charcoal">
                For over thirty years, Ben Wilson Construction has been Wappingers Falls&rsquo; trusted choice for professional remodeling.
              </p>
              <p>
                We&rsquo;re a family-owned business that specializes in residential construction. When you hire a family company, you&rsquo;re dealing with people who care how the job turns out and how it looks years from now.
              </p>
              <p>
                Over the years, that has meant remodeling and improving homes in our community, one project at a time. Customers tell us they&rsquo;re happy with the finished results and with the team that did the work.
              </p>
              <p>
                We&rsquo;re based at {site.address.street} in {site.address.city}, serving homeowners in Dutchess County and the Hudson Valley.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="on-dark bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28">
          <p className="font-serif text-8xl leading-none md:col-span-4 md:text-[9rem]" aria-hidden="true">30+</p>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl">Over 30 years in the same community.</h2>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">
              That kind of track record is built one home at a time. Experience shows up in the planning, the communication and the finished work.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
