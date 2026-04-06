import {
  BUSINESS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/site";

export default function SeoJsonLd() {
  const url = getSiteUrl();
  const sameAs: string[] = [];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "ATHIS",
    url,
    logo: `${url}/images/logo.jpeg`,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: `${url}${DEFAULT_OG_IMAGE}`,
    "@id": `${url}/#business`,
    url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Baden-Württemberg",
    },
    priceRange: "$$",
    description:
      "Reinigungsfirma in Trossingen mit Schwerpunkt Industriereinigung: Gebäudereinigung, Büroreinigung, Winterdienst, Entrümpelung und mehr in Baden-Württemberg.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url,
    inLanguage: "de-DE",
    publisher: { "@id": `${url}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, localBusiness, website]),
      }}
    />
  );
}
