import { projects, defaultAlt, type ProjectLayout } from "@/content/projects";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

const span: Record<ProjectLayout, string> = {
  full: "md:col-span-12",
  tall: "md:col-span-5",
  standard: "md:col-span-7",
};
const ratio: Record<ProjectLayout, string> = {
  full: "aspect-[4/3] md:aspect-[21/9]",
  tall: "aspect-[4/5]",
  standard: "aspect-[4/3] md:aspect-[3/2]",
};
const sizes: Record<ProjectLayout, string> = {
  full: "(min-width: 1280px) 1216px, 100vw",
  tall: "(min-width: 768px) 42vw, 100vw",
  standard: "(min-width: 768px) 58vw, 100vw",
};

export function ProjectGallery({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-x-6 gap-y-10 md:grid-cols-12 md:items-end">
      {items.map((p) => (
        <Reveal key={p.file} className={span[p.layout]}>
          <figure>
            <div className={ratio[p.layout]}>
              <Photo folder="projects" name={p.file} alt={p.alt ?? defaultAlt} sizes={sizes[p.layout]} caption={p.title} />
            </div>
            {p.caption ? <figcaption className="mt-3 text-sm text-taupe">{p.caption}</figcaption> : null}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
