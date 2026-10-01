import Image from "next/image";
import { findImage } from "@/lib/images";

interface PhotoProps {
  folder: "hero" | "projects" | "about";
  name: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Renders a real photo when /public/images/<folder>/<name>.* exists,
 * otherwise a quiet placeholder frame. The parent controls the aspect ratio.
 */
export function Photo({ folder, name, alt, className = "", sizes, priority, caption }: PhotoProps) {
  const src = findImage(folder, name);
  return (
    <div className={`img-zoom relative h-full w-full overflow-hidden ${src ? "bg-stone" : "photo-slot"} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-end p-4 sm:p-6" role="img" aria-label="Project photograph to be added">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-taupe">Project photograph</span>
        </div>
      )}
      {src && caption ? (
        <span className="absolute bottom-0 left-0 bg-charcoal/70 px-3 py-1.5 text-xs text-ivory">{caption}</span>
      ) : null}
    </div>
  );
}
