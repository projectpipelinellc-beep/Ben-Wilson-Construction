import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 sm:px-8">
      <h1 className="text-5xl">That page isn&rsquo;t here.</h1>
      <p className="mt-5 text-lg text-taupe">Head back to the main site, or give us a call.</p>
      <div className="mt-8 flex gap-3"><ButtonLink href="/">Home</ButtonLink><ButtonLink href="/contact" variant="outline">Contact</ButtonLink></div>
    </section>
  );
}
