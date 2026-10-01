import { site } from "@/content/site";
import { ButtonLink } from "./Button";

export function CtaBand() {
  return (
    <section className="on-dark bg-brown-deep text-ivory" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 id="cta-heading" className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">Thinking about your next project?</h2>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">
              Tell us what you&rsquo;re planning and start a conversation with Ben Wilson Construction.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink href="/contact" variant="light">Request an Estimate</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline-light">Call {site.phone}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
