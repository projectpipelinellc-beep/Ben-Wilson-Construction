"use client";
import { useEffect, useRef } from "react";

/**
 * Content is visible by default (no-JS and reduced-motion safe). After mount, only
 * elements below the fold are hidden, then eased in as they scroll into view.
 */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
