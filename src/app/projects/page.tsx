import { ProjectGallery } from "@/components/ProjectGallery";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our Work | Remodeling Projects in Wappingers Falls & the Hudson Valley",
  description:
    "See completed residential construction and remodeling work from Ben Wilson Construction, a family-owned Wappingers Falls contractor with over 30 years of experience.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 md:pt-32">
        <p className="eyebrow text-brown">Our Work</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl">The work speaks for itself.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">
          Finished homes from more than thirty years of residential construction and remodeling.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8" aria-label="Project photography">
        <ProjectGallery />
      </section>
      <CtaBand />
    </>
  );
}
