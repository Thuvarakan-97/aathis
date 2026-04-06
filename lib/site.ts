/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.de).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const SITE_NAME = "Athi's Service";
export const SITE_NAME_SHORT = "ATHIS";
export const DEFAULT_OG_IMAGE = "/images/pic1.jpg";

export const BUSINESS = {
  streetAddress: "Augusta Straße 14",
  addressLocality: "Trossingen",
  postalCode: "78647",
  addressRegion: "Baden-Württemberg",
  addressCountry: "DE",
  phone: "+491789777750",
  phoneDisplay: "01789 777750",
  email: "Athis-Dienstleistungen@hotmail.com",
} as const;
