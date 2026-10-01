import Link from "next/link";
import { site } from "@/content/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ivory/20 bg-charcoal text-ivory lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={site.phoneHref} className="flex min-h-14 items-center justify-center border-r border-ivory/20 text-[0.8rem] font-medium uppercase tracking-[0.14em]">
        Call
      </a>
      <Link href="/contact" className="flex min-h-14 items-center justify-center bg-brown text-[0.8rem] font-medium uppercase tracking-[0.14em]">
        Request Estimate
      </Link>
    </div>
  );
}
