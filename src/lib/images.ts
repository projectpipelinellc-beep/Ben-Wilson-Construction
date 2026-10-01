import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "webp", "png"];

/** Returns the public URL of an image if a matching file exists, otherwise null. */
export function findImage(folder: "hero" | "projects" | "about", name: string): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `images/${folder}/${name}.${ext}`;
    if (existsSync(path.join(process.cwd(), "public", rel))) return `/${rel}`;
  }
  return null;
}
