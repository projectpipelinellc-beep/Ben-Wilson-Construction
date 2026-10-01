import { site, addressLine } from "@/content/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${site.siteUrl}/#business`,
    name: site.name,
    url: site.siteUrl,
    telephone: "+1-845-797-1264",
    description:
      "Family-owned residential construction and remodeling company in Wappingers Falls, NY with over 30 years of experience.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Wappingers Falls, NY" },
      { "@type": "AdministrativeArea", name: "Dutchess County, NY" },
      { "@type": "Place", name: "Hudson Valley, NY" },
    ],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`,
    ...(site.facebookUrl ? { sameAs: [site.facebookUrl] } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
