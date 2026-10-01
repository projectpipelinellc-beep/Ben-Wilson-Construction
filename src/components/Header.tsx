"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { buttonClass } from "./Button";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-sm transition-[padding] duration-300 ${compact ? "py-2" : "py-4 lg:py-5"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)} aria-label="Ben Wilson Construction, home">
          <span className={`block font-serif text-charcoal transition-all duration-300 ${compact ? "text-xl" : "text-2xl"}`}>Ben Wilson</span>
          <span className="mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.34em] text-taupe">Construction</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-sm transition-colors hover:text-brown ${pathname === item.href ? "text-brown underline decoration-1 underline-offset-8" : "text-charcoal"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={site.phoneHref} className="text-sm font-medium text-charcoal hover:text-brown">{site.phone}</a>
          <Link href="/contact" className={buttonClass("primary", "!min-h-11 !px-5")}>Request an Estimate</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex min-h-11 items-center px-3 text-sm font-medium uppercase tracking-[0.14em] text-charcoal"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[60px] overflow-y-auto bg-ivory px-5 pb-28 pt-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-5 font-serif text-3xl text-charcoal">
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={site.phoneHref} className="mt-8 block text-lg font-medium text-brown">{site.phone}</a>
          <Link href="/contact" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-5 w-full")}>
            Request an Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
