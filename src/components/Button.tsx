import Link from "next/link";

type Variant = "primary" | "light" | "outline" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "bg-brown text-ivory hover:bg-brown-deep",
  light: "bg-ivory text-charcoal hover:bg-white",
  outline: "border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-ivory",
  "outline-light": "border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `inline-flex min-h-12 items-center justify-center px-7 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${styles[variant]} ${extra}`;
}

export function ButtonLink({
  href, children, variant = "primary", className = "",
}: { href: string; children: React.ReactNode; variant?: Variant; className?: string }) {
  const cls = buttonClass(variant, className);
  if (href.startsWith("tel:")) return <a href={href} className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}
