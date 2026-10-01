/**
 * REAL PROJECT PHOTOGRAPHY
 * ------------------------
 * 1. Drop photos in /public/images/projects/ using the `file` names below
 *    (extension may be .jpg, .jpeg, .webp or .png).
 * 2. Optionally add `title`, `caption` and a specific `alt` for each.
 * 3. Add more entries to grow the gallery. Layouts: full | tall | standard (pairs of tall + standard sit side by side).
 *
 * Hero photo:  /public/images/hero/hero.(jpg|webp|png)
 * About photo: /public/images/about/about.(jpg|webp|png)
 *
 * Until a file exists, a neutral placeholder frame is shown in its place.
 */
export type ProjectLayout = "full" | "tall" | "standard";

export interface Project {
  file: string;
  layout: ProjectLayout;
  alt?: string;
  title?: string;
  caption?: string;
}

export const projects: Project[] = [
  { file: "project-01", layout: "full" },
  { file: "project-02", layout: "tall" },
  { file: "project-03", layout: "standard" },
  { file: "project-04", layout: "standard" },
  { file: "project-05", layout: "tall" },
  { file: "project-06", layout: "full" },
  { file: "project-07", layout: "tall" },
  { file: "project-08", layout: "standard" },
];

export const defaultAlt = "Completed residential project by Ben Wilson Construction in the Hudson Valley";
