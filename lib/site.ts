/** Live site (sitemap, canonicals, JSON-LD): https://athis-service.de/sitemap.xml */
export const PRODUCTION_SITE_URL = "https://athis-service.de";

/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Override with NEXT_PUBLIC_SITE_URL if needed (staging, alternate domain).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return PRODUCTION_SITE_URL;
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
