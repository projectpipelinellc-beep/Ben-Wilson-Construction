/**
 * Single source of truth for verified company facts.
 * Only add information here once it has been confirmed by Ben Wilson Construction.
 */
export const site = {
  name: "Ben Wilson Construction",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ben-wilson-construction.vercel.app",
  phone: "(845) 797-1264",
  phoneHref: "tel:+18457971264",
  address: {
    street: "1522 NY-376",
    city: "Wappingers Falls",
    region: "NY",
    postalCode: "12590",
  },
  // Verified Facebook page URL goes here once supplied; the footer link renders only when set.
  facebookUrl: "" as string,
  yearsInBusiness: "30+",
  // From the supplied Google business listing. Update here when the listing changes.
  googleReviewCount: 11,
  // Real review excerpts supplied for this project. Do not add or edit without the source review.
  reviews: [
    { quote: "We are thrilled with the outcome." },
    { quote: "Gave my home another face lift and more curb appeal." },
    { quote: "As a bonus his team members are all very pleasant, polite, and work quickly." },
  ],
  nav: [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  /**
   * Add confirmed, specific services here (e.g. kitchens, decks) and they appear
   * on /services automatically. Leave unconfirmed services out.
   */
  services: [
    {
      title: "Residential Construction",
      body: "Building and structural work for homeowners, handled by a family-owned team that has been doing it for decades.",
    },
    {
      title: "Home Remodeling",
      body: "Updating the rooms you live in, with finished work that looks right and holds up for the long run.",
    },
    {
      title: "Renovation",
      body: "Giving an existing home a fresh face, inside or out, with the same care whether the job is large or small.",
    },
  ],
  projectTypes: ["Remodeling", "Residential Construction", "Renovation", "Other"],
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
export const mapQuery = encodeURIComponent(`Ben Wilson Construction, ${addressLine}`);
